

import express from  "express"

const errorMiddleware = (err,req,res,next)=>{
    console.log(err);
    const defaultErrors = {
        statusCode:500,
        message:err
    }

    // // missing field error
    if(err.name === 'ValidationError'){
        defaultErrors.statusCode = 400,
        defaultErrors.message = Object.values(err.errors).map(error => error.message).join(',');
    }
    // // duplicate error
    if(err.code && err.code === 11000){
        defaultErrors.statusCode = 400,
        defaultErrors.message = `${Object.keys(err.keyValue)} filed has to be unique`
    }
    res.status(defaultErrors.statusCode).json({message:defaultErrors.message});
}

export default errorMiddleware;