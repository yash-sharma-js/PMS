import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/user/Signin/Signin";
import Signup from "./pages/user/Signup/Signup";
import LandingPage from "./pages/user/Landing_page/Landing";
import Contactus from "./pages/user/Contact_us/Contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;
