
const bcrypt = require('bcrypt');
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rajshreeakm:moIRnxf8uXBYGiAx@cluster0.zmuo0.mongodb.net/todo-database")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const { email, password, name } = req.body;

    // // Error Handling

    let errorThrown = false;
    try{
        // /// password hashing and salting
    const hashedPassword = await bcrypt.hash(password, 5);

    // console.log(hashedPassword);
    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });
    
    }catch(e){
        // console.log("Error");
        errorThrown = true;
        res.json({
            message:"User Already Exists...!"
        });
    }
    if(!errorThrown){
        res.json({
            message: "You are signed up"
        })
    }
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });

    if(!response){
        res.status(403).json({
            message:"User doesn't exist ...!"
        })
        return;
    }

    // // compare the password entered by the user and the hashed password stored in the database

    const passwordMatch = await bcrypt.compare(password,response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials...!"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);