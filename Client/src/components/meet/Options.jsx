import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../../SocketContext";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
import { motion } from "framer-motion";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={10} className="p-4 bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-4">
        <Typography variant="h6" className="mb-3 font-semibold text-center">
          Video Call Options
        </Typography>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-2 w-full md:w-1/2"
          >
            <TextField
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              className="bg-gray-100 rounded-lg text-sm py-1"
              size="small"
            />
            <CopyToClipboard text={me}>
              <Button variant="contained" color="primary" startIcon={<Assignment />} fullWidth>
                Copy ID
              </Button>
            </CopyToClipboard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-2 w-full md:w-1/2"
          >
            <TextField
              label="ID to Call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              fullWidth
              className="bg-gray-100 rounded-lg text-sm py-1"
              size="small"
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
          </motion.div>
        </div>
        {children}
      </Paper>
    </motion.div>
  );
};

export default Options;
