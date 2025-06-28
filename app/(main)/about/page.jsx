"use client"
import React from "react";
import profile from "../../../public/assets/unus.png";
import Image from "next/image";
import Resume from "@/app/_components/Resume";
import { TypeAnimation } from 'react-type-animation';
const Page = () => {
  return (
    <>
      <section>
        <div className="w-full">
          <div className="flex items-center justify-center mt-40">
            <Image
              src={profile}
              alt="Profile"
              className="sm:w-64 sm:h-64 w-36 h-36 rounded-full border-4 border-white shadow-xl cover"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8 px-4 md:px-16 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight text-black dark:text-white tracking-tight font-salsa">
              HELLO, I&apos;M{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                Md. UNUS ALI
              </span>
            </h1>
          <h2 className="text-lg text-black dark:text-white font-salsa mt-6">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "Front End Developer",
                  1000,
                  "Back End Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
              />

            </h2>

          <p className="text-base mt-4 leading-relaxed mb-8 font-mulish">
           I am eager to establish my professional path by utilizing modern technology and applying my integrated knowledge. Currently working at 'Abroad Inquiry,' my goal is to continue growing professionally by staying updated with the latest technological advancements and applying them effectively in real-world projects. My dedication to learning and drive for excellence motivate me to play a significant role in the growth and success of a progressive organization.
          </p>
        </div>

        {/* Personal Info */}
        <div className="bg-gray-100 dark:bg-gray-800/90 px-4 md:px-16 py-10 max-w-4xl mx-auto rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <p className="font-mulish">
              <strong className="font-mulish">Full Name:</strong> Md. Unus Ali
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Date of Birth:</strong> 22 January
              1997
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Nationality:</strong> Bangladeshi
              (By Birth)
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Marital Status:</strong> Married
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Religion:</strong> Islam
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Blood Group:</strong> B (+ve)
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Languages:</strong> Bangla
              (Native), English
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Address:</strong> Rampura, Dhaka,
              Bangladesh
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Phone:</strong> +8801717609565
            </p>
            <p className="font-mulish">
              <strong className="font-mulish">Email:</strong>{" "}
              mdunusali1906@gmail.com
            </p>
          </div>
        </div>

        {/* Resume Section */}
        <div className="mt-16 px-4 mx-auto">
          <Resume />
        </div>
      </section>
    </>
  );
};

export default Page;
