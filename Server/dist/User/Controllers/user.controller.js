"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogoutUser = exports.handleUpdateUser = exports.handleUserProfile = exports.handleLoginUser = exports.handleRegisterUser = void 0;
const user_model_1 = __importDefault(require("../Models/user.model"));
const user_service_1 = require("../Services/user.service");
const { validationResult } = require('express-validator');
const handleRegisterUser = async (req, res) => {
    // const err = validationResult(req);
    // if(!err.isEmpty()){ return res.status(400).json({errors : err.array()})} //Validating Request
    const { username, fullName: { firstName, lastName }, bio, role, email, contact, password, } = req.body;
    // Check if email already exists
    const isEmailExist = await user_model_1.default.findOne({ email });
    if (isEmailExist) {
        return res.status(400).json({ message: "User Already Exists with this Email." });
    }
    // Hash the password
    const hashPassword = await user_model_1.default.hashPassword(password);
    // Create the user
    const { user, error } = await (0, user_service_1.createUser)({
        username,
        fullName: { firstName, lastName },
        bio,
        role,
        email,
        contact,
        password: hashPassword,
    });
    if (error) {
        return res.status(400).json({ message: error });
    }
    const token = await user.generateAuthToken();
    res.cookie('token', token);
    return res.status(201).json({ token, user });
};
exports.handleRegisterUser = handleRegisterUser;
const handleLoginUser = async (req, res) => {
    console.log("At controller");
    // const err = validationResult(req);
    // if(!err.isEmpty()){ return res.status(400).json({errors : err.array()})} //Validating Request
    const { email, password, } = req.body;
    const { user, error } = await (0, user_service_1.getUser)({ email, password });
    if (error) {
        return res.status(400).json(error);
    }
    const token = user.generateAuthToken();
    res.cookie('token', token);
    return res.status(201).json({ token, user });
};
exports.handleLoginUser = handleLoginUser;
const handleUserProfile = async (req, res) => {
    return res.status(200).json(req.user);
};
exports.handleUserProfile = handleUserProfile;
const handleUpdateUser = async (req, res) => {
    const { username, fullName, bio, role, email, contact, password } = req.body;
    console.log("Data is comming..");
    if (!username || !fullName || !email || !password) {
        return res.status(400).json({ message: "Missing required fields." });
    }
    const hashPassword = await user_model_1.default.hashPassword(password);
    const { user, error } = await (0, user_service_1.updateUser)({
        username,
        fullName,
        bio,
        role,
        email,
        contact,
        password: hashPassword,
    });
    if (error) {
        return res.status(400).json({ message: error.message || "Update failed." });
    }
    const token = await user.generateAuthToken();
    res.cookie('token', token);
    return res.status(200).json({ token, user });
};
exports.handleUpdateUser = handleUpdateUser;
const handleLogoutUser = async (req, res) => {
    return res.status(200).json({ message: "User logged out" });
};
exports.handleLogoutUser = handleLogoutUser;
//# sourceMappingURL=user.controller.js.map