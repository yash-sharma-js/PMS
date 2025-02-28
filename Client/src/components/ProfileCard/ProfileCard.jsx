import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "India", // Default location
    profileImage: "https://via.placeholder.com/150", // Default profile image
  });

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await fetch("http://localhost:8080/api/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log("User data:", userData); // Debug: Log the fetched data

          // Update the state with the fetched user data
          setUser({
            fullName: `${userData.fullName?.firstName || "User"} ${
              userData.fullName?.lastName || ""
            }`.trim(),
            email: userData.email || "Not Available",
            phone: userData.contact || "Not Available",
            location: "India", // Default location (you can update this if your backend provides it)
            profileImage:
              userData.profileImage || "https://via.placeholder.com/150",
          });
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="max-w-xs mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-28 h-28 rounded-full border-4 border-blue-500 mb-4">
          <img
            src={user.profileImage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Name and Location */}
        <h2 className="text-xl font-bold mb-1">{user.fullName}</h2>
        <p className="text-gray-500">{user.location}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Information Section */}
      <div className="flex flex-col space-y-3 text-sm">
        {/* Phone Number */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
          <p className="font-medium">{user.phone}</p>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
          <p className="font-medium">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
