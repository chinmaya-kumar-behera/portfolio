import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { PhotoGallery } from '@/components/shared';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/UI/Button';

const ProjectContent = ({ data }) => {

  const handleRepo = () => {
    if (!data.isOpenSourse) return; 
    window.open(data.githubLink);
  }
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
            onClick={handleRepo}
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
        <div className="flex flex-wrap lg:flex-row justify-center lg:justify-start gap-4 items-center ">
          <span className="hidden lg:block">[See the Site Live] :</span>{" "}
          <span className="p-2 px-5 bg-gray-100 rounded">
            <p href={`${data.websiteLink}`} className="underline text-blue-500">
              {data.websiteLink}
            </p>
          </span>
          <span className="hidden lg:block text-gray-500">or</span>
          <a href={`${data.websiteLink}`} className="underline text-blue-500">
            <button className="p-2 px-4 bg-blue-500 text-white text-sm rounded hover:bg-blue-400 transition-all">
              click here
            </button>
          </a>
        </div>
      </div>
      <div className="py-5">
        <PhotoGallery photos={data.images.map((el) => el.src.src)} />
      </div>
      {data.features && (
        <>
          <h5 className="font-semibold text-lg text-blue-700">Features</h5>
          <ul className="space-y-2 px-2 lg:px-5 mt-2 text-gray-700">
            {data.features.map((el) => (
              <li className="list-disc font-barlow-semi-condensed text-lg cursor-pointer hover:text-black transition-all">
                {el.desc}
              </li>
            ))}
          </ul>
        </>
      )}

      <h5 className="font-semibold text-lg text-blue-700 mt-2">Descriptions</h5>
      <ul className="space-y-2 px-2 lg:px-5 mt-2 text-gray-700">
        {data.workDetails.map((el) => (
          <li className="list-disc font-barlow-semi-condensed text-lg cursor-pointer hover:text-black transition-all">
            {el.desc}
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default ProjectContent