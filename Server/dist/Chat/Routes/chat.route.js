"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chat_controller_1 = require("Chat/Controllers/chat.controller");
const express_1 = __importDefault(require("express"));
const { body } = require('express-validator');
const router = express_1.default.Router();
router.post('/:projectId', chat_controller_1.handleCreateMessage);
router.get('/:projectId', chat_controller_1.handleGetChat);
exports.default = router;
//# sourceMappingURL=chat.route.js.map