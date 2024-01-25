import { THEME_COLOR } from "@/constant/color.constant";
import React from "react";

const Experience = () => {
  return (
    <section className="relative w-full py-10 space-y-5">
      <div className="font-playfair font-bold">
        <h1 className="text-6xl">Experience</h1>
      </div>
      <div className="pl-40">
        <div className="flex gap-5 mt-20">
          <div className="relative w-20 h-8 bg-gray-300 flex justify-center items-center">
            <span className="font-bold text-sm" style={{color:THEME_COLOR}}>2021</span>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 h-[23px] w-[23px] rotate-45 bg-gray-300"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
