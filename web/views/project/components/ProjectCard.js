import Button from '@/components/UI/Button';
import { THEME_COLOR } from '@/constant/color.constant';
import React from 'react'

const ProjectCard = ({ onClick, data }) => {
  const onVisitSite = (e) => {
    e.stopPropagation();
    window.open(data.websiteLink, "_blank");
  }

  return (
    // <div
    //   className={`w-full h-fit bg-gray-100 p-2 space-y-3 border rounded` }
    //   name="1"
    //   onClick={onClick}
    // >
    //   <div className={``}>
    //     <img
    //       src={data.thumbnaiil.src}
    //       className="h-full w-full object-center object-cover rounded-md"
    //     />
    //   </div>
    //   <div className="text-[16px] lg:text-lg">
    //     <h5
    //       className="font-barlow-semi-condensed"
    //       style={{ color: THEME_COLOR }}
    //     >
    //       <strong> {data.projectTitle}</strong> -{" "}
    //       <span className=" text-gray-700">{data.description}</span>
    //     </h5>
    //   </div>
    // </div>

    <div className="" onClick={onClick}>
      <div className="min-w-full full md:min-w-1/2 md:w-1/2 lg:w-1/3 lg:max-w-1/3 shadow-xl">
        <div className="max-w-3xl h-[200px] md:h-[350px] lg:h-[400px]">
          <img
            src={data.thumbnaiil.src}
            className="object-cover object-center h-full w-full rounded"
          />
        </div>
        <div className="p-3 space-y-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <h3 className="font-semibold text-lg md:text-2xl text-blue-700">
              {data.projectTitle}
            </h3>
            <div className="flex gap-4">
              <button className='text-blue-500 hover:underline text-sm'>view details</button>
              <Button className={"px-4 py-1"} onClick={onVisitSite}>
                <span className="sm:text-sm">Visit Site</span>
              </Button>
            </div>
          </div>
          <div className="">
            <span className=" text-gray-700">{data.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard