
const {Router} = require('express');
const adminRouter = Router();
const {adminModel, courseModel} = require('../db')
// adminRouter.use(adminMiddleware);

// Import the JWT Admin Password from the config file for verification
const { JWT_ADMIN_PASSWORD } = require("../config");
const {adminMiddleware} = require('../middleware/admin')

// Import necessary modules for handling JWT, password hashing, and schema validation
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

adminRouter.post('/signup',async (req,res)=>{

    // Validate the request body data using zod schema (email, password, firstName, lastName must be valid)

    const reqBody = zod.object({
        email:zod.string().email().min(5),
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


// Define the admin routes for creating a course
adminRouter.post("/course", adminMiddleware, async function (req, res) {
    // Get the adminId from the request object
    const adminId = req.adminId;

    // Validate the request body data using zod schema (title, description, imageUrl, price must be valid)
    const requireBody = zod.object({
        title: zod.string().min(3), // Title must be at least 3 characters
        description: zod.string().min(10), // Description must be at least 10 characters
        imageUrl: zod.string().url(), // Image URL must be a valid URL
        price: zod.number().positive(), // Price must be a positive number
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

    // Get title, description, imageUrl, and price from the request body
    const { title, description, imageUrl, price } = req.body;

    // Create a new course with the given title, description, imageUrl, price, and creatorId
    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId,
    });

    // Respond with a success message if the course is created successfully
    res.status(201).json({
        message: "Course created!",
        courseId: course._id,
    });
});



// Define the admin routes for updating a course
adminRouter.put("/course", adminMiddleware, async function (req, res) {
    // Get the adminId from the request object, set by the admin middleware
    const adminId = req.adminId;

    // Define a schema using zod to validate the request body for updating a course
    const requireBody = zod.object({
        courseId: zod.string().min(5), // Ensure course ID is at least 5 characters
        title: zod.string().min(3).optional(), // Title is optional
        description: zod.string().min(5).optional(), // Description is optional
        imageUrl: zod.string().url().min(5).optional(), // Image URL is optional
        price: zod.number().positive().optional(), // Price is optional
    });

    // Parse and validate the incoming request body against the schema
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If validation fails, respond with an error message and the details of the error
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format", // Inform the client about the error
            error: parseDataWithSuccess.error, // Provide specific validation error details
        });
    }

    // Destructure the validated fields from the request body
    const { courseId, title, description, imageUrl, price } = req.body;

    // Attempt to find the course in the database using the provided courseId and adminId
    const course = await courseModel.findOne({
        _id: courseId, // Match the course by ID
        creatorId: adminId, // Ensure the admin is the creator
    });

    // If the course is not found, respond with an error message
    if (!course) {
        return res.status(404).json({
            message: "Course not found!", // Inform the client that the specified course does not exist
        });
    }

    // Update the course details in the database using the updates object
    await courseModel.updateOne(
        {
            _id: courseId, // Match the course by ID
            creatorId: adminId, // Ensure the admin is the creator
        },
        { 
            title: title || course.title, // Update title if provided, otherwise keep the existing title
            description: description || course.description, // Update description if provided, otherwise keep the existing description
            imageUrl: imageUrl || course.imageUrl, // Update imageUrl if provided, otherwise keep the existing imageUrl
            price: price || course.price, // Update price if provided, otherwise keep the existing price
         } 
    );

    // Respond with a success message upon successful course update
    res.status(200).json({
        message: "Course updated!", // Confirm successful course update
    });
});



// Define the admin routes for getting all courses
adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
    // Get the adminId from the request object
    const adminId = req.adminId;

    // Find all courses with the given creatorId
    const courses = await courseModel.find({
        creatorId: adminId,
    });

    // Respond with the courses if they are found successfully
    res.status(200).json({
        courses: courses,
    });
});

// Define the admin routes for deleting a course
adminRouter.delete("/course", adminMiddleware, async function (req, res) {
    // Get the adminId from the request object
    const adminId = req.adminId;

    // Validate the request body data using zod schema (courseId must be valid)
    const requireBody = zod.object({
        courseId: zod.string().min(5), // Course ID must be at least 5 characters
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

    // Get courseId from the request body
    const { courseId } = req.body;

    // Find the course with the given courseId and creatorId
    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId,
    });

    // If the course is not found, send an error message to the client
    if (!course) {
        return res.status(404).json({
            message: "Course not found!",
        });
    }

    // Delete the course with the given courseId and creatorId
    await courseModel.deleteOne({
        _id: courseId,
        creatorId: adminId,
    });

    // Respond with a success message if the course is deleted successfully
    res.status(200).json({
        message: "Course deleted!",
    });
});


module.exports = {
    adminRouter: adminRouter
}