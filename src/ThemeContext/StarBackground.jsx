import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext'; // Correctly import the hook

const StarBackground = () => {
  const starsRef = useRef(null);
  const { darkMode } = useTheme(); // Access darkMode from context

  useEffect(() => {
    const createStars = () => {
      const container = starsRef.current;
      if (!container) return;

      container.innerHTML = '';

      const starColor = darkMode ? 'bg-white/80' : 'bg-indigo-700';
      const starCount = window.innerWidth < 768 ? 50 : 100;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;

        star.className = `absolute rounded-full ${starColor}`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
        star.style.animation = `starPulse ${2 + Math.random() * 3}s infinite ease-in-out`;

        container.appendChild(star);
      }
    };

    createStars();

    const resizeHandler = () => {
      clearTimeout(window._starResizeTimeout);
      window._starResizeTimeout = setTimeout(createStars, 300);
    };

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [darkMode]); // Recreate stars when theme changes

  return (
    <div
      ref={starsRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default StarBackground;
