import mongoose from "mongoose";
import projectModel from "../Models/project.model";

export const create = async ({
    title,
    description,
    projectType,
    userId,
    projectPicture,
    taskId,
    members,
    startDate,
    endDate,
    projectRoles
}: {
    title: string;
    description: string;
    projectType: string;
    userId: mongoose.Types.ObjectId;
    projectPicture?: string;
    taskId?: mongoose.Types.ObjectId[];
    members?: mongoose.Types.ObjectId[];
    startDate?: string;
    endDate?: string;
    projectRoles?: string[];
}) => {
    if (!title || !description || !projectType || !userId) {
        return { project: null, error: "All required fields must be filled" };
    }

    try {
        const project = await projectModel.create({
            title,
            description,
            projectType,
            userId,
            projectPicture,
            taskId,
            members,
            startDate,
            endDate,
            projectRoles
        });

        return { project, error: null };
    } catch (error: any) {
        return { project: null, error: error.message };
    }
};

export const update = async ({
    title,
    description,
    projectType,
    projectPicture,
    projectId,
    startDate,
    endDate,
    projectRoles
}: {
    title: string;
    description: string;
    projectType: string;
    projectPicture?: string;
    projectId: string;
    startDate?: string;
    endDate?: string;
    projectRoles?: string[];
}) => {
    if (!title || !description || !projectType) {
        return { project: null, error: "All required fields must be filled" };
    }

    try {
        const updateData: any = { title, description, projectType, startDate, endDate, projectRoles };
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

export const remove = async ({}) => {
    // Pending implementation
};

export const addTaskToProject = async () => {
    // Pending implementation
};
