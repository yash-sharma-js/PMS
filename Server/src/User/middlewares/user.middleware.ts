import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import env from "dotenv";
import UserModel from "../Models/user.model";

env.config();

export const authUser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        const user = await UserModel.findById(decoded._id); // Await is necessary here
        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        req.user = user; // Assuming you have extended the `Request` type to include `user`
        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
