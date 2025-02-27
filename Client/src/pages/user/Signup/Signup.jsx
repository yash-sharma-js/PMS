import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/input/Input";

function Signup() {
  const signupimg = "/Images/Login/login.png";
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
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
      const response = await fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          fullName: {
            firstName: formData.firstName,
            lastName: formData.lastName,
          },
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

      setSuccessMessage("Signup successful! Redirecting to login...");
      setFormData({
        username: "",
        firstName: "",
        lastName: "",
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
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4">
      <div
        className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12 flex flex-col md:flex-row justify-around items-center p-6 bg-white rounded-2xl shadow-lg"
        style={{ height: "auto", minHeight: "80vh" }} // Adjusted height
      >
        {/* Form Section */}
        <div className="w-full md:w-2/4 p-4 flex flex-col justify-center">
          <h2 className="text-2xl mb-4 font-semibold">Get Started Now</h2>
          <p className="text-sm text-gray-500 mb-6">
            Create your account to continue
          </p>
          {successMessage && (
            <div className="mb-4 text-green-600">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="mb-4 text-red-600">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
            <Input
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name (optional)"
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

            <div className="flex items-center mb-6">
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
              Register
            </button>
          </form>

          <div className="text-center mt-6">
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block w-full md:w-3/5 text-center">
          <img
            src={signupimg}
            alt="Secure Login"
            className="w-full h-auto max-w-md mx-auto"
            style={{ maxHeight: "70vh" }} // Optional: Limit image height
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
