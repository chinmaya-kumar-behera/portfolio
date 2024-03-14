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
        desc: "Proficient in JavaScript ES6+. Experienced in asynchronous programming, closure, hoisting concepts. Strong debugging skills and continuous learning to stay updated with latest trends.",
      },
      {
        name: "ReactJs",
        logo: react,
        desc: "Expertise in React.js and its ecosystem, including React Router and Recoil. Proficient in creating dynamic and interactive user interfaces. Experienced in state management and component-based architecture.",
      },
      {
        name: "NodeJs",
        logo: node,
        desc: "Good understanding of Node.js and Express.js for server-side development. Experience in building RESTful APIs and handling asynchronous operations.",
      },
      {
        name: "HTMl & CSS",
        logo: css,
        desc: "Proficient in HTML5 and CSS3 for creating responsive and visually appealing web pages. Experience in implementing modern CSS framework Tailwind CSS. Strong understanding of web design principles and best practices.",
      },
      {
        name: "MongoDb",
        logo: mongodb,
        desc: "Experience in MongoDB database management. Proficient in CRUD operations and schema design. Familiarity with Mongoose ODM for Node.js applications.",
      },
      {
        name: "SQL (ORACLE)",
        logo: sql,
        desc: "Proficient in writing SQL queries for data retrieval, manipulation, and management. Skilled in working with subqueries, joins for complex data retrieval tasks.",
      },
      {
        name: "Git",
        logo: git,
        desc: "Strong version control skills using Gitea, GitLab and GitHub. Proficient in branching, merging, resolving conflicts and raising PR. Experience in collaborative development and managing repositories.",
      },
    ];
   const skillStyle = `relative w-full md:max-w-[300px] p-7 space-y-4 bg-gray-100 border border-white hover:border-blue-500`;

  return (
    <main id="skills" className="py-10">
      <PageContainer className={"px-4 lg:px-0 py-5 lg:py-0"}>
        <div className="py-10 lg:py-20 space-y-5 text-center">
          <div className="w-full font-bold text-3xl lg:text-5xl">
            <h1 className="">Expertise That Drives Results</h1>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <p>
              My expertise in full-stack development, React.js, and Node.js
              ensures that I deliver the results you're looking for on your
              portfolio website. By integrating these skills with my knowledge
              of current design trends and user experience (UX) principles, I
              create visually captivating and user-friendly websites that leave
              a lasting impression.
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

              {/* <div className="py-2">
                <button className="text-gray-900 hover:text-blue-500 text-sm font-semibold hover:underline transition-all">
                  Read More
                </button>
              </div> */}

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
