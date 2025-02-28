import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [user, setUser] = useState({ name: "Account", location: "India" }); // Default values
  const logo = "/Images/Landing_page_img/logo.jpg"; // Path to the image in the public folder

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from local storage
        const response = await fetch("http://localhost:4000/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser({ name: userData.name, location: userData.location }); // Update state with fetched data
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Run only once when the component mounts

  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3 fixed w-full z-10 top-0 shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-48 h-12"
            style={{ mixBlendMode: "multiply" }}
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search for anything..."
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
        />
        <Link to="/editprofile">
          <div className="flex items-center">
            <div className="text-right mr-2">
              <p className="text-sm font-semibold">{user.name}</p>
              <p className="text-xs text-gray-500">{user.location}</p>
            </div>
            <img
              className="w-11 h-11 rounded-full border-2 border-gray-300"
              src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-91373.jpg?size=626&ext=jpg"
              alt="User Avatar"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;