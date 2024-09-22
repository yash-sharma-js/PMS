import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signinimg from "./SigninImg/login.png";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-10 px-4 bg-gray-200">
      <div
        className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12 flex flex-col md:flex-row justify-around items-center p-8 bg-white rounded-2xl shadow-lg"
        style={{ height: "600px" }}
      >
        {" "}
        {/* Set height */}
        <div className="w-full md:w-2/4 p-6 flex flex-col justify-center">
          <h2 className="text-2xl mb-2 font-semibold">Welcome Back</h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your details to login
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-teal-700 text-white rounded-lg hover:bg-teal-500 transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-6">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-3/5 text-center">
          <img
            src={Signinimg}
            alt="Login Illustration"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
