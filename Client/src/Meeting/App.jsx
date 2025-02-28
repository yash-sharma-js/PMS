import React from "react"; // ✅ Ensure React is imported
import VideoPlayer from "../components/meet/VideoPlayer";
import Notifications from "../components/meet/Notifications";
import Options from "../components/meet/Options";

const Meet = () => {
  return (
    <div>
      <div className="text-center text-4xl font-bold">
        <VideoPlayer />
      </div>
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default Meet;
