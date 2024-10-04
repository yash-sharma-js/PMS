const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,  // Auto-generated ID
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true  // Trims extra spaces before and after the title
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
    default: Date.now  // Automatically sets the current date/time
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,  // Stores the ID of related tasks
    ref: 'TaskModel'  // Assumes you have a Task model to reference
  }]
});

const ProjectModel = mongoose.model('ProjectModel', projectSchema);

module.exports = ProjectModel;
