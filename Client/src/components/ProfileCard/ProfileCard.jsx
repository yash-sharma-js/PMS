import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct package name
import {
  faUser,
  faPhone,
  faEnvelope,
  faFile,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  return (
    <div className="max-w-xs mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-28 h-28 rounded-full border-4 border-pink-500 mb-4">
          <img
            src="https://via.placeholder.com/150" // Replace with the actual image
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Name and Location */}
        <h2 className="text-xl font-bold mb-1">Yash Ghori</h2>
        <p className="text-gray-500">Ahmedabad, Gujarat</p>
        <p className="text-gray-500">India</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Information Section */}
      <div className="flex flex-col space-y-3 text-sm">
        {/* Job Role */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
          <p className="font-medium">UI - Intern</p>
        </div>

        {/* Status */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBan} className="text-gray-600 mr-2" />
          <p className="font-medium">On-leave</p>
        </div>

        {/* Phone Number */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
          <p className="font-medium">+91 7048144030</p>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
          <p className="font-medium">yghori@asite.com</p>
        </div>

        {/* PDT Information */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faFile} className="text-gray-600 mr-2" />
          <p className="font-medium">PDT - I</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
