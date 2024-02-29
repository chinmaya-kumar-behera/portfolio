import { SectionHeading } from '@/components/shared';
import React, { useState } from 'react'
import ProjectDetails from './components/ProjectDetails';
import ProjectCard from './components/ProjectCard';
import { ProjectLists } from './project.doc';

const Project = () => {
  const [modal, setModal] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const onProjectClick = (value) => {
    setCurrentProjectId(value);
    setModal(true)
  };

  return (
    <section id="projects" className="">
      <SectionHeading heading={"Projects"} />

      <div className="mt-10">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
            {ProjectLists.map((el, index) => (
              <ProjectCard
                onClick={() => onProjectClick(el.id)}
                key={index}
                size={"lg"}
                data={el}
              />
            ))}
          </div>
        </div>

        {/* <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {Array.from([1, 2, 3]).map((el, index) => (
              <ProjectCard key={index} />
            ))}
          </div>
        </div>   */}
      </div>

      {modal && (
        <ProjectDetails
          isOpen={modal}
          onClose={() => setModal(false)}
          projects={ProjectLists}
          projectId={currentProjectId}
          setProjectId={setCurrentProjectId}
        />
      )}
    </section>
  );
}

export default Project