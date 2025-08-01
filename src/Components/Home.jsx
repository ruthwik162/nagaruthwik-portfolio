import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { delay, motion, scale, useAnimation } from 'framer-motion';
import { assets } from '../assets/assets';
import { useTheme } from '../ThemeContext/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import StarBackground from '../ThemeContext/StarBackground';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
    const { theme } = useTheme();
    const homeRef = useRef(null);
    const nameContainerRef = useRef(null);
    const scrollIndicatorRef = useRef(null);


    // Enhanced animation variants
    const fadeRotateVariants = {
        hidden: { x: 100, opacity: 0, rotate: 5, filter: 'blur(4px)' },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            rotate: 0,
            filter: 'blur(0px)',
            transition: {
                delay: i * 0.05,
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            }
        })
    };

    const fadeRotateLeftVariants = {
        hidden: { x: -100, opacity: 0, rotate: -5, scale: 1.7, filter: 'blur(4px)' },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                delay: i * 0.07,
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        })
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20, filter: 'blur(4px)' },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                delay: 0.5,
                duration: 1,
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        },
        hover: {
            scale: 1.05,
            rotate: 1,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400
            }
        }
    };

    const textFadeVariants = {
        hidden: { y: 20, opacity: 0, filter: 'blur(4px)' },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                delay: i * 0.1 + 0.3,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    const pulseGlow = {
        initial: {
            boxShadow: '0 0 0 0 rgba(124, 58, 237, 0.7)',
            scale: 1
        },
        animate: {
            boxShadow: [
                '0 0 0 0 rgba(124, 58, 237, 0.7)',
                '0 0 5px 50px rgba(124, 58, 237, 0)',
                '0 0 10px 0 rgba(124, 58, 237, 0)'
            ],
            scale: 1,
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatDelay: 1.2
            }
        }
    };

    const buttonGlow = {
        initial: {
            boxShadow: `0 0 0 0 rgba(124, 58, 237, ${(0.6 + Math.random() * 0.4).toFixed(2)})`,
            scale: 1
        },
        animate: {
            boxShadow: [
                `0 0 0 0 rgba(124, 58, 237, ${(0.6 + Math.random() * 0.4).toFixed(2)})`,
                `0 0 3px ${Math.floor(Math.random() * 10 + 5)}px rgba(124, 58, 237, 0)`,
                `0 0 10px 0 rgba(124, 58, 237, 0)`
            ],
            scale: [1, 1.02, 1],
            transition: {
                duration: (2 + Math.random() * 8).toFixed(2), // 2–6s
                delay: (Math.random() * 1.5).toFixed(2),      // 0–1.5s
                repeat: Infinity,
                repeatDelay: +(Math.random() * 0.8).toFixed(2), // 0–0.8s
                ease: "easeInOut"
            }
        }
    };

    const scrollIndicator = {
        initial: { opacity: 0, y: -10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { delay: 2.5, duration: 0.5 }
        },
        pulse: {
            y: [0, -10, 0],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };
    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const profileShadow = theme === 'dark'
        ? '0 0 70px rgba(124, 58, 237, 0.5)'
        : '0 0 150px rgba(250, 200, 50, 0.3)';

    useEffect(() => {
        if (!homeRef.current) return;

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: homeRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            }).to(homeRef.current, {
                y: -100,
                opacity: 0.8,
                scale: 0.95,
                ease: 'power2.out',
            });
        }, homeRef);

        return () => ctx.revert(); // Clean up on unmount
    }, []);


    const MouseScrollIndicator = () => (
        <motion.svg
            width="30"
            height="50"
            viewBox="0 0 30 50"
            className="text-indigo-500 dark:text-indigo-300"
            animate={{
                y: [0, 10, 0],
                opacity: [0.8, 1, 0.8]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {/* Mouse body */}
            <rect
                x="5"
                y="5"
                width="20"
                height="35"
                rx="10"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
            />
            {/* Mouse wheel */}
            <motion.rect
                x="13.5"
                y="10"
                width="3"
                height="5"
                rx="1.5"
                fill="currentColor"
                animate={{
                    y: [10, 20, 10],
                    opacity: [0.8, 1, 0.6]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.3
                }}
            />
            {/* Mouse scroll wheel indicator */}
            <motion.circle
                cx="15"
                cy="40"
                r="2"
                fill="currentColor"
                animate={{
                    scale: [0.5, 1, 0.5],
                    opacity: [0.4, 1, 0.4]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.svg>
    );

    return (
        <div
            ref={ref}
            className="relative px-4 md:pt-40 pt-20 md:pb-20 md:px-10 bg-white dark:bg-gradient-to-br dark:bg-[#0a0518] text-black dark:text-white overflow-hidden"
        >

            <StarBackground />


            <div ref={homeRef}>
                <div className='flex items-center flex-col md:flex-row gap-3 md:gap-1 justify-center'>
                    <div
                        ref={nameContainerRef}
                        className='flex flex-col items-start md:items-start transform md:-translate-x-16 justify-center md:gap-6 relative'
                    >
                        <motion.h1
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="text-4xl sm:text-6xl md:text-7xl font-bold transform md:-translate-x-0 uppercase tracking-tighter flex flex-wrap relative"
                            style={{
                                textShadow: theme === 'dark'
                                    ? '0 0 10px rgba(124, 58, 237, 0.5)'
                                    : '0 0 5px rgba(250, 200, 50, 0.3)'
                            }}
                        >
                            {"Merugu".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    custom={index}
                                    variants={fadeRotateLeftVariants}
                                    className="inline-block hover:text-indigo-400 transition-colors duration-300"
                                    whileHover={{
                                        y: -5,
                                        scale: 1.1,
                                        color: '#818cf8'
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.h2
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="text-[47px] sm:text-6xl md:text-[120px] font-bold uppercase tracking-tighter flex flex-wrap"
                        >
                            {"Naga Ruthwik".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    custom={index}
                                    variants={fadeRotateVariants}
                                    className="inline-block hover:text-indigo-400 transition-colors duration-300"
                                    whileHover={{
                                        y: -5,
                                        scale: 1.1,
                                        color: '#818cf8'
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h2>

                        {/* Decorative elements */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="absolute -bottom-6 -left-10 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl z-0"
                        />
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}
                        whileHover="hover"
                        className="relative group z-10"
                    >
                        <motion.div
                            className="rounded-xl mx-auto overflow-hidden relative"
                            style={{ boxShadow: profileShadow }}
                            variants={pulseGlow}
                            initial="initial"
                            animate="animate"
                        >
                            <img
                                src={assets.profile}
                                alt="Naga Ruthwik Merugu"
                                className="h-52 w-44 md:h-80 md:w-72 object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-indigo-300/40 transition-all duration-300 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-1.5 rounded-full shadow-md text-sm font-medium flex items-center gap-2 z-10"
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: { delay: 1.2, type: "spring", stiffness: 300 }
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            <motion.span
                                className="h-2 w-2 bg-green-400 rounded-full"
                                animate={{
                                    scale: [0.5, 1, 0.5],
                                    opacity: [0.4, 1, 0.4],
                                    boxShadow: ['0 0 0 0 rgba(74, 222, 128, 0)', '0 0 5px 2px rgba(74, 222, 128, 0.7)', '0 0 0 0 rgba(74, 222, 128, 0)']
                                }}
                                transition={{
                                    duration: 2.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            Available for work
                        </motion.div>
                    </motion.div>
                </div>

                <div className='px-4 md:px-10 mt-10 md:mt-1'>
                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="max-w-4xl  font-poppins text-sm sm:text-lg  text-gray-700 dark:text-gray-300 flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start"
                    >

                        {"FullStack Development |Frontend  Development | 3D Animations"
                            .split("|")
                            .map((word, index) => (
                                <React.Fragment key={index}>
                                    <motion.span
                                        custom={index}
                                        variants={textFadeVariants}
                                        className="inline-flex items-center gap-3 border p-2  border-gray-300/60 bg-[#0a0615]/40 dark:bg-indigo-400/25 dark:shadow-[0_0_70px_rgba(124,58,237,0.2)] backdrop-blur-sm rounded-lg hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.span
                                            className="h-2 w-2 bg-green-400 rounded-full"
                                            animate={{
                                                scale: [0.5, 1, 0.5],
                                                opacity: [0.4, 1, 0.4],
                                                boxShadow: ['0 0 0 0 rgba(74, 222, 128, 0)', '0 0 5px 2px rgba(74, 222, 128, 0.7)', '0 0 0 0 rgba(74, 222, 128, 0)']
                                            }}
                                            transition={{

                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: Math.random() * 3,
                                                duration: 4 + Math.random() * 3,
                                            }}
                                        />
                                        {word.trim()}
                                    </motion.span>

                                </React.Fragment>
                            ))}
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="mt-8 text-sm sm:text-md md:text-lg line-clamp-2 font-light max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300"
                        style={{
                            textShadow: theme === 'dark'
                                ? '0 0 10px rgba(124, 58, 237, 0.5)'
                                : '0 0 5px rgba(250, 200, 50, 0.3)'
                        }}
                    >
                        {`
Hey! I’m Nagaruthwik, I’m a Full Stack Developer passionate about building scalable web applications using the MERN stack.
    I enjoy solving real-world problems through clean code, intuitive UI/UX, and robust backend systems.
    I’m currently seeking full-time or internship opportunities to contribute to impactful projects and grow with a tech-forward team.
  `.split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={fadeRotateLeftVariants}
                                className="inline-block hover:text-indigo-400 transition-colors duration-300"
                                whileHover={{
                                    y: -5,
                                    scale: 1.1,
                                    color: '#818cf8'
                                }}
                            >
                                {word}&nbsp;
                            </motion.span>
                        ))}
                    </motion.p>



                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 1.8, type: "spring" }
                        }}
                        className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start"
                    >
                        <motion.a
                            href="#contact"
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ boxShadow: profileShadow }}
                            variants={buttonGlow}
                            initial="initial"
                            animate="animate"

                        >
                            Contact Me <FiArrowRight className="inline" />
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="flex items-center gap-2 px-8 py-3 border border-indigo-600 text-indigo-600 dark:text-white rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href={assets.resume_fullstack}
                            style={{ boxShadow: profileShadow }}
                            variants={buttonGlow}
                            initial="initial"
                            animate="animate"
                            download
                            className="flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 1 }}
                        >
                            Download CV <FiDownload className="inline" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll down indicator with mouse SVG */}
                {/* <motion.div
                    ref={scrollIndicatorRef}
                    className="w-full flex justify-center pt-1 pb-4 md:pt-0 md:absolute md:bottom-10 cursor-pointer z-20"
                    onClick={scrollToNext}
                    initial="initial"
                    animate={["animate", "pulse"]}
                    variants={scrollIndicator}
                    whileHover={{ scale: 1.1 }}
                >
                    <div className="flex flex-col items-center">
                        <motion.span
                            className="text-sm text-indigo-500 dark:text-indigo-300 mb-3 font-light"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            View More
                        </motion.span>
                        <MouseScrollIndicator />
                        <div className="absolute -inset-4 rounded-full bg-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                </motion.div> */}
            </div>


        </div>
    );
};

export default Home;