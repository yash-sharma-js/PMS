import React from "react";
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
    // Add more colleagues as necessary
  ];

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
            {/* Projects Section (Right Column) */}
            <div className="bg-white p-4 ml-4 rounded-lg shadow-md h-full">
              {" "}
              {/* Set h-full to ensure it stretches */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Projects</h2>
                <a href="#" className="text-blue-500">
                  View All
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {projects.map((project) => (
                  <ProjectThumbnail
                    key={project.id}
                    imgSrc={project.imgSrc}
                    title={project.title}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* UI Developers */}
          <div
            className="mt-2 bg-white p-6 rounded-lg shadow-md" // Changed from mt-0 to mt-2
            style={{ width: "786px" }}
          >
            <h2 className="text-lg font-semibold mb-4">
              UI Developers ({colleagues.length})
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {colleagues.map((colleague) => (
                <CollaboratorCard
                  key={colleague.id}
                  imgSrc={colleague.imgSrc}
                  name={colleague.name}
                />
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <a href="#" className="text-blue-500">
                View All
              </a>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-gray-200 rounded">1</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">
                  2
                </button>
                <button className="px-3 py-1 bg-gray-200 rounded">3</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Performance;
