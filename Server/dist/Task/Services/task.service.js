"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskToProject = exports.remove = exports.update = exports.create = void 0;
const task_model_1 = __importDefault(require("../Models/task.model"));
const create = async ({ title, description, type, projectId, members, }) => {
    if (!title || !description || !type || !projectId) {
        return { task: null, error: "All fields Required" };
    }
    try {
        const task = await task_model_1.default.create({
            title,
            description,
            type,
            projectId,
            members,
        });
        return { task, error: null };
    }
    catch (error) {
        return { task: null, error: error.message };
    }
};
exports.create = create;
const update = async ({ title, description, type, projectId, }) => {
    if (!title || !description || !type) {
        return { task: null, error: "All fields are required" };
    }
    try {
        const updateData = { title, description, type };
        const task = await task_model_1.default.findByIdAndUpdate(projectId, { $set: updateData }, { new: true, runValidatodrs: true });
        if (!task) {
            return { task: null, error: "Project not found" };
        }
        return { task, error: null };
    }
    catch (error) {
        return { task: null, error: error.message || "An error occurred during the update" };
    }
};
exports.update = update;
const remove = async ({}) => {
}; //pending...
exports.remove = remove;
const addTaskToProject = async () => {
}; //pending...
exports.addTaskToProject = addTaskToProject;
//# sourceMappingURL=task.service.js.map