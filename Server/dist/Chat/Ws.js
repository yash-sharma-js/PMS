"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const ws_1 = require("ws");
// import mongoose from "mongoose";
const chat_model_1 = require("Chat/Models/chat.model");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const wss = new ws_1.WebSocketServer({ server });
const clients = new Map(); // Store project-based connections
wss.on("connection", (ws) => {
    console.log("A user connected");
    ws.on("message", async (data) => {
        try {
            const { type, senderId, projectId, message } = JSON.parse(data.toString());
            if (type === "join_project") {
                if (!clients.has(projectId))
                    clients.set(projectId, []);
                clients.get(projectId)?.push(ws);
            }
            if (type === "send_message") {
                if (!senderId || !projectId || !message)
                    return;
                const newMessage = new chat_model_1.ChatModel({ senderId, projectId, message });
                await newMessage.save();
                // Broadcast message to all clients in the project
                if (clients.has(projectId)) {
                    clients.get(projectId)?.forEach((client) => {
                        if (client.readyState === ws_1.WebSocket.OPEN) {
                            client.send(JSON.stringify({ type: "receive_message", ...newMessage.toObject() }));
                        }
                    });
                }
            }
        }
        catch (error) {
            console.error("Error processing message:", error);
        }
    });
    ws.on("close", () => {
        console.log("User disconnected");
        clients.forEach((sockets, projectId) => {
            clients.set(projectId, sockets.filter((client) => client !== ws));
        });
    });
});
server.listen(5000, () => {
    console.log("Server running on port 5000");
});
//# sourceMappingURL=Ws.js.map