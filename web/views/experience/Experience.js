import { THEME_COLOR } from "@/constant/color.constant";
import React from "react";
import GlowDot from "./components/GlowDot";
import YearBox from "./components/YearBox";
import VerticalLine from "./components/VerticalLine";

const Experience = () => {
  return (
    <section className="relative w-full py-10 space-y-5">
      <div className="font-playfair font-bold">
        <h1 className="text-6xl">Experience</h1>
      </div>

      <div className="flex py-10">
        <div className="w-2/3 flex gap-12">
          <YearBox />
          <div className="flex gap-10 mt-2">
            <div className="flex flex-col items-center gap-5">
              <GlowDot />
              <VerticalLine />
            </div>
            <div className="-mt-2">
              <div className="h-full w-full space-y-2">
                <h1 className="text-2xl font-playfair font-bold tracking-wider">
                  Full Stack Developer Intern
                </h1>
                <h3 className="text-md font-mono text-gray-600">
                  YCY CLASS EDUTECH PRIVATE LIMITED, BHUBANESWAR
                </h3>

                <div className="">
                  {/* <p className="text-xl font-barlow-semi-condensed"> */}
                  <p className="font-playfair">
                    hello sir i am chinmaya kumar behera going to kill ravana
                    and i want to tell you regarding hello sir i am chinmaya
                    kumar behera going to kill ravana and i want to tell you
                    regarding hello sir i am chinmaya kumar behera going to kill
                    ravana and i want to tell you regarding hello sir i am
                    chinmaya kumar behera going to kill ravana and i want to
                    tell you regarding hello sir i am chinmaya kumar behera
                    going to kill ravana i want to tell you regarding hello sir
                    i am chinmaya kumar behera going to kill ravana and i want
                    to tell you regarding hello sir i am chinmaya kumar behera
                    going to kill ravana and i want to tell you regarding hello
                    sir i am chinmaya kumar behera going to kill ravana and i
                    want to tell you regarding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 px-5 py-2">
          <div className="h-[250px] bg-red-300 rounded-xl">
            Project Work Photos
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;
