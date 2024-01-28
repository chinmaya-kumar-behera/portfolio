'use client';
import React from 'react'
import logo from '../../_asssets/logo/ck-logo.png'
import Image from 'next/image';
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const router = useRouter();

  useEffect(() => {
    if (router.asPath?.includes("#")) {
      const targetSection = router.asPath.split("#")[1];
      console.log(targetSection)
      scrollToSection(targetSection);
    }
  }, [router.asPath]);

  return (
    <div className="flex justify-between items-center z-10">
      <div className="flex items-center gap-3 py-2">
        <div className="relative h-[70px] w-[70px]">
            <Image src={logo} fill={true} className="absolute h-full w-full object-cover object-center" />
          </div>
        <span className="text-3xl font-barlow-semi-condensed font-bold tracking-wider text-gray-600">
          CHINMAYA KUMAR
        </span>
      </div>
      <div className="py-5">
        <ul className="flex items-center gap-10 text-gray-700 cursor-pointer font-barlow-semi-condensed">
          <Link href={'#about'} className="hover:text-blue-500 transition-all">ABOUT</Link>
          <Link href={'#skills'} className="hover:text-blue-500 transition-all">SKILLS</Link>
          <Link href={'#experience'} className="hover:text-blue-500 transition-all">EXPERIENCE</Link>
          <Link href={'#projects'} className="hover:text-blue-500 transition-all">PROJECTS</Link>
          <Link href={'#contact'} className="hover:text-blue-500 transition-all">CONTACT</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar