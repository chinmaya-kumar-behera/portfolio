import { THEME_COLOR } from '@/constant/color.constant';
import React, { useEffect } from 'react'

const ProjectCard = ({ size ='sm', className }) => {
  const onProjectClick = (value) => {
    alert("hello world", value);
  };


  const cardSize = {
    lg: "h-[200px] md:h-[250px] lg:h-[300px]",
    md: "h-[200px] md:h-[250px] lg:h-[300px]",
    sm: "h-[200px] md:h-[250px] lg:h-[300px]",
  };

  useEffect(() => {
    
  },[])

  return (
    <div
      className={`w-full h-fit bg-gray-100 p-5 space-y-3`}
      name="1"
      onClick={() => onProjectClick(1)}
    >
      <div className={` w-full full`}>
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          className="h-full w-full object-center object-cover rounded-md"
        />
      </div>
      <div className="text-[16px] lg:text-lg">
        <h5
          className="font-barlow-semi-condensed"
          style={{ color: THEME_COLOR }}
        >
          <strong> Workers Hive</strong> -{" "}
          <span className=" text-gray-700">
            A site to register as a worker and get work
          </span>
        </h5>
      </div>
    </div>
  );
};

export default ProjectCard