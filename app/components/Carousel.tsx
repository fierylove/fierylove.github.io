// app/components/Projects.tsx
"use client";

import React from "react";
import { projects } from "@/app/data/projects"; // Your project data module
import ReadMore from "./ReadMore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <Carousel>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <article className="bg-primary p-6 rounded shadow transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    {project.videoUrl && (
                      <div className="mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src={project.videoUrl}
                          title={`${project.title} Trailer`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
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
                          <p key={idx} className={idx > 0 ? "mt-4" : "mb-4"}>
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
          <CarouselPrevious>Previous</CarouselPrevious>
          <CarouselNext>Next</CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
