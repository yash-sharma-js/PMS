import React from "react";

function TaskItem() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="font-semibold">
          Make an Automatic Payment System that enables the design
        </h3>
        <p className="text-gray-500 text-sm">
          #4622235 Opened 10 days ago by Yash Gheri
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full">
            Cancelled
          </span>
          <span className="bg-green-100 text-green-500 px-2 py-1 rounded-full">
            Completed
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
