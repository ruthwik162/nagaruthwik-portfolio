import React from "react";
import "./index.css";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import CursorTracker from "./ThemeContext/CursorTracker";
import Experience from "./Components/Experience";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Form from "./Components/Form";

function App() {
  return (
    <ThemeProvider>
      <CursorTracker />
      <Navbar />

      {/* Main sections with IDs for scrolling */}
      <section id="home"><Home /></section>
      <section id="profile"><Profile /></section>
      <section id="skill"><Skill /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Form/></section>


    </ThemeProvider>
  );
}

export default App;
