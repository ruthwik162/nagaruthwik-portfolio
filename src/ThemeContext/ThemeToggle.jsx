import React from "react";
import { useTheme } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi"; // Line icons
import { motion, AnimatePresence } from "framer-motion"; // For smooth transitions

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      className={`
        relative w-10 h-10 flex items-center justify-center
        border rounded-lg
        ${darkMode ? "border-gray-600 bg-gray-800" : "border-gray-300 bg-gray-50"}
        transition-all duration-200
        focus:outline-none focus:ring-2
        ${darkMode ? "focus:ring-gray-500" : "focus:ring-amber-200"}
        shadow-sm hover:shadow-md
      `}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={darkMode ? "moon" : "sun"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {darkMode ? (
            <FiMoon className={`w-5 h-5 ${darkMode ? "text-blue-300" : "text-gray-700"}`} />
          ) : (
            <FiSun className={`w-5 h-5 ${darkMode ? "text-gray-300" : "text-amber-500"}`} />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;