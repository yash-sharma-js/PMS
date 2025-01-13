import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import env from'dotenv';
env.config();

const ProjectSchema = new mongoose.Schema(
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
        projectPic: {
            type: String,  // URL or path for the profile picture
            required: false,  // Picture is optional
            default: ''  // Default value for cases when no picture is provided
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


ProjectSchema.methods.generateAuthToken =  function () {
    return jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
}
ProjectSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
ProjectSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

const ProjectModel  = mongoose.model('project',ProjectSchema);

export default ProjectModel;