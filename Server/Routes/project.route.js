const express = require('express');
const router = express.Router();
const projectController = require('../Models/project.model');

// Route to create a new project
router.post('/projects', projectController.createProject);

// Route to get all projects for a specific userId
router.get('/projects', projectController.getAllProjects);

// Route to get a project by userId and project title
router.get('/projects/:userId/:title', projectController.getProjectByUserIdAndTitle);

// Route to update a project by ID
router.put('/projects/:id', projectController.updateProject);

// Route to delete a project by ID
router.delete('/projects/:id', projectController.deleteProject);

module.exports = router;
