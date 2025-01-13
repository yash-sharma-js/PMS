import { IUser } from "../Types/user.type";
export declare const createUser: ({ username, fullName, bio, role, email, contact, password, }: {
    username: string;
    fullName: {
        firstName: string;
        lastName?: string;
    };
    bio?: string;
    role?: string;
    email: string;
    contact?: number;
    password: string;
}) => Promise<{
    user: import("mongoose").Document<unknown, {}, IUser> & IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    error: any;
} | {
    user: any;
    error: any;
}>;
export declare const getUser: ({ email, password }: {
    email: string;
    password: string;
}) => Promise<{
    user: import("mongoose").Document<unknown, {}, IUser> & IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    error: any;
} | {
    user: any;
    error: any;
}>;
export declare const updateUser: ({ username, fullName, bio, role, email, contact, password, }: {
    username: string;
    fullName: {
        firstName: string;
        lastName?: string;
    };
    bio?: string;
    role?: string;
    email: string;
    contact?: number;
    password: string;
}) => Promise<{
    user: import("mongoose").Document<unknown, {}, IUser> & IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    error: any;
} | {
    user: any;
    error: any;
}>;
