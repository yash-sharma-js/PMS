const ProjectModel = require('../Models/project.model');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { userId, title, description, type, tasks } = req.body;
    const newProject = new ProjectModel({
      userId,
      title,
      description,
      type,
      tasks  // Optional: This stores task IDs if provided
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create project', message: err.message });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find().populate('tasks');  // Populate tasks if needed
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects', message: err.message });
  }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id).populate('tasks');
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch project', message: err.message });
  }
};

// Update project by ID
exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('tasks');
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update project', message: err.message });
  }
};

// Delete project by ID
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete project', message: err.message });
  }
};
