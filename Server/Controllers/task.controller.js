const TaskModel = require('../Models/tasks.model');
const ProjectModel = require('../Models/project.model');

// Create a new task for a specific project
exports.createTask = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { title, description, status } = req.body;

    const newTask = new TaskModel({
      projectId,
      title,
      description,
      status  // Optional, defaults to 'todo'
    });
    
    const savedTask = await newTask.save();

    // Push task ID to the corresponding project
    await ProjectModel.findByIdAndUpdate(projectId, { $push: { tasks: savedTask._id } });

    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task', message: err.message });
  }
};

// Get all tasks for a specific project
exports.getTasksByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await TaskModel.find({ projectId });

    if (!tasks.length) {
      return res.status(404).json({ message: 'No tasks found for this project' });
    }

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks', message: err.message });
  }
};

// Get a specific task by taskId and projectId
exports.getTaskById = async (req, res) => {
  try {
    const { projectId, taskId } = req.params;
    const task = await TaskModel.findOne({ _id: taskId, projectId });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task', message: err.message });
  }
};

// Update a task by taskId and projectId
exports.updateTask = async (req, res) => {
  try {
    const { projectId, taskId } = req.params;
    const updatedTask = await TaskModel.findOneAndUpdate(
      { _id: taskId, projectId },
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task', message: err.message });
  }
};

// Delete a task by taskId and projectId
exports.deleteTask = async (req, res) => {
  try {
    const { projectId, taskId } = req.params;
    const deletedTask = await TaskModel.findOneAndDelete({ _id: taskId, projectId });

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await ProjectModel.findByIdAndUpdate(projectId, { $pull: { tasks: taskId } });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task', message: err.message });
  }
};
