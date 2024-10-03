import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TotalWorkDone = () => {
  const percentage = 70; // Example percentage to show in the circular progress

  return (
    <div className="max-w-xs mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Total work done</h2>
        <button className="text-sm bg-blue-100 text-blue-700 py-1 px-2 rounded-md">
          This Week
        </button>
      </div>

      <div className="flex justify-center">
        <div className="w-28 h-28">
          <CircularProgressbar
            value={percentage}
            text={`5w: 2d`}
            styles={buildStyles({
              pathColor: "#3b82f6", // Blue color
              trailColor: "#4b5563", // Gray color
              textColor: "#1f2937", // Dark gray text color
              textSize: "16px",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalWorkDone;
