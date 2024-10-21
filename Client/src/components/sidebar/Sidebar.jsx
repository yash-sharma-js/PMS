import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from local storage
    navigate("/"); // Redirect to the home path
  };

  return (
    <aside className="w-64 bg-white py-8 px-4 fixed top-16 bottom-0 border-r border-gray-200 flex flex-col">
      <ul className="space-y-4 flex-grow">
        <Link to="/project">
          <li
            className={`cursor-pointer flex items-center space-x-2 ${
              location.pathname === "/project" ? "bg-blue-50" : ""
            } px-4 py-2 rounded-md`}
          >
            <span className="text-blue-600">📁</span>
            <span className="text-sm font-medium text-gray-700">Project</span>
          </li>
          <hr className="border-gray-200" />
        </Link>

        <Link to="/tasks">
          <li
            className={`cursor-pointer flex items-center space-x-2 ${
              location.pathname === "/tasks" ? "bg-blue-50" : "hover:bg-blue-50"
            } px-4 py-2 rounded-md`}
          >
            <span className="text-blue-600">📝</span>
            <span className="text-sm font-medium text-gray-700">Tasks</span>
          </li>
          <hr className="border-gray-200" />
        </Link>

        <Link to="/performance">
          <li
            className={`cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md`}
          >
            <span className="text-blue-600">📊</span>
            <span className="text-sm font-medium text-gray-700">Work Logs</span>
          </li>
          <hr className="border-gray-200" />
          <li
            className={`cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md`}
          >
            <span className="text-blue-600">⚙️</span>
            <span className="text-sm font-medium text-gray-700">
              Performance
            </span>
          </li>
          <hr className="border-gray-200" />
        </Link>
      </ul>

      {/* Logout Section */}
      <div className="mt-4">
        <hr />
        <button
          onClick={handleLogout}
          className="w-full text-left cursor-pointer flex items-center space-x-2 hover:bg-red-50 px-4 py-2 rounded-md"
        >
          <span className="text-red-600">🔒</span>
          <span className="text-sm font-medium text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
