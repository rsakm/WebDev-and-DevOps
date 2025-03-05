const express = require('express')
const app = express()

let requestCount = 0;

// // You have been given an express server which has a few endpoints
//  // Your task is to create a global middleware (app.use) which will maintain a count of the number of requests made to the server in the global requestCount variable.

// // my code(solution code) here
app.use((req,res,next)=>{
    requestCount+=1;
    next()
})

app.get('/user', (req,res)=>{
    res.status(200).json({name:'john'})
});

app.post('/user',(req,res)=>{
    res.status(200).json({msg:'created dummy user'})
})

app.get('/requestCount',(req,res)=>{
    res.status(200).json({requestCount})
})

app.listen(3000)

module.exports = app