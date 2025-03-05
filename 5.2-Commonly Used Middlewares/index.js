const express = require('express')

const app = express()
const bodyParser = require('body-parser')

app.use(express.json())

// // Either we can directlu use json() middleware or we can use the library called bodyparser
// app.use(bodyParser.json())

app.post('/sum', (req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        Sum : a+b
    })
})

app.listen(3000);