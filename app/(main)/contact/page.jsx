"use client";
import React from "react";
import ContactMe from "@/app/_components/ContactMe";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-10 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/assets/contact.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#ced0d8] dark:bg-[#212A4A] opacity-80"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full  px-4">
        <ContactMe />
      </div>
    </div>
  );
};

export default Contact;
