import express from "express"
import dotenv from 'dotenv'
import cors from 'cors';
import morgan from "morgan";
import 'express-async-errors';

import colors from 'colors'
import connectDb from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

// // config environment variable
dotenv.config();


// // mongodb connection
connectDb();


// // rest object
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


// // routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);

// // validation middleware
app.use(errorMiddleware);

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server running at PORT ${port}`);
})
