import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignee, setAssignee] = useState("Yash Ghori");

  const assignees = ["Yash Ghori", "Atharv", "John Doe", "Jane Smith"]; // Replace with actual data

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

      {/* Description */}
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

      {/* Assign To */}
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

export default CreateTask;
