import React, { useState } from "react";
import Flag from "react-world-flags"; // Import the flag library

// Full list of countries with their codes and ISO codes for flags
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

  // Sync country and phone code selection
  const handleCountryChange = (e) => {
    const selected = countryData.find(
      (data) => data.country === e.target.value
    );
    setSelectedCountry(selected.country);
    setSelectedCode(selected.code);
  };

  const handleCodeChange = (e) => {
    const selected = countryData.find((data) => data.code === e.target.value);
    setSelectedCode(selected.code);
    setSelectedCountry(selected.country);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            placeholder="Yash"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Ghori"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="yghori@asite.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number with Country Code */}
        <div className="md:col-span-2 flex space-x-2">
          {/* Country Code Selector with Flag */}
          <div className="flex items-center space-x-2">
            <Flag
              code={countryData.find((data) => data.code === selectedCode)?.iso}
              className="w-6 h-6"
            />
            <select
              value={selectedCode}
              onChange={handleCodeChange}
              className="border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {countryData.map((data) => (
                <option key={data.code} value={data.code}>
                  {data.code}
                </option>
              ))}
            </select>
          </div>

          {/* Phone Number Input */}
          <input
            type="text"
            placeholder="8023456789"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-gray-700 mb-2">Nationality</label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {countryData.map((data) => (
              <option key={data.country} value={data.country}>
                {data.country}
              </option>
            ))}
          </select>
        </div>

        {/* Designation */}
        <div>
          <label className="block text-gray-700 mb-2">Designation</label>
          <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>UI Intern</option>
            <option>Developer</option>
            <option>Manager</option>
            {/* Add more designations as needed */}
          </select>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
