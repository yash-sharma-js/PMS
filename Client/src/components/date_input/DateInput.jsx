import React from "react";

const DateInput = ({ label, value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="date"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DateInput;
