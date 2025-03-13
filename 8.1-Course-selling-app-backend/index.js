const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');


// // Routing and express routes.
// const createUserRoutes = require('./routes/usersRoute');

const app = express();

// createUserRoutes(app)  // no need to create /user/.... end points here as the function createUserRoutes already does this 

// // express router method
app.use('api/vi//user',userRouter);
app.use('api/vi//admin',adminRouter);
app.use('api/vi/course',courseRouter);





// // now for user there are at least 5 end points now, similarly for admin there would be several end points, also /course has several routes like purchase, all courses preview etc. So here express router comes in picture. We can code user.js, admin.js, and course.js separately. We can create routes in two ways here. example for user: user.js and usersRoute.js are two routes, just being created for better understanding.

// // A better way of routing is express provides us some inbuilt constructs for routing. express.Router() module that makes routing more modular, maintainable, and scalable. While manually creating routes and exporting functions works for small applications, using Express Router provides clear advantages as your application grows.



async function main() {
    await mongoose.connect("mongodb+srv://rajshreeakm:moIRnxf8uXBYGiAx@cluster0.zmuo0.mongodb.net/coursera-app")

app.listen(3000);
console.log("listening on port 3000");
}

main();