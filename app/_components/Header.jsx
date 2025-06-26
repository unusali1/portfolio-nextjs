"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import logoUnus from "../../public/assets/logoBlack.png";
import logoUnusWhite from "../../public/assets/logoWhite.png";
import Link from "next/link";
import { usePathname } from "next/navigation"; 



const socialMediaLinks = [
  {
    href: "https://wa.me/+8801717609565",
    icon: "ic:baseline-whatsapp",
    background: "#00A884",
  },
  {
    href: "https://www.facebook.com/moham.mada.i.unusa.ali.2024",
    icon: "mingcute:facebook-line",
    background: "#166FE5",
  },
  {
    href: "https://github.com/unusali1",
    icon: "icon-park-outline:github",
    background: "#313131",
  },
  {
    href: "https://www.linkedin.com/in/unus/",
    icon: "et:linkedin",
    background: "#0a66c2",
  },
];

const navigationData = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Projects", link: "/projects" },
  { id: 5, title: "Contact", link: "/contact" },
];

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const pathname = usePathname(); 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => setNavActive((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setHeaderActive(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
      if (savedMode === "dark") {
        document.body.classList.add("dark");
      }
    }
  }, []);

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };


  return (
    <header
      className={`z-50 transition-all duration-300 py-3 sm:py-4 h-16 sm:h-20 fixed top-0 left-0 right-0 shadow-md bg-white dark:bg-[#212A4A] animate-slideIn`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image src={ isDarkMode ? logoUnusWhite : logoUnus} width={220} height={160} alt="Logo" className="mt-2" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <ul className="flex gap-8 text-lg font-medium">
            {navigationData.map((item) => (
              <li key={item.id} className="font-salsa">
                <Link
                  href={item.link}
                  className={`${
                    pathname === item.link
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-800 dark:text-gray-100"
                  } hover:text-pink-500 font-bold font-salsa transition-colors`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <ul className="hidden md:flex gap-4 items-center">
          {socialMediaLinks.map((item,index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                className="text-xl text-gray-800 hover:text-pink-500 transition-colors dark:text-gray-100"
              >
                <Icon icon={item.icon} className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-200 dark:bg-gray-700 px-2 py-2 rounded-full mt-1"
              >
                {isDarkMode ? (
                  <Icon
                    icon="material-symbols-light:dark-mode-rounded"
                    className="font-bold text-xl text-white"
                  />
                ) : (
                  <Icon
                    icon="uil:sun"
                    className="font-bold text-xl text-black"
                  />
                )}
              </button>
            </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={toggleNavbar}
          aria-label="Toggle menu"
        >
          <Icon icon="ic:round-menu" />
        </button>
      </div>

      {/* Overlay Background */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          navActive ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleNavbar}
      ></div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-72 h-full bg-gray-900 text-white p-6 z-50 transition-transform duration-300 flex flex-col ${
          navActive ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Top Bar in Mobile Menu */}
        <div className="flex items-center justify-between mb-8">
          <Image
            src={logoUnusWhite}
            width={120}
            height={80}
            alt="Logo"
          />
          <button
            onClick={toggleNavbar}
            className="text-white text-2xl p-2"
            aria-label="Close menu"
          >
            <Icon icon="mingcute:close-fill" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col gap-4 text-lg font-medium">
          {navigationData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`${
                  pathname === item.link
                    ? "text-pink-400 border-b-2 border-pink-400"
                    : "text-white"
                } hover:text-pink-400`}
                onClick={toggleNavbar}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="mt-auto pt-10 text-sm">
          <p className="mb-2">mdunusali1906@gmail.com</p>
          <p>+880 1717609565</p>
        </div>

        {/* Social Icons Mobile */}
        <ul className="flex gap-4 mt-6">
          {socialMediaLinks.map((item,index) => (
            <li key={index}>
              <a href={item.href} className="text-xl hover:text-pink-400" target="_blank">
                <Icon icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}