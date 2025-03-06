const express = require('express')
const app = express()

app.use(express.json())


const users = []

// [
//  {username: "Rajshree", password: "PriyaRanjana2018"}

// ]


function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '#', '$', '*', '/', '&', '^'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}


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


    // const userFound = users.find((user)=>{
    //     if(user.username == username && user.password == password){
    //         return true
    //     }else{
    //         return false;
    //     }
    // })

    const userFound = users.find(user => user.username === username && user.password === password);


    if(userFound){
        const token = generateToken();
        userFound.token = token;
       
        res.json({
            message: token
        })
    }else{
        res.status(403).send({
            message:"Invalid username or password!!"
        })
    }

    console.log(users);

})


// // Till now we have created a simple signUp and signin server. Now, Let’s create an endpoint (/me ) that returns the user their information `only if they send their, i.e if the user is valid and signed in, he/she may ask or request for some info like courses for a course selling app, posts for insta/fb and other social media website or etc.
app.get('/me',(req,res)=>{
    const token = req.headers.authorization
    const foundUser = users.find((user)=>user.token === token);

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