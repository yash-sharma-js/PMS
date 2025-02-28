import { Request, Response } from "express";
import UserModel from "../Models/user.model";
import { createUser , getUser, updateUser } from "../Services/user.service";
const { validationResult } = require('express-validator');


export const handleRegisterUser = async (req: Request, res: Response) => {

    // const err = validationResult(req);
    // if(!err.isEmpty()){ return res.status(400).json({errors : err.array()})} //Validating Request
    
    const {
        username,
        fullName: { firstName, lastName },
        bio,
        role,
        email,
        contact,
        password,
    } = req.body;

    // Check if email already exists
    const isEmailExist = await UserModel.findOne({ email });
    if (isEmailExist) {
        return res.status(400).json({ message: "User Already Exists with this Email." });
    }

    // Hash the password
    const hashPassword = await UserModel.hashPassword(password);

    // Create the user
    const { user, error } = await createUser({
        username,
        fullName: { firstName, lastName },
        bio,
        role,
        email,
        contact,
        password: hashPassword,
    });

    if (error) {
        return res.status(400).json({ message: error });
    }
    const token = await user.generateAuthToken()
    res.cookie('userId', user._id).cookie('token', token);
    return res.status(201).json({token,user});
};

export const handleLoginUser = async (req:Request , res: Response)=>{
    console.log("At controller")
    // const err = validationResult(req);
    // if(!err.isEmpty()){ return res.status(400).json({errors : err.array()})} //Validating Request

    const {
        email,
        password,
    } = req.body;

    const {user,error} = await getUser({email,password});
    if(error){
        return res.status(400).json(error);
    }
    const token = user.generateAuthToken()
    res.cookie('userId', user._id).cookie('token', token);
    return res.status(201).json({token,user});
}

export const handleUserProfile = async (req: Request,res:Response)=>{
    return res.status(200).json(req.user);
}

export const handleUpdateUser = async (req: Request, res: Response) => {
    const { username, fullName, bio, role, email, contact, password } = req.body;
    console.log("Data is comming..")
    if (!username || !fullName || !email || !password) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    const hashPassword = await UserModel.hashPassword(password)
    const { user, error } = await updateUser({
        username,
        fullName,
        bio,
        role,
        email,
        contact,
        password:hashPassword,
    });

    if (error) {
        return res.status(400).json({ message: error.message || "Update failed." });
    }
    const token = await user.generateAuthToken();
    res.cookie('token',token);
    return res.status(200).json({token, user });
};

export const handleLogoutUser = async (req:Request,res:Response)=>{
    return res.status(200).json({message:"User logged out"})
} 
