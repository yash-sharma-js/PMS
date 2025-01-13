"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { body } = require('express-validator');
const user_controller_1 = require("../Controllers/user.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
const router = express_1.default.Router();
// Define routes
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Message'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('Nam must be atleast 3 len'),
    body('password').isLength({ min: 6 }).withMessage('Password Length must be greater then 6'),
], user_controller_1.handleRegisterUser);
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Message'),
    body('password').isLength({ min: 6 }).withMessage('Password Length must be greater then 6'),
], user_controller_1.handleLoginUser);
router.get('/profile', user_middleware_1.authUser, user_controller_1.handleUserProfile);
router.post('/update', [
    body('email').isEmail().withMessage('Invalid Message'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('Nam must be atleast 3 len'),
    body('password').isLength({ min: 6 }).withMessage('Password Length must be greater then 6'),
], user_controller_1.handleUpdateUser);
// router.get('/logout', handleLogoutUser);
exports.default = router;
//# sourceMappingURL=user.route.js.map