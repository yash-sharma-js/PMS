import React from "react";
import { FaRegCommentDots } from "react-icons/fa";

const TaskInfo = ({
  title,
  issueId,
  user,
  openedDaysAgo,
  statusCancelled,
  statusCompleted,
  timeSpent,
  userAvatar,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex justify-between items-center">
      {/* Left Section: Task Info */}
      <div>
        <h2 className="text-md font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">
          {issueId} • Opened {openedDaysAgo} days ago by {user}
        </p>
        <div className="mt-2">
          {statusCancelled && (
            <span className="px-2 py-1 text-red-700 bg-red-200 rounded-full text-xs mr-2">
              Cancelled
            </span>
          )}
          {statusCompleted && (
            <span className="px-2 py-1 text-green-700 bg-green-200 rounded-full text-xs">
              Completed
            </span>
          )}
        </div>
      </div>

      {/* Right Section: Time & Avatar */}
      <div className="flex items-center space-x-4">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
          {timeSpent}
        </span>
        <img
          src={userAvatar}
          className="w-8 h-8 rounded-full border border-gray-300"
          alt="user avatar"
        />
        <FaRegCommentDots className="text-gray-500 text-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskInfo;
