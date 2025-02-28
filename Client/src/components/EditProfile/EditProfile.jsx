import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const countryData = [
  { country: "Afghanistan", code: "+93", iso: "AF" },
  { country: "Albania", code: "+355", iso: "AL" },
  { country: "Bahrain", code: "+973", iso: "BH" },
  { country: "Bangladesh", code: "+880", iso: "BD" },
  { country: "Belarus", code: "+375", iso: "BY" },
];

const EditProfile = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCode, setSelectedCode] = useState("+91");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "India",
    designation: "UI Intern",
  });

  const navigate = useNavigate();

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
          setFormData({
            firstName: userData.fullName?.firstName || "",
            lastName: userData.fullName?.lastName || "",
            email: userData.email || "",
            phone: userData.contact || "",
            nationality: userData.nationality || "India",
            designation: userData.designation || "UI Intern",
          });
          setSelectedCountry(userData.nationality || "India");
          setSelectedCode(
            countryData.find((c) => c.country === userData.nationality)?.code ||
              "+91"
          );
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Handle country change
  const handleCountryChange = (e) => {
    const selected = countryData.find(
      (data) => data.country === e.target.value
    );
    setSelectedCountry(selected.country);
    setSelectedCode(selected.code);
    setFormData({ ...formData, nationality: selected.country });
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (Update profile in backend)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const updatedData = {
        fullName: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
        email: formData.email,
        contact: formData.phone,
        nationality: formData.nationality,
        designation: formData.designation,
      };

      const response = await fetch("http://localhost:8080/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
        navigate("/profile"); // Redirect to profile page
      } else {
        const errorData = await response.json();
        console.error("Failed to update user:", errorData);
        alert("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Phone Number */}
          <div className="md:col-span-2 flex space-x-2">
            <select
              value={selectedCode}
              onChange={(e) => {
                const selected = countryData.find(
                  (data) => data.code === e.target.value
                );
                setSelectedCode(selected.code);
                setSelectedCountry(selected.country);
                setFormData({ ...formData, nationality: selected.country });
              }}
              className="border rounded-md px-2 py-2"
            >
              {countryData.map((data) => (
                <option key={data.code} value={data.code}>
                  {data.code}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-gray-700 mb-2">Nationality</label>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleCountryChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              {countryData.map((data) => (
                <option key={data.country} value={data.country}>
                  {data.country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
