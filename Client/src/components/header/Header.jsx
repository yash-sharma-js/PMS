import React from "react";
import logo from "../../Images/Landing_page_img/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  // Fetch user data from local storage
  const userData = JSON.parse(localStorage.getItem("userSignupData"));
  const username = userData ? userData.name : "Account"; // Default to "Account" if no user is found

  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3 fixed w-full z-10 top-0 shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">
          {" "}
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
        <Link to = "/editprofile" ><div className="flex items-center">
          <div className="text-right mr-2">
            <p className="text-sm font-semibold">{username}</p>
            <p className="text-xs text-gray-500">India</p>
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
