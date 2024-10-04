import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/user/Signin/Signin";
import Signup from "./pages/user/Signup/Signup";
import LandingPage from "./pages/user/Landing_page/Landing";
import CreateProject from "./pages/user/Project_create/CreateProjectPage";
import CreateTask from "./pages/user/Project_create/createTask";
import Profile from "./pages/user/Profile/Profile";
import ProjectPage from "./pages/user/All_projects/ProjectPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
