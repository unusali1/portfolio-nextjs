"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import ContactMe from "@/app/_components/ContactMe";

const Contact = () => {

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center py-10"
      style={{
        backgroundImage: `url('/assets/contact.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <ContactMe />
    </div>
  );
};

export default Contact;
