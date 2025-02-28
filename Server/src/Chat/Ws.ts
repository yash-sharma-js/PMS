import express from "express";
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
// import mongoose from "mongoose";
import { ChatModel } from "Chat/Models/chat.model";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

const clients = new Map<string, WebSocket[]>(); // Store project-based connections

wss.on("connection", (ws) => {
  console.log("A user connected");

  ws.on("message", async (data) => {
    try {
      const { type, senderId, projectId, message } = JSON.parse(data.toString());

      if (type === "join_project") {
        if (!clients.has(projectId)) clients.set(projectId, []);
        clients.get(projectId)?.push(ws);
      }

      if (type === "send_message") {
        if (!senderId || !projectId || !message) return;

        const newMessage = new ChatModel({ senderId, projectId, message });
        await newMessage.save();

        // Broadcast message to all clients in the project
        if (clients.has(projectId)) {
          clients.get(projectId)?.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({ type: "receive_message", ...newMessage.toObject() }));
            }
          });
        }
      }
    } catch (error) {
      console.error("Error processing message:", error);
    }
  });

  ws.on("close", () => {
    console.log("User disconnected");
    clients.forEach((sockets, projectId) => {
      clients.set(
        projectId,
        sockets.filter((client) => client !== ws)
      );
    });
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
