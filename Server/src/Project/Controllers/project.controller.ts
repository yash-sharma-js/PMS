import projectModel from "../Models/project.model";
import { Request, Response } from "express";
// const { validationResult } = require("express-validator");
import { create, update, remove } from "../Services/project.service";
import { addProjectToUser } from "../../User/Services/user.service";

export const handleCreateProject = async (req: Request, res: Response) => {
    const { title, description, projectType, userId, projectPicture, taskId, members, startDate, endDate, projectRoles } = req.body;
    console.log({ title, description, projectType, userId, projectPicture, taskId, members, startDate, endDate, projectRoles });
    const { project, error } = await create({
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

    if (error) {
        return res.status(400).json({ error });
    }

    // Call user service to update the user
    const { user, error: userError } = await addProjectToUser({ userId, projectId: project._id });

    if (userError) {
        return res.status(400).json({ error: userError });
    }

    return res.status(201).json({ project });
};

export const handleGetProject = async (req: Request, res: Response) => {
    const projects = await projectModel.find();
    return res.status(200).json({ projects });
};

export const handleUpdateProject = async (req: Request, res: Response) => {
    const { title, description, projectType, projectPicture, startDate, endDate, projectRoles } = req.body;
    const { projectId } = req.params;

    try {
        if (!req.user || !req.user.projectId) {
            return res.status(401).json({ message: "Unauthorized: User not found." });
        }
        const projectExists = req.user.projectId.includes(projectId);
        if (!projectExists) {
            return res.status(404).json({ message: "No Project Found!" });
        }
        const { project, error } = await update({
            title,
            description,
            projectType,
            projectPicture,
            startDate,
            endDate,
            projectRoles,
            projectId,
        });

        if (error) {
            return res.status(400).json({ message: error });
        }

        return res.status(200).json({ message: "Project updated successfully", project });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: "Server error", error: error.message || error });
    }
};

export const handleRemoveProject = async () => {
    // Pending implementation
};
