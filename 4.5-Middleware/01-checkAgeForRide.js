const express = require('express')

const app = express()



// //
function isOldEnough(age){
    if(age > 14){
        return true
    }else{
        return false
    }
}

app.get('/ride1', (req,res)=>{
    if(isOldEnough(req.query.age)){
        res.json({
            msg:'You have ridden ride 1 successfully!!'
        })
    }else{
        res.status(411).json({
            msg:'Sorry You are below age!!'
        })
    }
})


// // using middleware for the same

function isOldEnoughMiddleWare(req,res,next){
    if(req.query.age >= 14){
        next()
    }else{
        res.status(411).json({
            msg:'Sorry You are below age!!'
        })
    }
}
app.get('/ride2',isOldEnoughMiddleWare,(req,res)=>{
    res.json({
        msg:'You have ridden ride 2 successfully!!'
    })
})
app.get('/ride3',isOldEnoughMiddleWare,(req,res)=>{
    res.json({
        msg:'You have ridden ride 3 successfully!!'
    })
})

// // or
app.use(isOldEnoughMiddleWare)

app.get('/ride3',(req,res)=>{
    res.json({
        msg:'You have ridden ride 4 successfully!!'
    })
})

app.get('/ride3',(req,res)=>{
    res.json({
        msg:'You have ridden ride 5 successfully!!'
    })
})



app.listen(3000)