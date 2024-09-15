/**
 * id
 * title
 * description
 * Type
 * timestamp
 */

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: {
    type: String,   // You can use mongoose.Schema.Types.ObjectId if you want auto-generated IDs
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true   // Trims extra spaces before and after the title
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now   // Automatically sets the current date/time
  }
});

const CustomModel = mongoose.model('CustomModel', customSchema);

module.exports = CustomModel;
