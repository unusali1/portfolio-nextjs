"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, usePathname } from "next/navigation";

const BottomTab = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get current route to highlight active tab

  // Map routes to tab values for active state
  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname === "/about") return "about";
    if (pathname === "/projects") return "projects";
    if (pathname === "/contact") return "contact";
    return "home";
  };

  return (
    <div className="sm:hidden">
      <Tabs
        value={getActiveTab()} // Set active tab based on current route
        className="fixed bottom-0 left-0 right-0 z-50 w-full"
      >
        <TabsList className="grid grid-cols-4 gap-1 p-2 bg-white shadow-lg border-t border-gray-200 h-16 mx-2 mb-2 rounded-2xl">
          <TabsTrigger
            value="home"
            className="flex flex-col items-center p-1 rounded-xl data-[state=active]:bg-gray-100 data-[state=active]:text-blue-600 transition-colors duration-200"
            onClick={() => router.push("/")}
          >
            <Icon icon="tabler:home" className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="flex flex-col items-center p-1 rounded-xl data-[state=active]:bg-gray-100 data-[state=active]:text-blue-600 transition-colors duration-200"
            onClick={() => router.push("/about")}
          >
            <Icon icon="mdi:about-circle-outline" className="w-6 h-6" />
            <span className="text-xs mt-1">About</span>
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="flex flex-col items-center p-1 rounded-xl data-[state=active]:bg-gray-100 data-[state=active]:text-blue-600 transition-colors duration-200"
            onClick={() => router.push("/projects")}
          >
            <Icon icon="hugeicons:computer-programming-01" className="w-6 h-6" />
            <span className="text-xs mt-1">Projects</span>
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="flex flex-col items-center p-1 rounded-xl data-[state=active]:bg-gray-100 data-[state=active]:text-blue-600 transition-colors duration-200"
            onClick={() => router.push("/contact")}
          >
            <Icon icon="hugeicons:contact-02" className="w-6 h-6" />
            <span className="text-xs mt-1">Contact</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default BottomTab;