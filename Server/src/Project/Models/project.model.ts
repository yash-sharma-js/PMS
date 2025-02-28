import mongoose from "mongoose";
import env from "dotenv";
import { ProjectInterface } from "../Types/project.type";
env.config();

const projectSchema = new mongoose.Schema<ProjectInterface>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true, minlength: [3, "Description should have a minimum length of 3"] },
        projectType: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        activeYN: { type: Boolean, required: false },
        projectPicture: { type: String, required: false },
        taskId: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
        members: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
        startDate: { type: Date, required: false },
        endDate: { type: Date, required: false },
        projectRoles: [{ type: String, required: false }]
    }
);

const projectModel = mongoose.model<ProjectInterface>("project", projectSchema);
export default projectModel;
