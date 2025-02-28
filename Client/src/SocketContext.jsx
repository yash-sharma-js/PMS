import React, { useContext, useState, useEffect, useRef, createContext } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = io("http://localhost:7000");

const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState('');

    const myVideo = useRef(null);
    const userVideo = useRef(null);
    const connectionRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream);
                if (myVideo.current) {
                    myVideo.current.srcObject = currentStream;
                }
            });

        socket.on('me', (id) => setMe(id));

        socket.on('callUser', ({ from, name, callerName, signal }) => {
            setCall({ isReceivedCall: true, from, name, callerName, signal });
        });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answerCall', { signal: data, to: call.from });
        });
        peer.on('stream', (currentStream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = currentStream;
            }
        });

        peer.signal(call.signal);
        

        connectionRef.current = peer;
    };

    const callUser = (id) => {
        console.log("i am inside the calluserfunction with Id",id)
        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            console.log("printing the data",data)
            socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
            console.log("data emited ")
        });
        peer.on('stream', (currentStream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = currentStream;
            }
        });

        socket.on('callAccepted', (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });

        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);
        if (connectionRef.current) {
            connectionRef.current.destroy();
        }
        window.location.reload();
    };

    return (
        <SocketContext.Provider value={{ call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, me, leaveCall, callUser, answerCall }}>
            {children}
        </SocketContext.Provider>
    );
};

export { ContextProvider, SocketContext };


// SocketContext.js
// import React, { createContext, useState, useEffect, useRef } from 'react';
// import { io } from 'socket.io-client';
// import Peer from 'simple-peer';

// const SocketContext = createContext();
// const socket = io("http://localhost:5000");

// const ContextProvider = ({ children }) => {
//     const [stream, setStream] = useState(null);
//     const [me, setMe] = useState('');
//     const [call, setCall] = useState({});
//     const [callAccepted, setCallAccepted] = useState(false);
//     const [callEnded, setCallEnded] = useState(false);
//     const [name, setName] = useState('');
    
//     const myVideo = useRef(null);
//     const userVideo = useRef(null);
//     const connectionRef = useRef(null);

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then((currentStream) => {
//                 setStream(currentStream);
//                 if (myVideo.current) {
//                     myVideo.current.srcObject = currentStream;
//                 }
//             }).catch((err) => console.error("Error accessing media devices:", err));

//         socket.on('me', (id) => setMe(id));

//         socket.on('callUser', ({ from, callerName, signal }) => {
//             setCall({ isReceivedCall: true, from, callerName, signal });
//         });

//         return () => {
//             socket.off('me');
//             socket.off('callUser');
//         };
//     }, []);

//     const answerCall = () => {
//         if (!stream) return;
//         setCallAccepted(true);
//         const peer = new Peer({ initiator: false, trickle: false, stream });

//         peer.on('signal', (data) => {
//             socket.emit('answerCall', { signal: data, to: call.from });
//         });

//         peer.on('stream', (currentStream) => {
//             if (userVideo.current) userVideo.current.srcObject = currentStream;
//         });

//         peer.signal(call.signal);
//         connectionRef.current = peer;
//     };

//     const callUser = (id) => {
//         if (!stream) return;
//         console.log("Calling user with ID:", id);
        
//         const peer = new Peer({ initiator: true, trickle: false, stream });

//         peer.on('signal', (data) => {
//             socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
//         });

//         peer.on('stream', (currentStream) => {
//             if (userVideo.current) userVideo.current.srcObject = currentStream;
//         });

//         socket.once('callAccepted', (signal) => {
//             setCallAccepted(true);
//             peer.signal(signal);
//         });

//         connectionRef.current = peer;
//     };

//     const leaveCall = () => {
//         setCallEnded(true);
//         if (connectionRef.current) {
//             connectionRef.current.destroy();
//         }
//         setCall({});
//         setCallAccepted(false);
//         setCallEnded(false);
//     };

//     return (
//         <SocketContext.Provider value={{ 
//             call, callAccepted, myVideo, userVideo, stream, name, setName, 
//             callEnded, me, leaveCall, callUser, answerCall 
//         }}>
//             {children}
//         </SocketContext.Provider>
//     );
// };

// export { ContextProvider, SocketContext };
