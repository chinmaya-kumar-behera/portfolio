import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PhotoGallery = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageContainerRef = useRef(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleArrowClick = (direction) => {
    if (direction === "up") {
      setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else if (direction === "down") {
      setActiveIndex((prevIndex) => Math.min(photos.length - 1, prevIndex + 1));
    }
  };

  useEffect(() => {
    // Scroll the active image into view when it changes
    if (imageContainerRef.current) {
      const activeImage = imageContainerRef.current.children[activeIndex];
      activeImage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <div>
      <div className="relative h-[400px] w-full flex gap-10 rounded-md bg-gray-50 p-1">
        <div className="relative h-full min-w-[170px] py-6">
          <div
            ref={imageContainerRef}
            className="h-full overflow-y-auto no-scrollbar space-y-2"
          >
            <div className="absolute -top-1 w-full flex justify-center items-center z-10">
              <button
                className="flex items-center justify-center pb-2 text-gray-500"
                onClick={() => handleArrowClick("up")}
              >
                <IoIosArrowUp className="text-2xl text-gray-800" />
              </button>
            </div>
            {photos.map((el, index) => (
              <div
                key={index}
                className={`relative h-[90px] w-full ${
                  activeIndex === index ? "opacity-50" : ""
                } cursor-pointer`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={el}
                  className="object-cover object-center rounded"
                  fill={true}
                />
              </div>
            ))}
            <div className="absolute -bottom-1 w-full flex justify-center items-center z-5">
              <button
                className="flex items-center justify-center text-gray-500"
                onClick={() => handleArrowClick("down")}
              >
                <IoIosArrowDown className="text-2xl text-gray-800" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="relative h-full w-full">
            {photos.map((el, index) => (
              <Image
                key={index}
                src={el}
                className={`object-cover object-center ${
                  activeIndex === index ? "" : "hidden"
                }`}
                fill={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
