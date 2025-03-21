const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

// // middleware for parsing request body
app.use(bodyParser.json());

app.use('/admin', adminRouter);
app.use('/user',adminRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})