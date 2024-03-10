"use client";
import { Accordion, PageContainer } from "@/components/shared";
import { THEME_COLOR } from "@/constant/color.constant";
import React from "react";

const AboutMe = () => {
  return (
    <main
      id="about"
      className="min-h-screen bg-gradient-to-tr from-indigo-500 via-indigo-100 to-white"
    >
      <PageContainer className={"px-4 lg:px-0 py-5 lg:py-0"}>
        <div className="">
          <div className="px-2 lg:px-0 flex flex-col py-10 lg:py-20 text-center font-bold text-3xl lg:text-5xl font-barlow-semi-condensed space-y-2">
            <h1 className="">
              Collaborate with Me to Build Your Dream <br className="hidden lg:block"/>
              Website
            </h1>
            <h1></h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          <div className="max-w-1/2">
            <img
              src="https://10web-site.ai/17/wp-content/uploads/sites/19/2024/02/2-3_NiOAKptj.webp"
              className=""
            />
          </div>
          <div className="max-w-lg flex flex-col gap-5 lg:gap-10 justify-center pr-10 lg:pr-0">
            <div className="font-bold text-3xl lg:text-5xl">
              Delivering Custom Web Solutions with Cutting-Edge Technologies
            </div>
            <div className="">
              With my full-stack development expertise, I create customized web
              solutions tailored to your specific needs. My work spans across
              the latest technologies, including React.js, Node.js, Express, and
              Next.js. Whatever your vision, I can bring it to life with
              seamless functionality and visual appeal.
            </div>
            <div className="">
              <Accordion
                title={
                  <div className="py-3">
                    <span className="text-blue-800 hover:text-black hover:underline text-lg font-bold">
                      My Vision
                    </span>
                  </div>
                }
              >
                <div className="py-2">
                  My vision is to create a digital world where every business
                  has a unique, engaging, and user-friendly online presence that
                  facilitates growth and success.
                </div>
              </Accordion>
              <Accordion
                title={
                  <div className="py-3">
                    <span className="text-blue-800 hover:text-black hover:underline text-lg font-bold">
                      My Mission
                    </span>
                  </div>
                }
              >
                <div className="py-2">
                  My mission is to empower businesses with the latest digital
                  technologies, creating user-centric web experiences that are
                  functional, reliable, and aesthetically pleasing.
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
};

export default AboutMe;
