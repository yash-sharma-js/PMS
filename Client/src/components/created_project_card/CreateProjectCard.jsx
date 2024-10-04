import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

function CreateProjectCard({
  projectId,
  description,
  issues,
  teamMembers = [],
  onDelete,
}) {
  const [projectData, setProjectData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the project data from local storage
    const storedProjects =
      JSON.parse(localStorage.getItem("projectsData")) || [];
    const foundProject = storedProjects.find(
      (project) => project.id === projectId
    );
    setProjectData(foundProject); // Set project data to state
  }, [projectId]);

  const handleEditTitle = () => {
    navigate("/create-project");
  };

  const handleDeleteProject = () => {
    onDelete(projectId); // Call delete handler with project ID to delete the specific project
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-[400px] mx-auto mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          {projectData?.title || "No Title Available"}
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleEditTitle}
            className="text-blue-500 text-sm hover:underline"
          >
            <FaEdit className="inline-block" />
          </button>
          <button
            onClick={handleDeleteProject} // Call to delete specific project
            className="text-red-500 text-sm hover:underline"
          >
            <FaTrash className="inline-block" />
          </button>
        </div>
      </div>

      <hr className="my-2 border-t border-gray-300" />

      <p className="text-sm text-gray-600 mt-2">
        {description || "No description provided"}
      </p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          📅 {projectData?.startDate || "No start date"} -{" "}
          {projectData?.endDate || "No end date"}
        </p>
        <p className="text-sm text-gray-500">{issues || 0} Issues</p>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        {teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <img
              key={index}
              className="w-8 h-8 rounded-full border-2 border-gray-300"
              src={member.avatar}
              alt={`Team member ${index + 1}`}
            />
          ))
        ) : (
          <div className="text-sm text-gray-500">No team members</div>
        )}
      </div>
    </div>
  );
}

// Add prop types for better type checking
CreateProjectCard.propTypes = {
  projectId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  issues: PropTypes.number.isRequired,
  teamMembers: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};

export default CreateProjectCard;
