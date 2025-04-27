import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

import userRouter from "./routes/user.route.js";
import pinRouter from './routes/pin.route.js';
import boardRoute from './routes/board.route.js';
import commentRoute from './routes/comment.route.js';

import connectDB from './utils/connectDB.js';

const app = express();

app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_URL, credentials:true }))
app.use(cookieParser());

app.use("/users", userRouter)
app.use('/pins', pinRouter)
app.use('/boards', boardRoute)
app.use('/comments', commentRoute)

app.listen(3000, () => {
    connectDB()
    console.log("Server is running!")
})