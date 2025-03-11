const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "qwepriyaranjana2018"
const {UserModel,TodoModel} = require('./todoDb');

mongoose.connect("mongodb+srv://rajshreeakm:y7Mu9q62OpExae0X@cluster0.zmuo0.mongodb.net/todo-database");

// // todo-database is the name of the db,if it doesn't exist then automatically a db with this name will be created in the specified cluster

const app = express()

app.use(express.json());

app.post('/signup', async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name:name
    });

    res.json({
        message:"SignUp successful!!"
    })
});

app.post('/signin', async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
        password:password
    })

    // console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id.toString()  // as userId is an object in mongodb
        },JWT_SECRET);
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    };
});

function auth(req,res,next){
    const token = req.headers.token;

    const verifiedData = jwt.verify(token,JWT_SECRET);
    if(verifiedData){
        req.userId = verifiedData.id;
        next();
    }else{
        res.status(403).json({
            message:"Sign in First...!!!"
        })
    }

}

app.post('/todo',auth,(req,res)=>{
    const userId = req.userId;
    const title = req.body.title;

    TodoModel.create({
        title,
        userId
    })
    res.json({
        suerId:userId
    })

});
app.get('/todos',auth, async(req,res)=>{
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId:userId
    })
    res.json({
        todos
    })
    

});
app.listen(3000);