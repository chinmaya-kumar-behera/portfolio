// src/components/Skills.js
import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
    "RESTful APIs",
    "Database Management",
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-300 p-2 m-2 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
