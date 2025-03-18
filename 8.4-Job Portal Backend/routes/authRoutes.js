import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';

const router = express.Router();

// // Register || Post
router.post('/register', registerController);

// // LogIn || post
router.post('/login',loginController)

export default router;