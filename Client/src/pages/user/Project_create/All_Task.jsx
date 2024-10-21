import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import TaskItem from "../../../components/task_item/TaskItem";
import TaskDetailsPopup from "../../../components/task_popup/TaskDetailsPopup";
import { Link } from "react-router-dom";

function All_Task() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTaskClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <div className="ml-56 mr-1 px-20 pt-24 flex-1">
          <div className="p-8 w-full max-w-7xl mx-auto bg-white shadow-md rounded-lg mb-10 min-h-[75vh]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-semibold">Addodle</h1>
                <div className="flex items-center text-gray-500 space-x-2">
                  <p>Projects / Addodle</p>
                  <span>→</span>
                  <span>OnTrack</span>
                </div>
              </div>
              <Link to="/createtask">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Assign Task
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              <TaskItem onClick={handleTaskClick} />
            </div>

            <div className="flex justify-between items-center mt-6 text-gray-500">
              <p>1 task</p>
              <p>15 files</p>
            </div>

            {isPopupOpen && <TaskDetailsPopup onClose={closePopup} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_Task;
