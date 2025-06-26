"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const socialMediaLinks = [
  {
    href: "https://wa.me/+8801717609565",
    icon: "ic:baseline-whatsapp",
    background: "#00A884",
  },
  {
    href: "https://www.facebook.com/moham.mada.i.unusa.ali.2024",
    icon: "bi:facebook",
    background: "#166FE5",
  },
  {
    href: "https://github.com/unusali1",
    icon: "icon-park-outline:github",
    background: "#313131",
  },
  {
    href: "https://www.linkedin.com/in/unus/",
    icon: "fa:linkedin-square",
    background: "#0a66c2",
  },
];

const SocialMediaSidebar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-[40%] left-0 z-50 flex flex-col space-y-2 p-1">
      {socialMediaLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-110 group"
          style={{ background: link.background }}
        >
          <Icon
            icon={link.icon}
            className="text-white w-5 h-5 transition-transform duration-500 group-hover:rotate-[360deg]"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaSidebar;
