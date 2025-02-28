import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Meet from "./Meeting/Meet"
import Meeting from "./pages/user/meeting/Meeting"
import Signin from "./pages/user/Signin/Signin";
import Signup from "./pages/user/Signup/Signup";
import LandingPage from "./pages/user/Landing_page/Landing";
import CreateProject from "./pages/user/Project_create/CreateProjectPage";
import CreateTask from "./pages/user/Project_create/createTask";
import Profile from "./pages/user/Profile/Profile";
import ProjectPage from "./pages/user/All_projects/ProjectPage";
import UserProfilePage from "./pages/user/edit_profile/UserProfilePage";
import All_Task from "./pages/user/Project_create/All_Task";
import Performance from "./pages/user/Performance/Performance";
import { ContextProvider } from './SocketContext.jsx'

// Mock function to check if the user is logged in
const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return localStorage.getItem("token") !== null;
};

// Private route component to protect routes
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
};

// Public route component to prevent access to home/signup if already logged in
const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/project" /> : children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* Private routes */}
        <Route
          path="/createproject"
          element={
            <PrivateRoute>
              <CreateProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/createtask"
          element={
            <PrivateRoute>
              <CreateTask />
            </PrivateRoute>
          }
        />
        <Route
          path="/project"
          element={
            <PrivateRoute>
              <ProjectPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/editprofile"
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <All_Task />
            </PrivateRoute>
          }
        />
        <Route
          path="/performance"
          element={
            <PrivateRoute>
              <Performance />
            </PrivateRoute>
          }
        />
        <Route
          path="/meeting"
          element={
            <PrivateRoute>
              <ContextProvider>

              <Meeting />
              </ContextProvider>
            </PrivateRoute>
          }
        />
        <Route 
          path = "/meet"
          element ={
            <PrivateRoute>
           < Meet/>
           </PrivateRoute>
          }
        />  

      </Routes>
    </Router>
  );
}

export default App;
