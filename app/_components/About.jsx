"use client";
import React from "react";
import profile from "../../public/assets/unus.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const highlights = [
    "Full Stack Web and Mobile App Development",
    "Interactive front end as per the design",
    "React, React Native, Node.js, Express.js",
    "Redux for state management",
    "Building RESTful APIs",
    "Managing Database",
  ];

  return (
    <section className="py-12 sm:py-16 mt-10 sm:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center gap-0 leading-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight animate-fade-in-up m-0 font-salsa">
            About Me
          </h1>
          <p className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-200 mb-2 font-salsa">
            Why Choose Me?
          </p>
          <span className="animate-border border-black"></span>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mt-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Image Section */}
          <div className="flex justify-center items-center p-6 sm:p-8">
            <div className="relative flex-shrink-0 group w-52 sm:w-64 md:w-72 lg:w-80 xl:w-96">
              <div className="absolute inset-0 bg-indigo-300 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30"></div>
              <Image
                src={profile}
                alt="Md Younus Ali, Full Stack Developer"
                className="relative rounded-full shadow-md transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl w-full h-1/2"
              />
            </div>
          </div>

          {/* Skills and Description Section */}
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-base sm:text-md text-justify font-medium text-gray-700 dark:text-gray-200 mb-6 leading-relaxed font-mulish">
              I am eager to establish my professional path by utilizing modern
              technology and applying my integrated knowledge. Currently working
              at 'Abroad Inquiry,' my goal is to continue growing professionally
              by staying updated with the latest technological advancements and
              applying them effectively in real-world projects. My dedication to
              learning and drive for excellence motivate me to play a
              significant role in the growth and success of a progressive
              organization.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-200 font-mulish">
                Highlights of My Expertise:
              </p>
              <ul className="space-y-3 pl-4 sm:pl-6">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start animate-fade-in-up font-mulish"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="w-3 h-3 mt-1 bg-indigo-500 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-gray-800 text-sm sm:text-md font-medium dark:text-gray-200">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255 255 255)",
                  boxShadow: "0px 0px 8px #17a2b8",
                  transition: { duration: 0.4, yoyo: "Infinity" },
                }}
                className="rounded-md p-3 bg-gray-700 text-white font-mulish"
                onClick={() => router.push("/contact")}
              >
                Contact Me
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Fade In Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
