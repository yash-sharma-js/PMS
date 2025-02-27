import { json } from "stream/consumers";

export const logRequest = (req, res,next) => {
    console.log(req.method + " " + req.originalUrl);
    next()
};
