import React, { useState } from "react";
import TextInput from "../../../components/text_input/TextInput";
import DateInput from "../../../components/date_input/DateInput";
import ProjectDescription from "../../../components/project_dec/project_dec"; // Assuming this is for task description
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignee, setAssignee] = useState("Yash Ghori");

  const assignees = ["Yash Ghori", "Atharv", "John Doe", "Jane Smith"];

  // const handleSubmit = (e) => {

    
  //   e.preventDefault();

  //   const taskData = {
  //     id: Date.now(), // Generate a unique ID using timestamp
  //     title: taskTitle,
  //     type: taskType,
  //     startDate,
  //     endDate,
  //     description: taskDescription,
  //     assignee,
  //   };

  //   // Get existing tasks from localStorage or set an empty array if none exist
  //   const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  //   // Add the new task to the array
  //   const updatedTasks = [...existingTasks, taskData];

  //   // Save the updated tasks array back to localStorage
  //   localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  //   console.log("Task created:", taskData);
  //   alert("Task created successfully and saved in local storage!");

  //   // Optional: Clear form fields after submission
  //   setTaskTitle("");
  //   setTaskType("");
  //   setStartDate("");
  //   setEndDate("");
  //   setTaskDescription("");
  //   setAssignee("Yash Ghori");
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const taskData = {
      title: taskTitle,
      type: taskType,
      startDate,
      endDate,
      description: taskDescription,
      assignee,
    };
  
    try {
      const response = await fetch("http://localhost:8080/api/task/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });
      console.log("response for task", response)
  
      if (!response.ok) {
        throw new Error("Failed to create task");
      }
  
      const data = await response.json();
      console.log("Task created:", data);
      alert("Task created successfully!");
  
      // Optional: Clear form fields after submission
      setTaskTitle("");
      setTaskType("");
      setStartDate("");
      setEndDate("");
      setTaskDescription("");
      setAssignee("Yash Ghori");
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task. Please try again.");
    }
  };
  

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header /> {/* Header at the top */}
      <Sidebar /> {/* Sidebar on the left */}
      <div className="ml-56 mr-1 px-20 pt-24">
        {/* Left and right margins with padding */}
        <div className="p-8 w-full max-w-7xl mx-auto bg-white shadow-md rounded-lg mb-10 min-h-[75vh]">
          {/* Increased padding and added a minimum height */}
          <h1 className="text-2xl font-bold mb-4">Create Task</h1>
          {/* Form Fields in a Single Line */}
          <div className="grid grid-cols-4 gap-4">
            <TextInput
              label="Task Title"
              placeholder="Enter task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <TextInput
              label="Task Type"
              placeholder="Enter task type"
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
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
              value={taskDescription}
              onChange={setTaskDescription}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Assign to
            </label>
            <select
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500"
            >
              {assignees.map((person, index) => (
                <option key={index} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>
          {/* Create and Delete Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleSubmit}
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

export default CreateTask;
