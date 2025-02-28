import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../../components/input/Input";

function Signin() {
  const Signinimg = "/Images/Login/login.png";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);

    try {
      console.log("start");
      console.log(formData)
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // console.log("response",response.json());


      const data = await response.json();
      const userId = data.user._id;
      console.log("Login successful:", data);
      console.log("token", data.token);
      console.log("userId", userId);

      // Store the token in local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", userId);
      console.log("token added");
      // Redirect after successful login
      navigate("/project");

    } catch (error) {
      console.error("Error during sign-in:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div
        className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12 flex flex-col md:flex-row justify-around items-center p-8 bg-white rounded-2xl shadow-lg"
        style={{ maxHeight: "80vh" }}
      >
        <div className="w-full md:w-2/4 p-6 flex flex-col justify-center">
          <h2 className="text-2xl mb-2 font-semibold">Welcome Back</h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your details to login
          </p>
          {errorMessage && (
            <div className="mb-4 text-red-600">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
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
