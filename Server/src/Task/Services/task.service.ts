import mongoose from "mongoose";
import taskModel from "../Models/task.model";

export const create = async ({
    title,
    description,
    type,
    projectId,
    members,
}: {
    title: string;
    description: string;
    type: string;
    projectId: mongoose.Types.ObjectId;
    members?: mongoose.Types.ObjectId[];
}) => {
    if (!title || !description || !type || !projectId) {
        return { task: null, error: "All fields Required" };
    }

    try {
        const task = await taskModel.create({
            title,
            description,
            type,
            projectId,
            members,
        });

        return { task, error: null };
    } catch (error) {
        return { task: null, error: error.message };
    }
};

export const update = async ({
    title,
    description,
    type,
    projectId,
}: {
    title: string;
    description: string;
    type: string;
    projectId: string;
}) => {
    if (!title || !description || !type) {
        return { task: null, error: "All fields are required" };
    }

    try {
        const updateData: any = { title, description, type };

        const task = await taskModel.findByIdAndUpdate(
            projectId, 
            { $set: updateData },
            { new: true, runValidatodrs: true }
        );
        if (!task) {
            return { task: null, error: "Project not found" };
        }
        return { task, error: null };
    } catch (error: any) {
        return { task: null, error: error.message || "An error occurred during the update" };
    }
};


export const remove = async ({})=>{

}//pending...

export const addTaskToProject = async ()=>{

}//pending...