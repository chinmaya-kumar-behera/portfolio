import React from "react";
import GlowDot from "./components/GlowDot";
import YearBox from "./components/YearBox";
import VerticalLine from "./components/VerticalLine";
import Image from "next/image";
import learnDukeImage from "../../_asssets/images/learnduke-image.png"
import { SectionHeading } from "@/components/shared";
import { THEME_COLOR } from "@/constant/color.constant";

const Experience = () => {
  <strong></strong>
  const Exp = {
    role: "Web Full Stack Developer",
    description: [
      "Assisted with creating highly interactive and reusable web components using the JavaScript library <strong>React.js</strong>.",
      "Proficiency in frameworks including <strong>Tailwind CSS</strong>, <strong>Material Tailwind</strong>, and <strong>Material UI</strong> for streamlined web development.",
      "Utilized <strong>Recoil</strong> for state management in React, enabling efficient and scalable management of application state.",
      "Applied <strong>Node.js</strong> utility library Express to facilitate streamlined server-side operations.",
      "Proficient in designing and implementing <strong>RESTful APIs</strong> to ensure robust communication between clients and servers.",
      "Implemented <strong>caching</strong> techniques to improve backend performance by efficiently storing and fetching user data, resulting in fewer database queries and faster system responsiveness.",
      "Utilized <strong>Mongoose</strong> for writing CRUD operations, facilitating seamless data retrieval and updating in MongoDB databases.",
    ],
  };


  const ImageComp = (
    <div className="relative h-full w-full rounded">
      <a href="https://learnduke.com">
        <Image
          className="object-cover object-center hover:scale-105 transition-all duration-500"
          alt="Project_image"
          src={learnDukeImage}
          fill={true}
        />
      </a>
    </div>
  );


  return (
    <section className="relative w-full lg:space-y-5">
      <SectionHeading heading={"Experience"} />

      <div className="space-y-5 lg:space-y-10 py-10">
        <YearBox />
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row">
          <div className="w-full lg:w-3/5 p-0 lg:p-5">
            <div className="flex gap-5">
              <ul className="space-y-3">
                <li className="flex gap-5 items-center w-full">
                  <di className="max-w-5 w-full lg:max-w-10 flex justify-center">
                    <GlowDot />
                  </di>
                  <h1 className="text-xl lg:text-2xl font-playfair font-bold tracking-wider">
                    {Exp.role}
                  </h1>
                </li>

                <li className="flex gap-7 lg:gap-10">
                  <div className="max-w-5 w-full lg:max-w-10 flex justify-center">
                    <VerticalLine />
                  </div>
                  <ul className="space-y-1 list-disc">
                    {Exp.description.map((el, ind) => (
                      <li key={ind} className="text-md decoration-black">
                        <p dangerouslySetInnerHTML={{ __html: el }}></p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* ---- */}
          <div className="w-full lg:w-2/5 px-5 py-2 flex items-center">
            <div className="relative h-[450px] space-y-3  bg-opacity-15 w-full rounded ">
              <div className="h-1/2 w-full flex justify-end items-end gap-3">
                <div className="relative w-[15%] h-[20%] bg-blue-300">{ImageComp}</div>
                <div className="relative w-[25%] h-[90%] bg-blue-300">{ImageComp}</div>
                <div className="w-[45%] h-full flex flex-col gap-3">
                  <div className="w-full h-[50%] flex gap-3">
                    <div className="relative w-[50%] h-full bg-blue-300">{ImageComp}</div>
                  </div>
                  <div className="relative w-full h-[50%] bg-blue-300">{ImageComp}</div>
                </div>
              </div>
              <div className="h-1/2 w-full flex justify-start items-start gap-3">
                <div className="relative w-[40%] h-[60%] bg-blue-300">{ImageComp}</div>
                <div className="relative w-[30%] h-[90%] bg-blue-300">{ImageComp}</div>
                <div className="relative w-[20%] h-[50%] bg-blue-300">{ImageComp}</div>
              </div>

              {/* <div className="relative h-full w-full rounded">
                <a href="https://learnduke.com">
                  <Image
                    className="object-cover object-center hover:scale-105 transition-all"
                    alt="Project_image"
                    src={learnDukeImage}
                    fill={true}
                  />
                </a>
              </div> */}
            </div>
          </div>
          {/* --- */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
