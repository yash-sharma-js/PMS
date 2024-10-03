import React, { useState } from "react";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";

const CreateForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectType, setProjectType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [role, setRole] = useState("Team Lead");

  const roles = ["Yash", "Atharv", "Vineet", "Sahil", "Ahuja", "Yash"];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <Header />
      <div className="flex mt-16 h-full overflow-hidden">
        <Sidebar />
        <main className="ml-64 flex-1 p-8 pb-24 bg-gray-50 overflow-y-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Projects / Create Project
          </h2>
          <div className="bg-white shadow-md p-8 rounded-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
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

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Project Roles
                </label>
                <ul className="space-y-2">
                  {roles.map((name, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <input type="checkbox" id={`role${index}`} />
                      <label
                        htmlFor={`role${index}`}
                        className="flex-1 text-gray-600"
                      >
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
              <div className="flex justify-end mt-6 space-x-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Create
                </button>
                <button
                  type="button"
                  className="bg-red-500 px-6 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateForm;
