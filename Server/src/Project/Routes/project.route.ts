import express from 'express'
const { body } = require('express-validator');
const router: express.Router = express.Router();

import { handleCreateProject, handleGetProject,handleUpdateProject, handleRemoveProject } from '../Controllers/project.controller'

router.post('/create',handleCreateProject);
router.get('/',handleGetProject)
router.post('/update/:projectId', handleUpdateProject);
router.post('/remove/:projectId', handleRemoveProject); 

export default router;