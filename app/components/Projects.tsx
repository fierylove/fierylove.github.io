"use client";

import React from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { projects } from "@/app/data/projects";
import ReadMore from "./ReadMore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-blue-50" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 border-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        {/* Wrapping container to restrict overflow */}
        <div className="relative overflow-hidden">
          <Carousel>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <article className="bg-primary p-6 rounded shadow transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h3>
                      {project.videoUrl && (
                        <div className="mb-4">
                          <ReactPlayer
                            url={project.videoUrl}
                            width="100%"
                            height="315px"
                            controls
                          />
                        </div>
                      )}
                      {project.images && project.images.length > 0 && (
                        <div className="columns-3 gap-2 mb-4">
                          {project.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${project.title} Image ${idx + 1}`}
                              className="rounded w-full mb-4"
                            />
                          ))}
                        </div>
                      )}
                      {project.descriptions && (
                        <ReadMore collapsedHeight={120}>
                          {project.descriptions.map((desc, idx) => (
                            <p
                              key={idx}
                              className={idx > 0 ? "mt-4" : "mb-4"}
                            >
                              {desc}
                            </p>
                          ))}
                        </ReadMore>
                      )}
                    </article>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Absolutely positioned controls */}
            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded">
              Previous
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded">
              Next
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
