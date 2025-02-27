import mongoose from "mongoose";
import env from'dotenv';
env.config();

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false, 
            default: ''
        },
        type: {
            type: String,  
            required: true
          },    
        projectId: {
            type:mongoose.Schema.Types.ObjectId ,  // Array of friends' IDs, can be ObjectId if linked to user model
            required: true
        },
        members: [{
            type:mongoose.Schema.Types.ObjectId ,  // Array of friends' IDs, can be ObjectId if linked to user model
            required: false
        }],
        activeYN: {
            type: Boolean,
            required: false,
            default: true  // Indicates if the user is active
        },
    },
    {
        timestamps:true
    }
);

const taskModel  = mongoose.model('task',TaskSchema);

export default taskModel;