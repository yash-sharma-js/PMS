"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { body } = require('express-validator');
const router = express_1.default.Router();
const task_controller_1 = require("../Controllers/task.controller");
router.post('/create', task_controller_1.handleCreateTask);
router.post('/update/:projectId', task_controller_1.handleUpdateTask);
router.post('/remove/:projectId', task_controller_1.handleRemoveTask);
exports.default = router;
//# sourceMappingURL=task.route.js.map