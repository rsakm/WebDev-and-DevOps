import express from 'express'
import userAuth from '../middlewares/authMiddleware.js';
import { createJobsController, getJobsController } from '../controllers/jobsController.js';

const router = express.Router();

// / routes
// // create job
router.post('/create-job',userAuth, createJobsController)

// // get jobs
router.get('/get-job',userAuth,getJobsController);


export default router;