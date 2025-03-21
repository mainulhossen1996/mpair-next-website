"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { id: 1, label: "Education" },
    { id: 2, label: "Govt. & Public" },
    { id: 3, label: "Health Care" },
    { id: 4, label: "E-Commerce" },
    { id: 5, label: "Infrastructure" },
    { id: 6, label: "Sports & Fitness" },
    { id: 7, label: "Retail Business" },
    { id: 8, label: "RMG" },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      // Clone the tabs for seamless scrolling
      const tabsContent = scrollContainer.innerHTML;
      scrollContainer.innerHTML += tabsContent;

      let scrollPosition = 0;

      const scrollStep = () => {
        scrollPosition += 1;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0; // Reset to the beginning
        }
        scrollContainer.scrollLeft = scrollPosition;
        requestAnimationFrame(scrollStep);
      };

      // Start scrolling
      const animationFrame = requestAnimationFrame(scrollStep);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, []);

  return (
    <div className="pt-32 home-hero-back lg:h-auto h-[100vh]">
      <div className=" relative " id="Hero">
        <div className="max-w-screen-xl mx-auto lg:flex justify-between items-center">
          <div className="items-center lg:text-start text-center lg:py-12 py-0 relative">
            <h1 className="lg:text-[70px] text-[45px] font-regular lg:mb-2 mb-4 tracking-tight text-white">
              Automate Your Business
              <span className="font-medium relative inline-block"></span> <br />{" "}
              Through B2B Collaboration
            </h1>
            <p className="lg:text-2xl text-[16px] lg:px-0 px-4 font-light  text-gray-300 leading-snug mb-5">
              Experience rapid business growth with mPair Technologies through
              our
              <br /> integrated approach and expert solutions.
            </p>

            <Button className="relative bg-[#0077ff] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
              <span className="absolute inset-0 bg-[#0055ff]  transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative flex items-center lg:text-xl text-sm">
                Let's Talk <ArrowUpRight className="ml-3" />
              </span>
            </Button>

            <div className="flex lg:justify-start justify-center mt-10 mx-auto gap-2 items-center lg:mb-0 mb-10">
              <a
                href="https://clutch.co/profile/mpair-technologies"
                target="_blank"
                className="text-center"
              >
                <Image
                  src="/image/clutch.svg"
                  width={150}
                  height={200}
                  alt=""
                  className="lg:h-[25px] h-[20px] object-contain filter"
                />
                <p className="mt-[9px] font-semibold lg:text-sm text-xs text-white">
                  5.0 ⭐ ⭐ ⭐ ⭐ ⭐
                </p>
              </a>

              <a
                href="https://g.co/kgs/6aa2r7W"
                target="_blank"
                className="text-center"
              >
                <Image
                  src="/image/google.png"
                  width={150}
                  height={200}
                  alt=""
                  className="lg:h-[30px] h-[24px] object-contain filter"
                />
                <p className="mt-[9px] font-semibold lg:text-sm text-xs text-white">
                  5.0 ⭐ ⭐ ⭐ ⭐ ⭐
                </p>
              </a>
            </div>
          </div>

          <div className="absolute -top-56 right-0 ">
            <Image
              src="/image/test3d.png"
              width={600}
              height={600}
              alt=""
              className="lg:h-[500px] h-[20px] object-contain filter"
            />
          </div>

          <div className="p-4 performance h-[450px] lg:block hidden">
            <div className="pt-10">
              <p className="text-2xl pb-2 pe-20 text-gray-300">Growth</p>
              <p className="text-[50px] text-white">40%</p>
              <span className="font-light text-sm text-gray-300">
                Average anual growth
              </span>
            </div>
            <div className="pt-20">
              <p className="text-2xl pb-2 pe-20 text-gray-300">Productivity</p>
              <p className="text-[50px] text-white">25%</p>
              <span className="font-light text-sm text-gray-300">
                Employee productivity
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto justify-center lg:mt-10 mt-6  border-t border-b lg:border-b-0 border-slate-500 bg-[#19258191]">
        <div className="relative overflow-hidden w-full ">
          <motion.div
            ref={scrollRef}
            className="flex whitespace-nowrap overflow-x-hidden"
          >
            {tabs.concat(tabs).map((tab, index) => (
              <div
                key={index}
                className=" text-slate-300 flex items-center italic font-regular lg:text-[30px] text-[24px] text-center whitespace-nowrap lg:p-4 p-2 px-6 "
              >
                <p className="">{tab.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
