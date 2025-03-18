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

    // // token
    const token = user.createJWT();

    res.status(200).send({
        success:true,
        message:"User registered successfully",
        user:{name:user.name,
          lastName:user.lastName,
          email:user.email,
          location:user.location
        },
        token
    })
    
};

export const loginController = async (req,res)=>{

  const {email,password} = req.body;

  // // validate email and password
  if(!email || !password){
    next("Enter mandatory data");
  }
  // // Find the user via email
  const user = await userModel.findOne({email});
  if(!user){
    next('Invalid credentials...!');
  }

  // // compare password
  const passwordMatched = await user.comparePassword(password);
  if(!passwordMatched){
    next('Invalid credentials...!');
  }

  user.password = undefined
  const token = user.createJWT();
  res.status(200).json({
    success:true,
    message:"Login successful",
    user,
    token
  });

}