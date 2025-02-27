"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const TaskSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ''
    },
    type: {
        type: String,
        required: true
    },
    projectId: {
        type: mongoose_1.default.Schema.Types.ObjectId, // Array of friends' IDs, can be ObjectId if linked to user model
        required: true
    },
    members: [{
            type: mongoose_1.default.Schema.Types.ObjectId, // Array of friends' IDs, can be ObjectId if linked to user model
            required: false
        }],
    activeYN: {
        type: Boolean,
        required: false,
        default: true // Indicates if the user is active
    },
}, {
    timestamps: true
});
const taskModel = mongoose_1.default.model('task', TaskSchema);
exports.default = taskModel;
//# sourceMappingURL=task.model.js.map