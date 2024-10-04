import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import CreateProjectCard from "../../../components/created_project_card/CreateProjectCard";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  // Fetch project data from localStorage on component mount
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projectsData"));
    if (storedProjects) {
      setProjects(storedProjects); // Update state with fetched projects
    }
  }, []);

  // Function to handle project deletion
  const handleDeleteProject = (projectId) => {
    // Filter out the specific project by its ID
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );

    // Update the state with the remaining projects
    setProjects(updatedProjects);

    // Update localStorage with the modified projects array
    localStorage.setItem("projectsData", JSON.stringify(updatedProjects));
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header /> {/* Header at the top */}
      <Sidebar /> {/* Sidebar on the left */}
      <div className="ml-56 mr-1 px-20 pt-24">
        {/* Left and right margins with padding */}
        <div className="p-8 w-full max-w-7xl mx-auto bg-white shadow-md rounded-lg mb-10 min-h-[75vh]">
          {/* Increased padding and added a minimum height */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Projects</h1>
            {/* Create Button aligned to the right */}
            <Link to="/createproject">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Create
              </button>
            </Link>
          </div>
          {/* Conditional rendering based on whether projects are available */}
          {projects.length === 0 ? (
            <p className="text-gray-500">No projects available</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <CreateProjectCard
                  key={project.id} // Unique key based on project ID
                  projectId={project.id} // Pass project ID to identify each card
                  description={project.description}
                  date={project.date}
                  issues={project.issues}
                  teamMembers={project.teamMembers}
                  onDelete={handleDeleteProject} // Pass delete handler
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
