"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ChatSchema = new mongoose_1.default.Schema({
    userId: { type: String },
    projectId: { type: String },
    message: { type: String }
});
exports.ChatModel = mongoose_1.default.model('chat', ChatSchema);
//# sourceMappingURL=chat.model.js.map