import React from "react";
import "./index.css";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import CursorTracker from "./ThemeContext/CursorTracker";

function App() {
  return (
    <ThemeProvider>
      <CursorTracker />
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
