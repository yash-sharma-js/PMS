import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import Meet from "../../../Meeting/Meet";

const Meeting = () => {
  return (
    <div className="relative min-h-screen  text-white flex flex-col">
      <Header /> {/* Header at the top */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar /> {/* Sidebar on the left */}
        <div className="flex-1 flex flex-col items-center p-6">
          <h1 className="text-3xl font-bold mb-6">Video Call Meeting</h1>
          <Meet />
        </div>
      </div>
    </div>
  );
};

export default Meeting;
