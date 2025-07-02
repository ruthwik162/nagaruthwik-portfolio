import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { dummyImages } from '../assets/assets';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarBackground from '../ThemeContext/StarBackground';
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiTailwindcss,
  SiSpring, SiMysql, SiHtml5, SiCss3, SiGit, SiDocker, SiGraphql, SiGithub,
  SiPostman, SiFigma, SiFirebase, SiJira
} from 'react-icons/si';
import { FaAws } from "react-icons/fa"; // From FontAwesome

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const particlesRef = useRef([]);
  const [pic, setPic] = useState([]);
  const sectionRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const toolsRef = useRef([]);
  const contentRef = useRef();
  const homeRef = useRef();

  // Skill categories data
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

  ];

  const tools = [
    { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-gray-200" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Aws", icon: <FaAws  className="text-purple-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
  ];

  // Set dummy images
  useEffect(() => {
    setPic(dummyImages);
    imagesRef.current = new Array(dummyImages.length);
    toolsRef.current = new Array(tools.length);
  }, []);

  // Initialize card refs
  useEffect(() => {
    cardsRef.current = new Array(skillCategories.length);
  }, []);

  // GSAP animations
  useLayoutEffect(() => {
    if (!cardsRef.current.length || !imagesRef.current.length || !toolsRef.current.length) return;

    const ctx = gsap.context(() => {
      // Particles animation
      particlesRef.current.forEach((particle, i) => {
        gsap.to(particle, {
          y: gsap.utils.random(-50, 50),
          x: gsap.utils.random(-30, 30),
          rotation: gsap.utils.random(0, 360),
          duration: gsap.utils.random(3, 16),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.01
        });
      });

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
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        }
      });

      // Enhanced floating animation for images
      imagesRef.current.forEach((img, index) => {
        if (img) {
          // Initial animation
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

          // Continuous floating effect
          gsap.to(img, {
            y: -15,
            duration: gsap.utils.random(2, 4),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 2)
          });

          // Subtle rotation
          gsap.to(img, {
            rotation: gsap.utils.random(-5, 5),
            duration: gsap.utils.random(3, 6),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 2)
          });

          // Scroll parallax effect
          gsap.to(img, {
            y: -20,
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });

      // Enhanced animations for tools
      toolsRef.current.forEach((tool, index) => {
        if (tool) {
          // Initial animation
          gsap.from(tool, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: tool,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          });

          // Continuous floating effect
          gsap.to(tool, {
            y: -10,
            duration: gsap.utils.random(2, 5),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 3)
          });

          // Subtle rotation
          gsap.to(tool, {
            rotation: gsap.utils.random(-3, 3),
            duration: gsap.utils.random(4, 8),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 3)
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [cardsRef.current.length, imagesRef.current.length, toolsRef.current.length]);

  // Animations
  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
  };

  const fadeDown = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
  };

  const fadeLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const fadeRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

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

  return (
    <motion.div
      id="skills"
      className="relative px-4 md:py-20 py-20 md:px-10 bg-white dark:bg-[#0a0518] text-black dark:text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <StarBackground />
      <div ref={homeRef}>
        <div ref={contentRef} className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              ref={titleRef}
              className="text-[6vw] md:text-5xl font-bold mb-4 text-black dark:text-gray-100"
            >
              My Skills
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="text-md md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            >
              Here are the technologies I work with and my proficiency level in each.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-col w-full max-w-9xl items-start justify-center gap-6 md:gap-14">
            {/* Skill Cards */}
            <div className="flex flex-col gap-5 md:gap-10 w-full md:w-full">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  variants={index % 2 === 0 ? fadeRight : fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="code-card max-w-5xl  w-full p-4 mx-auto rounded-2xl border border-white/60 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:shadow-[0_0_0px_rgba(124,58,237,20)]">
                    <div className="p-6 bg-gray-100 dark:shadow-[0_0_70px_rgba(124,58,237,10)] dark:bg-gray-800 rounded-xl shadow-md w-full">
                      <h1 className="font-bold text-lg md:text-2xl mb-4 text-gray-800 dark:text-white">
                        {category.title}
                      </h1>
                      <div className="space-y-3">
                        {category.skills.map((skill, i) => (
                          <div key={i} className="skill-item ">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <div className="text-xl">{skill.icon}</div>
                                <span className="text-sm md:text-md font-medium text-gray-700 dark:text-gray-300">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200  dark:bg-gray-700 rounded-full h-2">
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

            {/* Image Grid + Tools */}
            <div className="w-full md:w-full max-w-9xl flex flex-col  items-center  justify-center md:flex-row gap-12 md:gap-28">
              <motion.div
                variants={fadeDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-3 p-6 gap-6 rounded-xl border border-black/10 bg-[#0a0615]/20 dark:bg-indigo-400/25  dark:border-white/60"
              >
                {pic.map((element, index) => (
                  <motion.div
                    key={index}
                    ref={(el) => (imagesRef.current[index] = el)}
                    className="code-card w-full  p-2 md:p-4 rounded-md shadow-md "
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="flex h-30 w-auto flex-col items-center dark:shadow-[0_0_70px_rgba(124,58,237,10)] justify-center overflow-hidden rounded-xl aspect-square">
                      <motion.img
                        src={element.img}
                        alt={element.name}
                        className="md:w-20  md:h-20 h-24 w-24 dark:shadow-[0_0_70px_rgba(124,58,237,10)] rounded-lg object-cover"
                        whileHover={{ scale: 1.15 }}
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

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border md:w-[500px] w-[340px] md:h-[335px] border-black/10 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:border-white/60"
              >
                <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                  Tools & Technologies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      ref={(el) => (imagesRef.current[index] = el)}
                      whileHover={{
                        y: -8,
                        scale: 1.1,
                        rotate: [0, -3, 3, -3, 0],
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                          duration: 0.5
                        }
                      }}
                      className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg dark:shadow-[0_0_70px_rgba(124,58,237,10)] shadow-md hover:shadow-lg transition-shadow"
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
    </motion.div>
  );
};

export default Skill;