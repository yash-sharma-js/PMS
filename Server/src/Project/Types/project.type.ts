import mongoose, { Document } from "mongoose";

export interface ProjectInterface extends Document {
    title: string;
    description: string;
    type: string;
    ownerId: mongoose.Types.ObjectId;
    activeYN?: boolean;
    projectPicture?: string;
    taskId?: mongoose.Types.ObjectId[];
    members?: mongoose.Types.ObjectId[]; 
}