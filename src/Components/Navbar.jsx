import React, { useState } from "react";
import { useTheme } from "../ThemeContext/ThemeContext";
import ThemeToggle from "../ThemeContext/ThemeToggle";
import { Link, NavLink } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { PiFile, PiFireSimpleDuotone } from "react-icons/pi";

const Navbar = () => {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skill" },
    { name: "Experience", path: "/experience" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-black dark:text-white px-4 md:px-16 lg:px-24 xl:px-32 py-4 md:py-6 transition-all duration-500">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 ">
          <h1 className="font-bold md:text-[2vw]">.portfolio</h1>
        </NavLink>

        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="group flex flex-col gap-0.5   text-black dark:text-white"
            >
              {link.name}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* Insta */}
          <FiInstagram />
          <FiLinkedin />
          <FiGithub />
          <PiFile />
          <div className="rounded-full flex items-center justify-center gap-2">
            <ThemeToggle /> mode
          </div>
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
      onClick={(e)=> e.stopPropagation()}
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-black text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 dark:text-white transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          className="absolute top-6 right-6"
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
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl"
          > 
            {link.name}
          </Link>
        ))}

        <div className="rounded-xl flex flex-col border p-2 items-center justify-center gap-2">
          <ThemeToggle /> mode
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
