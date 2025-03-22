
const {Admin} = require('../db/index');
function adminMiddleware(req,res,next){

    // // Implement auth logic

    const username = req.headers.userName;
    const password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
    })
    .then((value)=>{
        if(value){
            next();
        }else{
            res.status(403).json({
                message:"User doesn't exist..!"
            })
        }
    })

}

module.exports = adminMiddleware;
