import React from "react";
import { useContext } from 'react';
import { SocketContext } from '../../SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 justify-center items-center">
      <div className="flex flex-col w-full md:w-1/2 border border-gray-300 rounded-lg bg-white shadow-lg">
        <div className="p-4 border-b border-gray-300">
          <h4 className="text-lg font-semibold">{name || "My Video"}</h4>
        </div>
        <div className="flex justify-center p-4">
          <video playsInline muted ref={myVideo} autoPlay className="rounded-lg shadow-lg" />
        </div>
      </div>

      {callAccepted && !callEnded && (
        <div className="flex flex-col w-full md:w-1/2 border border-gray-300 rounded-lg bg-white shadow-lg">
          <div className="p-4 border-b border-gray-300">
            <h4 className="text-lg font-semibold">{call.name || "User Video"}</h4>
          </div>
          <div className="flex justify-center p-4">
            <video playsInline ref={userVideo} autoPlay className="rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
