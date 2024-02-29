import { THEME_COLOR } from '@/constant/color.constant';
import React from 'react'

const ProjectCard = ({ onClick, data }) => {

  return (
    <div
      className={`w-full h-fit bg-gray-100 p-2 space-y-3 border rounded` }
      name="1"
      onClick={onClick}
    >
      <div className={``}>
        <img
          src={data.thumbnaiil.src}
          className="h-full w-full object-center object-cover rounded-md"
        />
      </div>
      <div className="text-[16px] lg:text-lg">
        <h5
          className="font-barlow-semi-condensed"
          style={{ color: THEME_COLOR }}
        >
          <strong> {data.projectTitle}</strong> -{" "}
          <span className=" text-gray-700">{data.description}</span>
        </h5>
      </div>
    </div>
  );
};

export default ProjectCard