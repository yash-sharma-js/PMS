import React, { useState } from "react";

const ProjectRolesSelect = ({ value, onChange }) => {
  const [selectedRoles, setSelectedRoles] = useState(value || ["Team Lead"]);
  const allRoles = ["Team Lead", "Developer", "Designer", "QA"];

  const handleRoleChange = (event) => {
    const { value, selected } = event.target;
    let newRoles = [...selectedRoles];
    if (selected) {
      newRoles.push(value);
    } else {
      newRoles = newRoles.filter((role) => role !== value);
    }
    setSelectedRoles(newRoles);
    onChange(newRoles);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">
        Project Roles
      </label>
      <select
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        multiple
        value={selectedRoles}
        onChange={(e) => handleRoleChange(e)}
      >
        {allRoles.map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectRolesSelect;
