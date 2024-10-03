// src/Projects.jsx
import React from "react";

const ProjectCard = () => {
  const projects = [
    { name: "Emo stuff", image: "https://via.placeholder.com/100" },
    { name: "Tim Burton", image: "https://via.placeholder.com/100" },
    { name: "Halloween!", image: "https://via.placeholder.com/100" },
    { name: "Spooky Art", image: "https://via.placeholder.com/100" },
    { name: "Dark Art", image: "https://via.placeholder.com/100" },
    { name: "Gothic Art", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="max-w-sm p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Projects</h2>
        <a href="#" className="text-pink-500 hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-24 object-cover rounded-md mb-2"
            />
            <p className="text-sm font-medium">{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
