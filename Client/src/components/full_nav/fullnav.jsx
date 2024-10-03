import React from "react";
import CreateForm from "../../pages/user/Project_create/createProject";
import CreateTask from "../../pages/user/Project_create/createTask";

function Fullnav() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-8 py-4 fixed w-full z-10 top-0 shadow-sm">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="AProjectO Logo"
            className="w-10 h-10 mr-4"
          />
          <span className="font-bold text-xl text-gray-800">
            Super Vision...
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <input
            type="text"
            placeholder="Search for anything..."
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          />
          <div className="flex items-center">
            <div className="text-right mr-3">
              <p className="text-sm font-semibold">Account</p>
              <p className="text-xs text-gray-500">India</p>
            </div>
            <img
              className="w-12 h-12 rounded-full border-2 border-gray-300"
              src="/user-avatar.png"
              alt="User Avatar"
            />
          </div>
        </div>
      </nav>

      {/* Layout */}
      <div className="flex mt-16 h-full">
        {/* Sidebar */}
        <aside className="w-64 bg-white py-8 px-4 fixed top-16 bottom-0 border-r border-gray-200">
          <ul className="space-y-4">
            <li className="cursor-pointer flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-md">
              <span>📁</span>
              <span className="text-sm font-medium text-gray-700">Project</span>
            </li>
            <li className="cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md">
              <span>📝</span>
              <span className="text-sm font-medium text-gray-700">Tasks</span>
            </li>
            <li className="cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md">
              <span>📊</span>
              <span className="text-sm font-medium text-gray-700">
                Work Logs
              </span>
            </li>
            <li className="cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md">
              <span>⚙️</span>
              <span className="text-sm font-medium text-gray-700">
                Performance
              </span>
            </li>
            <li className="cursor-pointer flex items-center space-x-2 hover:bg-blue-50 px-4 py-2 rounded-md">
              <span>🔧</span>
              <span className="text-sm font-medium text-gray-700">
                Settings
              </span>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Projects / Create Project
          </h2>
          <div className="bg-white shadow-md p-8 rounded-lg">
            <CreateForm />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Fullnav;
