import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
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
    const starsRef = useRef(null);
    const nameContainerRef = useRef(null);
    const cursorRef = useRef(null);

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
            scale: 0.98
        },
        animate: {
            boxShadow: [
                '0 0 0 0 rgba(124, 58, 237, 0.7)',
                '0 0 20px 10px rgba(124, 58, 237, 0)',
                '0 0 0 0 rgba(124, 58, 237, 0)'
            ],
            scale: 1,
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
            }
        }
    };

    const profileShadow = theme === 'dark'
        ? '0 0 70px rgba(124, 58, 237, 0.5)'
        : '0 0 150px rgba(250, 200, 50, 0.3)';

    useEffect(() => {
        // Enhanced star creation with twinkling effect
        const createStars = () => {
            const container = starsRef.current;
            if (!container) return;

            container.innerHTML = '';
            const starCount = window.innerWidth < 768 ? 80 : 150;

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                const size = Math.random() * 3 + 1;
                const duration = 2 + Math.random() * 4;
                const delay = Math.random() * 5;

                star.className = 'absolute rounded-full bg-white';
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
                star.style.animation = `starTwinkle ${duration}s ${delay}s infinite ease-in-out`;

                container.appendChild(star);
            }
        };

        // Cursor follower effect for name hover
        const handleMouseMove = (e) => {
            if (cursorRef.current && nameContainerRef.current) {
                const rect = nameContainerRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                cursorRef.current.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
                cursorRef.current.style.opacity = '1';
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '0';
            }
        };

        createStars();
        const resizeHandler = () => {
            clearTimeout(window._starResizeTimeout);
            window._starResizeTimeout = setTimeout(createStars, 300);
        };

        window.addEventListener('resize', resizeHandler);

        if (nameContainerRef.current) {
            nameContainerRef.current.addEventListener('mousemove', handleMouseMove);
            nameContainerRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        // GSAP Scroll Animation with parallax effect
        if (homeRef.current) {
            const ctx = gsap.context(() => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: homeRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                })
                    .to(homeRef.current, {
                        y: -100,
                        opacity: 0.8,
                        scale: 0.95,
                        ease: 'power2.out',
                    })
                    .to(starsRef.current, {
                        y: 100,
                        ease: 'none'
                    }, 0);
            }, homeRef);


        }
    }, []);

    return (
        <div
            ref={ref}
            className="relative z-10 px-6 pt-28 min-h-screen md:pt-20 md:px-16 lg:px-32 bg-white dark:bg-gradient-to-br dark:bg-[#0a0518] text-black dark:text-white overflow-hidden flex flex-col justify-center"
        >
            {/* Enhanced star background with twinkling animation */}
            <div
                ref={starsRef}
                className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            />
            <StarBackground />
            {/* Custom cursor follower for name hover */}


            <div ref={homeRef}>
                <div className='flex items-center flex-col md:flex-row gap-10 md:gap-20 justify-center'>
                    <div
                        ref={nameContainerRef}
                        className='flex flex-col items-center md:items-start transform md:-translate-x-16 justify-center md:gap-6 relative'
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
                            className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter flex flex-wrap"
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

                <div className='px-4 md:px-20 mt-10 md:mt-16'>
                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="max-w-4xl font-poppins text-sm sm:text-lg text-gray-700 dark:text-gray-300 flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start"
                    >
                        {"Front End Development | FullStack Solutions | 3D Animations"
                            .split("|")
                            .map((word, index) => (
                                <React.Fragment key={index}>
                                    <motion.span
                                        custom={index}
                                        variants={textFadeVariants}
                                        className="inline-flex items-center hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {word.trim()}
                                    </motion.span>
                                    {index < 3 && (
                                        <motion.span
                                            custom={index + 0.5}
                                            variants={textFadeVariants}
                                            className="text-indigo-400"
                                        >
                                            •
                                        </motion.span>
                                    )}
                                </React.Fragment>
                            ))}
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="mt-8 text-sm sm:text-md md:text-lg font-light max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300"
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
                            href={assets.resume}
                            download
                            className="flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Download CV <FiDownload className="inline" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default Home;