import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white py-8 px-4 fixed top-16 bottom-0 border-r border-gray-200">
      <ul className="space-y-4">
        <li
          className={`cursor-pointer flex items-center space-x-2 ${
            location.pathname === "/project" ? "bg-blue-50" : ""
          } px-4 py-2 rounded-md`}
        >
          <span>
            <Link to="/project"> 📁 </Link>
          </span>
          <span className="text-sm font-medium text-gray-700">
            <Link to="/project"> Project </Link>
          </span>
        </li>
        <li
          className={`cursor-pointer flex items-center space-x-2 ${
            location.pathname === "/createtask"
              ? "bg-blue-50"
              : "hover:bg-blue-50"
          } px-4 py-2 rounded-md`}
        >
          <span>
            <Link to="/createtask">📝</Link>
          </span>
          <span className="text-sm font-medium text-gray-700">
            <Link to="/createtask"> Tasks </Link>
          </span>
        </li>
        <li
          className={`cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md`}
        >
          <span>📊</span>
          <span className="text-sm font-medium text-gray-700">Work Logs</span>
        </li>
        <li
          className={`cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md`}
        >
          <span>⚙️</span>
          <span className="text-sm font-medium text-gray-700">Performance</span>
        </li>
        <li
          className={`cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md`}
        >
          <span>🔧</span>
          <span className="text-sm font-medium text-gray-700">Settings</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
