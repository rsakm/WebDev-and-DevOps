
const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require('../db')
// adminRouter.use(adminMiddleware);

adminRouter.post('/signup',(req,res)=>{

})

adminRouter.post('/signin',(req,res)=>{
    
})

adminRouter.post('/',(req,res)=>{

})

adminRouter.put('/',(req,res)=>{
    
})

adminRouter.get('/bulk',(req,res)=>{
    
})


module.exports = {
    adminRouter: adminRouter
}