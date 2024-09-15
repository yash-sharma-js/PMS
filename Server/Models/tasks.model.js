const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  id: {
    type: String,  // You can change this to ObjectId if you want auto-generated IDs
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  projectId: {
    type: String,  // Assuming project-id refers to a related project, otherwise use ObjectId for relational mapping
    required: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],  // Assuming priority levels, adjust as needed
    required: true
  },
  ownerId: {
    type: String,  // Refers to the owner, could also be ObjectId if related to users
    required: true
  },
  doc: {
    type: String,  // Assuming doc refers to some document URL or path
    required: false  // Not all tasks may have a doc
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],  // Assuming different statuses
    required: true
  },
  activeYN: {
    type: Boolean,
    required: true,
    default: true
  },
  timestamp: {
    type: Date,
    default: Date.now  // Automatically sets the current date/time
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
