// src/components/Projects.js
import React from "react";

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Description for Project 1" },
    { title: "Project 2", description: "Description for Project 2" },
    { title: "Project 3", description: "Description for Project 3" },
    { title: "Project 4", description: "Description for Project 4" },
    { title: "Project 5", description: "Description for Project 5" },
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
