import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
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
        owner: {
            type: mongoose.Schema.Types.ObjectId,  // Auto-generated ID
            required: true
        },
        type: {
            type: String,  
            required: true
          },    
        ProjectId: {
            type:mongoose.Schema.Types.ObjectId ,  // Array of friends' IDs, can be ObjectId if linked to user model
            required: true
        },
        members: [{
            type:mongoose.Schema.Types.ObjectId ,  // Array of friends' IDs, can be ObjectId if linked to user model
            required: false
        }],
        tasks: [{
            type: mongoose.Schema.Types.ObjectId,  // ID referring to a related project, can be ObjectId if relational
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


TaskSchema.methods.generateAuthToken =  function () {
    return jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
}
TaskSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
TaskSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

const TaskModel  = mongoose.model('task',TaskSchema);

export default TaskModel;