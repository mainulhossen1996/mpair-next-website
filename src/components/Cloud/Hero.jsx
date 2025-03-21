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
      <div className="max-w-screen-xl mx-auto lg:pt-32 pt-16 lg:px-20 px-4">

      <div className="border border-b-0 rounded-b-none border-gray-300 bg-white rounded-xl max-w-screen-xl mx-auto w-full mt-10">

    <div className="flex items-center bg-gray-200 gap-2 p-2 rounded-t-xl px-4">

        <div className="w-1/5 flex lg:gap-2 gap-[3px] items-center text-gray-700">
          <span className="text-[10px] lg:text-md opacity-70">🔴</span>
          <span className="text-[10px] lg:text-md opacity-70">🟡</span>
          <span className="text-[10px] lg:text-md opacity-70">🟢</span>
        </div>
        

        <div className="w-3/5 relative">
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-1 text-gray-600 lg:text-sm text-[12px]" 
                   value="https://mpairtech.com/service/cloud-software"/>
            
        </div>
        

        <div className="w-1/5 flex justify-end">
            <div className="space-y-1">
                <span className="block w-4 h-0.5 bg-gray-500"></span>
                <span className="block w-4 h-0.5 bg-gray-500"></span>
                <span className="block w-4 h-0.5 bg-gray-500"></span>
            </div>
        </div>
    </div>
    

    <div className="">
    <div className="rounded-3xl flex flex-col items-center pt-10 pb-12">
          <p className="lg:text-[80px] text-[40px] font-semibold">
            {" "}
            We <span className="text-blue-600">#Develop</span>
          </p>
          <div className="lg:w-9/12 w-full mx-auto px-2 lg:px-0">
            <div className="relative overflow-hidden w-full">
              <motion.div
                ref={scrollRef}
                className="flex gap-10 whitespace-nowrap overflow-hidden"
              >
                {tabs.concat(tabs).map((tab, index) => (
                  <div
                    key={index}
                    className="font-medium text-center whitespace-nowrap mx-2"
                  >
                    <p className="text-[#ffffff00] lg:text-[80px] text-[40px] outline-text3">{tab.label}</p>
                  </div>
                ))}
              </motion.div>

              <div className="scroll-fade scroll-fade-left-white lg:text-[80px] text-[40px] text-blue-700 font-semibold ">
                {"{"}
              </div>

              <div className="scroll-fade scroll-fade-right-white lg:text-[80px] text-[40px] text-blue-700 font-semibold flex justify-end">
                {"}"}
              </div>
            </div>
          </div>

          <p className="text-center lg:text-[16px] text-[12px] lg:font-medium font-light text-gray-800 pt-10">
          From the initial spark of an idea to achieving market dominance, we work alongside you,<br/>carefully navigating every stage of product development to ensure innovation, efficiency, and lasting success.
            
          </p>
        </div>

        <div className="flex gap-6 justify-between lg:px-10 px-2 lg:pt-10">
          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-2xl lg:h-[220px] h-[170px] w-full p-4 pt-6">
            <p className="lg:text-3xl text-xl lg:font-semibold font-medium">
              10+
            </p>
            <p className="lg:text-xl text-[13px]">Software Enginners & Developers</p>
            <p className="lg:text-sm text-[11px] mt-4">
              We have 7 in house software engineers and 5+ remote developers.
            </p>
          </div>

          <div className="rounded-t-full h-[220px] w-full lg:block hidden"><Image 
                alt=""
                src="/image/web-developers.jpg"
                className='h-[220px] w-full rounded-t-full object-cover grayscale grayscale-100 hover:grayscale-0'
                height={400}
                width={400}/>
          </div>

          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-t-full lg:h-[220px] h-[170px] w-full pt-6 p-4">
          <p className="lg:text-3xl text-xl lg:font-semibold font-medium text-center ">
              30+
            </p>
            <p className="lg:text-xl text-[13px] text-center">Projects Delivered Globally</p>
            <p className="lg:text-sm text-[11px] mt-4">
            We have delivered ERP and SaaS solutions locally and globally.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-t-full h-[220px] w-full pt-6 p-4 lg:block hidden">
          <p className="text-3xl text-center font-semibold">
              4+
            </p>
            <p className="text-xl text-center">Years Working Experience</p>
            <p className="text-sm mt-4 text-center">
              We have 6 in house software developers and 5+ remote developers.
            </p>
          </div>
        </div>
    </div>
</div>

      </div>
    </div>
  );
};
export default Hero;
