import express from 'express'
const { body } = require('express-validator');
const router: express.Router = express.Router();

import { handleCreateTask, handleUpdateTask, handleRemoveTask } from '../Controllers/task.controller'

router.post('/create',handleCreateTask);
router.post('/update/:projectId', handleUpdateTask);
router.post('/remove/:projectId', handleRemoveTask); 

export default router;