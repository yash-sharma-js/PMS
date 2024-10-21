import React from "react";

function TaskItem({ task, onClick }) {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-gray-500 text-sm">
          #{task.id} Opened {task.startDate} by {task.assignee}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full">
            {task.status || "Pending"}
          </span>
        </div>
        <div className="text-green-500">00:30:00</div>
        <img
          src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-91373.jpg?size=626&ext=jpg"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <button className="text-gray-500">💬</button>
      </div>
    </div>
  );
}

export default TaskItem;
