const { User } = require('../Models/user.model')
const mongoose = require('mongoose');
// const userModel = require('../Models/user.model');
const jwt = require('jsonwebtoken')

exports.GetUserDetails = async (req, res) => {
    try {
        const userId = req.body.userId;
        if (!userId) {
            return res.status(402).json({
                message: 'please enter valid id'
            })
        }
        else {
            const user = await User.findById(userId).populate({
                path: userMode

            });
            if (user) {
                return res.status(200).json({
                    message: 'user found',
                    data: userId
                })
            }
        }
    } catch (error) {

    }
}

exports.addfriend = async (req, res) => {
    try {
        const friendId = req.body.friendId;
        const token = req.body.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No token provided',
            });
        }

        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Verify and decode the token
        } catch (error) {
            console.log(error)
            return res.status(401).json({
                success: false,
                message: 'Invalid token',
            });
        }
        const userId = token.id; // Ensure userId is retrieved from the request context (JWT or session)

        if (!friendId) {
            return res.status(400).json({ // Changed to 400 Bad Request
                success: false,
                message: 'Please enter a valid friendId'
            });
        }

        const user = await User.findById(friendId);
        if (!user) {
            return res.status(404).json({ // Changed to 404 Not Found
                success: false,
                message: "User not found"
            });
        }

        // Ensure userId is defined and not the same as friendId to prevent self-friend request
        // if (!userId || userId === friendId) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Invalid operation"
        //     });
        // }

        await User.findByIdAndUpdate(
            userId,
            {
                $addToSet: { friendsId: friendId } // Using $addToSet to avoid duplicates
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            data: friendId,
            message: "You are now friends"
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ // Handle server error
            success: false,
            message: "An error occurred while adding a friend",
            error: error.message // Optional: Send error message for debugging
        });
    }
};
