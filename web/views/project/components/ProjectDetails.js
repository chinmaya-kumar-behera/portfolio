import Dialog from "@/components/UI/Dialog";
import React, { useEffect, useState } from "react";
import ProjectContent from "./ProjectContent";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ProjectDetails = ({ isOpen, onClose, projects , projectId, setProjectId}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (projectId) setData(projects.find((el) => el.id === projectId ));
  }, [projectId]);


  const totalProjects = projects.length;

  const onNextArrow = () => {
    if (projectId < totalProjects) {
      setProjectId(projectId + 1);
    }
  };

  const onPrevArrow = () => {
    if (projectId > 0) {
      setProjectId(projectId - 1);
    }
  }

  console.log(projectId)

  return (
    <Dialog
      className="relative h-full"
      contentClassName="w-full h-full max-w-full xl:max-w-6xl lg:max-w-5xl"
      overlayClassName="backdrop-blur oveflow-y-scroll"
      isOpen={isOpen}
      closable={false}
      onClose={onClose}
      onRequestClose={onClose}
    >
      <div className="relative h-full flex gap-5">
        <button
          className="lg:hidden absolute top-2 right-2 z-10 p-1 bg-white rounded-full "
          onClick={onClose}
        >
          <RxCross2 className="text-xl text-blue-700" />
        </button>
        <aside className="hidden lg:flex items-center cursor-pointer">
          <MdArrowBackIos
            className={`text-5xl ${projectId > 0 ? 'text-white hover:scale-110' : 'text-gray-300 hover:cursor-no-drop'} transition-all`}
            onClick={onPrevArrow}
          />
        </aside>
        <div className="overflow-y-scroll min-h-screen h-full no-scrollbar lg:py-10">
          <div className="bg-white lg:rounded-xl p-5">
            {data && <ProjectContent data={data} />}
          </div>
        </div>
        <aside className="hidden relative lg:flex items-center">
          <MdArrowForwardIos
            className={`text-5xl ${projectId < totalProjects ? 'text-white hover:scale-110' : 'text-gray-300 hover:cursor-no-drop transition-all'}`}
            onClick={onNextArrow}
          />
          <div className="absolute top-10">
            <button className="" onClick={onClose}>
              <RxCross2 className="text-4xl text-white" />
            </button>
          </div>
        </aside>
      </div>
    </Dialog>
  );
};

export default ProjectDetails;
