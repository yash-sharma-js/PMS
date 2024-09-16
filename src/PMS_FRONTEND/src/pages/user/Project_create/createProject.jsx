import React, { useState } from "react";

const CreateForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectType, setProjectType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [role, setRole] = useState("Team Lead");

  const roles = ["Yash", "Atharv", "Vineet", "Sahil", "Ahuja", "Yash"]; // Replace with actual data

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Form Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Project Title
          </label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Project Type
          </label>
          <input
            type="text"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Project Description
        </label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 h-32"
        />
      </div>

      {/* Project Roles */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Project Roles
        </label>
        <ul className="space-y-2">
          {roles.map((name, index) => (
            <li key={index} className="flex items-center space-x-4">
              <input type="checkbox" id={`role${index}`} />
              <label htmlFor={`role${index}`} className="flex-1 text-gray-600">
                {name}
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded-md"
              >
                <option value="Team Lead">Team Lead</option>
              </select>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Create
        </button>
        <button
          type="button"
          className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400"
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
