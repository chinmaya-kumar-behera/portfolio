import React, { useState } from "react";
import Image from "next/image";
import { Heading, PageContainer } from "@/components/shared";
import { SkillDoc } from "./skills.doc";
import SkillDetails from "./SkillDetails";

const Skills = () => {
  const [modal, setModal] = useState(false);
  const [data,setData] = useState(null)

  const onReadMoreClick = (data) => {
    setModal(true);
    setData(data);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const skillStyle =
    "relative w-full md:max-w-[300px] p-7 space-y-4 bg-gray-100 border border-white hover:border-blue-500";

  return (
    <main id="skills" className="py-10">
      <PageContainer className={"px-4 lg:px-0 py-5 lg:py-0"}>
        <div className="py-10 lg:py-20 space-y-5 text-center">
          <Heading>
            <h1 className="">Expertise That Drives Results</h1>
          </Heading>
          <div className="w-full max-w-4xl mx-auto">
            <p>
              My expertise in full-stack development, React.js, and Node.js
              ensures that I deliver the results you're looking for on your
              portfolio website. By integrating these skills with my knowledge
              of current design trends and user experience (UX) principles, I
              create visually captivating and user-friendly websites that leave
              a lasting impression.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {SkillDoc.map((el, ind) => (
            <div key={el.name} className={skillStyle}>
              <div className="flex items-center justify-between">
                <div className="">
                  <span className="text-md font-semibold text-blue-500">
                    {el.name}
                  </span>
                </div>
                <div className=" rounded-full">
                  <Image className="" src={el.logo} height={45} width={45} />
                </div>
              </div>
              <div className="text-md">
                <p>{truncateText(el.desc, 200)}</p>
              </div>
              {el.desc.length > 200 && (
                <div className="">
                  <button
                    onClick={() => onReadMoreClick(el.desc)}
                    className="text-gray-900 hover:text-blue-500 text-sm font-semibold hover:underline transition-all"
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        {modal && (
          <SkillDetails
            isOpen={modal}
            onClose={() => setModal(false)}
            data={data}
          />
        )}
      </PageContainer>
    </main>
  );
};

export default Skills;
