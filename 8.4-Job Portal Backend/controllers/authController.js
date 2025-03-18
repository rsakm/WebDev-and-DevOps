import userModel from "../models/userModel.js";
export const registerController = async (req,res,next)=>{
    
        const {name,email,password}= req.body;
          //// Early validation
    if (!name || !email || !password) {
        return next("All fields are required");
      }
  
      if (password.length < 8) {
        return next("Password must be greater than 8 characters");
      }
  
      // Check if user already exists
      const exisitingUser = await userModel.findOne({ email });
      if (exisitingUser) {
        return next("Email Already Registered. Please Login.");
      }
    const user = await userModel.create({name,email,password});
    res.status(200).send({
        success:true,
        message:"User registered successfully",
        user
    })
    
}