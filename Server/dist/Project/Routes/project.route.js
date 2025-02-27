"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { body } = require('express-validator');
const router = express_1.default.Router();
const project_controller_1 = require("../Controllers/project.controller");
router.post('/create', project_controller_1.handleCreateProject);
router.get('/', project_controller_1.handleGetProject);
router.post('/update/:projectId', project_controller_1.handleUpdateProject);
router.post('/remove/:projectId', project_controller_1.handleRemoveProject);
exports.default = router;
//# sourceMappingURL=project.route.js.map