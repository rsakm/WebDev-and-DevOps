
const {Router} = require('express');
const adminRouter = Router();
const {adminModel, courseModel} = require('../db')
// adminRouter.use(adminMiddleware);

// Import the JWT Admin Password from the config file for verification
const { JWT_ADMIN_PASSWORD } = require("../config");

// Import necessary modules for handling JWT, password hashing, and schema validation
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

adminRouter.post('/signup',async (req,res)=>{

    // Validate the request body data using zod schema (email, password, firstName, lastName must be valid)

    const reqBody = zod.object({
        email:zod.email().min(5),
        password:zod.string().min(5),
        firstName: zod.string(3),
        lastName:zod.string(3)
    });

    // // parse and validate the request body data
    const parseDataWithSuccess = reqBody.safeParse(req.body);

    // // if data format is incorrect, throw an error
    if(!parseDataWithSuccess.success){
        return res.json({
            message:"Invalid data format...!",
            error:parseDataWithSuccess.error
        })
    }

    
// // get the credentials by destructuring the req.body object

const { email, password, firstName, lastName } = req.body;

//  // Hash the admin's password using bcrypt with a salt of 10
 const hashedPass = await bcrypt.hash(password,10);


 //   // Try to create a new admin in the database
 try{
    await adminModel.create({
        email:email,
        password:hashedPass,
        firstName:firstName,
        lastName:lastName
    });
 }catch(error){
     // If the admin already exists, send an error message to the client
     return res.status(400).json({
        message: "You are already signup!",
    });
 }

 // Respond with a success message if the admin is created successfully
 res.status(201).json({
    message: "Signup successful!",
});

})



// Define the admin routes for signin
adminRouter.post("/signin", async function (req, res) {
    // Validate the request body data using zod schema (email, password must be valid)
    const requireBody = zod.object({
        email: zod.string().email(), // Email must be a valid format
        password: zod.string().min(6), // Password must be at least 6 characters
    });

    // Parse and validate the request body data
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If the data format is incorrect, send an error message to the client
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // Get email and password from the request body
    const { email, password } = req.body;

    // Find the admin with the given email
    const admin = await adminModel.findOne({
        email: email,
    });

    // If the admin is not found, send an error message to the client
    if (!admin) {
        return res.status(403).json({
            message: "Invalid Credentials!",
        });
    }

    // Compare the password with the hashed password using the bcrypt.compare() method
    const passwordMatch = await bcrypt.compare(password, admin.password); // Note: Added 'await' for proper async handling

    // If password matches, generate a JWT token and return it
    if (passwordMatch) {
        // Create a JWT token with the admin's id and the secret key
        const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);

        // Send the token to the client
        res.status(200).json({
            token: token,
        });
    } else {
        // If the password does not match, send an error message to the client
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
});


adminRouter.post('/',(req,res)=>{
    

})

adminRouter.put('/',(req,res)=>{
    
})

adminRouter.get('/bulk',(req,res)=>{
    
})


module.exports = {
    adminRouter: adminRouter
}