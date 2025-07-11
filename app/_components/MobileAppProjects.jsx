"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { mobileAppData } from "./projectData";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";


// Reusable ProjectCard component
const ProjectCard = ({ mobile }) => {
  return (
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
                                      className="rounded-xl object-center w-full h-64  md:h-96 transition-transform duration-500 group-hover:scale-105"
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
  );
};

const MobileAppProjects = () => {
  return (
    <section
      className="dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
      aria-labelledby="projects-heading"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {mobileAppData?.map((mobile) => (
                  <ProjectCard key={mobile.id} mobile={mobile} />
                ))}
              </div>
    </section>
  );
};

export default MobileAppProjects;