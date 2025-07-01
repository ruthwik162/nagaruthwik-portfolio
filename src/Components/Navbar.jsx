import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext/ThemeContext";
import ThemeToggle from "../ThemeContext/ThemeToggle";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { PiFile } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Profile", href: "#profile" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skill" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const socialIcons = [
    {
      icon: <FiGithub />,
      link: "https://github.com/your-username",
      color: "text-gray-700 dark:text-white"
    },
    {
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/your-linkedin",
      color: "text-blue-700 dark:text-blue-400"
    },
    {
      icon: <FiInstagram />,
      link: "https://www.instagram.com/your-instagram",
      color: "text-pink-600 dark:text-pink-400"
    },
    {
      icon: <PiFile />,
      link: "/resume.pdf", // or wherever your resume is hosted
      color: "text-green-600 dark:text-green-400"
    }
  ];



  const menuVariants = {
    hidden: {
      x: "-100vw",
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i }
    })
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`fixed top-0 left-0 w-full z-50 text-black dark:text-white px-4 md:px-16 lg:px-24 xl:px-32 py-4 transition-all duration-500 ${scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-xl md:text-2xl lg:text-3xl"
          >
            .portfolio
          </motion.h1>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                className="group relative flex flex-col gap-0.5 text-black dark:text-white"
              >
                {link.name}
                <motion.div
                  className="h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </a>
            </motion.div>
          ))}
          <motion.div
            onClick={(e) => e.stopPropagation()}

          >
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Desktop Icons + ThemeToggle */}


        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
            className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col md:hidden items-center justify-center gap-8 font-medium text-gray-800 dark:text-white"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
            </motion.button>

            {/* Mobile Nav Links */}
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-md font-semibold"
                >
                  {link.name}
                </a>
              </motion.div>
            ))}

            {/* Mobile Social Icons */}
            <motion.div
              className="flex gap-6 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {socialIcons.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl ${item.color}`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Theme Toggle */}
            <motion.div
              onClick={(e) => e.stopPropagation()}

            >
              <ThemeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
