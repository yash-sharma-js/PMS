import express from 'express';
const { body } = require('express-validator');
import {
    handleRegisterUser,
    handleLoginUser,
    handleUserProfile,
    handleUpdateUser,
    handleLogoutUser
    
} from '../Controllers/user.controller';
import { authUser } from '../middlewares/user.middleware';

const router: express.Router = express.Router();

// Define routes
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Message'),
    body('fullName.firstName').isLength({min:3}).withMessage('Name must be atleast 3 len'),
    body('password').isLength({min:6}).withMessage('Password Length must be greater then 6'),
] ,handleRegisterUser);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Message'),
    body('password').isLength({min:6}).withMessage('Password Length must be greater then 6'),
], handleLoginUser);

router.get('/profile', authUser,handleUserProfile);

router.post('/update',[
    body('email').isEmail().withMessage('Invalid Message'),
    body('fullName.firstName').isLength({min:3}).withMessage('Nam must be atleast 3 len'),
    body('password').isLength({min:6}).withMessage('Password Length must be greater then 6'),
] ,handleUpdateUser);

router.get('/logout', handleLogoutUser);

export default router;
