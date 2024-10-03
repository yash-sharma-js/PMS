import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupimg from "../../../Images/Login/Login.png";
import Input from "../../../components/input/Input";
import SubmitButton from "../../../components/button/SubmitButton";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

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
    localStorage.setItem("userSignupData", JSON.stringify(formData));
    setSuccessMessage("Signup successful! Redirecting to login...");
    setFormData({
      name: "",
      email: "",
      password: "",
      termsAccepted: false,
    });
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
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
          <form onSubmit={handleSubmit}>
            <Input
              label="Name"
              type="text"
              name="name"
              value={formData.name}
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
