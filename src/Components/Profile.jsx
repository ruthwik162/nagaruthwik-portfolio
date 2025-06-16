import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Profile = () => {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

    const fadeUp = (delay = 0) => ({
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay,
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    });

    const fadeRight = {
        hidden: { x: 80, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.5,
                duration: 1,
                type: "spring",
                damping: 10
            }
        },
        hover: {
            scale: 1.05,
            rotate: 1,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const statVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.8 + i * 0.1, duration: 0.6 }
        })
    };

    const socialLinks = [
        { icon: <FiGithub />, url: "https://github.com/ruthwik162", label: "GitHub", color: "text-gray-800 dark:text-gray-200" },
        { icon: <FiLinkedin />, url: "https://linkedin.com/in/nagaruthwikmerugu", label: "LinkedIn", color: "text-blue-600 dark:text-blue-400" },
        { icon: <FiTwitter />, url: "https://twitter.com", label: "Twitter", color: "text-sky-500 dark:text-sky-400" },
        { icon: <SiLeetcode />, url: "https://leetcode.com", label: "LeetCode", color: "text-amber-600 dark:text-amber-400" }
    ];

    return (
        <div
            ref={ref}
            className="relative px-6 py-20 md:px-16 lg:px-32 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
        >
            {/* Background overlays */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100/20 dark:to-indigo-900/10 pointer-events-none" />

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Textual Info */}
                    <div className="space-y-4 md:space-y-8">
                        <motion.h1
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeRight}
                            className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter"
                        >
                            Merugu
                        </motion.h1>

                        <motion.h2
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeUp(0.2)}
                            className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase ml-4 sm:ml-12 -mt-2 sm:-mt-6 tracking-tighter"
                        >
                            Naga Ruthwik
                        </motion.h2>

                        {/* Contact Buttons */}
                        <motion.div
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeRight}
                            className="flex text-[2.5vw] md:text-[1vw] items-center gap-1 mt-4"
                        >
                            <a
                                href="mailto:nagaruthwikmerugu162@gmail.com"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <FiMail className="text-indigo-600 dark:text-indigo-400" />
                                <span>Email</span>
                            </a>

                            <a
                                href="tel:+919182216089"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <FiPhone className="text-green-600 dark:text-green-400" />
                                <span>+91 91822 16089</span>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1WaTzC-KkzJvtNrAmWWOSKEoas0rXKaQo/view"
                                download
                                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                            >
                                <FiDownload className="text-lg" />
                                Download Resume
                            </a>

                        </motion.div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-3">
                            {socialLinks.map(({ icon, url, label, color }, index) => (
                                <motion.a
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.3 }}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={fadeUp(0.3 + index * 0.1)}


                                    className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 ${color} hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
                                >
                                    {icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Description */}
                        <motion.p
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeUp(0.6)}
                            className="max-w-4xl  font-poppins text-base sm:text-lg text-gray-950 dark:text-gray-300 mt-4"
                        >
                            Passionate Full Stack Developer with hands-on experience in building responsive and scalable web applications using React.js, Spring Boot, the MERN stack, HTML, CSS, JavaScript, and MySQL. Currently pursuing a B.Tech in Computer Science at Malla Reddy University, I excel at transforming complex user requirements into seamless digital solutions. I am also currently interning from May 25th to August 25th, 2025, gaining real-world experience and sharpening my development skills in a professional environment.
                        </motion.p>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}
                        whileHover="hover"
                        className="relative group"
                    >
                        <div className="rounded-xl overflow-hidden relative">
                            <img
                                src={assets.profile}
                                alt="Naga Ruthwik Merugu"
                                className="h-52 w-44 md:h-80 md:w-72 object-cover rounded-xl shadow-lg dark:shadow-gray-800/40"
                            />
                            <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-indigo-300/40 transition-all duration-300 pointer-events-none" />
                        </div>
                        <motion.div
                            className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-4 py-1.5 rounded-full shadow-md text-sm font-medium flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { delay: 1.2, type: "spring" }
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.span
                                className="h-2 w-2 bg-green-400 rounded-full shadow-green-glow"
                                animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.8, 1, 0.8],
                                }}
                                transition={{
                                    duration: 2.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            Available
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    {[
                        { value: "1+", label: "Years Experience" },
                        { value: "10+", label: "Projects Completed" },
                        { value: "100%", label: "Client Satisfaction" },
                        { value: "Full-Stack", label: "Specialization" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={statVariant}
                            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all text-center"
                        >
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent w-full mt-20 md:mt-32 origin-left"
                />
            </div>
        </div>
    );
};

export default Profile;


