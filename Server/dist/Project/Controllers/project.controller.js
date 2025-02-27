"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRemoveProject = exports.handleUpdateProject = exports.handleGetProject = exports.handleCreateProject = void 0;
const project_model_1 = __importDefault(require("../Models/project.model"));
const { validationResult } = require('express-validator');
const project_service_1 = require("../Services/project.service");
const user_service_1 = require("../../User/Services/user.service");
const handleCreateProject = async (req, res) => {
    const { title, description, type, ownerId, projectPicture, taskId, members } = req.body;
    const { project, error } = await (0, project_service_1.create)({
        title,
        description,
        type,
        ownerId,
        projectPicture,
        taskId,
        members,
    });
    if (error) {
        return res.status(400).json({ error });
    }
    // Call user service to update the user
    const { user, error: userError } = await (0, user_service_1.addProjectToUser)({ ownerId, projectId: project._id });
    if (userError) {
        return res.status(400).json({ error: userError });
    }
    return res.status(201).json({ project });
};
exports.handleCreateProject = handleCreateProject;
const handleGetProject = async (req, res) => {
    const Projects = await project_model_1.default.find();
    return res.status(200).json({ Projects });
};
exports.handleGetProject = handleGetProject;
const handleUpdateProject = async (req, res) => {
    const { title, description, type, projectPicture } = req.body;
    const { projectId } = req.params;
    try {
        if (!req.user || !req.user.projectId) {
            return res.status(401).json({ message: "Unauthorized: User not found." });
        }
        const projectExists = req.user.projectId.includes(projectId);
        if (!projectExists) {
            return res.status(404).json({ message: "No Project Found!" });
        }
        const { project, error } = await (0, project_service_1.update)({
            title,
            description,
            type,
            projectPicture,
            projectId,
        });
        if (error) {
            return res.status(400).json({ message: error });
        }
        return res.status(200).json({ message: "Project updated successfully", project });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", error: error.message || error });
    }
};
exports.handleUpdateProject = handleUpdateProject;
const handleRemoveProject = async () => {
}; //pending...
exports.handleRemoveProject = handleRemoveProject;
//# sourceMappingURL=project.controller.js.map