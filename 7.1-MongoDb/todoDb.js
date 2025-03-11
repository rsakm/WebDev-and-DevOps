

// // Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');


// // schema is a class exported by the mongoose library, which is used to define the schema of our database

const schema = mongoose.Schema;
const ObjectId =mongoose.Types.ObjectId;  //// ObjectId type for referencing other documents

// // Define the schema for the User collection
const User = new schema({
    email: String,
    password: String,
    name: String
});

// //Define the schema for the Todo collection
const Todo = new schema({
    title: String,
    done: Boolean,
    userId: ObjectId
});


// // users is the name of the database and it will have the schema of USer
// // Create a Mongoose model for the 'users' collection using the User schema
const UserModel = mongoose.model('users', User);


// // Similarly, the todos db will have to Todo schema
// // Create a Mongoose model for the 'todos' collection using the Todo schema
const TodoModel = mongoose.model('todos',Todo);


// // Export the models so they can be used in other parts of the application
module.exports ={
    UserModel,TodoModel
};
