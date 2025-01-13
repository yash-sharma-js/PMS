import mongoose from "mongoose";
declare const TaskModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    ProjectId: mongoose.Types.ObjectId;
    description?: string;
    activeYN?: boolean;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    ProjectId: mongoose.Types.ObjectId;
    description?: string;
    activeYN?: boolean;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    ProjectId: mongoose.Types.ObjectId;
    description?: string;
    activeYN?: boolean;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    ProjectId: mongoose.Types.ObjectId;
    description?: string;
    activeYN?: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    ProjectId: mongoose.Types.ObjectId;
    description?: string;
    activeYN?: boolean;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    ProjectId: mongoose.Types.ObjectId;
    description?: string;
    activeYN?: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default TaskModel;
