import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
