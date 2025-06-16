import React from 'react'
import { delay, motion, } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Form = () => {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });


    const fadeUp = {
        hidden: { y: 80, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };
    const fadeRight = {
        hidden: { x: 80, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    return (
        <div>
            <form ref={ref} class="flex w-full flex-col items-center text-sm  bg-white dark:bg-black  rouded p-10 text-black dark:text-white overflow-hidden ">
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className=' px-40 p-10 border text-black dark:text-white  rounded-2xl'
                >
                    <p class="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 text-center rounded-full">Contact Us</p>
                    <h1 class="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
                    <p class="max-md:text-sm text-gray-500 pb-10 text-center">
                        Or just reach out manually at <a href="#" class="text-indigo-600 hover:underline">nagaruthwikmerugu162@gmail.com</a>
                    </p>

                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeRight}
                        class="max-w-7xl  w-full px-25">
                        <label  class="font-medium">Full Name</label>
                        <motion.div
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeRight} 
                            className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569" />
                            </svg>
                            <input type="text" class="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your full name" required />
                        </motion.div>

                        <label for="email-address" class="font-medium mt-4">Email Address</label>
                        <motion.div
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeRight} 
                            transition={{delay:0.5}}
                            className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569" />
                            </svg>
                            <input type="email" class="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your email address" required />
                        </motion.div>

                        <label for="message" class="font-medium mt-4">Message</label>
                        <textarea rows="4" class="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all" placeholder="Enter your message" required></textarea>

                        <button type="submit" class="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition">
                            Submit Form
                            <svg class="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            </form>
        </div>
    )
}

export default Form
