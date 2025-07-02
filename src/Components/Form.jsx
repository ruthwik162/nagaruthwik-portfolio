import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StarBackground from '../ThemeContext/StarBackground';
import { FiSend, FiCheckCircle, FiInfo, FiMapPin, FiPhone, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { assets } from '../assets/assets';

// Animation variants
const fadeUp = {
  hidden: { y: 80, opacity: 0, filter: 'blur(4px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  }
};

const fadeRight = (delay = 0) => ({
  hidden: { x: 80, opacity: 0, filter: 'blur(4px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
});

const inputVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  },
  focus: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400
    }
  }
};

const Form = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await fetch('https://portfolio-backend-q8dg.onrender.com/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 3000);
        toast.success("Thank you! Your message has been sent successfully.")
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Something went wrong. Please try again later.')
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  // Social links data
  const socialLinks = [
    { icon: <FiGithub />, label: "GitHub", url: "https://github.com/yourusername" },
    { icon: <FiLinkedin />, label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { icon: <FiTwitter />, label: "Twitter", url: "https://twitter.com/yourusername" }
  ];

  return (
    <div
      id='contact'
      ref={ref}
      className="relative w-full px-4 py-4 md:py-2 bg-white dark:bg-gradient-to-b dark:bg-[#0a0518] sm:px-6 lg:px-8 overflow-hidden"
    >
      <StarBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        className="relative z-10 flex flex-col text-sm lg:flex-row items-stretch rounded-2xl overflow-hidden mx-auto max-w-7xl bg-white/95 dark:bg-[#0f0a25] backdrop-blur-sm shadow-xl dark:shadow-[0_0_30px_rgba(124,58,237,0.2)] border border-gray-200 dark:border-gray-800"
        aria-label="Contact form"
      >
        {/* Left Panel - Contact Information */}
        <motion.div
          variants={fadeRight(0.2)}
          className="relative w-full lg:w-4/5 bg-gradient-to-br from-indigo-600 to-purple-700 p-4 md:p-5 text-white flex flex-col overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/20 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>

          <div className="relative z-10">
            <div className="mb-8">
              <motion.h1
                className="text-2xl sm:text-3xl font-bold mb-3"
              >
                Get In Touch
              </motion.h1>
              <motion.p className="text-indigo-100 text-sm md:text-base mb-6">
                Have a project in mind? Want to collaborate? Or just want to say hello?
                I'd love to hear from you!
              </motion.p>
            </div>

            {/* Contact Info */}
            <div className="space-y-5 flex items-center md:gap-28 justify-center mb-8">
              <div>
                <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 p-1.5 bg-white/10 rounded-md">
                  <FiMail className="text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-200 text-sm">Email</h3>
                  <a
                    href="mailto:ruthwik.merugu@outlook.com"
                    className="text-white hover:underline text-sm md:text-base"
                  >
                    ruthwik.merugu@outlook.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 p-1.5 bg-white/10 rounded-md">
                  <FiPhone className="text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-200 text-sm">Phone</h3>
                  <p className="text-white text-sm md:text-base">+91 9182216089</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 p-1.5 bg-white/10 rounded-md">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-200 text-sm">Location</h3>
                  <p className="text-white text-sm md:text-base">Hyderabad, Telangana, India</p>
                </div>
              </motion.div>
              </div>
              
              <div className='rounded '>
                <img src={assets.image} className='rounded-2xl' alt="" />
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-white/10 w-full backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20">
              <h3 className="font-bold text-indigo-200 text-sm mb-3 flex items-center gap-1">
                <FiInfo className="text-xs" />
                Please Note:
              </h3>
              <ul className="space-y-1 text-xs md:text-sm">
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span>Please provide a valid email address for communication</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span>We will send a confirmation email to you after we received you query</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span>We respond within 2-3 working days or as soon as possible</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span>Provide detailed requirements for the best response</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="mt-auto mb-6">
              <h3 className="font-semibold text-indigo-200 text-sm mb-3">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{
                      y: -3,
                      scale: 1.1,
                      backgroundColor: 'rgba(255,255,255,0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Attractive Quote */}
            <motion.div
              className="relative bg-gradient-to-r from-indigo-700/30 to-purple-700/30 p-4 rounded-xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="absolute top-2 left-2 text-white/20 text-4xl font-serif">"</div>
              <p className="text-sm md:text-base italic text-white/90 mb-2 pl-6">
                Your next big idea deserves the right collaboration. Let's connect again soon.
              </p>
              <div className="flex justify-end">
                <div className="border-t border-white/30 pt-1 text-right">
                  <p className="font-semibold text-white text-sm">Nagaruthwik Merugu</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Element */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Right Panel - Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeRight(0.4)}
          className="w-full lg:w-4/5 p-6 sm:p-8 md:p-10 text-black dark:text-white"
        >
          {/* Header */}
          <div className="w-full text-center mb-6 md:mb-8">
            <motion.p
              className="inline-block text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 font-medium px-3 py-1 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send a Message
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              whileHover={{
                backgroundPosition: '100%',
                transition: { duration: 1.5, ease: "linear" }
              }}
              style={{
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Let's Start a Conversation
            </motion.h2>
            <motion.p
              className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-8 max-w-2xl mx-auto"
              whileHover={{
                y: -2,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Fill out the form and I'll get back to you as soon as possible
            </motion.p>
          </div>

          {/* Fields */}
          <div className="w-full max-w-2xl mx-auto space-y-6">
            {/* Name */}
            <motion.div variants={fadeRight(0.3)}>
              <label
                htmlFor="name"
                className="block font-medium text-gray-700 dark:text-gray-300 mb-2 pl-1 text-base"
              >
                Full Name
              </label>
              <motion.div
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
                animate={focusedField === 'name' ? 'focus' : ''}
                className="flex items-center h-12 pl-3 bg-gray-50 dark:bg-gray-800 rounded-md overflow-hidden border border-gray-300 dark:border-gray-700 transition-all"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mr-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 6.5C7.75 8.57107 9.42893 10.25 11.5 10.25C13.5711 10.25 15.25 8.57107 15.25 6.5C15.25 4.42893 13.5711 2.75 11.5 2.75C9.42893 2.75 7.75 4.42893 7.75 6.5Z" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 14.25L19.25 19.25M15.5 14.25C15.5 14.25 13.25 16.75 11.5 16.75C9.75 16.75 4.75 14.25 4.75 14.25C4.75 14.25 3.5 15.75 3.5 17.25C3.5 18.75 4.5 19.25 4.5 19.25H18.5C18.5 19.25 19.5 18.75 19.5 17.25C19.5 15.75 18.25 14.25 18.25 14.25C18.25 14.25 17.5 14.25 15.5 14.25Z" />
                  </svg>
                </div>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-500 dark:placeholder-gray-500 text-base focus:placeholder-transparent"
                  placeholder="Full Name"
                  required
                />
              </motion.div>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeRight(0.4)}>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 dark:text-gray-300 mb-2 pl-1 text-base"
              >
                Email Address
              </label>
              <motion.div
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
                animate={focusedField === 'email' ? 'focus' : ''}
                className="flex items-center h-12 pl-3 bg-gray-50 dark:bg-gray-800 rounded-md overflow-hidden border border-gray-300 dark:border-gray-700 transition-all"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mr-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 6.5L12 12.25L18.5 6.5" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="h-full px-3 w-full outline-none bg-transparent placeholder-gray-500 dark:placeholder-gray-500 text-base focus:placeholder-transparent"
                  placeholder="john.doe@example.com"
                  required
                />
              </motion.div>
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeRight(0.5)}>
              <label
                htmlFor="message"
                className="block font-medium text-gray-700 dark:text-gray-300 mb-2 pl-1 text-base"
              >
                Message
              </label>
              <motion.div
                variants={inputVariants}
                whileFocus="focus"
                animate={focusedField === 'message' ? 'focus' : ''}
                className="relative"
              >
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="4"
                  className="w-full p-4 pl-12 bg-gray-50 dark:bg-gray-800 rounded-md outline-none resize-none placeholder-gray-500 dark:placeholder-gray-500 border border-gray-300 dark:border-gray-700 text-base focus:placeholder-transparent"
                  placeholder="Your message here..."
                  required
                />
                <div className="absolute top-4 left-4 text-indigo-600 dark:text-indigo-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 8.75V13.25" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 15.25V15.25" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeRight(0.6)} className="pt-3">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? {
                  scale: 1.02,
                  boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full h-14 rounded-lg flex items-center justify-center gap-2 text-white font-medium text-base ${isSubmitting
                  ? 'bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                  } transition-all shadow-lg`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-white" />
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300 }
                }}
                exit={{ opacity: 0 }}
                className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center flex items-center justify-center gap-2 text-sm"
              >
                <FiCheckCircle className="text-base" />
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Form;