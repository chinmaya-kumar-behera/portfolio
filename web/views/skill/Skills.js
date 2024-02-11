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
import { SectionHeading } from "@/components/shared";

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
  const skillStyle = `w-[150px] md:w-[250px] h-[150px] md:h-[250px] flex justify-center items-center text-center bg-gray-200 rounded-lg hover:scale-105 transition-all duration-500 hover:bg-gray-100 hover:text-[${THEME_COLOR}]`;

  return (
    <section id="skills" className="w-full space-y-10 lg:space-y-20">
      <SectionHeading heading={"Skills"} />
      <div className="flex flex-wrap gap-5 justify-center">
        {skills.map((el) => (
          <div key={el.name} className={skillStyle}>
            <div className="flex flex-col gap-4 items-center">
              <div className="lg:hidden">
                <Image className="" src={el.logo} height={50} width={50} />
              </div>
              <div className="hidden lg:block">
                <Image className="" src={el.logo} height={80} width={80} />
              </div>
              <span className="font-semibold text-md md:text-lg">
                {el.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
