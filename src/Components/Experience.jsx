import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import StarBackground from '../ThemeContext/StarBackground';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const homeRef = useRef();
    const contentRef = useRef();
    const experienceRef = useRef([]);
    const titleRef = useRef();
    const subtitleRef = useRef();

    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "Unified Mentor Pvt. Ltd.",
            duration: "May 25, 2025 – Aug 25, 2025",
            description: [
                "Developed and maintained two major MERN stack applications:",
                "➤ A Teacher–Student Appointment Booking System with real-time scheduling, secure login, and admin controls.",
                "➤ An ongoing Operation Theatre Scheduling Management System with optimized workflow, calendar integration, and conflict resolution logic.",
                "Built 5 microservices and utility tools using Express.js to support internal operations.",
                "Implemented RESTful APIs with JWT authentication and role-based access control (RBAC).",
                "Optimized MongoDB and MySQL queries, improving backend response time by 40%.",
                "Collaborated closely with frontend teams to integrate React interfaces with backend logic in an Agile environment."
            ],
            technologies: [
                "MERN Stack", "Express.js", "Node.js", "MongoDB", "MySQL",
                "React", "JWT", "REST APIs", "Firebase", "Docker"
            ]
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
                            y: 50,
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
    return (
        <section

            className="relative px-4 py-20 md:px-10 bg-white dark:bg-[#0a0518] text-black dark:text-white overflow-hidden"
            id="experience"
        >
            <StarBackground />
            <div ref={homeRef}>
                <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16 md:mb-24">
                        <motion.h2
                            ref={titleRef}
                            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4"
                        >
                            Professional Experience
                        </motion.h2>
                        <motion.p
                            ref={subtitleRef}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        >
                            My journey with Express.js and backend development
                        </motion.p>
                    </div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                ref={el => experienceRef.current[index] = el}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                        <p className="text-lg text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                                    </div>
                                    <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full self-start md:self-center">
                                        {exp.duration}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-indigo-500 mt-1">▹</span>
                                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mt-20"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Interested in my backend expertise?
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                                I've also developed 5 minor Express.js applications and microservices. Contact me to learn more.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all shadow-lg"
                            >
                                Get In Touch
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;