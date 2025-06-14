import React, { useState } from "react";
import { useTheme } from "./ThemeContext/ThemeContext";
import ThemeToggle from "./ThemeContext/ThemeToggle";

const Navbar = () => {
    const { darkMode, setDarkMode } = useTheme();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50    text-black dark:text-white px-4 md:px-16 lg:px-24 xl:px-32 py-4 md:py-6 transition-all duration-500">
            <div className="flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 ">
                    <img
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"
                        alt="logo"
                        className="h-9 invert dark:invert-0"
                    />
                </a>
                <div className="hidden md:flex  items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.path}
                            className="group flex flex-col gap-0.5 bg-white dark:bg-black text-black dark:text-white"
                        >
                            {link.name}
                            <div className=" h-0.5 w-0 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointerbg-white dark:bg-gray-900 text-black dark:text-white">
                        New Launch
                    </button>
                    <div className="rounded-full">
                        <ThemeToggle />

                    </div>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-800 text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 dark:text-white transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <a
                        key={i}
                        href={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg"
                    >
                        {link.name}
                    </a>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    New Launch
                </button>

                <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>
                <button
                    onClick={() => setDarkMode((prev) => !prev)}
                    className="px-4 py-2 rounded-full bg-gray-300 dark:bg-gray-600"
                >
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
