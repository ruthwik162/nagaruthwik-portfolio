import React from 'react';
import { useTheme } from './ThemeContext/ThemeContext';

const Home = () => {
    const { handleMouseMove, hoveredIndex, hoverPos } = useTheme    ();

    return (
        <div className="p-4 md:px-32 max-w-8xl  bg-white dark:bg-black text-black dark:text-white min-w-screen h-screen">
            <div className="mt-20">
                <h1 className="text-3xl font-bold">Hello, World!</h1>
                <p>This app supports light and dark mode with a persistent toggle.</p>
            </div>

            {/* Hoverable Card Example */}
            <div
                className="mt-10 p-6 bg-gray-100 dark:bg-gray-800 duration-700 rounded-lg shadow-md relative overflow-hidden group"
                onMouseMove={(e) => handleMouseMove(e, 1)}
            >
                <h2 className="text-xl font-semibold">Hover over this card</h2>
                <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                    We're tracking your cursor relative to this element.
                </p>

                {/* Optional visual hover indicator */}
                {hoveredIndex === 1 && (
                    <div
                        className="absolute w-4 h-4 bg-blue-500 rounded-full pointer-events-none opacity-70 transition-transform duration-100"
                        style={{ top: hoverPos.y, left: hoverPos.x }}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
