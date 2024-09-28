import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full p-3 bg-teal-700 text-white rounded-lg hover:bg-teal-500 transition duration-300"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
