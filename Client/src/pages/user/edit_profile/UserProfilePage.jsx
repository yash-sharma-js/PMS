import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import TextInput from "../../../components/text_input/TextInput";
import Select from "react-select";
import ProjectThumbnail from "../../../components/project_thumbnail/Project_Thumbnail";
import CollaboratorCard from "../../../components/collab_card/CollaboraterCard";

const countries = [
  { value: "IN", label: "India", code: "+91", flag: "🇮🇳" },
  { value: "US", label: "United States", code: "+1", flag: "🇺🇸" },
  { value: "GB", label: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { value: "CA", label: "Canada", code: "+1", flag: "🇨🇦" },
  { value: "AU", label: "Australia", code: "+61", flag: "🇦🇺" },
];

function UserProfilePage() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [designation, setDesignation] = React.useState("UI Intern");
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);

  const projects = [
    {
      id: 1,
      title: "Project One",
      imgSrc: "https://cdn-icons-png.flaticon.com/128/10857/10857083.png",
    },
    {
      id: 2,
      title: "Project Two",
      imgSrc: "https://cdn-icons-png.flaticon.com/128/3310/3310063.png",
    },
    {
      id: 3,
      title: "Project Three",
      imgSrc: "https://cdn-icons-png.flaticon.com/128/10857/10857083.png",
    },
  ];

  const colleagues = [
    {
      id: 1,
      name: "Colleague One",
      imgSrc: "https://cdn-icons-png.flaticon.com/128/3310/3310063.png",
    },
    {
      id: 2,
      name: "Colleague Two",
      imgSrc: "https://cdn-icons-png.flaticon.com/128/10857/10857083.png",
    },
    {
      id: 3,
      name: "Colleague Three",
      imgSrc: "https://cdn-icons-png.flaticon.com/128/3310/3310063.png",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="ml-56 mr-1 px-20 pt-24 bg-gray-100 min-h-screen">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            {/* Left Section */}
            <div
              className="w-full md:w-1/4 bg-white p-4 rounded-md shadow-md border mb-6 md:mb-0"
              style={{
                height: "fit-content",
                maxHeight: "400px",
                overflow: "hidden",
              }}
            >
              <div className="text-center">
                <img
                  src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-91373.jpg?size=626&ext=jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto border-4 border-pink-500"
                />
                <h2 className="mt-4 text-lg font-semibold">Yash Ghori</h2>
                <p className="text-sm text-gray-600">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
              <div className="mt-6 space-y-2 text-center">
                <p className="text-sm font-medium text-gray-700">UI - Intern</p>
                <p className="text-sm text-gray-600">on-teak</p>
                <p className="text-sm text-gray-600">PDT - I</p>
                <p className="text-sm text-gray-600">📞 +91 7048144030</p>
                <p className="text-sm text-gray-600">✉️ yghori@asite.com</p>
              </div>
            </div>

            {/* Middle Section */}
            <div
              className="w-full md:w-2/4 bg-white p-6 rounded-lg shadow-md border mx-2"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="h-10"
                  />
                  <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="h-10"
                  />
                  <div className="flex items-end">
                    <Select
                      className="w-2/4 mr-2 h-10"
                      options={countries}
                      getOptionLabel={(option) =>
                        `${option.flag} ${option.code}`
                      }
                      getOptionValue={(option) => option.value}
                      value={selectedCountry}
                      onChange={(country) => setSelectedCountry(country)}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          minHeight: "40px",
                        }),
                        valueContainer: (provided) => ({
                          ...provided,
                          padding: "0 6px",
                        }),
                        indicatorsContainer: (provided) => ({
                          ...provided,
                          height: "40px",
                        }),
                      }}
                    />
                    <TextInput
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="h-10"
                    />
                  </div>
                  <TextInput
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10"
                  />
                  <TextInput
                    placeholder="Change Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10"
                  />
                  <select
                    className="w-full px-4 py-2 h-10 border rounded-md"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  >
                    <option>UI Intern</option>
                  </select>
                  <select
                    className="w-full px-4 py-2 h-10 border rounded-md"
                    onChange={(e) => setDesignation(e.target.value)}
                  >
                    <option>India</option>
                    <option>USA</option>
                    <option>Pakistan</option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-md w-20">
                    Save
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/4 space-y-4 flex flex-col justify-between">
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <h3 className="text-lg font-semibold mb-4">Projects</h3>
                <div className="flex flex-wrap justify-start">
                  {projects.map((project) => (
                    <div className="flex-shrink-0 w-1/3 p-2" key={project.id}>
                      <ProjectThumbnail
                        title={project.title}
                        imgSrc={project.imgSrc}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="bg-white p-4 rounded-lg shadow-md border mt-auto"
                style={{ minHeight: "50vh" }} // Set the minimum height to 50% of the screen height
              >
                <h4 className="text-lg font-semibold">UI Developer</h4>
                <p className="text-sm text-gray-600">
                  Lorem Ipsum is the best sentence in the world.
                </p>
                <h5 className="mt-4 font-semibold">Worked with</h5>
                <div className="flex flex-wrap justify-start mt-2">
                  {colleagues.map((colleague) => (
                    <div className="flex-shrink-0 w-1/3 p-2" key={colleague.id}>
                      <CollaboratorCard
                        name={colleague.name}
                        imgSrc={colleague.imgSrc}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserProfilePage;
