"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
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
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId, // Auto-generated ID
        required: true
    },
    type: {
        type: String,
        required: true
    },
    ProjectId: {
        type: mongoose_1.default.Schema.Types.ObjectId, // Array of friends' IDs, can be ObjectId if linked to user model
        required: true
    },
    members: [{
            type: mongoose_1.default.Schema.Types.ObjectId, // Array of friends' IDs, can be ObjectId if linked to user model
            required: false
        }],
    tasks: [{
            type: mongoose_1.default.Schema.Types.ObjectId, // ID referring to a related project, can be ObjectId if relational
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
TaskSchema.methods.generateAuthToken = function () {
    return jsonwebtoken_1.default.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
};
TaskSchema.methods.comparePassword = async function (password) {
    return await bcrypt_1.default.compare(password, this.password);
};
TaskSchema.statics.hashPassword = async function (password) {
    return await bcrypt_1.default.hash(password, 10);
};
const TaskModel = mongoose_1.default.model('task', TaskSchema);
exports.default = TaskModel;
//# sourceMappingURL=task.model.js.map