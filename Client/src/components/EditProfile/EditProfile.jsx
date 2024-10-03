import React, { useState } from "react";
import Flag from "react-world-flags"; // Import the flag library

// Full list of countries with their codes and ISO codes for flags
const countryData = [
  { country: "Afghanistan", code: "+93", iso: "AF" },
  { country: "Albania", code: "+355", iso: "AL" },
  { country: "Algeria", code: "+213", iso: "DZ" },
  { country: "Andorra", code: "+376", iso: "AD" },
  { country: "Angola", code: "+244", iso: "AO" },
  { country: "Argentina", code: "+54", iso: "AR" },
  { country: "Armenia", code: "+374", iso: "AM" },
  { country: "Australia", code: "+61", iso: "AU" },
  { country: "Austria", code: "+43", iso: "AT" },
  { country: "Azerbaijan", code: "+994", iso: "AZ" },
  { country: "Bahrain", code: "+973", iso: "BH" },
  { country: "Bangladesh", code: "+880", iso: "BD" },
  { country: "Belarus", code: "+375", iso: "BY" },
  { country: "Belgium", code: "+32", iso: "BE" },
  { country: "Benin", code: "+229", iso: "BJ" },
  { country: "Bhutan", code: "+975", iso: "BT" },
  { country: "Bolivia", code: "+591", iso: "BO" },
  { country: "Bosnia and Herzegovina", code: "+387", iso: "BA" },
  { country: "Botswana", code: "+267", iso: "BW" },
  { country: "Brazil", code: "+55", iso: "BR" },
  { country: "Bulgaria", code: "+359", iso: "BG" },
  { country: "Cambodia", code: "+855", iso: "KH" },
  { country: "Cameroon", code: "+237", iso: "CM" },
  { country: "Canada", code: "+1", iso: "CA" },
  { country: "Chile", code: "+56", iso: "CL" },
  { country: "China", code: "+86", iso: "CN" },
  { country: "Colombia", code: "+57", iso: "CO" },
  { country: "Congo", code: "+242", iso: "CG" },
  { country: "Croatia", code: "+385", iso: "HR" },
  { country: "Cuba", code: "+53", iso: "CU" },
  { country: "Cyprus", code: "+357", iso: "CY" },
  { country: "Czech Republic", code: "+420", iso: "CZ" },
  { country: "Denmark", code: "+45", iso: "DK" },
  { country: "Dominican Republic", code: "+1", iso: "DO" },
  { country: "Ecuador", code: "+593", iso: "EC" },
  { country: "Egypt", code: "+20", iso: "EG" },
  { country: "Estonia", code: "+372", iso: "EE" },
  { country: "Ethiopia", code: "+251", iso: "ET" },
  { country: "Finland", code: "+358", iso: "FI" },
  { country: "France", code: "+33", iso: "FR" },
  { country: "Georgia", code: "+995", iso: "GE" },
  { country: "Germany", code: "+49", iso: "DE" },
  { country: "Ghana", code: "+233", iso: "GH" },
  { country: "Greece", code: "+30", iso: "GR" },
  { country: "Greenland", code: "+299", iso: "GL" },
  { country: "Honduras", code: "+504", iso: "HN" },
  { country: "Hungary", code: "+36", iso: "HU" },
  { country: "Iceland", code: "+354", iso: "IS" },
  { country: "India", code: "+91", iso: "IN" },
  { country: "Indonesia", code: "+62", iso: "ID" },
  { country: "Iran", code: "+98", iso: "IR" },
  { country: "Iraq", code: "+964", iso: "IQ" },
  { country: "Ireland", code: "+353", iso: "IE" },
  { country: "Israel", code: "+972", iso: "IL" },
  { country: "Italy", code: "+39", iso: "IT" },
  { country: "Japan", code: "+81", iso: "JP" },
  { country: "Jordan", code: "+962", iso: "JO" },
  { country: "Kenya", code: "+254", iso: "KE" },
  { country: "Kuwait", code: "+965", iso: "KW" },
  { country: "Latvia", code: "+371", iso: "LV" },
  { country: "Lebanon", code: "+961", iso: "LB" },
  { country: "Liberia", code: "+231", iso: "LR" },
  { country: "Lithuania", code: "+370", iso: "LT" },
  { country: "Luxembourg", code: "+352", iso: "LU" },
  { country: "Malaysia", code: "+60", iso: "MY" },
  { country: "Maldives", code: "+960", iso: "MV" },
  { country: "Mexico", code: "+52", iso: "MX" },
  { country: "Monaco", code: "+377", iso: "MC" },
  { country: "Morocco", code: "+212", iso: "MA" },
  { country: "Myanmar", code: "+95", iso: "MM" },
  { country: "Nepal", code: "+977", iso: "NP" },
  { country: "Netherlands", code: "+31", iso: "NL" },
  { country: "New Zealand", code: "+64", iso: "NZ" },
  { country: "Nigeria", code: "+234", iso: "NG" },
  { country: "Norway", code: "+47", iso: "NO" },
  { country: "Oman", code: "+968", iso: "OM" },
  { country: "Pakistan", code: "+92", iso: "PK" },
  { country: "Panama", code: "+507", iso: "PA" },
  { country: "Paraguay", code: "+595", iso: "PY" },
  { country: "Peru", code: "+51", iso: "PE" },
  { country: "Philippines", code: "+63", iso: "PH" },
  { country: "Poland", code: "+48", iso: "PL" },
  { country: "Portugal", code: "+351", iso: "PT" },
  { country: "Qatar", code: "+974", iso: "QA" },
  { country: "Romania", code: "+40", iso: "RO" },
  { country: "Russia", code: "+7", iso: "RU" },
  { country: "Saudi Arabia", code: "+966", iso: "SA" },
  { country: "Serbia", code: "+381", iso: "RS" },
  { country: "Singapore", code: "+65", iso: "SG" },
  { country: "Slovakia", code: "+421", iso: "SK" },
  { country: "Slovenia", code: "+386", iso: "SI" },
  { country: "South Africa", code: "+27", iso: "ZA" },
  { country: "South Korea", code: "+82", iso: "KR" },
  { country: "Spain", code: "+34", iso: "ES" },
  { country: "Sri Lanka", code: "+94", iso: "LK" },
  { country: "Sudan", code: "+249", iso: "SD" },
  { country: "Sweden", code: "+46", iso: "SE" },
  { country: "Switzerland", code: "+41", iso: "CH" },
  { country: "Taiwan", code: "+886", iso: "TW" },
  { country: "Tanzania", code: "+255", iso: "TZ" },
  { country: "Thailand", code: "+66", iso: "TH" },
  { country: "Turkey", code: "+90", iso: "TR" },
  { country: "Uganda", code: "+256", iso: "UG" },
  { country: "Ukraine", code: "+380", iso: "UA" },
  { country: "United Arab Emirates", code: "+971", iso: "AE" },
  { country: "United Kingdom", code: "+44", iso: "GB" },
  { country: "United States", code: "+1", iso: "US" },
  { country: "Vietnam", code: "+84", iso: "VN" },
  { country: "Yemen", code: "+967", iso: "YE" },
  { country: "Zambia", code: "+260", iso: "ZM" },
  { country: "Zimbabwe", code: "+263", iso: "ZW" },
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
