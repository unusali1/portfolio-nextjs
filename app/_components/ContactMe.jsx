"use client"
import Image from 'next/image';
import React from 'react';
import iconMail from "../../public/assets/icon-5.svg";
import { motion } from "framer-motion";

const ContactMe = () => {

  return (
    <section className="py-16" aria-label="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="bg-[#FBF3F5] overflow-hidden md:flex  dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 ">
          <div className="p-8 md:p-12 lg:w-1/2 animate-slide-left">
            <div className="mb-6">
              <Image
                src={iconMail}
                alt="Contact Icon"
                width={60}
                height={60}
                className="text-blue-600"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-mulish dark:text-gray-100">
              If you like what you see, let's work together.
            </h2>
            <p className="text-gray-600 leading-relaxed font-sm font-mulish dark:text-gray-200">
              I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from
              this contact form and I will get back to you shortly.
            </p>
          </div>

          <form className="p-8 md:p-12 lg:w-1/2 bg-[#FBF3F5] animate-slide-right  dark:bg-gray-900">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-200"
              />
              <input
                type="email"
                name="email_address"
                placeholder="Email *"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400  dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message *"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 h-40 resize-none mb-6  dark:bg-gray-800 dark:text-gray-200"
            ></textarea>
            {/* <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 font-mulish"
            >
              Send message
            </button> */}

            <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255 255 255)",
              boxShadow: "0px 0px 8px #17a2b8",
              transition: { duration: 0.4, yoyo: "Infinity" },
            }}
            className="rounded-md p-3 bg-gray-700 text-white font-mulish"
            // onClick={() => router.push("/contact")}
          >
              Send Message
          </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;