import { SectionHeading } from '@/components/shared';
import { THEME_COLOR } from '@/constant/color.constant';
import Image from 'next/image';
import React, { useState } from 'react'
import ProjectDetails from './components/ProjectDetails';
import ProjectCard from './components/ProjectCard';


const Project = () => {

  const [modal, setModal] = useState(false);

  const onProjectClick = (value) => {
    setModal(true)
  };

  return (
    <section id="projects" className="">
      <SectionHeading heading={"Projects"} />

      <div className="mt-10">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
            {Array.from([1, 2]).map((el, index) => (
              <ProjectCard key={index} size={'lg'} />
            ))}
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {Array.from([1, 2, 3]).map((el, index) => (
              <ProjectCard key={index} />
            ))}
          </div>
        </div>  
      </div>

      {modal && (
        <ProjectDetails isOpen={modal} onClose={() => setModal(false)} />
      )}
    </section>
  );
}

export default Project