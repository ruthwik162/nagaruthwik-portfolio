import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";

const CursorTracker = () => {
  const { handleMouseMove, hoveredIndex, hoverPos } = useTheme();

  useEffect(() => {
    const onMouseMove = (e) => handleMouseMove(e, 0);
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [handleMouseMove]);

  return (
    hoveredIndex === 0 && (
      <div
        className="hidden md:block w-4 h-4 bg-blue-500 rounded-full opacity-70 transition-transform duration-300 fixed z-50 pointer-events-none"
        style={{
          top: hoverPos.y,
          left: hoverPos.x,
          transform: "translate(-50%, -50%)",
        }}
      />
    )
  );
};

export default CursorTracker;
