"use client";
import Header from "@/app/_components/Header";
import React from "react";
import projectBanner from "../../../public/assets/projectBanner.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For animations
import AllProjects from "@/app/_components/AllProjects";
import MobileAppProjects from "@/app/_components/MobileAppProjects";

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState("All");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { label: "Web Application", value: "All" },
    { label: "Mobile App", value: "Mobile App" },
  ];

  let content = null;

  if (activeTab === "All") {
    content = <AllProjects />;
  } else if (activeTab === "Mobile App") {
    content = <MobileAppProjects />;
  } else {
    content = null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${projectBanner.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white font-roboto">
                Web & Mobile App Projects
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-gray-200 font-mulish">
                Dive into a curated collection of my recent web and mobile
                applications, built with a focus on performance, design, and
                user experience. Each project highlights my ability to solve
                real-world problems using modern technologies and clean code
                architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        aria-labelledby="projects-heading"
      >
        {/* Header and Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white font-salsa"
            >
              Latest Projects
            </h2>
            <span className="animate-border border-black"></span>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3">
            {tabs.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleTabChange(item.value)}
                className={`
                  relative inline-flex items-center justify-center px-5 py-2.5
                  font-medium rounded-full shadow-sm
                  transition-all duration-300
                  ${
                    activeTab === item.value
                      ? `text-white dark:text-gray-200 bg-blue-600 hover:ring-1 hover:ring-purple-500`
                      : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }
                `}
                role="tab"
                aria-selected={activeTab === item.value}
                aria-label={`Filter by ${item.label}`}
              >
                <span className="relative font-salsa">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div>{content}</div>
      </section>
    </div>
  );
};

export default Projects;
