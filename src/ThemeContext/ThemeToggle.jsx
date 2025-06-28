import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setDarkMode(!darkMode);
      }}
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
            <FiMoon className="w-5 h-5 text-blue-300" />
          ) : (
            <FiSun className="w-5 h-5 text-amber-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
