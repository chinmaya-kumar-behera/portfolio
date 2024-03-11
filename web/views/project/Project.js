import { useRef, useState, useEffect } from "react";
import photo from "../../_asssets/images/demo.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PageContainer } from "@/components/shared";

const Project = () => {
  const [scale, setScale] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [numImages, setNumImages] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const windowHeight = window.innerHeight;
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceToBottom > windowHeight) {
        setScale(true);
      } else {
        setScale(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNumImages(5);
  }, []);

  useEffect(() => {
    if (activeIndex !== 0 && activeIndex !== numImages - 1) {
      const scrollWidth = containerRef.current.scrollWidth;
      const cardWidth = containerRef.current.children[activeIndex].clientWidth;
      const leftOffset = containerRef.current.children[activeIndex].offsetLeft;
      const viewportWidth = window.innerWidth;
      if (leftOffset + cardWidth / 2 < viewportWidth / 2) {
        containerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else if (scrollWidth - leftOffset - cardWidth / 2 < viewportWidth / 2) {
        containerRef.current.scrollTo({
          left: scrollWidth - viewportWidth,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollTo({
          left: leftOffset + cardWidth / 2 - viewportWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex, numImages]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleLeftScroll = () => {
    if(activeIndex == 0) return
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightScroll = () => {
    if (activeIndex == 4) return;

    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, numImages - 1)); 
  };

  return (
    <main id="projects" className="min-h-screen">
      <PageContainer className={"px-4 lg:px-0 py-5"}>
        <div className="flex flex-col lg:flex-row py-10 lg:py-20 gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col font-bold text-3xl lg:text-5xl">
            <h1 className="">Some of My Notable Projects</h1>
          </div>
    
          <div className="w-full lg:w-1/2">
            One of my standout achievements includes developing a custom web
            application for a fintech startup that enabled real-time transaction
            tracking, ensuring efficient and secure operations.
          </div>
        </div>
      </PageContainer>

      <div className="max-h-[500px] lg:px-0 relative">
        <div
          className={` ${
            !scale ? "scale-150" : "scale-100"
          } transition-all duration-500`}
        >
          <div
            className="relative flex gap-5 items-center  overflow-hidden"
            ref={containerRef}
          >
            {[...Array(numImages)].map((_, index) => (
              <div
                key={index}
                className={`min-w-[100vw] sm:min-w-[50%] lg:min-w-[33%] h-[350px] md:h-[400px] lg:h-[450px] ${
                  activeIndex === index ? "scale-100" : ""
                }`}
              >
                <img
                  src={photo.src}
                  className="object-cover object-center h-full w-full"
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* <div className="h-[50px] flex justify-center gap-1 items-center absolute bottom-0 left-0 right-0">
            {[...Array(numImages)].map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full ${
                  index === activeIndex ? "bg-gray-900" : "bg-gray-500"
                } cursor-pointer`}
              ></div>
            ))}
          </div> */}
        </div>

        {numImages > 0 && (
          <>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 z-10 rounded-full border border-blue-300 group hover:border-blue-500 backdrop-filter backdrop-blur bg-opacity-50 transition-all hover:shadow-xl shadow-white"
              onClick={handleLeftScroll}
              disabled={activeIndex === 0}
            >
              <IoIosArrowBack className="text-blue-300 group-hover:text-blue-500 text-2xl" />
            </button>

            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 z-10 rounded-full border border-blue-300 group hover:border-blue-500 backdrop-filter backdrop-blur bg-opacity-50 transition-all hover:shadow-xl shadow-white"
              onClick={handleRightScroll}
              disabled={activeIndex === numImages - 1}
            >
              <IoIosArrowForward className="text-blue-300 group-hover:text-blue-500 text-2xl" />
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default Project;
