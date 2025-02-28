import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import Meet from "../../../Meeting/Meet";

const Meeting = () => {
  return (
    <div className="relative h-screen text-white flex flex-col overflow-hidden">
      <Header /> {/* Header at the top */}
      <div className="flex flex-1">
        <Sidebar /> {/* Sidebar on the left */}
        <div className="flex-1 flex flex-col items-center justify-start p-4 mt-[-20px]">
          <h1 className="text-3xl font-bold mb-4">Video Call Meeting</h1>
          <Meet />
        </div>
      </div>
    </div>
  );
};

export default Meeting;
