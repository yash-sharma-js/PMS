import React, { useState } from "react";
import TextInput from "../../../components/text_input/TextInput";
import DateInput from "../../../components/date_input/DateInput";
import ProjectDescription from "../../../components/project_dec/project_dec";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import * as jwtDecode from "jwt-decode";

const CreateProjectPage = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectType, setProjectType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectRoles, setProjectRoles] = useState(["Team Lead"]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false); // State for success message

  const allRoles = ["Team Lead", "Developer", "Designer", "QA", "Manager"];

  const handleRoleChange = (role) => {
    if (projectRoles.includes(role)) {
      setProjectRoles(projectRoles.filter((r) => r !== role));
    } else {
      setProjectRoles([...projectRoles, role]);
    }
  };

  const handleCreateProject = async () => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("token"); // Adjust this if your token is stored differently
    const decodedToken = jwt_decode(token);
    const userId = jwtDecode.default(token); // Access the user ID from the decoded token

    const newProject = {
      userId, // Include userId here
      title: projectTitle,
      type: projectType,
      startDate,
      endDate,
      description: projectDescription,
      roles: projectRoles,
    };

    try {
      const response = await fetch("http://localhost:4000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        const project = await response.json();
        console.log("Project created:", project);
        setSuccessMessage(true); // Show success message

        // Reset form fields
        setProjectTitle("");
        setProjectType("");
        setStartDate("");
        setEndDate("");
        setProjectDescription("");
        setProjectRoles(["Team Lead"]);
        setDropdownOpen(false);

        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      } else {
        console.error("Failed to create project.");
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <div className="ml-56 mr-1 px-20 pt-24">
        {/* Success Message Popup */}
        {successMessage && (
          <div className="absolute top-20 right-4 p-4 bg-black text-white rounded-md shadow-md">
            Project created successfully!
          </div>
        )}

        <div className="p-8 w-full max-w-7xl mx-auto bg-white shadow-md rounded-lg mb-10 min-h-[75vh]">
          <h1 className="text-2xl font-bold mb-4">Create Project</h1>
          <div className="grid grid-cols-4 gap-4">
            <TextInput
              label="Project Title"
              placeholder="Enter project title"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
            <TextInput
              label="Project Type"
              placeholder="Enter project type"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            />
            <DateInput
              label="Start Date"
              value={startDate}
              onChange={setStartDate}
            />
            <DateInput label="End Date" value={endDate} onChange={setEndDate} />
          </div>
          <div className="mt-4">
            <ProjectDescription
              value={projectDescription}
              onChange={setProjectDescription}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Roles
            </label>
            <div className="relative">
              <button
                className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm text-left"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {projectRoles.join(", ") || "Select roles"}
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto">
                  {allRoles.map((role, index) => (
                    <div
                      key={index}
                      className="flex items-center px-2 py-1 hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                        checked={projectRoles.includes(role)}
                        onChange={() => handleRoleChange(role)}
                      />
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        {role}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleCreateProject}
            >
              Create
            </button>
            <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
