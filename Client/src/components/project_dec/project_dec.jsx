import React from "react";

const ProjectDescription = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">
        Project Description
      </label>
      <textarea
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        placeholder="Enter project description"
        rows="4"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ProjectDescription;
