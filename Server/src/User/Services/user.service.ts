import { error } from "console";
import UserModel from "../Models/user.model";
import { IUser } from "../Types/user.type";
import mongoose from "mongoose";

export const createUser = async ({
    username,
    fullName,
    bio,
    role,
    email,
    contact,
    password,
}: {
    username: string;
    fullName: { firstName: string; lastName?: string };
    bio?: string;
    role?: string;
    email: string;
    contact?: number;
    password: string;
}) => {
    try {
        if (!username || !fullName.firstName || !email || !password) {
            return { user: null, error: "All required fields must be provided." };
        }

        const user = await UserModel.create({
            username,
            fullName,
            bio,
            role,
            email,
            contact,
            password,
        });

        return { user, error: null };
    } catch (err) {
        return { user: null, error: err.message };
    }
};

export const getUser = async ({email,password}:{
    email: string;
    password: string;
})=>{
    console.log("At Service")
    try{
        if(
            !email ||
            !password
        ){
            return {user:null, error:"Email or Password is incorrect"};
        }
        const user = await UserModel.findOne({ email }).select('+password');
        if(!user){
            return {user:null, error:"Email or Password is incorrect"};
        } 

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return {user:null,error:("Email or Password is incorrect")};
        }
        return {user ,error:null};
    }
    catch (error){
        return {user:null ,error:error};
    }
}

export const updateUser = async ({
    username,
    fullName,
    bio,
    role,
    email,
    contact,
    password,
}: {
    username: string;
    fullName: { firstName: string; lastName?: string };
    bio?: string;
    role?: string;
    email: string;
    contact?: number;
    password: string;
}) => {
    try {
        const user = await UserModel.findOneAndUpdate(
            { email }, // Find user by email
            { $set: { username, fullName, bio, role, contact, password } }, // Update fields
            { new: true, runValidators: true } // Return updated user, validate schema
        );

        if (!user) {
            throw new Error("User not found.");
        }

        return { user, error: null };
    } catch (error: any) {
        return { user: null, error };
    }
};

export const removeUser = async ()=>{

}// Pending...

export const addProjectToUser = async ({ownerId,projectId}:{ownerId:string,projectId:string})=>{
    try {
        const user = await UserModel.findByIdAndUpdate(
            ownerId,
            { $push: { projectId } },
            { new: true }
        );

        if (!user) {
            return { user: null, error: "User not found" };
        }

        return { user, error: null };
    } catch (error) {
        return { user: null, error: error.message };
    }
}