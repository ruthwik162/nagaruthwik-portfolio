import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index = null) => {
    setHoveredIndex(index);
    setHoverPos({ x: e.clientX, y: e.clientY });
  };

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    root.classList.toggle("light", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        hoveredIndex,
        hoverPos,
        handleMouseMove,
        expandedDescriptions,
        toggleDescription,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
