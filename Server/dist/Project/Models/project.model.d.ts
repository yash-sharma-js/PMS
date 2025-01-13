import mongoose from "mongoose";
declare const ProjectModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    description?: string;
    activeYN?: boolean;
    projectPic?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    description?: string;
    activeYN?: boolean;
    projectPic?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    description?: string;
    activeYN?: boolean;
    projectPic?: string;
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
    description?: string;
    activeYN?: boolean;
    projectPic?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    description?: string;
    activeYN?: boolean;
    projectPic?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    owner: mongoose.Types.ObjectId;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    description?: string;
    activeYN?: boolean;
    projectPic?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default ProjectModel;
