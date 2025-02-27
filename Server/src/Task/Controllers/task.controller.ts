import taskModel from "../Models/task.model"
import { Request ,Response } from "express"
const { validationResult } = require('express-validator');
import { create, update, remove} from '../Services/task.service'
import { addProjectToUser } from "../../User/Services/user.service";


export const handleCreateTask = async (req:Request, res:Response) => {
    // const { title, description, type, projectId, members } = req.body;

    // const { task, error } = await create({
    //     title,
    //     description,
    //     type,
    //     projectId,
    //     members,
    // });

    // if (error) {
    //     return res.status(400).json({ error });
    // }

    // // Call user service to update the user
    // const { user, error: userError } = await addProjectToUser({projectId, task:task._id});

    // if (userError) {
    //     return res.status(400).json({ error: userError });
    // }

    // return res.status(201).json({ task });
};


export const handleUpdateTask = async (req: Request, res: Response) => {
    // const { title, description, type } = req.body;
    // const { taskId } = req.params;

    // try {
    //     if (!req.user || !req.user.projectId) {
    //         return res.status(401).json({ message: "Unauthorized: User not found." });
    //     }   
    //     const taskExists = req.user.projectId.includes(taskId);
    //     if (!taskExists) {
    //         return res.status(404).json({ message: "No Task Found!" });
    //     }
    //     const { task, error } = await update({
    //         title,
    //         description,
    //         type,
    //         projectId,
    //     });

    //     if (error) {
    //         return res.status(400).json({ message: error });
    //     }

    //     return res.status(200).json({ message: "Task updated successfully", task });
    // } catch (error: any) {
    //     console.error(error);
    //     return res.status(500).json({ message: "Server error", error: error.message || error });
    // }
};

export const handleRemoveTask = async ()=>{

}//pending...

