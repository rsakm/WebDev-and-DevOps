// // CORS stands for Cross Origin Resource Sharing. It is a security feature implemented by web browsers that controls how resources on a web server can be requested from another domain. It's a crucial mechanism for managing cross-origin requests and ensuring secure interactions between different origins on the web.

const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.post('/sum',(req,res)=>{
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        sum : a+b,
        msg: "success!!"
    })

})

app.listen(PORT);