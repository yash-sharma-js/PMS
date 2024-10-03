import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
      <div className="text-sm text-gray-500 mb-2">Início &gt; Profile</div>
      <h1 className="text-2xl font-semibold mb-2">UI Developer</h1>
      <p className="text-gray-600 mb-6">
        Lorem Ipsum is the best sentence in the world
      </p>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Worked with</h2>
        <a href="#view-all" className="text-pink-500 hover:underline">
          View all
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { name: "Addodle", image: "https://via.placeholder.com/100" },
          { name: "Marketplace.", image: "https://via.placeholder.com/100" },
          { name: "Von Dracula", image: "https://via.placeholder.com/100" },
          { name: "John Joestar", image: "https://via.placeholder.com/100" },
          { name: "Akali Jin", image: "https://via.placeholder.com/100" },
          { name: "Kayn Vampyr", image: "https://via.placeholder.com/100" },
        ].map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={person.image}
              alt={person.name}
              className="rounded-full w-20 h-20 mb-2"
            />
            <span className="text-sm text-gray-700">{person.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
