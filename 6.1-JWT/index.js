// // JWT Vs Tokens
// // JWT stands for Json Web Tokens

// // JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties. They are commonly used for authentication and information exchange in web applications.

// // **JWTs are Stateless**: JWTs contain all the information needed to authenticate a request, so the server doesn’t need to store session data. All the `data` is stored in the token itself.

// // Lets change the token logic that we had to use jwts---> Replace token logic with JWT

// // Get rid of the token generator manual Function:

// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }


const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "randomRajshreePriyaranjana2018";

const app = express()

app.use(express.json())

const users = []

app.post('/signup', (req,res)=>{

    // /// input VAlidation Using zod (Will cover later)


    const username = req.body.username
    const password = req.body.password

    // Validate input (Check if username and password are provided)
    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and password are required!'
        });
    }

    users.push({
        username : username,
        password : password
    })

    res.json({
        message: "Signed Up Successfully!!!"
    })

    console.log(users);
})


app.post('/signin',(req,res)=>{

    const username = req.body.username
    const password = req.body.password


    // // Check if user really exists and the details are correct
    const userFound = users.find(user => user.username === username && user.password === password);


    if(userFound){
        const token = jwt.sign({
            username:username
        }, JWT_SECRET)
        
        // userFound.token = token;
       
        res.json({
            token: token
        })
    }else{
        res.status(403).send({
            message:"Invalid username or password!!"
        })
    }

    console.log(users);

})

app.get('/me',(req,res)=>{
    const token = req.headers.authorization

    const decodedInformation = jwt.verify(token,JWT_SECRET)
    const username = decodedInformation.username

    const foundUser = users.find((user)=>user.username === username);

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