const {Router} = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin } = require('../db');
const router = Router();

// // Admin routes
router.post('/signup', async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    // // check if the usernam ealready exists
    await Admin.create({
        username: username,
        password: password
    }).then(()=>{
        res.json({
            message:"Admin created successfully...!!!!"
        })
    }).catch((error)=>{
        res.json({
            message:"Admin not created!"
        })
    })

    

});


router.post('/courses',adminMiddleware,(req,res)=>{

});

router.get('/courses',adminMiddleware,(req,res)=>{

});

module.exports = router;