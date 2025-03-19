import jobsModel from "../models/jobsModel.js";
import mongoose from "mongoose";
import moment from "moment";

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
    // const jobs = await jobsModel.find({createdBy:req.user.userId})

    const {status,workType,search,sort} = req.query;
    // // condition for searching filters
    const queryObject = {
        createdBy : req.user.userId
    }
    // // logic filters
    if(status && status != 'all'){
        queryObject.status = status
    }

    if(workType && workType != 'all'){
        queryObject.workType = workType;
    }

    if(search && search !== 'all'){
        queryObject.position = {$regex: search, $options: "i"}
    }

    let queryResult = jobsModel.find(queryObject);

// // sort job
    if(sort === 'latest'){
        queryResult = queryResult.sort('-createdAt')
    }
    if(sort === 'oldest'){
        queryResult = queryResult.sort('createdAt')
    }
    if(sort === 'a-z'){
        queryResult = queryResult.sort('position')
    }
    if(sort === 'z-a'){
        queryResult = queryResult.sort('-position')
    }

    const jobs = await queryResult;
    
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
  

  export const jobStatsController = async (req,res)=>{
    const stats = await jobsModel.aggregate([
        // // search by user job
        {
            $match:{
                createdBy: new mongoose.Types.ObjectId(req.user.userId),
            },
        },
        {
            $group:{
                _id:'$status', count:{$sum:1}
            }
        },
        
    ]);

    // // default stats  (for new user)
    const defaultStats = {
        pending: stats.pending || 0,
        reject: stats.reject || 0,
        interview: stats.interview || 0,
    };


    // // monthly stats
    let monthlyApplication = await jobsModel.aggregate([
        {
            $match:{
                createdBy: new mongoose.Types.ObjectId(req.user.userId)
            },
        },
        {
            $group: {
                _id: {
                    year: {$year: '$createdAt'},
                    month: {$month: '$createdAt'}
                },
                count:{
                    $sum: 1,
                },
            },
        },
    ])

    monthlyApplication = monthlyApplication.map(item =>{
        const {_id:{year,month},count} = item
        const date = moment().month(month-1).year(year).format("MMM Y")
        return {date, count}
    }).reverse();

    res.status(200).json({
        totalJobs:stats.length,
        stats,
        monthlyApplication
    })

  }