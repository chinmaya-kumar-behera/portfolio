import Dialog from "@/components/UI/Dialog";
import React, { useEffect } from "react";
import ProjectContent from "./ProjectContent";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ProjectDetails = ({ isOpen, onClose }) => {
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
        <aside className="hidden lg:flex items-center cursor-pointer">
          <MdArrowBackIos className="text-5xl text-white" />
        </aside>
        <div className="overflow-y-scroll min-h-screen h-full no-scrollbar lg:py-10">
          <div className="bg-white lg:rounded-xl p-5">
            <ProjectContent />
          </div>
        </div>
        <aside className="hidden relative lg:flex items-center">
          <MdArrowForwardIos className="text-5xl text-white" />
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
