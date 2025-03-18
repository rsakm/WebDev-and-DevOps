import jobsModel from "../models/jobsModel.js";

export const createJobsController = async (req,res,next)=>{
    const {company,position} = req.body;

    if(!company || !position){
        next("Provide all the mandatory fields"
        )
    }

    req.body.createdBy = req.user.userId
    const job = await jobsModel.create(req.body)

    res.status(201).json({
        job
    })


}

export const getJobsController = async (req,res,next)=>{

    const jobs = await jobsModel.find({createdBy:req.user.userId})
    res.status(200).json({
        totalJobs : jobs.length,
        jobs
    })
}