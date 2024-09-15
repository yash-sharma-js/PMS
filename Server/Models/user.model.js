/*
id
username
bio
email
contact
pic
location
project-id
friends-id
activeYN
timestamp
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,  // Can also be ObjectId if preferred
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: false,  // Bio is optional
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensures no duplicate emails
    trim: true
  },
  contact: {
    type: String,
    required: true,
    trim: true
  },
  pic: {
    type: String,  // URL or path for the profile picture
    required: false,  // Picture is optional
    default: ''  // Default value for cases when no picture is provided
  },
  location: {
    type: String,
    required: false,
    default: ''  // Optional field for location
  },
  projectId: {
    type: String,  // ID referring to a related project, can be ObjectId if relational
    required: false
  },
  friendsId: [{
    type: String,  // Array of friends' IDs, can be ObjectId if linked to user model
    required: false
  }],
  activeYN: {
    type: Boolean,
    required: true,
    default: true  // Indicates if the user is active
  },
  timestamp: {
    type: Date,
    default: Date.now  // Automatically sets the current timestamp
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
