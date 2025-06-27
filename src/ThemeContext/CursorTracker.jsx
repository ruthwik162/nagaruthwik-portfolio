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
        className="hidden md:block w-6 h-6 cursor-pointer bg-red-900 rounded-full opacity-70 transition-transform duration-500 fixed z-50 pointer-events-none"
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
