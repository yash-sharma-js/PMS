"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProjectToUser = exports.removeUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../Models/user.model"));
const createUser = async ({ username, fullName, bio, role, email, contact, password, }) => {
    try {
        if (!username || !fullName.firstName || !email || !password) {
            return { user: null, error: "All required fields must be provided." };
        }
        const user = await user_model_1.default.create({
            username,
            fullName,
            bio,
            role,
            email,
            contact,
            password,
        });
        return { user, error: null };
    }
    catch (err) {
        return { user: null, error: err.message };
    }
};
exports.createUser = createUser;
const getUser = async ({ email, password }) => {
    console.log("At Service");
    try {
        if (!email ||
            !password) {
            return { user: null, error: "Email or Password is incorrect" };
        }
        const user = await user_model_1.default.findOne({ email }).select('+password');
        if (!user) {
            return { user: null, error: "Email or Password is incorrect" };
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return { user: null, error: ("Email or Password is incorrect") };
        }
        return { user, error: null };
    }
    catch (error) {
        return { user: null, error: error };
    }
};
exports.getUser = getUser;
const updateUser = async ({ username, fullName, bio, role, email, contact, password, }) => {
    try {
        const user = await user_model_1.default.findOneAndUpdate({ email }, // Find user by email
        { $set: { username, fullName, bio, role, contact, password } }, // Update fields
        { new: true, runValidators: true } // Return updated user, validate schema
        );
        if (!user) {
            throw new Error("User not found.");
        }
        return { user, error: null };
    }
    catch (error) {
        return { user: null, error };
    }
};
exports.updateUser = updateUser;
const removeUser = async () => {
}; // Pending...
exports.removeUser = removeUser;
const addProjectToUser = async ({ ownerId, projectId }) => {
    try {
        const user = await user_model_1.default.findByIdAndUpdate(ownerId, { $push: { projectId } }, { new: true });
        if (!user) {
            return { user: null, error: "User not found" };
        }
        return { user, error: null };
    }
    catch (error) {
        return { user: null, error: error.message };
    }
};
exports.addProjectToUser = addProjectToUser;
//# sourceMappingURL=user.service.js.map