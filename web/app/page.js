"use client";
import { PageContainer } from "@/components/shared";
import Navbar from "@/views/header";
import AboutMe from "@/views/aboutme/AboutMe";
import Skills from "@/views/skill";
import Experience from "@/views/experience";
import SocialLinks from "@/views/social";
import Project from "@/views/project";
import Profile from "@/views/profile";
import Contact from "@/views/contact";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {

  return (
    <main className="mx-auto">
      <ScrollIndicator/>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute -right-[65%] -top-[25%] h-[1700px] w-[1700px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-white" />

        <div className="fixed right-2 bottom-6 z-20">
          <SocialLinks />
        </div>

        <section className="relative mx-auto">
          <PageContainer>
            <Navbar />

            <Profile />

            <div className="py-20">
              <AboutMe />
            </div>

            <div className="py-20">
              <Skills />
            </div>

            <div className="py-10">
              <Experience />
            </div>

            <div className="py-10">
              <Project />
            </div>
          </PageContainer>
        </section>

        <section className="bg-gray-200">
          <PageContainer>
            <div className="py-20">
              <Contact />
            </div>
          </PageContainer>
        </section>

        <footer className="text-center text-sm py-2">
          @copyright
        </footer>
      </div>
    </main>
  );
}





