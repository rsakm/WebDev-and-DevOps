import express from "express";
import mongoose from "mongoose";
import colors from "colors";



const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongo Database ${mongoose.connection.host}`);

    }catch(err){
        console.log(`MongoDB error: ${err}`.bgRed.white);
    }
}

export default connectDb;