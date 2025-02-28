"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const projectSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, minlength: [3, "Description should have a minimum length of 3"] },
    projectType: { type: String, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    activeYN: { type: Boolean, required: false },
    projectPicture: { type: String, required: false },
    taskId: [{ type: mongoose_1.default.Schema.Types.ObjectId, required: false }],
    members: [{ type: mongoose_1.default.Schema.Types.ObjectId, required: false }],
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    projectRoles: [{ type: String, required: false }]
});
const projectModel = mongoose_1.default.model("project", projectSchema);
exports.default = projectModel;
//# sourceMappingURL=project.model.js.map