const express = require('express')
const app = express()

let requestCount = 0;

function requestIncreaser(req,res,next){
    requestCount+=1
    console.log("Total number of requests = "+requestCount);
    next()
}

function realSumHandler(req,res){
    const a = parent(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        sum: a+b
    })
}

app.get('/sum',requestIncreaser,realSumHandler)

app.listen(3000)