import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import ProfileCreation from "./pages/ProfileCreation";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    
     <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<ProfileCreation />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     </Router>
    
  );
}

export default App;
