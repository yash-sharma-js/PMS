import mongoose, { Document } from "mongoose";

export interface IFullName {
    firstName: string;
    lastName?: string;
}

export interface IUser extends Document {
    username: string;
    fullName: IFullName;
    bio?: string;
    role?: string;
    email: string;
    contact?: number;
    profilePic?: string;
    location?: string;
    password: string;
    friendsId?: mongoose.Types.ObjectId[];
    projectId?: mongoose.Types.ObjectId[];
    // taskId?: mongoose.Types.ObjectId[];
    activeYN?: boolean;
    socketId?:string;
    generateAuthToken: () => string;
    comparePassword: (password: string) => Promise<boolean>;
}

export interface IUserModel extends mongoose.Model<IUser> {
    hashPassword: (password: string) => Promise<string>;
}
