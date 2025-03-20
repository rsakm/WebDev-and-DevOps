import express from 'express'
import userAuth from '../middlewares/authMiddleware.js';
import { createJobsController, deleteJobController, getJobsController, jobStatsController, updateJobController } from '../controllers/jobsController.js';

const router = express.Router();

// / routes


/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - location
 *         - company
 *       properties:
 *         id:
 *           type: string
 *           description: The job ID (auto-generated)
 *           example: "60d9c142e3b8b5d3c7f8ab12"
 *         title:
 *           type: string
 *           description: Job title
 *           example: "Software Engineer"
 *         description:
 *           type: string
 *           description: Job description
 *           example: "We are looking for a passionate software engineer."
 *         location:
 *           type: string
 *           description: Job location (city, state, etc.)
 *           example: "New York, NY"
 *         company:
 *           type: string
 *           description: The name of the company offering the job
 *           example: "TechCorp"
 *         postedBy:
 *           type: string
 *           description: The ID of the user who posted the job
 *           example: "60d9c142e3b8b5d3c7f8ab11"
 *       example:
 *         id: "60d9c142e3b8b5d3c7f8ab12"
 *         title: "Software Engineer"
 *         description: "We are looking for a passionate software engineer."
 *         location: "New York, NY"
 *         company: "TechCorp"
 *         postedBy: "60d9c142e3b8b5d3c7f8ab11"
 */

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job-related APIs (create, update, delete, get, stats)
 */

/**
 * @swagger
 * /api/v1/job/create-job:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       400:
 *         description: Bad request (validation errors)
 *       401:
 *         description: Unauthorized (user not authenticated)
 *       500:
 *         description: Internal server error
 */

// // create job
router.post('/create-job',userAuth, createJobsController)


/**
 * @swagger
 * /api/v1/job/get-job:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: Successfully retrieved the jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       401:
 *         description: Unauthorized (user not authenticated)
 *       500:
 *         description: Internal server error
 */


// // get jobs
router.get('/get-job',userAuth,getJobsController);


/**
 * @swagger
 * /api/v1/job/update-job/{id}:
 *   patch:
 *     summary: Update a job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The job ID
 *         schema:
 *           type: string
 *           example: "60d9c142e3b8b5d3c7f8ab12"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       200:
 *         description: Successfully updated the job
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       400:
 *         description: Bad request (validation errors)
 *       401:
 *         description: Unauthorized (user not authenticated)
 *       404:
 *         description: Job not found
 *       500:
 *         description: Internal server error
 */

// // update job
router.patch('/update-job/:id',userAuth,updateJobController);


/**
 * @swagger
 * /api/v1/job/delete-job/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The job ID
 *         schema:
 *           type: string
 *           example: "60d9c142e3b8b5d3c7f8ab12"
 *     responses:
 *       200:
 *         description: Successfully deleted the job
 *       401:
 *         description: Unauthorized (user not authenticated)
 *       404:
 *         description: Job not found
 *       500:
 *         description: Internal server error
 */


// // Delete a job
router.delete('/delete-job/:id',userAuth,deleteJobController);



/**
 * @swagger
 * /api/v1/job/job-stats:
 *   get:
 *     summary: Get job statistics (e.g., job count, filters)
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: Successfully retrieved the job statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalJobs:
 *                   type: integer
 *                   description: Total number of jobs available
 *                   example: 25
 *       401:
 *         description: Unauthorized (user not authenticated)
 *       500:
 *         description: Internal server error
 */


// // Job stats filter
router.get('/job-stats',userAuth,jobStatsController);

export default router;