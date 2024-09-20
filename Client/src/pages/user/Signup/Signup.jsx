import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupimg from "./SignupImg/login.png";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-10 px-4 md:px-0 bg-gray-200">
      <div className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12 flex flex-col md:flex-row justify-around items-center p-8 md:p-12 bg-white rounded-2xl shadow-lg">
        <div className="w-full md:w-2/4 p-6">
          <h2 className="text-2xl mb-2 font-semibold">Get Started Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
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
              className="w-full p-3 bg-teal-700 text-white rounded-lg hover:bg-teal-500 transition duration-300"
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
