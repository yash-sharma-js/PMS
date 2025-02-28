import mongoose, { Document } from "mongoose";

export interface ProjectInterface extends Document {
    title: string;
    description: string;
    projectType: string;
    userId: mongoose.Types.ObjectId;
    activeYN?: boolean;
    projectPicture?: string;
    taskId?: mongoose.Types.ObjectId[];
    members?: mongoose.Types.ObjectId[];
    startDate?: Date;
    endDate?: Date;
    projectRoles?: string[];
}
