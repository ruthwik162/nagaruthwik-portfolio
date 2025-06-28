import React, { useState, useEffect, useRef } from 'react';
import { dummyImages } from '../assets/assets';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarBackground from '../ThemeContext/StarBackground';
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiTailwindcss,
  SiSpring,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiGraphql,
  SiGithub,
  SiPostman,
  SiFigma,
  SiFirebase,
  SiJira
} from 'react-icons/si';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const particlesRef = useRef([]);
  const [pic, setPic] = useState([]);
  const sectionRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    setPic(dummyImages);
  }, []);

  useEffect(() => {
    // Floating particles animation
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        y: gsap.utils.random(-50, 50),
        x: gsap.utils.random(-30, 30),
        rotation: gsap.utils.random(0, 360),
        duration: gsap.utils.random(3, 16),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.01,
      });
    });

    // GSAP animations with ScrollTrigger
    const ctx = gsap.context(() => {
      // Section parallax effect
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

      // Title animation
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

      // Card animations
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });

      // Image grid animations
      imagesRef.current.forEach((img, index) => {
        gsap.from(img, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });

        // Parallax effect for images
        gsap.to(img, {
          y: -20,
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Animation Variants
  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const fadeDown = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const fadeLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const fadeRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  // Skill categories data with icons
  const skillCategories = [
    {
      title: "MERN-Stack Techniques",
      skills: [
        { name: "MongoDB", level: 85, icon: <SiMongodb className="text-green-500" /> },
        { name: "Express.js", level: 80, icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
        { name: "React.js", level: 90, icon: <SiReact className="text-blue-500" /> },
        { name: "Node.js", level: 85, icon: <SiNodedotjs className="text-green-600" /> },
        { name: "JavaScript", level: 95, icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
    {
      title: "Java + Spring Boot",
      skills: [
        { name: "Spring Boot", level: 80, icon: <SiSpring className="text-green-500" /> },
        { name: "MySQL", level: 75, icon: <SiMysql className="text-blue-500" /> },
        { name: "REST API", level: 85, icon: <span className="text-purple-500 font-bold">API</span> },
        { name: "JPA / Hibernate", level: 75, icon: <span className="text-indigo-500 font-bold">JPA</span> }
      ]
    }
  ];

  // Tools data with icons
  const tools = [
    { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-gray-200" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ];

  return (
    <div
      id="skills"
      
      className="relative px-4 md:py-20 py-20 md:px-10 bg-white dark:bg-[#0a0518] text-black dark:text-white overflow-hidden"
    >
      <StarBackground />
      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            ref={titleRef}
            className="text-[6vw] md:text-5xl font-bold mb-4 bg-clip-text text-black dark:text-gray-100"
          >
            My Skills
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-md md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Here are the technologies I work with and my proficiency level in each.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-14">
          {/* Skill Cards */}
          <div className="flex flex-col gap-5 md:gap-10 w-full md:w-2/3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                ref={el => cardsRef.current[index] = el}
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="code-card max-w-5xl w-full p-4 mx-auto rounded-2xl border border-white/60 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:shadow-[0_0_10px_rgba(124,58,237,20)]">
                  <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md w-full">
                    <h1 className="font-bold text-lg md:text-2xl mb-4 text-gray-800 dark:text-white">
                      {category.title}
                    </h1>
                    <div className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="skill-item">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div className="text-xl">
                                {skill.icon}
                              </div>
                              <span className="text-sm md:text-md font-medium text-gray-700 dark:text-gray-300">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            {/* Image Grid */}
            <motion.div
              variants={fadeDown}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-3 p-6 gap-6 rounded-xl border border-black/10 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:border-white/60 dark:shadow-[0_0_10px_rgba(124,58,237,2)]"
            >
              {pic.map((element, index) => (
                <motion.div
                  key={index}
                  ref={el => imagesRef.current[index] = el}
                  className="code-card w-full bg-black/25 p-4 rounded-md shadow-md dark:shadow-[0_0_70px_rgba(124,58,237,10)] transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="flex h-30 w-auto flex-col items-center justify-center overflow-hidden rounded-xl aspect-square shadow-inner transition-all duration-300">
                    <motion.img
                      src={element.img}
                      alt={element.name}
                      className="md:w-20 md:h-20 h-24 w-24 rounded-lg object-cover"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-center mt-1">
                    <span className="inline-block h-2 w-2 bg-green-600 rounded-full m-auto"></span>
                    <p className="w-full text-sm text-center text-gray-800 dark:text-gray-200">
                      {element.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-black/10 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:border-white/60 dark:shadow-[0_0_10px_rgba(124,58,237,2)]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm"
                  >
                    <div className="w-10 h-10 mb-2 flex items-center justify-center text-2xl">
                      {tool.icon}
                    </div>
                    <span className="text-xs md:text-sm text-center font-medium text-gray-700 dark:text-gray-300">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;