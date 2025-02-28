import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../../SocketContext";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Paper elevation={10} className="p-4 bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <Typography variant="h6" className="mb-3 font-semibold text-center">
        Video Call Options
      </Typography>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <TextField
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            className="bg-gray-100 rounded-lg"
          />
          <CopyToClipboard text={me}>
            <Button variant="contained" color="primary" startIcon={<Assignment />} fullWidth>
              Copy ID
            </Button>
          </CopyToClipboard>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <TextField
            label="ID to Call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            fullWidth
            className="bg-gray-100 rounded-lg"
          />
          {callAccepted && !callEnded ? (
            <Button variant="contained" color="secondary" startIcon={<PhoneDisabled />} fullWidth onClick={leaveCall}>
              Hang Up
            </Button>
          ) : (
            <Button variant="contained" color="primary" startIcon={<Phone />} fullWidth onClick={() => callUser(idToCall)}>
              Call
            </Button>
          )}
        </div>
      </div>
      {children}
    </Paper>
  );
};

export default Options;
