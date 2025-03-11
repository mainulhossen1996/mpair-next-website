"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image  from "next/image";

const tabs = [
  { id: 1, label: "Web App" },
  { id: 2, label: "Mobile App" },
  { id: 3, label: "SaaS" },
  { id: 4, label: "Website" },
  { id: 4, label: "E-commerce" },
];

const Hero = () => {
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
    <div className="bg-cloud-main">
      <div className="max-w-screen-xl mx-auto pt-36">
        <div className="rounded-3xl flex flex-col items-center pt-10 pb-24">
          <p className="text-[100px] font-semibold">
            {" "}
            We <span className="text-blue-600"># </span>Develop
          </p>
          <div className="w-9/12 mx-auto">
            <div className="relative overflow-hidden w-full">
              <motion.div
                ref={scrollRef}
                className="flex gap-10 whitespace-nowrap overflow-hidden"
              >
                {tabs.concat(tabs).map((tab, index) => (
                  <div
                    key={index}
                    className="font-medium text-[80px] text-center whitespace-nowrap mx-2"
                  >
                    <p className="text-black outline-text3">{tab.label}</p>
                  </div>
                ))}
              </motion.div>

              <div className="scroll-fade scroll-fade-left text-[80px] text-blue-700 font-semibold ">
                {"{"}
              </div>

              <div className="scroll-fade scroll-fade-right text-[80px] text-blue-700 font-semibold flex justify-end">
                {"}"}
              </div>
            </div>
          </div>

          <p className="text-center text-2xl text-gray-400 pt-10">
            Utilizing the latest web technologies, Team mPair will provide you
            the <br />
            best and innovative Cloud & Software solution.
          </p>
        </div>

        <div className="flex gap-6 justify-between mx-auto w-4/5 pb-20">
          <div className="bg-gradient-to-b from-[#141414] to-black rounded-2xl h-[220px] w-full p-4 pt-6">
            <p className="text-3xl font-semibold">
              10+
            </p>
            <p className="text-xl">Software Enginners & Developers</p>
            <p className="text-sm mt-4">
              We have 6 in house software developers and 5+ remote developers.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#141414] to-black rounded-t-full h-[220px] w-full"><Image 
                alt=""
                src="/image/web-developers.jpg"
                className='h-[220px] w-full rounded-t-full object-cover grayscale grayscale-100 hover:grayscale-0'
                height={400}
                width={400}/>
          </div>

          <div className="bg-gradient-to-b from-[#141414] to-black rounded-t-full h-[220px] w-full pt-6 p-4">
          <p className="text-3xl text-center font-semibold">
              30+
            </p>
            <p className="text-xl text-center">Projects Delivered</p>
            <p className="text-sm mt-4 text-center">
              We have 6 in house software developers and 5+ remote developers.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#141414] to-black rounded-t-full h-[220px] w-full pt-6 p-4">
          <p className="text-3xl text-center font-semibold">
              4+
            </p>
            <p className="text-xl text-center">Years Experience</p>
            <p className="text-sm mt-4 text-center">
              We have 6 in house software developers and 5+ remote developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
