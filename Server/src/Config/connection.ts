import mongoose from "mongoose";

const ConnectDB = (URL:string)=>{
    return mongoose.connect(URL)
            .then(()=>{console.log("MongoDB Connected")})
            .catch(err => console.log("Cant Connect MongoDB"));
}

export default ConnectDB;