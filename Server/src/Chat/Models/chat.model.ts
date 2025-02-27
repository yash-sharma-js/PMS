import mongoose from "mongoose";

import { IChat } from "Chat/Types/chat.type";

const ChatSchema = new mongoose.Schema<IChat>({
    userId:{type: String},
    projectId:{type: String},
    message:{type: String}
})

export const ChatModel = mongoose.model<IChat>('chat',ChatSchema);
