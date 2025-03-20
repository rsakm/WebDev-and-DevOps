// // api documentation packages
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from 'swagger-jsdoc'

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
import userRoutes from './routes/userRoutes.js'
import jobsRoutes from './routes/jobsRoute.js'

// // security packages
import helmet from 'helmet';
import xssClean from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize'
import { version } from 'mongoose';

// // config environment variable
dotenv.config();


// // mongodb connection
connectDb();

// // swagger api config
const options = {
   definition:{
    openapi: "3.0.0",
    info:{
        title:"Job Portal Application",
        version:'1.0.0',
        description:"Node JS, Express Js, MongoDB"
    },
    servers: [
        {
          url: "https://job-portal-backend-website.onrender.com"
        }
      ]
      
   },
   apis:['./routes/*.js'],
};

const spec = swaggerDoc(options)

// // rest object
const app = express();

app.use(helmet());
app.use(xssClean());
app.use(mongoSanitize())


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


// // routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/job',jobsRoutes);

// // Home route
// Home route to redirect or show a message
app.get('/', (req, res) => {
    res.redirect('/api-doc');
  });
  

app.use('/api-doc',swaggerUi.serve, swaggerUi.setup(spec));

// // validation middleware
app.use(errorMiddleware);

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server running at PORT ${port}`);
})


// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: 'Route not found'
    });
  });
  