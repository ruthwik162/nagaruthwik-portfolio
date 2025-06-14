import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <label className="relative inline-flex items-center cursor-pointer gap-3">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => setDarkMode((prev) => !prev)}
            />
            <div className="w-16 h-8 bg-gray-300 rounded-full peer-checked:bg-gray-700 transition-colors duration-200" />

            <span className="absolute left-1 top-1 w-6 h-6 pb-1 px-1 flex items-center justify-center bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-8 text-sm">
                {darkMode ? "🌙" : "☀️"}
            </span>

            <span className="text-sm text-gray-900 dark:text-white">Mode</span>
        </label>

    );
};

export default ThemeToggle;
