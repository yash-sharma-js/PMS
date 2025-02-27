"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskToProject = exports.remove = exports.update = exports.create = void 0;
const project_model_1 = __importDefault(require("../Models/project.model"));
const create = async ({ title, description, type, ownerId, projectPicture, taskId, members, }) => {
    if (!title || !description || !type || !ownerId) {
        return { project: null, error: "All fields Required" };
    }
    try {
        const project = await project_model_1.default.create({
            title,
            description,
            type,
            ownerId,
            projectPicture,
            taskId,
            members,
        });
        return { project, error: null };
    }
    catch (error) {
        return { project: null, error: error.message };
    }
};
exports.create = create;
const update = async ({ title, description, type, projectPicture, projectId, }) => {
    if (!title || !description || !type) {
        return { project: null, error: "All fields are required" };
    }
    try {
        const updateData = { title, description, type };
        if (projectPicture) {
            updateData.projectPicture = projectPicture;
        }
        const project = await project_model_1.default.findByIdAndUpdate(projectId, { $set: updateData }, { new: true, runValidators: true });
        if (!project) {
            return { project: null, error: "Project not found" };
        }
        return { project, error: null };
    }
    catch (error) {
        return { project: null, error: error.message || "An error occurred during the update" };
    }
};
exports.update = update;
const remove = async ({}) => {
}; //pending...
exports.remove = remove;
const addTaskToProject = async () => {
}; //pending...
exports.addTaskToProject = addTaskToProject;
//# sourceMappingURL=project.service.js.map