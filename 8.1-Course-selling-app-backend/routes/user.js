// const express = require('express');
// const Router = express.Router;


// // Or
const {Router} = require("express");

const userRouter = Router();
const {userModel} = require('../db');
userRouter.post('/signup',(req,res)=>{

})

userRouter.post('/signin',(req,res)=>{
    
})

userRouter.get('/purchases',(req,res)=>{
    
})

module.exports={
    userRouter: userRouter
}