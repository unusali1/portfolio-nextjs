"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("Education");

  const menuItems = [
    { name: "Education", icon: "tdesign:education-filled" },
    { name: "Work History", icon: "pajamas:work" },
    { name: "Programming Skills", icon: "hugeicons:computer-programming-01" },
    { name: "Client Project", icon: "mdi:web-box" },
  ];

  const educationData = [
    {
      institution: "Stamford University Bangladesh",
      degree: "Bachelor of Computer Science Engineering",
      years: "2017-2022",
    },
    {
      institution: "Aditmari Government College",
      degree: "Higher Secondary Certificate",
      years: "2016",
    },
    {
      institution: "Namuri High School & College",
      degree: "Secondary School Certificate",
      years: "2013",
    },
  ];

  const workingData = [
    {
      institution: "Abroad Inquiry",
      joining_Date: "01 September 2023",
      end_date: "Present",
      description:
        "Develop responsive web apps with React.js and cross-platform mobile apps using React Native. Build scalable backend services with Node.js, Express.js, and manage MySQL databases. Collaborate in cross-functional teams to deliver optimized, high-quality applications.",
    },
    {
      institution: "ZN Engineering",
      joining_Date: "01 November 2022",
      end_date: "01 August 2023",
      description:
        "Develop responsive web applications using React.js. Assist in building backend services with Node.js and Express.js, and manage MySQL databases. Collaborate with the team to deliver efficient and user-friendly web solutions.",
    },
  ];

  const clientProjects = [
    {
      institution: "Abroad Inquiry",
      description: `Abroad Inquiry is an educational consultancy platform built
                  with Next.js, Node.js, Express.js, and MySQL. It leverages
                  Redux for state management and Socket.IO for real-time
                  messaging between students and consultants.`,
      link: "https://www.abroadinquiry.com/",
    },
    {
      institution: "Dayfuna",
      description: `Dayfuna is a smart digital platform for booking hotels,
                  apartments, and houses, with integrated visa services. Built
                  with Next.js and Redux, it delivers a seamless experience
                  across devices for travelers and students worldwide.`,
      link: "https://www.dayfuna.com/",
    },
  ];

  const programmingData = [
    {
      title: "Expertise",
      skill: [
        "HTML5",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "React Native",
        "Redux",
        "Redux Toolkit",
        "Express.js",
        "Node.js",
        "Material UI",
      ],
    },

    {
      title: "Familiar",
      skill: ["Data Science", "C/C++", "PHP", "Python"],
    },
    {
      title: "Comfortable",
      skill: [
        "Tailwind CSS",
        "MySQL",
        "REST API",
        "MongoDB",
        "RTK Query",
        "ShadCN",
      ],
    },
    {
      title: "Tools",
      skill: [
        "Git",
        "VS Code",
        "Visual Studio",
        "NPM",
        "Vercel",
        "Firebase",
        "XAMPP",
      ],
    },
  ];

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-0 leading-none mt-20 mb-20">
        <h3 className="text-4xl font-extrabold text-gray-700 dark:text-gray-100 mb-2 font-salsa">Resume</h3>
        <p className="text-lg text-center text-gray-600 dark:text-gray-200 mb-2 font-salsa">
          My formal Bio Details
        </p>
        <span className="animate-border border-black"></span>
      </div>

      <div className="hidden container sm:mx-auto sm:px-4 px-1 pb-12 sm:flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="bg-gray-800 dark:bg-gray-900 rounded-sm w-12 ml-24 h-96">
          <div
            className="w-full md:w-64 py-10 rounded-md h-96"
            style={{ boxShadow: "6px 0 6px -4px rgba(0, 0, 0, 0.2)" }}
          >
            <aside className="w-full sticky top-0 h-auto overflow-y-auto">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex items-center py-2 mx-4 rounded-3xl cursor-pointer transition-all duration-200 text-black ${
                    activeSection === item.name
                      ? "bg-gray-800 text-white dark:bg-gray-900"
                      : "hover:bg-gray-800 hover:scale-5 hover:text-white mt-4 mb-4 dark:hover:bg-gray-900 dark:text-gray-200"
                  }`}
                >
                  <Icon icon={item.icon} className="w-6 h-6 text-white" />
                  <span className="text-sm ml-6 font-bold font-salsa">{item.name}</span>
                </div>
              ))}
            </aside>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 sm:ml-48 ml-1">
          <div className="max-w-3xl mx-auto">
            {/* <hr className="border-t-2 border-gray-900 w-16 mb-8" /> */}

            {/* Education Section */}
            {activeSection === "Education" && (
              <section id="education">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6 rounded-lg bg-white  dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-4 shadow-md dark:from-slate-400 dark:to-slate-300"></span>
                        <h2 className="text-xl font-bold text-gray-800 tracking-tight font-salsa dark:text-gray-100">
                          {edu.institution}
                        </h2>
                      </div>
                      <span className="sm:ml-auto bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm font-mulish dark:bg-gray-500">
                        {edu.years}
                      </span>
                    </div>
                    <p className="ml-8 mt-2 text-gray-600 text-md leading-relaxed font-medium font-mulish dark:text-gray-200">
                      {edu.degree}
                    </p>
                    {edu.description && (
                      <p className="ml-8 mt-2 text-gray-500 text-base leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </section>
            )}

            {/* Work History Section */}
            {activeSection === "Work History" && (
              <section id="work-history">
                {workingData.map((work, index) => (
                  <div
                    key={index}
                    className="mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6 rounded-lg bg-white  dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-4 shadow-md  dark:from-slate-400 dark:to-slate-300"></span>
                        <h2 className="text-xl font-bold text-gray-800 tracking-tight font-salsa dark:text-gray-100">
                          {work.institution}
                        </h2>
                      </div>
                      <span className="sm:ml-auto bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm font-mulish  dark:bg-gray-500">
                        {work.joining_Date} - {work.end_date}
                      </span>
                    </div>
                    <p className="ml-8 mt-2 text-gray-600 text-md leading-relaxed font-medium font-mulish dark:text-gray-200">
                      {work.description}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* Programming Skills Section */}
            {activeSection === "Programming Skills" && (
              <section id="programming-skills">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {programmingData.map((category, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 font-salsa dark:text-gray-100">
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skill.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-100 text-orange-700 dark:text-gray-100 px-3 py-1 rounded-full text-sm font-medium font-mulish dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Client Project */}
            {activeSection === "Client Project" && (
              <section id="education">
                {clientProjects.map((project, index) => (
                  <div
                    key={index}
                    className="mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6 rounded-lg bg-white  dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-4 shadow-md  dark:from-slate-400 dark:to-slate-300"></span>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 tracking-tight font-salsa">
                          {project.institution}
                        </h2>
                      </div>
                       <Button 
                         onClick={() => window.open(project.link, '_blank')}
                       >
                       <Icon icon="line-md:link" className="w-6 h-6 text-white" />
                        Live link
                      </Button>
                      {/* <span className="sm:ml-auto bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm">
                        live link
                      </span> */}
                    </div>

                    {project.description && (
                      <p className="ml-8 mt-2 text-gray-500 dark:text-gray-200 text-md leading-relaxed font-mulish">
                        {project.description}
                      </p>
                    )}
                  </div>
                ))}
              </section>
            )}
          </div>
        </main>
      </div>

      <Tabs
        defaultValue="education"
        className="w-full max-w-[350px] mx-auto sm:hidden bg-none"
      >
        <TabsList className="grid grid-cols-4 gap-2 p-2 bg-gray-100 rounded-lg h-20">
          <TabsTrigger value="education" className="p-2 rounded-md ">
            <Icon
              icon="tdesign:education-filled"
              className="w-8 h-8"
            />
          </TabsTrigger>
          <TabsTrigger value="work" className="p-2 rounded-md ">
            <Icon icon="pajamas:work" className="w-8 h-8" />
          </TabsTrigger>
          <TabsTrigger value="programming" className="p-2 rounded-md">
            <Icon
              icon="hugeicons:computer-programming-01"
              className="w-8 h-8"
            />
          </TabsTrigger>
          <TabsTrigger value="project" className="p-2 rounded-md">
            <Icon icon="mdi:web-box" className="w-8 h-8" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="education">
          <section id="education" className="space-y-2 mt-2">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="mt-4 rounded-sm p-4 bg-white hover:-translate-y-1 hover:shadow-md  dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3"></span>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight font-salsa">
                      {edu.institution}
                    </h2>
                  </div>
                </div>
                <p className="mt-2 ml-6 text-gray-600 dark:text-gray-200 text-sm font-mulish">{edu.degree}</p>
                <span className="text-gray-600 px-5 mt-2 flex text-xs">
                  <Icon
                    icon="stash:data-date-duotone"
                    className="w-6 h-6 text-gray-800 dark:text-gray-200"
                  />
                  <span className="text-gray-600 dark:text-gray-200 px-1 py-1 text-xs font-semibold font-mulish">
                    {edu.years}
                  </span>
                </span>

                {edu.description && (
                  <p className="mt-2 ml-6 text-gray-500 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        </TabsContent>

        <TabsContent value="work">
          <section id="work-history" className="space-y-2 mt-2">
            {workingData.map((work, index) => (
              <div
                key={index}
               className="mt-4 rounded-sm p-4 bg-white hover:-translate-y-1 hover:shadow-md  dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3"></span>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 tracking-tight font-salsa">
                      {work.institution}
                    </h2>
                  </div>
                  <span className="text-gray-600 px-6 flex text-xs">
                    <Icon
                      icon="stash:data-date-duotone"
                      className="w-6 h-6 text-gray-800 dark:text-gray-200"
                    />
                    <span className="text-gray-600 dark:text-gray-200 px-1 py-1 text-xs font-semibold font-mulish">
                      {work.joining_Date} - {work.end_date}
                    </span>
                  </span>
                </div>
                <p className="mt-2 ml-6 text-gray-600 dark:text-gray-200 text-sm text-justify font-medium font-mulish">
                  {work.description}
                </p>
              </div>
            ))}
          </section>
        </TabsContent>

        <TabsContent value="programming">
          <section id="programming-skills" className="space-y-6 mt-3">
            <div className="grid grid-cols-1 gap-4 px-4">
              {programmingData.map((category, index) => (
                <div key={index}>
                  <div className="flex">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-2 mt-2"></span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3 font-salsa">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skill.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 dark:bg-gray-700 text-orange-700 dark:text-gray-100 px-2.5 py-1 rounded-full text-xs font-medium font-mulish"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="project">
          <section id="education">
            {clientProjects.map((project, index) => (
              <div
                key={index}
                className="mt-4 rounded-sm p-4 bg-white hover:-translate-y-1 hover:shadow-md  dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-row sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-4 shadow-md"></span>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight font-salsa">
                      {project.institution}
                    </h2>
                  </div>
                  <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-semibold font-salsa"
                      aria-label="Live Site"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <Icon icon="line-md:link" className="w-5 h-5 mr-1" />
                      Live
                    </Button>
                </div>

                {project.description && (
                  <p className="ml-8 mt-2 text-gray-500 dark:text-gray-200 text-base leading-relaxed font-mulish">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
