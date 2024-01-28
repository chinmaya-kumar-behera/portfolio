import React from "react";
import js from "../../_asssets/logo/javascript.png"
import css from "../../_asssets/logo/css.png"
import git from "../../_asssets/logo/git.png"
import sql from "../../_asssets/logo/sql.png";
import react from "../../_asssets/logo/react.png"
import node from "../../_asssets/logo/nodejs.png";
import mongodb from "../../_asssets/logo/mongodb.png";
import Image from "next/image";
import { THEME_COLOR } from "@/constant/color.constant";

const Skills = () => {
  const skills = [
    { name: "JavaScript", logo: js },
    { name: "ReactJs", logo: react },
    { name: "NodeJs", logo: node },
    { name: "HTMl & CSS", logo: css },
    { name: "MongoDb", logo: mongodb },
    { name: "SQL (ORACLE)", logo: sql },
    { name: "Git", logo: git },
  ];
  const skillStyle = `w-[250px] h-[250px] flex justify-center items-center text-center bg-gray-200 rounded-lg hover:scale-105 transition-all duration-500 hover:bg-gray-100 hover:text-[${THEME_COLOR}]`;

  return (
    <section className="w-full space-y-20">
      <div className="text-center">
        <h1 className="text-5xl font-playfair font-bold">My Skills</h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {skills.map((el) => (
          <div key={el.name} className={skillStyle}>
            <div className="flex flex-col gap-4 items-center">
              <Image className="" src={el.logo} height={80} width={80} />
              <span className="font-semibold">{el.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
