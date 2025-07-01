import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarBackground from '../ThemeContext/StarBackground';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef();
    const titleRef = useRef();
    const cardsRef = useRef([]);
    const contentRef = useRef();
    const homeRef = useRef();
    const lineRef = useRef(null);
    const lineProgressRef = useRef(null);
    const projectContainerRef = useRef(null);

    const educationData = [
        {
            id: 1,
            degree: "B.Tech in Computer Science & Engineering",
            institution: "Malla Reddy University",
            location: "Hyderabad, Telangana, India",
            period: "August 2022 - March 2026 (Present- Final Year)",
            score: "CGPA: 8.0",
            description: "Currently pursuing my Bachelor's degree in Computer Science with a focus on software development, algorithms, and data structures. Coursework includes web development, database systems.",
            icon: "🎓"
        },
        {
            id: 2,
            degree: "Intermediate (MPC)",
            institution: "Vidwam Junior College",
            location: "Hanamkonda District, Telangana, India",
            period: "2020 - 2022",
            score: "Score: 80.05%",
            description: "Completed intermediate education with Mathematics, Physics, and Chemistry. Developed strong foundational knowledge in science and mathematics that prepared me for engineering studies.",
            icon: "📚"
        }
    ];
    const academicJourney = [
        {
            year: 2020,
            title: "Intermediate",
            score: "80.05%",
            description: "Completed MPC with distinction",
            icon: "📚"
        },
        {
            year: 2022,
            title: "B.Tech Started",
            score: "Ongoing",
            description: "Started CSE at Malla Reddy University",
            icon: "🎓"
        },
        {
            year: 2026,
            title: "Graduation",
            score: "Expected",
            description: "Expected CGPA: 8.0+",
            icon: "🏆"
        }
    ];

    // GSAP animations
    useLayoutEffect(() => {
        if (!cardsRef.current.length) return;

        const ctx = gsap.context(() => {
            // Scroll animations
            gsap.to(sectionRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                y: 50,
                ease: "none"
            });

            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            if (!lineRef.current || !lineProgressRef.current || !projectContainerRef.current) return;

            // Line grow animation
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


            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "back.out(1.2)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [cardsRef.current.length]);

    // Animations
    const fadeUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(homeRef.current, {
                willChange: 'transform, opacity, filter',
                transformOrigin: 'center center'
            });

            gsap.set(contentRef.current, {
                willChange: 'transform, opacity'
            });

            ScrollTrigger.matchMedia({
                "(min-width: 768px)": () => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: homeRef.current,
                            start: 'top 70%',
                            end: 'bottom 20%',
                            scrub: 1.5,
                            markers: false
                        }
                    });

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
        }, homeRef);

        return () => ctx.revert();
    }, []);

    return (
        <motion.div
            id="education"
            className="relative px-4 md:py-20 py-20 md:px-10 bg-white dark:bg-[#0a0518] text-black dark:text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <StarBackground />
            <div ref={homeRef}>
                <div ref={contentRef} className="max-w-9xl mx-auto relative z-10">
                    <div className="text-center mb-12 md:mb-16">
                        <motion.h2
                            ref={titleRef}
                            className="text-[6vw] md:text-5xl font-bold mb-4 text-black dark:text-gray-100"
                        >
                            My <span className="text-indigo-600 dark:text-indigo-400">Education</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-md md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
                        >
                            My academic journey and qualifications that shape my technical expertise
                        </motion.p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-10 w-full mx-auto'>
                        {/* Timeline visualization */}
                        <div className="flex flex-col  md:flex-row w-full max-w-7xl gap-10">

                            <div ref={projectContainerRef} className="relative hidden md:flex flex-col items-center w-[60px]">
                                {/* Background Line */}
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


                                {/* Top Dot (2022 - 2026) */}
                                <div className="absolute -top-4 -left-5 w-24 h-8 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-[#0a0518] flex items-center justify-center shadow-md">
                                        <span className="text-white font-bold text-[9px] text-center leading-tight">

                                        </span>
                                    </div>
                                </div>

                                {/* Mid Dot (2020 - 2022) */}
                                <div className="absolute top-1/2 -left-5 w-24 h-8 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-[#0a0518] flex items-center justify-center shadow-md">
                                        <span className="text-white font-bold text-[9px] text-center leading-tight">

                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Education Cards */}
                            <div className="grid grid-cols-1 md:flex-row   gap-8 w-full">
                                {educationData.map((edu, index) => (
                                    <motion.div
                                        key={edu.id}
                                        ref={(el) => (cardsRef.current[index] = el)}
                                        className="code-card md:flex-row w-full p-5 rounded-2xl  border border-black/10 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:border-white/60 shadow-lg  backdrop-blur-sm"
                                        whileHover={{
                                            y: -10,

                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <div className="flex flex-col  h-full p-6 dark:shadow-[0_0_70px_rgba(124,58,237,10)] bg-white dark:bg-gray-900 rounded-xl shadow-md">
                                            <div className="flex items-start mb-4">
                                                <div className="text-3xl mr-4">{edu.icon}</div>
                                                <div>
                                                    <h3 className="text-xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                                                        {edu.degree}
                                                    </h3>
                                                    <div className="flex items-center mt-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                        </svg>
                                                        <span className="text-md font-medium text-gray-700 dark:text-gray-300">{edu.institution}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-grow">
                                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                    {edu.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mt-4">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{edu.period}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{edu.location}</span>
                                                </div>
                                            </div>

                                            <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-800">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Performance:</span>
                                                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{edu.score}</span>
                                                </div>
                                                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                                                    <div
                                                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
                                                        style={{ width: edu.id === 1 ? '80%' : '80.05%' }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>

                        </div>
                        {/* Progress Visualization */}


                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;