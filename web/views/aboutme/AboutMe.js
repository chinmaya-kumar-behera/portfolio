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
              Collaborate with Me to Build Your Dream{" "}
              <br className="hidden lg:block" />
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
              I have a lot of experience building websites from start to finish.
              I focus on making each website unique and tailored to your needs.
              I use the newest technologies like React.js, Node.js, Express, and
              Next.js to make sure your website is modern and works great.
              Whether it's a fun interactive web app or a beautiful website, I
              make sure everything works smoothly and looks great.
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
                  To revolutionize the digital landscape by creating innovative
                  and impactful web solutions that empower businesses and
                  individuals alike.
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
                  To consistently deliver exceptional web experiences by
                  combining creativity, expertise, and cutting-edge
                  technologies, ultimately driving success and satisfaction for
                  my clients.
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
