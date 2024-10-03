import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/user/Signin/Signin";
import Signup from "./pages/user/Signup/Signup";
import LandingPage from "./pages/user/Landing_page/Landing";
import CreateForm from "./pages/user/Project_create/createProject";
import CreateTask from "./pages/user/Project_create/createTask";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createproject" element={<CreateForm />} />
        <Route path="/createtask" element={<CreateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
