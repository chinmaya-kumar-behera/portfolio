import { THEME_COLOR } from "@/constant/color.constant";
import React from "react";

const SectionHeading = ({ heading }) => {
  return (
    <div className="space-y-5">
      <h1 className="font-playfair font-bold text-6xl">{heading}</h1>
      <div
        className="w-[100px] h-[5px] rounded-md"
        style={{ background: THEME_COLOR }}
      />
    </div>
  );
};

export default SectionHeading;
