const express = require('express')
const app = express()


app.get('/sum/:firstArg/:secArg',(req,res)=>{
    const a = parseInt(req.params.firstArg)
    const b = parseInt(req.params.secArg)

    res.json({
        sum: a+b
    })
})

app.get('/multiply',(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        product : a*b
    })
})

app.listen(3000)