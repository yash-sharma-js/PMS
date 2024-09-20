const jwt = require('jsonwebtoken')
require('dotenv').config();
const User = require('../Models/user.model')
const bcrypt = require('bcrypt')

// ek kam krte ek bar user ko signup krne dete baad me jo jo essentials hai vo vo lelenge 
// auth me nahi dalte inshort
// baad mein profile section mein option de dete hai

exports.signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existing = await User.findOne({ email: email });
        if (existing) {
            res.status(400).json({
                message: "User already exists"
            });
            return;
        } else {
            const encrypted = await bcrypt.hash(password,10)
            const user = await User.create({
                username,
                email,
                password: encrypted
            });
            console.log(user);
            res.status(201).json({
                message: "User created successfully"
            });
            return;
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "User creation failed"
        });
        return;
    }
};


exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(404).json({
                message: "User not found"
            });
            return;
        } else {
            if(await bcrypt.compare(password, user.password))
            {const token = jwt.sign({
                id: user._id.toString()
            }, process.env.JWT_SECRET);
            console.log("User signed in successfully with token: " + token);
            req.token = token;
            res.json({
                token
            });}
            else{
                res.json({
                    message: "Invalid credentials"
                })
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};
