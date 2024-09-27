const ProjectModel = require('../Routes/project.route');

// Create a new project (ensures unique title per user)
exports.createProject = async (req, res) => {
  try {
    const { userId, title } = req.body;

    // Check if a project with the same title and userId already exists
    const existingProject = await ProjectModel.findOne({ userId, title });
    if (existingProject) {
      return res.status(400).json({ message: 'Project with the same name already exists for this user' });
    }

    // If no duplicate, create a new project
    const newProject = new ProjectModel(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: 'Error creating project', error });
  }
};

// Get all projects by userId
exports.getAllProjects = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'userId is required to fetch projects' });
    }

    // Find projects by userId
    const projects = await ProjectModel.find({ userId });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

// Get a specific project by userId and title (project name)
exports.getProjectByUserIdAndTitle = async (req, res) => {
  try {
    const { userId, title } = req.params;

    if (!userId || !title) {
      return res.status(400).json({ message: 'userId and project title are required' });
    }

    // Find a project by userId and title
    const project = await ProjectModel.findOne({ userId, title });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error });
  }
};
