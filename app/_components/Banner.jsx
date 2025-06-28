"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import shape from "../../public/assets/shape-bg.png";
import shapeDark from "../../public/assets/shape-bg000.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-br from-[#1A1D2F] to-[#2F334D] dark:from-[#0e0e15] dark:to-[#252843] min-h-screen flex items-center justify-center py-24 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight text-white tracking-tight font-salsa">
              HELLO, I&apos;M{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                Md. UNUS ALI
              </span>
            </h1>

            <h2 className="text-sm sm:text-md lg:text-xl text-white font-salsa">
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

            <p className="text-md text-justify sm:text-lg lg:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 font-mulish leading-relaxed">
              Hi, I&apos;m Md Unus Ali, a passionate developer from Bangladesh. I specialize in crafting modern, scalable, and user-friendly digital solutions using the MERN stack and cutting-edge frontend technologies.
            </p>

            <div className="flex flex-row sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="px-6 py-5 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 text-base font-semibold"
                onClick={() => router.push("/works")}
              >
                See My Works
              </Button>
              <Button
                className="px-6 py-5 border-2 border-indigo-600 text-white bg-transparent rounded-full shadow-lg hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300 text-base font-semibold"
                variant="outline"
                onClick={() => router.push("/contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className={styles.profile_picture}>
                <div className={`${styles.profile_picture_background} bg-gradient-to-br from-indigo-500/50 to-pink-500/50`}></div>
                <div className={`${styles.profile_picture_border} border-indigo-400/30`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Shape */}
      <div className="dark:hidden absolute bottom-0 w-full h-16 sm:h-20 lg:h-24">
        <Image
          src={shape}
          alt="bottom shape"
          fill
          priority
          className="objeect-cover "
        />
      </div>

      <div className="absolute bottom-0 w-full h-16 sm:h-20 lg:h-24 hidden dark:block">
        <Image
          src={shapeDark}
          alt="bottom shape"
          fill
          priority
          className="objeect-cover "
        />
      </div>
    </section>
  );
};

export default Banner;