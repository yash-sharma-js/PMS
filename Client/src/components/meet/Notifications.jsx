import React from "react";
import { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div className="">
      {call.isReceivedCall && !callAccepted && (
        <div className="flex mt-4 justify-around items-center">
          <h1 className='text-2xl font-bold'>{call.name} is calling:</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={answerCall}
          >
            Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
