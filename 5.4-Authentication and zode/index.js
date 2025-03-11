const express = require('express')
const zod = require('zod');

const app = express();

app.use(express.json());




// // middleware

// function middleWare(req,res,next){
//     fetch().then(()=>{

//     })
// }

const schema = zod.array(zod.number())  //// kidneys must be array of numbers


// {email:string => email
// password : at least 8 letters 
// country: "IN", "US"
// 
// 
// }

const schema2 = zod.object({
    email: zod.string().email(),
    password : z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys : z.array((z.number()))
})

app.post('/health-checkup',(req,res)=>{

    //// kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    // const kidneyLength = kidneys.length;


    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }

    res.send({
        response
    });
});

////global catches

// app.use((err,req,res,next)=>{
//     res.json({
//         msg:"Something went wrong..!"
//     })
// })



function validateSignup(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response = schema.safeParse(obj)
    console.log(response);
}

app.post('/signup',(req,res)=>{
    const response = validateSignup(req.body);
    if(!response.success){
        res.json({
            msg:"Invalid inputs..!!!"
        })
    }else{
        res.json({
            msg:"Sign up successful...!!!"
        })
    }
});



app.listen(3000)