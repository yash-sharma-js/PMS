import mongoose from "mongoose";
import projectModel from "../Models/project.model";
import { error } from "console";




export const create = async ({
    title,
    description,
    type,
    ownerId,
    projectPicture,
    taskId,
    members,
}: {
    title: string;
    description: string;
    type: string;
    ownerId: mongoose.Types.ObjectId;
    projectPicture?: string;
    taskId?: mongoose.Types.ObjectId[];
    members?: mongoose.Types.ObjectId[];
}) => {
    if (!title || !description || !type || !ownerId) {
        return { project: null, error: "All fields Required" };
    }

    try {
        const project = await projectModel.create({
            title,
            description,
            type,
            ownerId,
            projectPicture,
            taskId,
            members,
        });

        return { project, error: null };
    } catch (error) {
        return { project: null, error: error.message };
    }
};

export const update = async ({
    title,
    description,
    type,
    projectPicture,
    projectId,
}: {
    title: string;
    description: string;
    type: string;
    projectPicture?: string;
    projectId: string;
}) => {
    if (!title || !description || !type) {
        return { project: null, error: "All fields are required" };
    }

    try {
        const updateData: any = { title, description, type };
        if (projectPicture) {
            updateData.projectPicture = projectPicture; 
        }

        const project = await projectModel.findByIdAndUpdate(
            projectId, 
            { $set: updateData },
            { new: true, runValidators: true }
        );
        if (!project) {
            return { project: null, error: "Project not found" };
        }
        return { project, error: null };
    } catch (error: any) {
        return { project: null, error: error.message || "An error occurred during the update" };
    }
};


export const remove = async ({})=>{

}//pending...

export const addTaskToProject = async ()=>{

}//pending...