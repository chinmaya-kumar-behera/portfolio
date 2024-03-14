import React from "react";
import GlowDot from "./components/GlowDot";
import YearBox from "./components/YearBox";
import VerticalLine from "./components/VerticalLine";
import Image from "next/image";
import learnDukeImage from "../../_asssets/images/learnduke-image.png"
import { SectionHeading } from "@/components/shared";
import { THEME_COLOR } from "@/constant/color.constant";

const Experience = () => {
  const projectDetails = [
    "Assisted with creating highly interactive and reusable web components using the JavaScript library React.js.",
    "Proficiency in frameworks including Tailwind CSS, Material Tailwind, and Material UI for streamlined web development.",
    "Utilized Recoil for state management in React, enabling efficient and scalable management of application state.",
    "Applied Node.js utility library Express to facilitate streamlined server-side operations.",
    "Proficient in designing and implementing RESTful APIs to ensure robust communication between clients and servers.",
    "Implemented caching techniques to improve backend performance by efficiently storing and fetching user data, resulting in fewer database queries and faster system responsiveness.",
    "Utilized Mongoose for writing CRUD operations, facilitating seamless data retrieval and updating in MongoDB databases.",
  ];
  return (
    <section className="relative w-full lg:space-y-5">
      <SectionHeading heading={"Experience"} />

      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row py-10">
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-12">
          <YearBox />
          <div className="flex gap-5 lg:gap-10 mt-2 pl-4 lg:pl-0">
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

                <div className="pr-10">
                  <ul className="space-y-1 list-disc">
                    {projectDetails.map((el,ind) => (
                      <li key={ind} className="text-sm decoration-black">{el}</li>
                    ))}
                  </ul>
                </div>

                <div className="lg:hidden w-full lg:w-1/3 px-5 py-2">
                  <div className="relative h-[150px] bg-gray-100 w-full rounded">
                    <div className="relative h-full w-full rounded">
                      <a href="https://learnduke.com">
                        <Image
                          className="object-cover object-center hover:scale-105 transition-all"
                          alt="Project_image"
                          src={learnDukeImage}
                          fill={true}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-1/3 px-5 py-2">
          <div className="relative h-[250px] bg-gray-100 w-full rounded">
            <div className="relative h-full w-full rounded">
              <a href="https://learnduke.com">
                <Image
                  className="object-cover object-center hover:scale-105 transition-all"
                  alt="Project_image"
                  src={learnDukeImage}
                  fill={true}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
