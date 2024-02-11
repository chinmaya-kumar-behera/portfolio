import { THEME_COLOR } from "@/constant/color.constant";
import React from "react";

const SectionHeading = ({ heading }) => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-3 lg:space-y-5 ">
      <h1 className="font-playfair font-bold text-3xl lg:text-6xl">{heading}</h1>
      <div
        className="w-[50px] lg:w-[100px] h-[3px] lg:h-[5px] rounded-md"
        style={{ background: THEME_COLOR }}
      />
    </div>
  );
};

export default SectionHeading;
