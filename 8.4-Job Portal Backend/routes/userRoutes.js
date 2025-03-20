import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { updateUserController } from '../controllers/userController.js';

const router = express.Router();


// // user routes

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The user's unique ID
 *           example: "60d9c142e3b8b5d3c7f8ab12"
 *         name:
 *           type: string
 *           description: The user's name
 *           example: "Raj Shree"
 *         email:
 *           type: string
 *           description: The user's email address
 *           example: "raj@gmail.com"
 *         location:
 *           type: string
 *           description: The user's location (city or country)
 *           example: "Delhi"
 *         password:
 *           type: string
 *           description: User's password (should be at least 8 characters long)
 *           example: "securePassword123"
 *       example:
 *         id: "60d9c142e3b8b5d3c7f8ab12"
 *         name: "Raj Shree"
 *         email: "raj@gmail.com"
 *         location: "Delhi"
 *         password: "Priyaranjana@2018"
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User-related APIs (update, get, etc.)
 */

/**
 * @swagger
 * /api/v1/user/update-user:
 *   put:
 *     summary: Update user information
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successfully updated user information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request (validation errors)
 *       401:
 *         description: Unauthorized (user not authenticated)
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */




// // Update user
router.put('/update-user',userAuth, updateUserController)

export default router;