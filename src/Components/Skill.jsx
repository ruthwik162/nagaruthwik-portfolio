import React, { useState, useEffect, useRef } from 'react';
import { dummyImages } from '../assets/assets';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Skill = () => {
  const particlesRef = useRef([]);
  const [pic, setPic] = useState([]);

  useEffect(() => {
    setPic(dummyImages);
  }, []);

  useEffect(() => {
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

  const fadeRightImage = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <div
      id="skills"
      className="relative py-24 px-4 min-h-screen font-fancy sm:px-8 md:px-12 bg-white bg-gradient-to-b dark:from-[#3b1f80] dark:via-[#20124d] dark:to-[#3b1f80] text-gray-800 dark:text-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14">
          {/* Skill Cards */}
          <div className="flex flex-col gap-5 md:gap-10 w-full md:w-2/3">
            {/* MERN Stack Card */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="code-card max-w-5xl w-full p-4 mx-auto rounded-2xl border border-white/60 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:shadow-[0_0_70px_rgba(124,58,237,20)]">
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md w-full">
                  <h1 className="font-bold text-lg md:text-2xl mb-4 text-gray-800 dark:text-white">
                    MERN-Stack Techniques
                  </h1>
                  <ul className="flex flex-wrap  gap-5 md:gap-7 text-sm md:text-md mt-2">
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />MongoDB</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />Express.js</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />React.js</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />Node.js</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />JavaScript</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Java + Spring Boot Card */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="code-card max-w-5xl w-full p-4 mx-auto rounded-2xl border border-white/60 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:shadow-[0_0_20px_rgba(124,58,237,20)]">
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md w-full">
                  <h2 className="font-bold text-xl md:text-2xl mb-4 text-gray-800 dark:text-white">
                    Java + Spring Boot
                  </h2>
                  <ul className="flex flex-wrap gap-5 md:gap-7 text-sm md:text-md mt-2">
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />Java</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />Spring Boot</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />MySQL</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />REST API</li>
                    <li><span className="inline-block h-2 w-2 bg-green-600 rounded-full mr-2" />JPA / Hibernate</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Grid */}
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-3 p-6 w-full md:w-1/3 gap-6 rounded-xl border border-black/10 bg-[#0a0615]/20 dark:bg-indigo-400/25 dark:border-white/60 dark:shadow-[0_0_20px_rgba(124,58,237,2)]"
          >
            {pic.map((element, index) => (
              <motion.div
                key={index}
                className="code-card w-full bg-black/25 p-4 rounded-md shadow-md dark:shadow-[0_0_130px_rgba(124,58,237,10)] transition-all duration-300"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex h-30 w-auto flex-col items-center justify-center overflow-hidden rounded-xl aspect-square shadow-inner transition-all duration-300">
                  <motion.img
                    src={element.img}
                    alt={element.name}
                    initial="hidden"
                    whileInView="visible"
                    className="md:w-20 md:h-20 h-24 w-24 rounded-lg object-cover"

                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  />
                  {/* Text under the image */}

                </div>
                <div className="flex items-center justify-center mt-1">
                  <span className="inline-block h-2 w-2 bg-green-600 rounded-full m-auto"></span>
                  <p className="w-full text-sm text-center text-red-300">
                    {element.name}
                  </p>
                </div>


              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
