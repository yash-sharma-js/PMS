// src/Dashboard.jsx
import React from "react";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import TotalWorkDone from "../../../components/TotalWorkDone/TotalWorkDone";
import ProfileCard from "../../../components/ProfileCard/ProfileCard"; // Import the ProfileCard component

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 pt-16 px-6">
          {/* Adjust margin-left based on sidebar width */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Row: ProfileCard and TotalWorkDone */}
            <div className="lg:col-span-1 bg-white shadow-md rounded-lg p-6">
              <ProfileCard />
            </div>
            <div className="lg:col-span-1 bg-white shadow-md rounded-lg p-6">
              <TotalWorkDone />
            </div>

            {/* Second Row: ProjectCard */}
            <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
              <ProjectCard />
            </div>

            {/* Placeholder for UI Developer Content - Adjusted Position */}
            <div className="lg:col-span-3 bg-white shadow-md rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-gray-400 text-center">
                UI Developer Content Will Go Here
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
