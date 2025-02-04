import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import ProfileCreation from "./pages/ProfileCreation";
import Dashboard from "./pages/ProfileDetailPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    
     <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<ProfileCreation />} />
        <Route path="/profile" element={<Dashboard />} />
      </Routes>
     </Router>
    
  );
}

export default App;
