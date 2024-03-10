// import React from "react";
"use client";
import js from "../../_asssets/logo/javascript.png"
import css from "../../_asssets/logo/css.png"
import git from "../../_asssets/logo/git.png"
import sql from "../../_asssets/logo/sql.png";
import react from "../../_asssets/logo/react.png"
import node from "../../_asssets/logo/nodejs.png";
import mongodb from "../../_asssets/logo/mongodb.png";
import Image from "next/image";
// import { THEME_COLOR } from "@/constant/color.constant";
// import { SectionHeading } from "@/components/shared";

// const Skills = () => {
  // const skills = [
  //   { name: "JavaScript", logo: js },
  //   { name: "ReactJs", logo: react },
  //   { name: "NodeJs", logo: node },
  //   { name: "HTMl & CSS", logo: css },
  //   { name: "MongoDb", logo: mongodb },
  //   { name: "SQL (ORACLE)", logo: sql },
  //   { name: "Git", logo: git },
  // ];
  // const skillStyle = `w-[150px] md:w-[250px] h-[150px] md:h-[250px] flex justify-center items-center text-center bg-gray-200 rounded-lg hover:scale-105 transition-all duration-500 hover:bg-gray-100 hover:text-[${THEME_COLOR}]`;

//   return (
//     <section id="skills" className="w-full space-y-10 lg:space-y-20">
//       <SectionHeading heading={"Skills"} />
//       <div className="flex flex-wrap gap-5 justify-center">
        // {skills.map((el) => (
        //   <div key={el.name} className={skillStyle}>
        //     <div className="flex flex-col gap-4 items-center">
        //       <div className="lg:hidden">
        //         <Image className="" src={el.logo} height={50} width={50} />
        //       </div>
        //       <div className="hidden lg:block">
        //         <Image className="" src={el.logo} height={80} width={80} />
        //       </div>
        //       <span className="font-semibold text-md md:text-lg">
        //         {el.name}
        //       </span>
        //     </div>
        //   </div>
        // ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;



import { PageContainer } from "@/components/shared";
import React from "react";

const Skills = () => {
    const skills = [
      {
        name: "JavaScript",
        logo: js,
        desc: "Designed and developed front-end interfaces for web applications with React.js, ensuring optimal performance and usability",
      },
      {
        name: "ReactJs",
        logo: react,
        desc: "Designed and developed front-end interfaces for web applications with React.js, ensuring optimal performance and usability",
      },
      {
        name: "NodeJs",
        logo: node,
        desc: "Designed and developed front-end interfaces for web applications with React.js, ensuring optimal performance and usability",
      },
      {
        name: "HTMl & CSS",
        logo: css,
        desc: "Designed and developed front-end interfaces for web applications with React.js, ensuring optimal performance and usability",
      },
      {
        name: "MongoDb",
        logo: mongodb,
        desc: "Designed and developed front-end interfaces for web applications with React.js, ensuring optimal performance and usability",
      },
      {
        name: "SQL (ORACLE)",
        logo: sql,
        desc: "Designed and developed front-end interfaces for web applications with React.js, ensuring optimal performance and usability",
      },
      {
        name: "Git",
        logo: git,
        desc: "Designed and developed front-end interfaces for web applications with React.js, ensuring optimal performance and usability",
      },
    ];
  // const skillStyle = `w-[150px] md:w-[250px] h-[150px] md:h-[250px] flex justify-center items-center text-center bg-gray-200 rounded-lg hover:scale-105 transition-all duration-500 hover:bg-gray-100 hover:text-[${THEME_COLOR}]`;
   const skillStyle = `relative w-full md:max-w-[300px] p-7 space-y-4 bg-gray-100 border border-white hover:border-blue-500`;

  return (
    <main id="about" className="">
      <PageContainer className={"px-4 lg:px-0 py-5 lg:py-0"}>
        <div className="flex flex-col lg:flex-row py-10 lg:py-20 gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col font-bold text-3xl lg:text-5xl">
            <h1 className="">Expertise That Drives Results</h1>
          </div>
          <div className="w-full lg:w-1/2">
            <p>
              My proficiency in full-stack development, React.js, and Node.js
              drives the results you need. I combine these skills with a deep
              understanding of the latest design trends and UX principles to
              create websites that are visually appealing and user-friendly.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((el) => (
            <div key={el.name} className={skillStyle}>
              <div className="flex items-center justify-between">
                <div className="">
                  <span className="text-sm text-blue-700">{el.name}</span>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <Image className="" src={el.logo} height={35} width={35} />
                </div>
              </div>
              <div className="text-md">
                <p>{el.desc}</p>
              </div>

              <div className="py-2">
                <button className="text-gray-900 hover:text-blue-500 text-sm font-semibold hover:underline transition-all">Read More</button>
              </div>

              {/* <div className="flex flex-col gap-4 items-center">
                <div className="lg:hidden">
                  <Image className="" src={el.logo} height={50} width={50} />
                </div>
                <div className="hidden lg:block">
                  <Image className="" src={el.logo} height={80} width={80} />
                </div>
                <span className="font-semibold text-md md:text-lg">
                  {el.name}
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </PageContainer>
    </main>
  );
};

export default Skills;
