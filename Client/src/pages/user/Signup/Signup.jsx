import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const signupimg = "/Images/Login/login.png";
import Input from "../../../components/input/Input";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    try {
      const response = await fetch("http://localhost:4000/signup", {
        // Update the API endpoint here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username, // Update to match your backend
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Signup failed. Please try again."
        );
      }

      const data = await response.json();
      setSuccessMessage("Signup successful! Redirecting to login...");
      setFormData({
        username: "",
        email: "",
        password: "",
        termsAccepted: false,
      });
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div
        className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12 flex flex-col md:flex-row justify-around items-center p-8 bg-white rounded-2xl shadow-lg"
        style={{ maxHeight: "80vh" }}
      >
        <div className="w-full md:w-2/4 p-6 flex flex-col justify-center">
          <h2 className="text-2xl mb-2 font-semibold">Get Started Now</h2>
          {successMessage && (
            <div className="mb-4 text-green-600">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="mb-4 text-red-600">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <Input
              label="Name"
              type="text"
              name="username" // Update to match the backend
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
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
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the terms & policy
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Signup
            </button>
          </form>
          <div className="text-center mt-6">
            <p>
              Have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-3/5 text-center">
          <img
            src={signupimg}
            alt="Secure Login"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
