import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import ProjectThumbnail from "../../../components/project_thumbnail/Project_Thumbnail";
import CollaboratorCard from "../../../components/collab_card/CollaboraterCard";

function Performance() {
  const projects = [
    {
      id: 1,
      title: "Emo Stuff",
      imgSrc: "https://example.com/emo.png",
    },
    {
      id: 2,
      title: "Tim Burton",
      imgSrc: "https://example.com/timburton.png",
    },
    {
      id: 3,
      title: "Halloween",
      imgSrc: "https://example.com/halloween.png",
    },
    {
      id: 4,
      title: "Spooky Art",
      imgSrc: "https://example.com/spooky.png",
    },
    {
      id: 5,
      title: "Dark Art",
      imgSrc: "https://example.com/darkart.png",
    },
    {
      id: 6,
      title: "Gothic Art",
      imgSrc: "https://example.com/gothic.png",
    },
    {
      id: 7,
      title: "Ghostly Visions",
      imgSrc: "https://example.com/ghostly.png",
    },
    {
      id: 8,
      title: "Eerie Echoes",
      imgSrc: "https://example.com/eerie.png",
    },
  ];

  const colleagues = [
    {
      id: 1,
      name: "John Doe",
      imgSrc: "https://example.com/developer1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      imgSrc: "https://example.com/developer2.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      imgSrc: "https://example.com/developer3.png",
    },
    {
      id: 4,
      name: "Bob Brown",
      imgSrc: "https://example.com/developer4.png",
    },
    {
      id: 5,
      name: "Charlie Davis",
      imgSrc: "https://example.com/developer5.png",
    },
    {
      id: 6,
      name: "Diana Prince",
      imgSrc: "https://example.com/developer6.png",
    },
  ];

  // Pagination state for UI Developers
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllDevelopers, setShowAllDevelopers] = useState(false); // State for showing all developers
  const [showAllProjects, setShowAllProjects] = useState(false); // State for showing all projects

  const developersPerPage = 4;

  // Logic for displaying developers based on the current page
  const indexOfLastDeveloper = currentPage * developersPerPage;
  const indexOfFirstDeveloper = indexOfLastDeveloper - developersPerPage;
  const currentDevelopers = showAllDevelopers
    ? colleagues // If "View All" is clicked, show all colleagues
    : colleagues.slice(indexOfFirstDeveloper, indexOfLastDeveloper);

  const totalPages = Math.ceil(colleagues.length / developersPerPage);

  // Logic for displaying projects based on showAllProjects state
  const currentProjects = showAllProjects ? projects : projects.slice(0, 6); // Show first 6 projects if not expanded

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <main className="ml-56 mr-1 px-20 pr-14 pt-24 w-full">
          <h1 className="text-2xl font-semibold mb-6">Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Stats (Left Column) */}
            <div className="bg-white p-4 rounded-lg shadow-md flex h-64">
              {/* Performance Stats Container */}
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mb-2">
                  Performance Stats
                </h2>
                <div className="flex">
                  <div className="flex-shrink-0 w-48 h-48 relative mr-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="lightgray" />
                      <path
                        d="M50 10 A40 40 0 1 1 90 50 L50 50"
                        fill="#3490dc"
                      />
                      <path
                        d="M50 50 L90 50 A40 40 0 0 1 50 90 Z"
                        fill="#38c172"
                      />
                      <path
                        d="M50 50 L50 90 A40 40 0 0 1 10 50 Z"
                        fill="#e3342f"
                      />
                      <path
                        d="M50 50 L10 50 A40 40 0 0 1 50 10 Z"
                        fill="#f6993f"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="flex items-center text-sm mb-1">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: "#3490dc" }}
                      ></span>
                      Completed
                    </p>
                    <p className="flex items-center text-sm mb-1">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: "#38c172" }}
                      ></span>
                      On Hold
                    </p>
                    <p className="flex items-center text-sm mb-1">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: "#e3342f" }}
                      ></span>
                      On Progress
                    </p>
                    <p className="flex items-center text-sm mb-1">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: "#f6993f" }}
                      ></span>
                      Pending
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance (Middle Column) */}
            <div
              className="bg-white p-4 rounded-lg shadow-md h-64"
              style={{ width: "384px" }}
            >
              <h2 className="text-lg font-semibold mb-4">Performance</h2>
              <div>
                <svg viewBox="0 0 200 100" className="w-full h-32">
                  <path
                    d="M10 80 C 40 60, 80 30, 120 50"
                    stroke="blue"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M10 90 C 40 70, 80 40, 120 70"
                    stroke="red"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="mt-4 flex justify-between">
                <span>Achieved: 7 Projects</span>
                <span>Target: 5 Projects</span>
              </div>
            </div>

            {/* Projects Section (Right Column) */}
            <div className="bg-white p-4 ml-4 rounded-lg shadow-md h-auto">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Projects</h2>
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)} // Toggle the showAllProjects state
                  className="text-blue-500"
                >
                  {showAllProjects ? "Show Less" : "View All"}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {currentProjects.map((project) => (
                  <ProjectThumbnail
                    key={project.id}
                    imgSrc={project.imgSrc}
                    title={project.title}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Team Members Section */}
          <div
            className={`mt-2 mb-4 bg-white p-6 rounded-lg shadow-md transition-all duration-300 ${
              showAllDevelopers ? "h-auto" : "h-52"
            }`} // Fixed height when collapsed
            style={{ width: "770px" }}
          >
            <h2 className="text-lg font-semibold mb-4">
              Team Members ({colleagues.length})
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {currentDevelopers.map((colleague) => (
                <CollaboratorCard
                  key={colleague.id}
                  imgSrc={colleague.imgSrc}
                  name={colleague.name}
                />
              ))}
            </div>
            {/* Pagination for Developers */}
            {!showAllDevelopers && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowAllDevelopers(true)}
                  className="text-blue-500"
                >
                  View All
                </button>
                <div>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-2 py-1 border rounded ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "text-blue-500"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Performance;
