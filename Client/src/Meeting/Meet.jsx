import React from "react";
import VideoPlayer from "../components/meet/VideoPlayer";
import Notifications from "../components/meet/Notifications";
import Options from "../components/meet/Options";

const Meet = () => {
  return (
    <div className="min-h-screen  text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Meet</h1>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default Meet;
