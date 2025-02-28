"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskToProject = exports.remove = exports.update = exports.create = void 0;
const project_model_1 = __importDefault(require("../Models/project.model"));
const create = async ({ title, description, projectType, userId, projectPicture, taskId, members, startDate, endDate, projectRoles }) => {
    if (!title || !description || !projectType || !userId) {
        return { project: null, error: "All required fields must be filled" };
    }
    try {
        const project = await project_model_1.default.create({
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
    }
    catch (error) {
        return { project: null, error: error.message };
    }
};
exports.create = create;
const update = async ({ title, description, projectType, projectPicture, projectId, startDate, endDate, projectRoles }) => {
    if (!title || !description || !projectType) {
        return { project: null, error: "All required fields must be filled" };
    }
    try {
        const updateData = { title, description, projectType, startDate, endDate, projectRoles };
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
    // Pending implementation
};
exports.remove = remove;
const addTaskToProject = async () => {
    // Pending implementation
};
exports.addTaskToProject = addTaskToProject;
//# sourceMappingURL=project.service.js.map