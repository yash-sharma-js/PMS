import React, { useRef, useState } from "react";
import {
  FaExclamationTriangle,
  FaClipboardCheck,
  FaUser,
  FaCalendarAlt,
  FaPlus,
} from "react-icons/fa";

function TaskDetailsPopup({ onClose }) {
  const fileInputRef = useRef(null);
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt metus nec odio volutpat, et venenatis nulla malesuada..."
  );
  const [documentName, setDocumentName] = useState("No documents attached");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocumentName(file.name);
    }
  };

  const handleAddAttachment = () => {
    fileInputRef.current.click();
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-3xl p-4 shadow-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-2xl font-semibold">Task Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="mb-4 space-y-3">
          <p className="flex items-center mb-2">
            <FaExclamationTriangle className="text-black mr-2" />
            <strong>Priority</strong>
            <span className="text-white bg-red-500 rounded-full px-2 py-1 ml-4">
              High
            </span>
          </p>
          <p className="flex items-center mb-2">
            <FaClipboardCheck className="text-black mr-2" />
            <strong>Status</strong>
            <span className="text-white bg-green-500 rounded-full px-2 py-1 ml-4">
              Completed
            </span>
          </p>
          <p className="flex items-center mb-2">
            <FaUser className="text-black mr-2" />
            <strong>Owner</strong>
            <span className="ml-4">UI Sharks</span>
          </p>
          <p className="flex items-center mb-2">
            <FaUser className="text-black mr-2" />
            <strong>Assignee</strong>
            <span className="ml-4">Coder bhai</span>
          </p>
          <p className="flex items-center mb-2">
            <FaCalendarAlt className="text-black mr-2" />
            <strong>Due Date</strong>
            <span className="ml-4">March 24th, 2023</span>
          </p>
        </div>

        <hr className="my-2" />

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Attached Documents</h3>
          <div className="flex items-center space-x-4">
            <FaPlus
              className="text-black cursor-pointer"
              onClick={handleAddAttachment}
            />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <p>{documentName}</p>
          </div>
        </div>

        <hr className="my-2" />

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="bg-white border border-gray-300 p-2 mb-2 rounded-md">
            {description}
          </p>
          <hr className="my-2" />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="w-full border border-gray-300 rounded-md p-2 h-28 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write the description here..."
          />
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPopup;
