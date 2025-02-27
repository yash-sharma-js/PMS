import express,{ Application } from 'express';
import env from'dotenv';
env.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ConnectDB from './Config/connection';

//Imports Routes
import userRouter from './User/Routes/user.route'
import projectRouter from './Project/Routes/project.route'
import taskRouter from './Task/Routes/task.route'
import { authUser } from './User/middlewares/user.middleware';
import { logRequest } from './Logger/log';


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

app.use('/api/user',logRequest,userRouter)
app.use('/api/project',logRequest,projectRouter)
app.use('/api/task', logRequest,authUser, taskRouter)


export default app;

