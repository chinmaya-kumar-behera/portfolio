"use client";
import { THEME_COLOR } from "@/constant/color.constant";
import React from "react";

const AboutMe = () => {
  return (
    <main className="space-y-28">
      <section className="space-y-5">
        <h2
          className={`text-lg font-semibold font-barlow-semi-condensed`}
          style={{ color: THEME_COLOR }}
        >
          About Me
        </h2>
        <div className="">
          <p className="font-playfair text-5xl font-bold">
            I am an enthusiastic web developer based in Bengaluru, with a rich
            experience of over 5 years in website design and development.
          </p>
        </div>
      </section>
      <section className="flex items-start">
        <div className="w-1/2">
          <h2
            className="text-4xl font-playfair font-bold"
            style={{ color: THEME_COLOR }}
          >
            I design professional & beautiful websites
          </h2>
        </div>
        <div className="w-1/2 space-y-2 text-lg text-red-400 font-barlow-semi-condensed">
          <p className="text-gray-900">
            With years of experience in graphic and web design I have mastered
            the skills of understanding client requirements according to the
            latest trends. I have worked with businesses from different niches
            so you can rely on me for yours.
          </p>
          <p className="text-gray-500">
            I’ve spent most of these years working across different areas of
            design like front-end development, landing pages, email design, app
            UI/UX, to my current role designing products for mobile platforms.
            Having worked on various projects that are already live, I can help
            you with the best possible suggestions and ideas that we can proceed
            with. With me, you aren’t forced to accept anything. I give you a
            variety of options we can work on together.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
