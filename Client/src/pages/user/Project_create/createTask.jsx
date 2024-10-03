import React, { useState } from "react";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignee, setAssignee] = useState("Yash Ghori");

  const assignees = ["Yash Ghori", "Atharv", "John Doe", "Jane Smith"];

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
            Tasks / Create Task
          </h2>
          <div className="bg-white shadow-md p-8 rounded-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Task Title
                  </label>
                  <input
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter task title"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Task Type
                  </label>
                  <input
                    type="text"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter task type"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Task Start Date
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
                    Task End Date
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
                  Task Description
                </label>
                <textarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Describe the task"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Assign to
                </label>
                <select
                  value={assignee}
                  onChange={(e) => setAssignee(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                >
                  {assignees.map((person, index) => (
                    <option key={index} value={person}>
                      {person}
                    </option>
                  ))}
                </select>
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

export default CreateTask;
