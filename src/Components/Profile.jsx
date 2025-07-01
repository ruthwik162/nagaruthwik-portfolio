import React, { useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiTwitter } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarBackground from '../ThemeContext/StarBackground';

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
    const homeRef = useRef();
    const cursorRef = useRef();
    const nameContainerRef = useRef();
    const contentRef = useRef();

    // Animation variants remain the same...





    // Enhanced animation variants with spring physics
    const fadeUp = (delay = 0) => ({
        hidden: { y: 40, opacity: 0, filter: 'blur(4px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                delay,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    });

    const fadeRotate = (delay = 0) => ({
        hidden: { x: 100, opacity: 0, rotate: 5, filter: 'blur(4px)' },
        visible: {
            x: 0,
            opacity: 1,
            rotate: 0,
            filter: 'blur(0px)',
            transition: {
                delay,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    });

    const fadeRotateDown = (delay = 0) => ({
        hidden: { y: 20, opacity: 0, rotate: 5, filter: 'blur(4px)' },
        visible: {
            y: 0,
            opacity: 1,
            rotate: 0,
            filter: 'blur(0px)',
            transition: {
                delay,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    });

    const fadeRotateLeft = (delay = 0) => ({
        hidden: { x: -50, opacity: 0, rotate: -5, scale: 1.3, filter: 'blur(4px)' },
        visible: {
            x: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                delay,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    });

    const fadeRight = {
        hidden: { x: -40, opacity: 0, filter: 'blur(4px)' },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                delay: 0.8 + i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        }),
    };

    const fadeDown = (delay = 0) => ({
        hidden: { y: -20, opacity: 0, filter: 'blur(4px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                delay,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 12,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    });

    const fadeLeft = {
        hidden: { x: -40, opacity: 0, filter: 'blur(4px)' },
        visible: {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.1,
            }
        }
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
                damping: 12,
                stiffness: 100
            }
        },
        hover: {
            scale: 1.03,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400
            }
        }
    };

    const statVariant = {
        hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                delay: 0.8 + i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        })
    };

    const socialLinks = [
        { icon: <FiGithub />, url: "https://github.com/ruthwik162", label: "GitHub", color: "text-gray-800 dark:text-gray-200" },
        { icon: <FiLinkedin />, url: "https://linkedin.com/in/nagaruthwikmerugu", label: "LinkedIn", color: "text-blue-600 dark:text-blue-400" },
        { icon: <FiTwitter />, url: "https://twitter.com", label: "Twitter", color: "text-sky-500 dark:text-sky-400" },
        { icon: <SiLeetcode />, url: "https://leetcode.com", label: "LeetCode", color: "text-amber-600 dark:text-amber-400" },
        { icon: <SiHackerrank />, url: "https://www.hackerrank.com/profile/nagaruthwikmeru1", label: "HackerRank", color: "text-green-600 dark:text-green-400" }
    ];

    const contactLinks = [
        {
            href: "mailto:nagaruthwikmerugu162@gmail.com",
            label: "Email",
            icon: <FiMail className="text-indigo-600 dark:text-indigo-400" />,
            classes: "bg-black/20 dark:bg-white/20 text-black dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600",
        },
        {
            href: "tel:+919182216089",
            label: "+91 91822 16089",
            icon: <FiPhone className="text-green-600 dark:text-green-400" />,
            classes: "bg-black/20 dark:bg-white/20 text-black dark:text-white hover:bg-green-600 hover:text-white dark:hover:bg-green-600",
        },
        {
            href: assets.resume,
            label: "Download CV",
            icon: <FiDownload className="text-indigo-600 dark:text-indigo-400" />,
            classes: "bg-indigo-600 text-white hover:bg-indigo-700",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pre-style for better performance
            gsap.set(homeRef.current, {
                willChange: 'transform, opacity, filter',
                transformOrigin: 'center center'
            });

            gsap.set(contentRef.current, {
                willChange: 'transform, opacity'
            });

            // Responsive media match
            ScrollTrigger.matchMedia({
                "(min-width: 768px)": () => {
                    // Main timeline for entrance & parallax
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: homeRef.current,
                            start: 'top 70%',
                            end: 'bottom 20%',
                            scrub: 1.5,
                            markers: false
                        }
                    });

                    // Entrance effect
                    tl.fromTo(homeRef.current,
                        {
                            y: 100,
                            scale: 0.98,
                            opacity: 0.6,
                            filter: 'blur(0.5px)'
                        },
                        {
                            y: 0,
                            scale: 1.03,
                            opacity: 1,
                            filter: 'blur(0px)',
                            ease: 'power3.out',
                            duration: 1
                        }
                    );

                    // Parallax "exit" effect while scrolling up
                    tl.to(homeRef.current,
                        {
                            y: -150,
                            scale: 0.95,
                            opacity: 0.8,
                            ease: 'power3.inOut',
                            duration: 1
                        }
                    );
                }
            });

            // Depth animation for content
            gsap.fromTo(contentRef.current,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none restart none'
                    }
                }
            );
        }, homeRef); // scoped animations for better cleanup

        return () => ctx.revert(); // cleanup on unmount
    }, []);


    // Rest of the component remains the same...
    return (
        <div
            ref={ref}
            className="relative px-4 md:pt-80 pt-40 md:pb-20 md:px-10 bg-white dark:bg-gradient-to-br dark:bg-[#0a0518] text-black dark:text-white overflow-hidden"
        >
            <StarBackground />

            {/* Background overlays */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none" />

            {/* Custom cursor follower for name hover */}
            <div
                ref={cursorRef}
                className="fixed w-8 h-8 rounded-full bg-indigo-400/30 border-2 border-indigo-400 pointer-events-none z-20 opacity-0 transition-opacity duration-300 mix-blend-exclusion"
                style={{ transform: 'translate(-50%, -50%)' }}
            />

            <div ref={homeRef} className="max-w-7xl mx-auto relative z-10">
                <div ref={contentRef} className="code-card w-full p-4 rounded-2xl border border-white/60 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:shadow-[0_0_70px_rgba(124,58,237,0.2)] backdrop-blur-sm">
                    {/* Rest of your content remains exactly the same... */}
                    <div className="p-6 bg-gray-100 dark:bg-gray-800/90 rounded-xl shadow-md">
                        {/* All your existing content */}
                        <div className="p-6 bg-gray-100 dark:bg-gray-800/90 rounded-xl shadow-md">
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
                                {/* Text Content */}
                                <div className="flex-1 space-y-6 md:space-y-8">
                                    {/* Name */}
                                    <div
                                        ref={nameContainerRef}
                                        className="space-y-2 relative"
                                    >
                                        <motion.h1
                                            initial="hidden"
                                            animate={inView ? "visible" : "hidden"}
                                            className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight flex flex-wrap"
                                        >
                                            {"Merugu".split("").map((char, index) => (
                                                <motion.span
                                                    key={index}
                                                    variants={fadeRotateLeft(0.07 * index)}
                                                    className="inline-block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
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
                                            className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight flex flex-wrap"
                                        >
                                            {"Naga Ruthwik".split("").map((char, index) => (
                                                <motion.span
                                                    key={index}
                                                    variants={fadeRotate(0.05 * index)}
                                                    className="inline-block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
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

                                    {/* Contact Buttons */}
                                    <motion.div
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={fadeLeft}
                                        className="grid grid-cols-2 md:flex md:flex-wrap gap-3"
                                    >
                                        {contactLinks.map((link, index) => (
                                            <motion.a
                                                key={index}
                                                href={link.href}
                                                target={link.target}
                                                rel={link.rel}
                                                custom={index}
                                                initial="hidden"
                                                animate={inView ? "visible" : "hidden"}
                                                variants={fadeRight}
                                                className={`flex items-center gap-2 md:px-4 px-1 justify-center py-2 rounded-lg transition-all hover:scale-[1.02] ${link.classes}`}
                                                whileHover={{ y: -2 }}
                                            >
                                                {link.icon}
                                                <span className="text-sm md:text-base whitespace-nowrap">{link.label}</span>
                                            </motion.a>
                                        ))}

                                        <motion.div
                                            custom={contactLinks.length}
                                            initial="hidden"
                                            animate={inView ? "visible" : "hidden"}
                                            variants={fadeRight}
                                            className="flex items-center gap-2 bg-black/20 dark:bg-white/20 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors"
                                        >
                                            <FiMapPin className="text-red-600 dark:text-red-400" />
                                            <span className="text-sm md:text-base">Hyderabad, Telangana</span>
                                        </motion.div>
                                    </motion.div>

                                    {/* Social Links */}
                                    <motion.div
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={fadeDown(0.5)}
                                        className="flex gap-4 md:gap-5"
                                    >
                                        {socialLinks.map(({ icon, url, label, color }, index) => (
                                            <motion.a
                                                key={index}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={label}
                                                custom={index}
                                                initial="hidden"
                                                animate={inView ? "visible" : "hidden"}
                                                variants={fadeDown(0.3 + index * 0.1)}
                                                whileHover={{ y: -5, scale: 1.1 }}
                                                className={`p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all ${color}`}
                                            >
                                                {icon}
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Profile Image */}
                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={imageVariants}
                                    whileHover="hover"
                                    className="relative group shrink-0"
                                >
                                    <div className="rounded-xl shadow-[0_0_100px_rgba(250,200,50,0.2)] dark:shadow-[0_0_70px_rgba(124,58,237,0.3)] overflow-hidden relative">
                                        <img
                                            src={assets.profile}
                                            alt="Naga Ruthwik Merugu"
                                            className="h-60 w-48 md:h-80 md:w-64 object-cover rounded-xl"
                                        />
                                        <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-indigo-300/40 transition-all duration-300 pointer-events-none" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </div>
                                    <motion.div
                                        className="absolute -bottom-3 -right-3 bg-indigo-600 text-white px-3 py-1 rounded-full shadow-md text-xs md:text-sm font-medium flex items-center gap-1 z-10"
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
                                                scale: [0.8, 1.2, 0.8],
                                                opacity: [0.6, 1, 0.6],
                                                boxShadow: ['0 0 0 0 rgba(74, 222, 128, 0)', '0 0 5px 2px rgba(74, 222, 128, 0.7)', '0 0 0 0 rgba(74, 222, 128, 0)']
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        Available
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Description */}
                            <motion.p
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="mt-8 md:mt-10 text-gray-700 dark:text-gray-300 text-sm md:text-md leading-relaxed"
                            >
                                {"I'm a passionate Full Stack Developer with experience building responsive, scalable web apps using React.js, Spring Boot, the MERN stack, HTML, CSS, JavaScript, and MySQL. I'm currently pursuing a B.Tech in Computer Science at Malla Reddy University. Right now, I'm also doing an internship (May 25 – August 25, 2025), where I'm gaining real-world experience and improving my development skills."
                                    .split(" ")
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            variants={fadeRotateDown(0.03 * index)}
                                            className="inline-block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-100"
                                        >
                                            {word}&nbsp;
                                        </motion.span>
                                    ))}
                            </motion.p>

                            {/* Stats */}
                            <motion.div
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-12"
                            >
                                {[
                                    { value: "1+", label: "Years Experience" },
                                    { value: "10+", label: "Projects Completed" },
                                    { value: "100%", label: "Client Satisfaction" },
                                    { value: "Full-Stack", label: "Specialization" }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        custom={i}
                                        variants={statVariant}
                                        className="bg-black/20 dark:bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all text-center"
                                        whileHover={{ y: -5 }}
                                    >
                                        <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-full mt-10 md:mt-12 origin-left"
            />
        </div>
    );
};

export default Profile;