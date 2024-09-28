import React from "react";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-sm">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 border border-gray-300 rounded"
      />
    </div>
  );
};

export default Input;
