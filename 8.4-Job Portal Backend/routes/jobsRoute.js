import express from 'express'
import userAuth from '../middlewares/authMiddleware.js';
import { createJobsController, deleteJobController, getJobsController, updateJobController } from '../controllers/jobsController.js';

const router = express.Router();

// / routes
// // create job
router.post('/create-job',userAuth, createJobsController)

// // get jobs
router.get('/get-job',userAuth,getJobsController);

// // update job
router.patch('/update-job/:id',userAuth,updateJobController);

// // Delete a job
router.delete('/delete-job/:id',userAuth,deleteJobController);

export default router;