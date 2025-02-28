import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { SocketContext } from "../../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, call } = useContext(SocketContext);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-4 w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="w-full md:w-1/2 p-2">
        <Typography variant="h6" className="text-gray-800 text-center mb-2">
          {name || "My Video"}
        </Typography>
        <video playsInline muted ref={myVideo} autoPlay className="w-full h-auto rounded-md shadow-md" />
      </div>
      {callAccepted && !callEnded && (
        <div className="w-full md:w-1/2 p-2">
          <Typography variant="h6" className="text-gray-800 text-center mb-2">
            {call.name || "User Video"}
          </Typography>
          <video playsInline ref={userVideo} autoPlay className="w-full h-auto rounded-md shadow-md" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
