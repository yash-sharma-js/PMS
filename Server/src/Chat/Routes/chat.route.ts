import { handleCreateMessage, handleGetChat } from 'Chat/Controllers/chat.controller';
import express from 'express'
const { body } = require('express-validator');
const router: express.Router = express.Router();



router.post('/:projectId',handleCreateMessage)
router.get('/:projectId',handleGetChat);

export default router;