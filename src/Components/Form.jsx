import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StarBackground from '../ThemeContext/StarBackground';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';

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
    boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)',
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

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData)

    try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
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
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);


  return (
    <div
      id='contact'
      ref={ref}
      className="relative w-full px-4 py-20 bg-white dark:bg-gradient-to-b dark:bg-[#0a0518] sm:px-6 lg:px-8 overflow-hidden"
    >
      <StarBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none" />

      <motion.form
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col items-center rounded-2xl overflow-hidden mx-auto max-w-4xl dark:bg-white/5 bg-white/95 backdrop-blur-sm p-8 sm:p-12 text-black dark:text-white shadow-xl dark:shadow-[0_0_30px_rgba(124,58,237,0.2)] border border-gray-200 dark:border-gray-800"
        aria-label="Contact form"
      >
        {/* Decorative elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"
        />

        {/* Header */}
        <motion.div variants={fadeRight(0.2)} className="w-full text-center mb-12">
          <motion.p
            className="inline-block text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 font-medium px-4 py-1.5 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{
              backgroundPosition: '100%',
              transition: { duration: 1.5, ease: "linear" }
            }}
            style={{
              backgroundSize: '200% auto'
            }}
          >
            Let's Get In Touch
          </motion.h1>
          <motion.p
            className="text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            whileHover={{
              y: -2,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            Or reach out at{' '}
            <a
              href="mailto:nagaruthwikmerugu162@gmail.com"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              nagaruthwikmerugu162@gmail.com
            </a>
          </motion.p>
        </motion.div>

        {/* Fields */}
        <div className="w-full max-w-2xl space-y-8">
          {/* Name */}
          <motion.div variants={fadeRight(0.3)}>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 dark:text-gray-300 mb-2 pl-1"
            >
              Full Name
            </label>
            <motion.div
              variants={inputVariants}
              whileHover="hover"
              whileFocus="focus"
              animate={focusedField === 'name' ? 'focus' : ''}
              className="flex items-center h-14 pl-4 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <svg width="20" height="20" fill="none" className="text-gray-500 dark:text-gray-400">
                <path d="M12 6a2 2 0 11-4 0 2 2 0 014 0zM5 9a1 1 0 011-1h12a1 1 0 011 1v7a1 1 0 01-1 1H6a1 1 0 01-1-1V9z" fill="currentColor" />
              </svg>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="h-full px-4 w-full outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Enter your full name"
                required
              />
            </motion.div>
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeRight(0.4)}>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 dark:text-gray-300 mb-2 pl-1"
            >
              Email Address
            </label>
            <motion.div
              variants={inputVariants}
              whileHover="hover"
              whileFocus="focus"
              animate={focusedField === 'email' ? 'focus' : ''}
              className="flex items-center h-14 pl-4 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <svg width="20" height="20" fill="none" className="text-gray-500 dark:text-gray-400">
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0v10h10V5H5z" fill="currentColor" />
                <path d="M3 7l7 4 7-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="h-full px-4 w-full outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Enter your email address"
                required
              />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeRight(0.5)}>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700 dark:text-gray-300 mb-2 pl-1"
            >
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows="5"
              variants={inputVariants}
              whileHover="hover"
              whileFocus="focus"
              animate={focusedField === 'message' ? 'focus' : ''}
              className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-xl outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500 border border-gray-200 dark:border-gray-700"
              placeholder="Enter your message"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeRight(0.6)} className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? {
                scale: 1.02,
                boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
              } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className={`w-full h-14 rounded-xl flex items-center justify-center gap-2 text-white font-medium ${isSubmitting
                  ? 'bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800'
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
              className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-center flex items-center justify-center gap-2"
            >
              <FiCheckCircle className="text-xl" />
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}
        </div>
      </motion.form>
    </div>
  );
};

export default Form;