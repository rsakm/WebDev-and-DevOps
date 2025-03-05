const express = require("express");
const app = express()


// // route handlers
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/info',(req,res)=>{
    res.send('Hello from info route')
})

app.post('/',(req,res)=>{
    res.send('Hello from post method')
})


// // which port
app.listen(3000);