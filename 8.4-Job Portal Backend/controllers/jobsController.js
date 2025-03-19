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


export const updateJobController = async(req,res,next)=>{

    const {id} = req.params;
    const {company,position} = req.body;

    // // validation
    if(!company || !position){
        next("Provide all mandatory fields")
    }

    // // find job
    const job = jobsModel.findOne({
        _id:id
    })

    // // validation
    if(!job){
        next("No such job found")
    }

    if(!req.user.userId === job.createdBy.toString()){
        return next("You are not authorized to update this job")
    }
    const updatedJob = await jobsModel.findOneAndUpdate({_id:id},req.body,{
        new:true,
        runValidators:true
    });

    res.status(200).json({updatedJob})
}




export const deleteJobController = async (req, res, next) => {
    
      const { id: jobId } = req.params; // Extract jobId from URL
  
      if (!jobId) {
        return res.status(400).json({ msg: "Job ID is required" });
      }
  
      // Find the job (await the promise)
      const job = await jobsModel.findOne({ _id: jobId });
  
      if (!job) {
        return next("No such job found");
      }
  
      // Check authorization
      if (req.user.userId !== job.createdBy.toString()) {
        return next("You are not authorized to delete this job");
      }
  
      // Delete the job
      await jobsModel.findByIdAndDelete(jobId);
  
      res.status(200).json({
        message: "Job deleted",
      });
    
  };
  