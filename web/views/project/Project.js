import { SectionHeading } from '@/components/shared';
import { THEME_COLOR } from '@/constant/color.constant';
import Image from 'next/image';
import React, { useState } from 'react'
import ProjectDetails from './components/ProjectDetails';

const Project = () => {

  const [modal, setModal] = useState(false);

  const onProjectClick = (value) => {
    setModal(true)
  };

  const projectCardStyle = '';

  return (
    <section id="projects" className="">
      <SectionHeading heading={"Project"} />
      <div className="mt-10 space-y-3">
        {/* first line */}
        <div className="flex gap-3 items-center">
          {/* first project */}
          <div
            className="w-2/4 h-full bg-gray-100 p-5 space-y-3"
            name="1"
            onClick={() => onProjectClick(1)}
          >
            <div className="h-[300px] w-full">
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                className="h-full w-full object-center object-cover rounded-md"
              />
            </div>
            <div className="">
              <h5
                className="text-lg font-barlow-semi-condensed"
                style={{ color: THEME_COLOR }}
              >
                <strong> Workers Hive</strong> -{" "}
                <span className="text-gray-700">
                  A site to register as a worker and get work
                </span>
              </h5>
            </div>
          </div>
          {/* second project */}
          <div className="w-2/4 h-full bg-gray-100 p-5 space-y-3">
            <div className="h-[300px] w-full">
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                className="h-full w-full object-center object-cover rounded-md"
              />
            </div>
            <div className="">
              <h5
                className="text-lg font-barlow-semi-condensed"
                style={{ color: THEME_COLOR }}
              >
                Hello sir i am chinmaya kumar behera going to kill ravana
              </h5>
            </div>
          </div>
        </div>
        {/* second line */}

        <div className="flex gap-3 items-center">
          {/* third project */}
          <div className="w-1/3 h-full bg-gray-100 p-5 space-y-3">
            <div className="h-[200px] w-full">
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                className="h-full w-full object-center object-cover rounded-md"
              />
            </div>
            <div className="">
              <h5
                className="text-lg font-barlow-semi-condensed"
                style={{ color: THEME_COLOR }}
              >
                Hello sir i am chinmaya
              </h5>
            </div>
          </div>
          {/* 4th project */}
          <div className="w-1/3 h-full bg-gray-100 p-5 space-y-3">
            <div className="h-[200px] w-full">
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                className="h-full w-full object-center object-cover rounded-md"
              />
            </div>
            <div className="">
              <h5
                className="text-lg font-barlow-semi-condensed"
                style={{ color: THEME_COLOR }}
              >
                Hello sir i am chinmaya
              </h5>
            </div>
          </div>
          {/* 5th project */}
          <div className="w-1/3 h-full bg-gray-100 p-5 space-y-3">
            <div className="h-[200px] w-full">
              <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                className="h-full w-full object-center object-cover rounded-md"
              />
            </div>
            <div className="">
              <h5
                className="text-lg font-barlow-semi-condensed"
                style={{ color: THEME_COLOR }}
              >
                Hello sir i am chinmaya
              </h5>
            </div>
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