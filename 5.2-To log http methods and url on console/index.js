// //Assignment : Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console


const express = require("express");

const app = express();

// // our code here for the middleware

function LoggerMiddleware(req,res,next){
    console.log("Method of the request is: "+req.method);

    console.log("requested route is : "+req.url);
    console.log("Host is: "+req.hostname);
    console.log(new Date());
    next()
}

app.use(LoggerMiddleware)
app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);