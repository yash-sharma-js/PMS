import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import env from "dotenv";
import { IUser, IUserModel } from "../Types/user.type";

env.config();

const UserSchema = new mongoose.Schema<IUser>(
    {
        username: { type: String, required: true, unique: true, minlength: [3, "username should have MinLength of 3"] },
        fullName: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: false },
        },
        bio: { type: String, required: false, default: "" },
        role: { type: String, required: false },
        email: { type: String, required: true, unique: true, trim: true },
        contact: { type: Number, required: false, trim: true },
        profilePic: { type: String, required: false, default: "" },
        location: { type: String, required: false, default: "" },
        password: { type: String, required: true, minlength: [6, "password should have MinLength of 6"], select: false },
        friendsId: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
        projectId: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
        socketId: {type:String, required:false},
        activeYN: { type: Boolean, required: false, default: true },
    },
    { timestamps: true }
);

UserSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET!, { expiresIn: "24h" });
};

UserSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = async function (password: string) {
    return await bcrypt.hash(password, 10);
};

const UserModel = mongoose.model<IUser, IUserModel>("user", UserSchema);

export default UserModel;
