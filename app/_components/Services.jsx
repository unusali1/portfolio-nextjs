import React from "react";
import icon1 from "../../public/assets/icon-1.svg";
import icon2 from "../../public/assets/icon-2.svg";
import icon4 from "../../public/assets/icon-4.svg";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const serviceData = [
  {
    id: 1,
    title: "Web Design & Development",
    icon: icon1,
    description:
      "Creating responsive and user-friendly websites using modern technologies.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: icon2,
    description:
      "Building cross-platform mobile applications with a focus on performance and usability.",
  },
  {
    id: 3,
    title: "MERN Stack Development",
    icon: icon4,
    description:
      "Developing full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
  },
];

const Services = () => {
  return (
    <section className="container mx-auto px-4 py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-brrounded-full blur-3xl -translate-x-1/3 translate-y-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br  rounded-full blur-3xl translate-x-1/4 translate-y-1/4 animate-pulse"></div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mb-16 relative z-10">
        <h3 className="text-4xl md:text-5xl mb-4 font-extrabold text-center text-gray-700 tracking-tight animate-fade-in-up m-0 font-salsa dark:text-gray-100">
         What I do ?
       </h3>
      <span className="animate-border border-black"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {serviceData.map((service) => (
          <Card
            key={service.id}
            className="group flex flex-col items-center p-8 bg-white/90 dark:bg-gray-900 backdrop-blur-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl"
            role="article"
            aria-labelledby={`service-title-${service.id}`}
          >
            <CardContent className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-opacity duration-500"></div>
              </div>
              <h2
                id={`service-title-${service.id}`}
                className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-salsa"
              >
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-md leading-relaxed font-mulish">
                {service.description}
              </p>
              <div className="mt-6 h-1 w-0 group-hover:w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;