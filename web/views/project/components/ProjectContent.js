import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { PhotoGallery } from '@/components/shared';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/UI/Button';

const ProjectContent = ({ data }) => {
  return (
    <div className="h-full">
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="">
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl lg:text-3xl font-barlow-semi-condensed font-bold tracking-wider text-gray-600">
              {data.projectTitle}
            </span>
          </div>
        </div>
        <div className="">
          <Button
            className="flex items-center gap-2"
            size="md"
            rounded="rounded-md"
            onClick={() => alert("Got the Source code")}
          >
            <FaGithub className="text-xl" />
            <span>Get Source Code</span>
          </Button>
        </div>
      </div>

      <div className="mt-3 space-y-5">
        <div className="">
          <p>{data.topDesc}</p>
        </div>
        <div className="">
          <div className="flex flex-wrap items-center gap-5 p-3 rounded bg-gray-100">
            <h3 className="text-blue-500">Tech stacks used : </h3>
            {data.techStacks.map((tech) => (
              <div className="flex flex-col gap-2 items-center p-2">
                <img src={`${tech.logo.src}`} className="h-10 w-fit" />
                {/* <span className='text-xs'>{tech.name}</span> */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <span>Website link :</span>{" "}
          <span>
            <a href={`${data.websiteLink}`} className="underline text-blue-500">
              visit site
            </a>
          </span>
        </div>
      </div>

      <div className="py-5">
        <PhotoGallery photos={data.images.map((el) => el.src.src)} />
      </div>
      <h5 className='font-semibold text-lg'>Descriptions</h5>
      <ul className="space-y-2 px-2 lg:px-5 mt-2">
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