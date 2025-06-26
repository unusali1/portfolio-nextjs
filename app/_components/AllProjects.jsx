"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import abroadInquiry from "../../public/assets/project/abroadInquiry.webp";
import abroadInquiryMobileApp from "../../public/assets/project/abroadInquiryMobileApp.webp";
import dayfuna from "../../public/assets/project/dayfuna.webp";
import dayfunaMobileApp from "../../public/assets/project/dayfunaMobileApp.webp";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { allProjectData } from "./projectData";

const AllProjects = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openPreview = (img) => {
    setActiveImage(img);
    setIsModalOpen(true);
  };

  const closePreview = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <section
      className="container mx-auto px-2 py-4 md:py-2 relative overflow-hidden bg-gradient-to-b transition-colors duration-300"
      aria-labelledby="projects-heading"
    >
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {allProjectData?.map((project) => (
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
                      onClick={() => window.open(project.githubLink, "_blank")}
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
                            <div
                              onClick={() => openPreview(item)}
                              className="absolute top-3 left-3 z-10 cursor-pointer bg-black/60 text-white px-2 py-1 text-xs font-semibold rounded backdrop-blur hover:bg-black/80"
                            >
                              Preview
                            </div>
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

        {isModalOpen && activeImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden">
              <Button
                variant="outline"
                onClick={closePreview}
                className="absolute top-4 right-4 text-black dark:text-gray-300 hover:text-red-500 text-2xl font-bold z-10"
                aria-label="Close preview"
              >
                &times;
              </Button>
              <Image
                src={activeImage}
                alt="Full preview"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
