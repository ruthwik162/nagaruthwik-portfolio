import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import StarBackground from '../ThemeContext/StarBackground';
import { assets } from '../assets/assets';
import { useTheme } from '../ThemeContext/ThemeContext';


gsap.registerPlugin(ScrollTrigger);

const getRandomGlow = () => {
    const baseColor = 'rgba(124, 58, 237';
    const intensity = (Math.random() * 0.4 + 0.9).toFixed(3); // 0.3–0.7
    const delay = Math.random() * 2;
    const duration = Math.random() * 2 + 3;

    return {
        initial: {
            boxShadow: `0 0 0 0 ${baseColor}, ${intensity})`,
            scale: 1
        },
        animate: {
            boxShadow: [
                `0 0 0 0 ${baseColor}, ${intensity})`,
                `0 0 2px 30px ${baseColor}, 0)`,
                `0 0 0 0 ${baseColor}, ${intensity})`
            ],
            scale: 1,
            transition: {
                duration,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
                delay
            }
        }
    };
};


const Projects = () => {
    const sectionRef = useRef();
    const projectsRef = useRef([]);
    const titleRef = useRef();
    const subtitleRef = useRef();
    const lineRef = useRef();
    const markersRef = useRef([]);
    const projectContainerRef = useRef();
    const lineProgressRef = useRef();
    const { expandedDescriptions, toggleDescription } = useTheme();


    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce web application built with a modern MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to browse products, manage their carts, and securely purchase items using integrated Stripe payment processing. Implemented robust user authentication using JWT tokens, including secure cookie-based login sessions. Admin panel functionality enables product management, order tracking, and user role assignments. The project emphasizes scalable architecture, reusable components, and secure backend practices.",
            features: [
                "Responsive, modern UI built with React and Vite",
                "User authentication and authorization using JWT",
                "Secure login/session management with HTTP-only cookies",
                "Product listing, search, filter, and category-based browsing",
                "Shopping cart with real-time item quantity updates",
                "Stripe-integrated checkout and payment system",
                "Admin dashboard for product and order management",
                "MongoDB Atlas for scalable cloud database storage",
                "Error handling, input validation, and loading states for better UX"
            ],
            technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Axios", "Tailwind CSS"],
            github: "https://github.com/ruthwik162/e-commerce",
            liveDemo: "https://e-commerce-ten-rose-60.vercel.app/",
            image: assets.ecommers
        },

        {
            title: "Teacher-Student Appointment",
            description:
                "A full-stack web application designed to streamline academic scheduling between students and teachers. This project enables seamless booking of appointments, allowing students to view faculty availability by department, book time slots, and receive confirmation—all through an intuitive, responsive interface.\n\nTeachers have their own dashboard to manage, approve, or decline requests and monitor upcoming sessions.\n\nKey Features:\n• Real-time student–teacher appointment booking\n• Department-wise faculty browsing\n• Teacher and student dashboards with appointment history\n• Admin access to update/delete teacher/student and view all appointments\n• Login system with role-based access\n• Smooth UI/UX with animated transitions\n• Fully responsive across devices\n• Deployed on Render with dynamic routing",
            technologies: ["MERN-Stack", "GSAP", "Firebase", "Framer Motion", "SEO", "Tailwind CSS"],
            github: "https://github.com/ruthwik162/teacher-student-appointment",
            liveDemo: "https://teacher-student-appointment-a7hf.onrender.com/",
            image: assets.mainbanner
        },
        {
            title: "Hostel Management Web Application",
            description:
                "Developed a full-stack web application to streamline university hostel operations, with separate dashboards for students and administrators.\n\n🔹 User Features:\n• JWT-based signup & login for secure access\n• Room browsing and plan selection (boys/girls)\n• Razorpay integration for seamless payments\n• Automated room allocation after payment using Razorpay transaction ID\n\n🔹 Admin Features:\n• Admin dashboard for managing room assignments, viewing occupancy, and tracking user activity\n• Complaint system for students to report issues\n• Predictive food planning using regression models to forecast needs\n\n🔧 Stack: Spring Boot REST APIs, React + Tailwind CSS frontend, and Spring Security for role-based access.",
            technologies: ["React", "Spring Boot", "Tailwind CSS", "Razorpay", "Spring Security", "Tailwind CSS"],
            github: "https://github.com/ruthwik162/malla-reddy-university",
            liveDemo: "https://ruthwik162.github.io/malla-reddy-university/",
            image: assets.hostel
        }
    ];

    const pulseGlow = {
        initial: {
            boxShadow: '0 0 0 0 rgba(124, 58, 237, 0.7)',
            scale: 1
        },
        animate: {
            boxShadow: [
                '0 0 0 0 rgba(124, 58, 237, 0.7)',
                '0 0 3px 20px rgba(124, 58, 237, 0)',
                '0 0 10px 0 rgba(124, 58, 237, 0)'
            ],
            scale: 1,
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatDelay: 1
            }
        }
    };

    const imageGlow = {
        initial: {
            boxShadow: '0 0 0 0 rgba(124, 58, 237, 0.7)',
            scale: 1
        },
        animate: {
            boxShadow: [
                '0 0 0 0 rgba(124, 58, 237, 0.7)',
                '0 0 5px 70px rgba(124, 58, 237, 0)',
                '0 0 10px 0 rgba(124, 58, 237, 0)'
            ],
            scale: 1,
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatDelay: 1
            }
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: "elastic.out(1, 0.5)"
            });

            // Subtitle animation
            gsap.from(subtitleRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.4,
                ease: "back.out(1.7)"
            });

            // Vertical line animation
            gsap.fromTo(
                lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    transformOrigin: "top center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: projectContainerRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1,
                    },
                }
            );

            // Line progress indicator
            gsap.to(lineProgressRef.current, {
                scaleY: 1,
                transformOrigin: "top center",
                scrollTrigger: {
                    trigger: projectContainerRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            // Projects animation
            projectsRef.current.forEach((project, index) => {
                gsap.from(project, {
                    scrollTrigger: {
                        trigger: project,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    delay: index * 0.15,
                    ease: "back.out(1.2)"
                });

                const img = project.querySelector('.project-image img');
                gsap.from(img, {
                    scrollTrigger: {
                        trigger: project,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    scale: 0.9,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out"
                });

                // Marker animation
                gsap.from(markersRef.current[index], {
                    scrollTrigger: {
                        trigger: project,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    },
                    scale: 0,
                    opacity: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.5)"
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id='projects'
            ref={sectionRef}
            className="relative px-4 py-20 md:px-10 bg-white dark:bg-[#0a0518] text-black dark:text-white overflow-hidden"
        >
            <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
                <div className="absolute inset-0 bg-grid-pattern dark:opacity-30"></div>
            </div>
            <StarBackground />

            <div className="max-w-9xl md:px-24 mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        ref={titleRef}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        A showcase of my work with diverse technologies and creative solutions.
                    </motion.p>
                </div>

                <div ref={projectContainerRef} className="relative">
                    {/* Vertical timeline line container */}
                    <div className="absolute md:block hidden left-1/2 md:left-10 top-0 h-full w-0.5 transform -translate-x-1/2 md:translate-x-0 z-0 overflow-hidden">
                        {/* Static line */}
                        <div
                            ref={lineRef}
                            className="h-full w-0.5 origin-top bg-gradient-to-b from-indigo-500/30 via-indigo-500 to-indigo-500/30 dark:shadow-[0_0_150px_rgba(99,102,241,0.2)] rounded-full transform"
                        >
                            {/* Progress Line */}
                            <div
                                ref={lineProgressRef}
                                className="absolute top-0 left-0 h-full w-1bg-gradient-to-b from-indigo-500 to-purple-500/40 rounded-full scale-y-0 origin-top"
                            />
                        </div>
                    </div>

                    {/* Starting circle */}
                    <div className="absolute md:block hidden left-1/2 md:left-10 top-0 h-5 w-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-white dark:border-[#0a0518] z-10 transform -translate-x-1/2 md:-translate-x-2" />

                    <div className="space-y-12 md:space-y-12 ml-0 md:ml-20">

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                ref={el => projectsRef.current[index] = el}
                                className="grid grid-cols-1 rounded-xl md:grid-cols-5 gap-8 items-center relative z-10"
                            >
                                <motion.div
                                    ref={el => markersRef.current[index] = el}
                                    variants={pulseGlow}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute -left-[15%]  md:-left-[4.1%] top-1/2 h-5 w-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-white dark:border-[#0a0518] z-10 transform -translate-y-1/2"
                                />

                                {/* Project Image */}
                                <motion.div
                                    className="project-image rounded-2xl md:col-span-2"
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7 }}
                                    variants={getRandomGlow()}
                                    initial="initial"
                                    animate="animate"
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <div className="relative h-64 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <span className="text-white text-lg font-medium">{project.title}</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Project Content */}
                                <div className="md:col-span-3">
                                    <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
                                        Project {index + 1} of {projects.length}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                                        {project.title}
                                    </h3>
                                    <p
                                        className={`text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line transition-all cursor-pointer ${expandedDescriptions[index] ? '' : 'line-clamp-4'
                                            }`}
                                        onClick={() => toggleDescription(index)}
                                    >
                                        {project.description}
                                    </p>

                                    {!expandedDescriptions[index] ? (
                                        <button
                                            onClick={() => toggleDescription(index)}
                                            className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-6"
                                        >
                                            Read more
                                        </button>
                                    ) : <button
                                        onClick={() => toggleDescription(index)}
                                        className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-6"
                                    >
                                        Read Less
                                    </button>
                                    }

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ y: -3 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full shadow-sm hover:shadow-md transition-all"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variants={pulseGlow}
                                                initial="initial"
                                                animate="animate"
                                                whileHover={{ y: -3, scale: 1.03 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm hover:shadow-md"
                                            >
                                                <FiGithub className="text-lg" />
                                                <span>View Code</span>
                                            </motion.a>
                                        )}
                                        {project.liveDemo && (
                                            <motion.a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -3, scale: 1.03 }}
                                                whileTap={{ scale: 0.95 }}
                                                variants={pulseGlow}
                                                initial="initial"
                                                animate="animate"
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
                                            >
                                                <FiExternalLink className="text-lg" />
                                                <span>Live Demo</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mt-28 md:mt-32"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Want to see more projects?
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        Explore my GitHub for additional work, contributions, and experiments with various technologies.
                    </p>
                    <motion.a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                        <FiGithub className="mr-2 text-xl" />
                        Visit My GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;