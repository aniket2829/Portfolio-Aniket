"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";

const projectsData = [
  {
    id: 1,
    title: "Lillybuds Daycare Website",
    description: "A Next.js website with a Node.js backend (for admin) and PostgreSQL database, styled with Tailwind CSS for a modern, responsive UI. It features fast performance, SEO optimization, secure admin panel, dynamic content management, and user-friendly experience, making it ideal for managing daycare services efficiently.",
    image: typeof Project1 === "string" ? Project1 : Project1.src,
    tag: ["Web"],
    gitUrl: "https://github.com/aniket2829/Lillybuds-Daycare",
    previewUrl: "https://lilybudsdaycare.ca/",
  },
  {
    id: 2,
    title: "HustleHive Dashboard",
    description: "HustleHive: A React.js dashboard with a Node.js backend and PostgreSQL database, styled using Tailwind CSS for a sleek UI. It features user authentication, real-time data visualization, dynamic tables, API-driven architecture, notifications, and mobile responsiveness, making it ideal for analytics and admin panels.",
    image: typeof Project2 === "string" ? Project2 : Project2.src,
    tag: ["Web"],
    gitUrl: "https://github.com/aniket2829/HustleHive-fn",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes("Web")
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
