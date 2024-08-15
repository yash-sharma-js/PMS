const mongoose = require('mongoose');
require('dotenv').config();

exports.DbConnection = ()=>{
    try {
        mongoose.connect("mongodb+srv://vineetchelani:vineetttt@vineet.3wknhd0.mongodb.net/SuperVision")
        .then(()=>{
            console.log("Connection established")
        })
        .catch(()=>{
            console.log("Connection failed")
        })
    } catch (error) {
        console.log(error)
    }
}