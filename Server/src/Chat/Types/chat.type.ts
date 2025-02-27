import mongoose, {Document} from "mongoose";

export interface IChat extends Document{
    userId:String,
    projectId:string,
    message:string
}