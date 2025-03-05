const exp = require('constants')
const express =require('express')
const fs = require('fs')

const app = express()

app.get("/files/:fileName",(req,res)=>{
    const name = req.params.fileName
    console.log(name);
    fs.readFile(name, 'utf-8', (err,data)=>{
        if(err){
            res.sendStatus(411)
        }else{
            res.json({
                data
            })
        }
    })
})

app.listen(3000)