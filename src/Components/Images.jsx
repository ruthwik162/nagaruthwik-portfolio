import React, { useEffect, useState } from 'react';
import { dummyImages } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeContext/ThemeContext';

const Images = () => {
    const [pic, setPic] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const { handleMouseMove, hoverPos } = useTheme();

    const fetchImage = () => {
        setPic(dummyImages);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    // Image variants for animation
    const floatingVariants = {
        float: {
            y: ["0%", "-10%", "0%"],
            transition: {
                y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                },
                rotate: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }
            }
        },
        hover: {
            scale: 1.1,
            rotate: [0, -3, 3, 0],
            transition: {
                duration: 0.8
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <div
            className="relative bg-white dark:bg-black text-black dark:text-white p-4 min-h-screen"
            onMouseMove={(e) => handleMouseMove(e, 'images-page')}
        >
            {/* Enhanced custom cursor */}
            {hoverPos.page === 'images-page' && (
                <motion.div
                    className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
                    style={{
                        top: hoverPos.y,
                        left: hoverPos.x,
                        transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8],
                        rotate: [0, 180]
                    }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        ease: "easeInOut"
                    }}
                />
            )}

            <motion.div
                className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
                {pic.map((element, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                        variants={floatingVariants}
                        className="cursor-pointer group"
                        onClick={() => setSelectedImage(element)}
                    >
                        <div className="relative overflow-hidden flex justify-center items-center rounded-xl shadow-2xl">
                            <motion.img
                                src={element.img}
                                alt={element.name}
                                className="w-full h-30 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0  justify-center bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <h1 className="text-white font-bold text-xl">
                                    {element.name}
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal for selected image */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className="fixed inset-0  bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="relative max-w-4xl w-full"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                src={selectedImage.img}
                                alt={selectedImage.name}
                                className="w-40 h-auto object-contain rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            />
                            <motion.div 
                                className="absolute -bottom-16 left-0 right-0 text-center"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h2 className="text-3xl font-bold text-white mt-4">
                                    {selectedImage.name}
                                </h2>
                            </motion.div>
                            <motion.button
                                className="absolute -top-12 right-0 bg-white rounded-full p-2 shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedImage(null)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-black w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Images;