import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { PhotoGallery } from '@/components/shared';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/UI/Button';

const ProjectContent = ({ data }) => {
  return (
    <div className="h-full">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
        <div className="">
          <div className="flex items-center gap-3">
            <div className="relative h-[50px] lg:h-[70px] w-[150px] lg:w-[200px]">
              <Link
                href={"https:"}
                className="hover:text-blue-500 transition-all"
              >
                <Image
                  src={data.logo}
                  fill={true}
                  className="absolute h-full w-full object-cover object-center rounded-lg"
                />
              </Link>
            </div>
            <span className="text-xl md:text-2xl lg:text-3xl font-barlow-semi-condensed font-bold tracking-wider text-gray-600">
              {data.projectTitle}
            </span>
          </div>
        </div>
        <div className="">
          <Button className="flex items-center gap-2" size='md' rounded="rounded-md" onClick={()=>alert("Got the Source code")}>
            <FaGithub className="text-xl" />
            <span>Get Source Code</span>
          </Button>
        </div>
      </div>
      <div className="py-5">
        <PhotoGallery photos={data.images.map((el) => el.src.src)} />
      </div>
      <ul className="space-y-2 px-2 lg:px-5 ">
        {data.workDetails.map((el) => (
          <li className="list-disc font-barlow-semi-condensed text-lg cursor-pointer hover:text-blue-700 transition-all">
            {el.desc}
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default ProjectContent