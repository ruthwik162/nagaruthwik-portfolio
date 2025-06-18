import React, { useState, useEffect } from 'react';
import { dummyImages } from '../assets/assets';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skill = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const [pic, setPic] = useState([]);
  useEffect(() => {
    setPic(dummyImages);
  }, []);

  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const fadeLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const fadeRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const floatingVariants = (index) => ({
    hidden: { y: 20, opacity: 0 },
    show: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 3 + index * 0.3,
          ease: "easeInOut"
        },
        opacity: { duration: 0.5 }
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  });

  return (
    <div
      id="skills"
      ref={ref}
      className="relative py-20 px-4 font-fancy sm:px-8 md:px-12 bg-white dark:bg-black text-gray-800 dark:text-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-[6vw]  md:text-5xl font-bold mb-4 bg-clip-text text-black dark:text-gray-100"
          >
            My Skills
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="text-md md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Here are the technologies I work with and my proficiency level in each.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-12">
          {/* Left Side: Techniques and Database */}
          <div className="flex flex-col gap-6 w-full md:w-2/3">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="p-4 md:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md w-full"
            >
              <h1 className='font-bold text-lg md:text-2xl mb-4 text-gray-800 dark:text-white'>Techniques</h1>
              <ul className='flex flex-wrap gap-2 md:gap-4 text-sm md:text-md'>
                <li>ReactJs</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Express</li>
                <li>Node</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="p-4 md:p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md w-full"
            >
              <h1 className='font-bold text-xl md:text-2xl mb-4 text-gray-800 dark:text-white'>Database</h1>
              <ul className='flex flex-wrap gap-2 md:gap-4 text-base md:text-md'>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </motion.div>
          </div>

          {/* Right Side: Image Grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-3 border border-gray-200 dark:border-gray-700 rounded-xl p-6 w-full gap-6 md:w-1/3"
          >
            {pic.map((element, index) => (
              <motion.div
                key={index}
                variants={floatingVariants(index)}
                initial="hidden"
                animate="show"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="cursor-pointer group relative flex flex-col items-center"
              >
                {/* Text with subtle hover effect */}
                <motion.p
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-center"
                  whileHover={{ color: "#6366f1" }}
                >
                  {element.name}
                </motion.p>

                {/* Image container with enhanced effects */}
                <div className="relative overflow-hidden flex justify-center items-center rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 aspect-square w-full">
                  <motion.img
                    src={element.img}
                    alt={element.name}
                    className="md:w-20 md:h-20 h-16 w-16 rounded-lg object-cover"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
                </div>

                {/* Optional subtle pulse animation */}
                <motion.div
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ scale: 0.95 }}
                  animate={{
                    scale: 1,
                    opacity: 0,
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut"
                    }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Skill;
