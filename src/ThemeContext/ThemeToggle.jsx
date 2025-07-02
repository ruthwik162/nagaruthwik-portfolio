import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (e) => {
    e.stopPropagation();
    setDarkMode(!darkMode);

    // Animate a glow ring pulse effect
    gsap.fromTo(
      ringRef.current,
      {
        scale: 0,
        opacity: 0.6,
      },
      {
        scale: 2.2,
        opacity: 0,
        duration: 0.6,
        ease: "expo.out",
      }
    );

    // Subtle button scale bounce
    gsap.fromTo(
      btnRef.current,
      { scale: 0.95 },
      {
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)",
      }
    );
  };

  if (!mounted) return null;

  return (
    <button
      ref={btnRef}
      onClick={handleToggle}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      className={`
        relative w-10 h-10 flex items-center justify-center
        border rounded-lg overflow-hidden
        ${darkMode ? "border-gray-600 bg-gray-800" : "border-gray-300 bg-gray-50"}
        transition-all duration-200
        focus:outline-none focus:ring-2
        ${darkMode ? "focus:ring-indigo-500" : "focus:ring-amber-300"}
        shadow-md hover:shadow-lg
      `}
    >
      {/* Glow ripple ring */}
      <div
        ref={ringRef}
        className="absolute w-full h-full rounded-full bg-indigo-400 dark:bg-amber-400"
        style={{ transform: "scale(0)", opacity: 0, zIndex: 0 }}
      />

      {/* Icon animation */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={darkMode ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute z-10"
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
