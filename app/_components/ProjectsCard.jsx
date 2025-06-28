"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { homeProjectData, mobileAppData } from "./projectData";

const ProjectsCard = () => {
  const router = useRouter();

  return (
    <div
      // style={{
      //   backgroundImage: `url(${aiBg.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <section
        className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden bg-gradient-to-b transition-colors duration-300"
        aria-labelledby="projects-heading"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="space-y-3">
            <h2
              id="projects-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-salsa"
            >
              Latest Projects
            </h2>
            <span className="animate-border border-black"></span>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg font-mulish">
              Explore my latest work, showcasing innovative solutions and
              cutting-edge technologies.
            </p>
          </div>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255 255 255)",
              boxShadow: "0px 0px 8px #17a2b8",
              transition: { duration: 0.4, yoyo: "Infinity" },
            }}
            className="rounded-md p-3 bg-gray-700 text-white font-mulish"
            onClick={() => router.push("/projects")}
          >
            See All Projects
          </motion.button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {homeProjectData?.map((project) => (
            <Card
              className="group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700"
              role="article"
              aria-labelledby="a-to-z-heading"
              aria-describedby="a-to-z-description"
              key={project.id}
            >
              <CardContent className="p-6 md:p-10 flex flex-col md:flex-row gap-10">
                {/* Text content */}
                <div className="flex-1 flex flex-col justify-center space-y-6">
                  <h3
                    id="a-to-z-heading"
                    className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight font-salsa"
                  >
                    {project.name}
                  </h3>
                  <p
                    id="a-to-z-description"
                    className="text-gray-700 dark:text-gray-300 leading-relaxed font-mulish"
                  >
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((lan) => (
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1"
                        key={lan.id}
                      >
                        <Icon icon={lan.icon} className="w-4 h-4" />
                        {lan.name}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    {project.liveLink && (
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-semibold font-salsa"
                        aria-label="Live Site"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        <Icon icon="line-md:link" className="w-5 h-5 mr-1" />
                        Live
                      </Button>
                    )}

                    {project.githubLink && (
                      <Button
                        variant="link"
                        className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors font-semibold font-salsa"
                        aria-label="GitHub Repository"
                        onClick={() =>
                          window.open(project.githubLink, "_blank")
                        }
                      >
                        <Icon icon="ri:github-fill" className="w-5 h-5 mr-1" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>

                {/* Image carousel */}
                <div className="flex-1 flex justify-center items-center">
                  <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <Carousel
                      className="w-full"
                      plugins={[
                        Autoplay({
                          delay: 2500,
                          stopOnInteraction: false,
                        }),
                      ]}
                      opts={{ loop: true }}
                    >
                      <CarouselContent>
                        {project.images.map((item, index) => (
                          <CarouselItem key={index}>
                            <div className="relative p-2 md:p-4">
                              <Image
                                src={item}
                                alt={`Repair preview ${index + 1}`}
                                width={800}
                                height={500}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                placeholder="blur"
                                className="rounded-xl object-center w-full h-56 md:h-80 transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Mobile App section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {mobileAppData?.map((mobile) => (
            <Card
              className="group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700"
              role="article"
              aria-labelledby="a-to-z-heading"
              aria-describedby="a-to-z-description"
              key={mobile.id}
            >
              <CardContent className="p-6 md:p-10 flex flex-col md:flex-col gap-10 ">
                {/* Text content */}
                <div className="flex-1 flex flex-col justify-center space-y-6">
                  <h3
                    id="a-to-z-heading"
                    className=" text-center text-3xl font-bold text-gray-900 dark:text-white tracking-tight font-salsa"
                  >
                    {mobile.name}
                  </h3>
                  <p
                    id="a-to-z-description"
                    className=" text-center text-gray-700 dark:text-gray-300 leading-relaxed font-mulish"
                  >
                     {mobile.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mobile.languages.map((lan) => (
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1"
                        key={lan.id}
                      >
                        <Icon icon={lan.icon} className="w-4 h-4" />
                        {lan.name}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-semibold font-salsa"
                      aria-label="Live Site"
                      onClick={() => window.open(mobile.appleLink, "_blank")}
                    >
                      <Icon
                        icon="basil:app-store-outline"
                        className="w-5 h-5 mr-1"
                      />
                      App store
                    </Button>

                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-semibold font-salsa"
                      aria-label="GitHub Repository"
                      onClick={() => window.open(mobile.googlePlay, "_blank")}
                    >
                      <Icon
                        icon="arcticons:google-play-store"
                        className="w-5 h-5 mr-1"
                      />
                      Google play store
                    </Button>

                    <Button
                      variant="link"
                      className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors font-semibold font-salsa"
                      aria-label="GitHub Repository"
                      onClick={() => window.open(mobile.githubLink, "_blank")}
                    >
                      <Icon icon="ri:github-fill" className="w-5 h-5 mr-1" />
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Image carousel */}
                <div className="flex-1 flex justify-center items-center">
                  <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <Carousel
                      className="w-full"
                      plugins={[
                        Autoplay({
                          delay: 2500,
                          stopOnInteraction: false,
                        }),
                      ]}
                      opts={{ loop: true }}
                    >
                      <CarouselContent>
                        {mobile.images.map((item, index) => (
                          <CarouselItem key={index}>
                            <div className="relative p-2 md:p-4">
                              <Image
                                src={item}
                                alt={`Repair preview ${index + 1}`}
                                width={800}
                                height={500}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                placeholder="blur"
                                className="rounded-xl object-center w-full h-64 md:h-96 transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsCard;
