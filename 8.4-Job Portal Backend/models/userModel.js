import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// // schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"]
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        validate: {
            validator: function (value) {
              // Define strong password criteria
              return validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
              });
            },
            message: "Password must be at least 8 characters long, contain 1 uppercase, 1 lowercase, 1 number, and 1 symbol."
        }
    },
    location:{
        type:String,
        default:"Delhi"
    }
},{timestamps:true});

// // middleware for password hashing
userSchema.pre('save', async function(){
    if(!this.isModified){
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// // password comparison
userSchema.methods.comparePassword = async function (userPassword) {
    const isMatched = await bcrypt.compare(userPassword,this.password);
    return isMatched;
}



// // Authentication middleware
userSchema.methods.createJWT = function(){
    return jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:'1d'});
    console.log("JWT Secret:", process.env.JWT_SECRET);

}
export default mongoose.model('user', userSchema);