import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,"Company name is required"]
    },
    position:{
        type:String,
        required:[true,"job Position should be mentioned"],
        maxlength:100
    },
    status:{
        type:String,
        enum:['pending','reject','interview'],
        default:'pending'
    },
    workType:{
        type:String,
        enum:['full-time','part-time','internship'],
        default:'full-time'
    },
    workLocation:{
        type:String,
        required:[true, "Location must be mentioned for all job openings"],
        default:'Noida'
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'user'
    }

}, {timestamps:true})

export default mongoose.model('job',jobSchema);