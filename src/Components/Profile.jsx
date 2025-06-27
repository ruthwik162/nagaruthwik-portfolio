import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiTwitter } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';

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
    const fadeRotate = (delay = 0) => ({
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay,
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    });
    const fadeRotateLeft = (delay = 0) => ({
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1.2,
            transition: {
                delay,
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    });

    const fadeRight = {
        hidden: {
            y: 80,
            opacity: 0,
        },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.8 + i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 60,
                damping: 14,
            },
        }),
    };
    const fadeDown = (delay = 0) => ({
        hidden: {
            y: -40,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    });


    const fadeLeft = {
        hidden: {
            x: -80,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 14,
                delay: 0.1, // optional: fine-tune or remove
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
        { icon: <SiLeetcode />, url: "https://leetcode.com", label: "LeetCode", color: "text-amber-600 dark:text-amber-400" },
        { icon: <SiHackerrank />, url: "https://www.hackerrank.com/profile/nagaruthwikmeru1", label: "LeetCode", color: "text-amber-600 dark:text-amber-400" }

    ];
    const contactLinks = [
        {
            href: "mailto:nagaruthwikmerugu162@gmail.com",
            label: "Email",
            icon: <FiMail className="text-indigo-600 dark:text-indigo-400" />,
            classes: "bg-black/20 dark:bg-white/20 text-black dark:text-white",
        },
        {
            href: "tel:+919182216089",
            label: "+91 91822 16089",
            icon: <FiPhone className="text-green-600 dark:text-green-400" />,
            classes: "bg-black/20 dark:bg-white/20 text-black dark:text-white text-[3vw] md:text-[1vw]",
        },
        {
            href: "https://drive.google.com/file/d/1OE-B7-Kz7AurNWbsBh4zVo9yxRJ6sUUE/view",
            label: "Download Resume",
            icon: <FiDownload className="text-lg" />,
            classes: "bg-black/40 dark:bg-white/20 text-white text-[3vw] md:text-[1vw]",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ];


    return (
        <div
            ref={ref}
            className="relative px-6 py-10 md:py-20 md:px-16 lg:px-32 bg-white bg-gradient-to-b dark:from-[#0f0621] dark:via-[#20124d] dark:to-[#3b1f80] text-black dark:text-white overflow-hidden"
        >
            {/* Background overlays */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100/20 dark:to-indigo-900/10 pointer-events-none" />

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 md:mt-20 gap-10">
                    {/* Textual Info */}
                    <div className="space-y-4 md:mt-20 md:space-y-8">

                        <div className='flex flex-col items-center  transform -translate-x-16 md:items-center justify-center md:justify-center gap-6'>
                            <motion.h1
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                style={{ textShadow: " 0_0_150px_rgba(250,200,50,0.3)" }}


                                className="text-4xl sm:text-6xl  md:text-7xl font-bold  transform -translate-x-20 items-stretch justify-start  uppercase gap-5 ml-4 sm:ml-12 -mt-2 sm:-mt-6 tracking-tighter flex flex-wrap"
                            >
                                {"Merugu".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={fadeRotateLeft(0.14 * index)}
                                        className="inline-block  "
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            <motion.h2
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase ml-4 sm:ml-12 -mt-2 sm:-mt-6 tracking-tighter flex flex-wrap"
                            >
                                {"Naga Ruthwik".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={fadeRotate(0.09 * index)}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                        </div>


                        {/* Contact Buttons */}
                        <motion.div
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeLeft}
                            custom={0.3}
                            className="grid grid-cols-2  md:flex md:flex-row items-center justify-center md:justify-start gap-2 mt-4"
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
                                    variants={fadeRight} // or fadeLeft
                                    aria-label={link.label}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${link.classes}`}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </motion.a>
                            ))}

                            <motion.div
                                custom={contactLinks.length}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={fadeRight}
                                className="flex items-center gap-2 bg-black/20 dark:bg-white/20 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-default"
                            >
                                <FiMapPin className="text-red-600 dark:text-red-400" />
                                <span className="text-[2vw] md:text-[1vw]">Hyderabad, Telangana</span>
                            </motion.div>

                        </motion.div>


                        {/* Social Links */}
                        <div className="flex gap-7 md:gap-7  mt-3">
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
                                    variants={fadeDown(0.3 + index * 0.1)}


                                    className={`p-2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 ${color} hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
                                >
                                    {icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Description */}

                    </div>

                    {/* Profile Image */}
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}
                        whileHover="hover"
                        className="relative group"
                    >
                        <div className="rounded-xl shadow-[0_0_150px_rgba(250,200,50,0.3)] dark:shadow-[0_0_70px_rgba(124,58,237,20)] overflow-hidden relative">
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
                                    scale: [0.5, 1, 0.5],
                                    opacity: [0.4, 1, 0.4],
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
                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="max-w-4xl font-poppins text-sm sm:text-lg text-gray-950 dark:text-gray-300 mt-4 flex flex-wrap gap-1"
                >
                    {"I’m a passionate Full Stack Developer with experience building responsive, scalable web apps using React.js, Spring Boot, the MERN stack, HTML, CSS, JavaScript, and MySQL. I'm currently pursuing a B.Tech in Computer Science at Malla Reddy University. Right now, I'm also doing an internship (May 25 – August 25, 2025), where I'm gaining real-world experience and improving my development skills."
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                variants={fadeRotate(0.05 * index)}
                                className="inline-block"
                            >
                                {word}&nbsp;
                            </motion.span>
                        ))}
                </motion.p>


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
                            className="bg-black/20 dark:bg-white/20 backdrop-blur p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all text-center"
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
                    className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent w-full mt-10 md:mt-12 origin-left"
                />
            </div>
        </div>
    );
};

export default Profile;

