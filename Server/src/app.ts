import express,{ Application } from 'express';
import env from'dotenv';
env.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ConnectDB from './Config/connection';

//Imports User
import userRouter from './User/Routes/user.route'



// Initialise app
const app: Application = express();

//Connection to MongoDB
ConnectDB(process.env.MONGO_URL as string);
//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.end("Server is Running");
})

app.use('/api/user',userRouter)
// app.use('/api/project',userRouter)
// app.use('/api/task',userRouter)


export default app;

