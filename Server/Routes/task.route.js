const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/task.controller');

// Create a new task linked to a project by projectId
router.post('/:projectId', taskController.createTask);

// Get all tasks for a specific project by projectId
router.get('/:projectId', taskController.getTasksByProjectId);

// Get a task by taskId and projectId
router.get('/:projectId/:taskId', taskController.getTaskById);

// Update a task by taskId and projectId
router.put('/:projectId/:taskId', taskController.updateTask);

// Delete a task by taskId and projectId
router.delete('/:projectId/:taskId', taskController.deleteTask);

module.exports = router;
