import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const fadeRight = (delay = 0) => ({
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
});

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const Form = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  }, []);

  return (
    <div ref={ref} className="w-full px-4 bg-white dark:bg-black sm:px-6 lg:px-8 py-12">
      <motion.form
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        onSubmit={handleSubmit}
        className="flex flex-col items-center overflow-hidden  mx-auto   p-8 sm:p-12 text-black dark:text-white shadow-xl transition-shadow duration-300"
        aria-label="Contact form"
      >
        {/* Header */}
        <motion.div variants={fadeRight(0.2)} className="w-full text-center">
          <p className="inline-block text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 font-medium px-4 py-1.5 rounded-full mb-6">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Let's Get In Touch
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Or reach out at{' '}
            <a href="mailto:nagaruthwikmerugu162@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
              nagaruthwikmerugu162@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Fields */}
        <div className="w-full max-w-2xl space-y-6">
          {/* Name */}
          <motion.div variants={fadeRight(0.3)}>
            <label htmlFor="name" className="block font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
            <motion.div variants={inputVariants} whileHover="hover" className="flex items-center h-14 pl-4 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <svg width="20" height="20" fill="none" className="text-gray-500 dark:text-gray-400"><path  fill="currentColor" /></svg>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="h-full px-4 w-full outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Enter your full name"
                required
              />
            </motion.div>
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeRight(0.4)}>
            <label htmlFor="email" className="block font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <motion.div variants={inputVariants} whileHover="hover" className="flex items-center h-14 pl-4 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
              <svg width="20" height="20" fill="none" className="text-gray-500 dark:text-gray-400"><path  fill="currentColor" /></svg>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-full px-4 w-full outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Enter your email address"
                required
              />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeRight(0.5)}>
            <label htmlFor="message" className="block font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              variants={inputVariants}
              whileHover="hover"
              className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-xl outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Enter your message"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeRight(0.6)} className="pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className={`w-full h-14 rounded-xl flex items-center justify-center gap-2 text-white font-medium ${
                isSubmitting
                  ? 'bg-indigo-400 dark:bg-indigo-600'
                  : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800'
              } transition-colors`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8..." />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Submit Form
                  <svg width="20" height="20" fill="none"><path  fill="currentColor" /></svg>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-center"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}
        </div>
      </motion.form>
    </div>
  );
};

export default Form;
