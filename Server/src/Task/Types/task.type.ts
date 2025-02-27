import mongoose, { Document } from "mongoose";

export interface ProjectInterface extends Document {
    title:       string;
    description: string;
    type:        string;
    projectId:   mongoose.Types.ObjectId;
    activeYN?:   boolean;
    members?:    mongoose.Types.ObjectId[]; 
}