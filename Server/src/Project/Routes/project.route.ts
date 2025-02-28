import express from 'express'
const { body } = require('express-validator');
const router: express.Router = express.Router();

import { handleCreateProject, handleGetProject,handleUpdateProject, deleteProject, getAllProjects } from '../Controllers/project.controller'

router.post('/create',handleCreateProject);
router.get('/',handleGetProject)
router.post('/update/:projectId', handleUpdateProject);
router.delete('/remove/:projectId', deleteProject); 
router.get("/:userId", getAllProjects); 

export default router;