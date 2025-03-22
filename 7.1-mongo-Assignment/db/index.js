// // connect to mongodb

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectId = mongoose.Types.ObjectId;


const adminSchema = new Schema({
    userName:{type:String,unique:true},
    password:String
});

const userSchema = new Schema({

    userName :{type: String, unique:true},
    password : String,
    purchasedCourse: [{
        type: objectId,
        ref: 'Course'
    }]

});

const courseSchema = new Schema({
    title:String,
    description:String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin',adminSchema);
const User = mongoose.model("User",userSchema);
const Course = mongoose.model('Course',courseSchema);

module.exports = {
    Admin,
    User,
    Course
}