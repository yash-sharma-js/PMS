import React from "react";
import  { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../../SocketContext';
import { TextField, Button, Grid, Typography, Container, Paper } from '@mui/material'; // Update this import
import { makeStyles } from '@material-ui/core/styles'; // Update this import
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material'; // Update this import

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white shadow-lg rounded-lg p-8 mb-8">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Typography variant="h6" className="mb-2">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth className="w-full" />
              <CopyToClipboard text={me} className="inline-block">
                <Button variant="contained" color="primary" startIcon={<Assignment fontSize="large" />} className="w-full">
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </div>
            <div className="space-y-4">
              <Typography variant="h6" className="mb-2">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth className="w-full" />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => {
                  console.log(idToCall)
                  callUser(idToCall)}}>
                  Call
                </Button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Options;

