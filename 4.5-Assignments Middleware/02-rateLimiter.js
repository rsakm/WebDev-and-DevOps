const express = require('express')
const app = express()

// // You have been given an express server which has a few endpoints.
// // Your task is to create a global middleware which will rate limit the requests from a user to only 5 requests per second
//  // If a user sends more than 5 requests in a single second, the server should block them with a 404.
//  // User will be sending user id in the header as 'user-id'.
// // You have been given a numberOfRequestsForUser object to start off with which clears every one second.  (using setinterval the object is being made empty)

let numberOfRequestsForUser = {}
setInterval(()=>{
    numberOfRequestsForUser = {}
},1000)

app.use((req,res,next)=>{
    const userId = req.headers["user-id"]
    if(numberOfRequestsForUser[userId]){  // // checking whether it is not first request i.e 0
        numberOfRequestsForUser[userId]+=1

        if(numberOfRequestsForUser[userId]>5){
            res.status(404).send("Request exceeded 5 per second")
        }else{
            next()
        }
    }else{
        numberOfRequestsForUser[userId] = 1;  //first request
        next()
    }
})

app.get('/user',(req,res)=>{
    res.status(200).json({
        name:'John'
    })
})

// create a route for POST request on /user path
app.post("/user", function (req, res) {
    // return a json response with message "created dummy user
    res.status(200).json({ msg: "created dummy user" });
});

// Start the server on port 3000
app.listen(3000);