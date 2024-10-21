import React, { useState } from 'react';
import CollaboratorCard from './CollaboratorCard'; // Import the card component

const ITEMS_PER_PAGE = 4; // Number of team members to show per page

const Team = ({ colleagues }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate indices for the developers to display on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentColleagues = colleagues.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(colleagues.length / ITEMS_PER_PAGE);

  return (
    <div className="mt-2 bg-white p-6 rounded-lg shadow-md" style={{ width: "786px" }}>
      <h2 className="text-lg font-semibold mb-4">
        Team Members ({colleagues.length})
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {currentColleagues.map((colleague) => (
          <CollaboratorCard
            key={colleague.id}
            imgSrc={colleague.imgSrc}
            name={colleague.name}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <a href="#" className="text-blue-500">View All</a>
        <div className="flex space-x-2">
          {/* Pagination buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
