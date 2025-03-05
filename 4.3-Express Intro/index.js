// // // Creating an HTTP server
// //  // Express
// //  // node is not default library for express unlike it is for fs

// // // So we have to install express

// const express = require('express')
// const app = express();

// function sum(n){
//     let ans = 0
//     for(let i = 1;i<=n;i++){
//         ans+=i
//     }
//     return ans;
// }

// // // request and response
// app.get('/',(req,res)=>{
//     // res.send('Lets us start')
//     const n = req.query.n
//     res.send( "Hi " +sum(n))
// })

// app.listen(3000);




const express = require('express');
const app = express()

// var user = [{
//     name:'Rajshree',
//     metadata:{
//         profilePic:"",
//         pronouns:"he/his",
//         address:{
//             city:"Patna"
//         }
//     }
// }]


var users =[{
    name:'John',
    kidneys:[{
        healthy:true
    },
    {
        healthy:false
    }
]
}]

// console.log(users[0]);


app.use(express.json())

app.get('/',(req,res)=>{
    const kidneys = users[0].kidneys;
    const noOfKidneys = kidneys.length
    let healthyKidneys = kidneys.reduce((count, kidney) => kidney.healthy ? count + 1 : count, 0);
    const unHealthyKidneys = noOfKidneys - healthyKidneys;

    // res.send(kidneys)

    res.json({
        noOfKidneys,
        healthyKidneys,
        unHealthyKidneys
    })
})

app.post('/',(req,res)=>{
    const isHealthy = req.body.isHealthy
    if (typeof req.body.isHealthy === "undefined") {
        return res.status(400).json({ error: "Missing isHealthy field" });
    }

    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg:"kidney added!"
    })

})

app.put('/', (req, res) => {
    users[0].kidneys.forEach(kidney => kidney.healthy = true);
    res.json({ msg: "All kidneys updated to healthy!" });
});

app.delete('/', (req, res) => {
    users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy === true);
    res.json({ msg: "Unhealthy kidneys deleted!" });
});

app.listen(3000,()=>{
    console.log("Server running on Port 3000");
})