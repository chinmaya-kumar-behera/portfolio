import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from "../../../_asssets/logo/ck-logo.png"

const ProjectLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-[70px] w-[70px]">
        <Link href={"#profile"} className="hover:text-blue-500 transition-all">
          <Image
            src={logo}
            fill={true}
            className="absolute h-full w-full object-cover object-center"
          />
        </Link>
      </div>
      <span className="text-3xl font-barlow-semi-condensed font-bold tracking-wider text-gray-600">
        CHINMAYA KUMAR
      </span>
    </div>
  );
}

export default ProjectLogo