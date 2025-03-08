const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
const JWT_SECRET = "fakeHaiBhai112";

app.use(express.json());

const users = [];

// // Logger middleware to check on what method the request actually came.

function logger(req,res,next){
    console.log(`${req.method} request came..!`);
    next();
}

app.use(logger);

// // to avoid cors complexity for now
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    });

    // // Ideally we should check if an user with this username already exists (Will do later)

    res.json({
        message:"Signed up Successfully!!"
    });

    console.log(users);

})



app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    // // Check if a user with this username and password exists
    const findUser = users.find((user)=>user.username === username && user.password === password);

    // // if user doesn't exist the .find function returns undefined else it returns the first matching user with the given conditions

    // // If user doesn't exist we can simply return an error msg else the user will be signed in so we have to return them a token.

   if(!findUser){
    return res.status(401).json({
        message :"Invalid username or password"
    })
   }else{
    const token = jwt.sign({
        username
    },JWT_SECRET);

    res.status(200).json({ message: "Sign-in successful", token : token });
   }

   console.log(users);

});

// // creating the Middleware

function auth(req,res,next){
    const token = req.headers.authorization;

    const decodeData = jwt.verify(token,JWT_SECRET);

    if(decodeData.username){
        req.username = decodeData.username
        next()
    }else{
        res.json({
            message:"You are not logged in!"
        })
    };

}

app.get('/me',auth,(req,res)=>{

    const foundUser = users.find((user)=>user.username === req.username);

    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }else{
        res.json({
            message:"Invalid request!!"
        })
    }
    
})

app.listen(3000);

