import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import TaskInfo from "../../../components/task_info/TaskInfo";
import { useNavigate } from "react-router-dom";

const ProjectInfo = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(
    Array(5).fill({
      title: "Make an Automatic Payment System that enables the design",
      issueId: "#22525",
      user: "Yash Goel",
      openedDaysAgo: 10,
      statusCancelled: true,
      statusCompleted: true,
      timeSpent: "00:30:00",
      userAvatar: "https://via.placeholder.com/40",
    })
  );

  return (
    <div className="relative min-h-screen bg-[#F5F8FC]">
      <Header />
      <Sidebar />
      <div className="ml-64 p-8 mt-16">
        {" "}
        {/* Added margin-top to push content down */}
        {/* Breadcrumbs & Header */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Projects / Adoddle</p>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              Adoddle
              <div className="flex -space-x-1 ml-3">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://via.placeholder.com/30"
                    className="w-6 h-6 rounded-full border border-white"
                    alt="user"
                  />
                ))}
              </div>
              <span className="ml-3 px-3 py-1 text-green-700 bg-green-200 rounded-full text-sm">
                OnTrack
              </span>
            </h1>
          </div>

          {/* Assign Task Button */}
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={()=>{
            navigate('/meeting')
          }}>
            Create Meet
          </button>
        </div>
        {/* Time Spent & Deadline */}
        <div className="flex space-x-6 mt-4">
          <div className="text-gray-600 text-sm">
            <span className="font-semibold">Time spent:</span>{" "}
            <span className="bg-gray-200 px-2 py-1 rounded">2M : 0W : 0D</span>
          </div>
          <div className="text-gray-600 text-sm">
            <span className="font-semibold">Deadline:</span>{" "}
            <span className="bg-gray-200 px-2 py-1 rounded">6M : 0W : 0D</span>
          </div>
        </div>
        {/* Task Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
          {tasks.length > 0 ? (
            <div className="space-y-4">
              {tasks.map((task, index) => (
                <TaskInfo key={index} {...task} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
