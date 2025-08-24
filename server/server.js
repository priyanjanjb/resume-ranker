import authRouter from './routes/authRouters.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

const app = express();
const port  = 8000;

//connect to mongoDB
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("DB connected successfully....!")})
.catch((err)=>{console.log("DB connected unsuccessfully....!!! "+ err)})

// Middleware
app.use(cookieParser())
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


app.use('/', authRouter)

app.listen(port, ()=>{
    console.log(`Server is Running on PORT:${port}`);
})
