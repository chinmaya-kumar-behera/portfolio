// import { SectionHeading } from '@/components/shared';
// import React, { useState } from 'react'
// import ProjectDetails from './components/ProjectDetails';
// import ProjectCard from './components/ProjectCard';
// import { ProjectLists } from './project.doc';

// const Project = () => {
//   const [modal, setModal] = useState(false);
//   const [currentProjectId, setCurrentProjectId] = useState(null);

//   const onProjectClick = (value) => {
//     setCurrentProjectId(value);
//     setModal(true)
//   };

//   return (
//     <section id="projects" className="">
//       <SectionHeading heading={"Projects"} />

//       <div className="mt-10">
//         <div className="">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
//             {ProjectLists.map((el, index) => (
//               <ProjectCard
//                 onClick={() => onProjectClick(el.id)}
//                 key={index}
//                 size={"lg"}
//                 data={el}
//               />
//             ))}
//           </div>
//         </div>

//         {/* <div className="">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
//             {Array.from([1, 2, 3]).map((el, index) => (
//               <ProjectCard key={index} />
//             ))}
//           </div>
//         </div>   */}
//       </div>

//       {modal && (
//         <ProjectDetails
//           isOpen={modal}
//           onClose={() => setModal(false)}
//           projects={ProjectLists}
//           projectId={currentProjectId}
//           setProjectId={setCurrentProjectId}
//         />
//       )}
//     </section>
//   );
// }

// export default Project




"use client";
import { Accordion, PageContainer } from "@/components/shared";
import React, { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { ProjectLists } from "./project.doc";
import photo from "../../_asssets/images/demo.jpg"

const Project = () => {
  const [scale, setScale] = useState();  
  
    useEffect(() => {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const windowHeight = window.innerHeight;
        const distanceToBottom = scrollHeight - scrollTop - clientHeight;

        if (distanceToBottom > windowHeight) {
          setScale(true);
        } else {
          setScale(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <main
      id="about"
      className="min-h-screen "
    >
      <PageContainer className={"px-4 lg:px-0 py-5 lg:py-0"}>
        <div className="flex flex-col lg:flex-row py-10 lg:py-20 gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col font-bold text-3xl lg:text-5xl">
            <h1 className="">Some of My Notable Projects</h1>
          </div>
          <div className="w-full lg:w-1/2">{/* some text */}</div>
        </div>
      </PageContainer>

      <div className="max-h-[500px] overflow-hidden">
        <div
          className={` ${
            !scale ? "scale-125" : "scale-100"
          } transition-all duration-500`}
        >
          <div className="flex overflow-x-auto">
            {[1, 2, 3].map((el) => (
              <div className="min-w-full full md:min-w-1/2 md:w-1/2 lg:w-1/3 lg:max-w-1/3  h-[350px] md:h-[400px] lg:h-[450px]">
                <img
                  src={photo.src}
                  className="object-cover object-center h-full w-full"
                />
              </div>
            ))}
          </div>
          <div className="h-[50px] flex justify-center gap-1 items-center">
            <div className="h-3 w-3 rounded-full bg-gray-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
