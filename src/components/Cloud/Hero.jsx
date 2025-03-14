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
      <div className="max-w-screen-xl mx-auto pt-32 px-20">

      <div class="border border-b-0 rounded-b-none border-gray-300 bg-white rounded-xl max-w-screen-xl mx-auto w-full mt-10">

    <div class="flex items-center bg-gray-200 p-2 rounded-t-xl px-4">

        <div class="w-1/6 flex items-center text-gray-700">
            <i class="fa fa-google"></i>
            <span class="ml-1">Browser</span>
        </div>
        

        <div class="w-4/6 relative">
            <input type="text" class="w-full border border-gray-300 rounded px-3 py-1 text-gray-600" 
                   value="https://mpairtech.com/cloud-software"/>
            <i class="fa fa-search absolute right-3 top-2 text-gray-500"></i>
        </div>
        

        <div class="w-1/6 flex justify-end">
            <div class="space-y-1">
                <span class="block w-4 h-0.5 bg-gray-500"></span>
                <span class="block w-4 h-0.5 bg-gray-500"></span>
                <span class="block w-4 h-0.5 bg-gray-500"></span>
            </div>
        </div>
    </div>
    

    <div class="">
    <div className="rounded-3xl flex flex-col items-center pt-10 pb-12">
          <p className="text-[80px] font-semibold">
            {" "}
            We <span className="text-blue-600">#Develop</span>
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
                    <p className="text-[#ffffff00] outline-text3">{tab.label}</p>
                  </div>
                ))}
              </motion.div>

              <div className="scroll-fade scroll-fade-left-white text-[80px] text-blue-700 font-semibold ">
                {"{"}
              </div>

              <div className="scroll-fade scroll-fade-right-white text-[80px] text-blue-700 font-semibold flex justify-end">
                {"}"}
              </div>
            </div>
          </div>

          <p className="text-center text-md font-medium text-gray-800 pt-10">
          From the initial spark of an idea to achieving market dominance, we work alongside you,<br/>carefully navigating every stage of product development to ensure innovation, efficiency, and lasting success.
            
          </p>
        </div>

        <div className="flex gap-6 justify-between px-10 pt-10">
          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-2xl h-[220px] w-full p-4 pt-6">
            <p className="text-3xl font-semibold">
              10+
            </p>
            <p className="text-xl">Software Enginners & Developers</p>
            <p className="text-sm mt-4">
              We have 7 in house software engineers and 5+ remote developers.
            </p>
          </div>

          <div className="rounded-t-full h-[220px] w-full"><Image 
                alt=""
                src="/image/web-developers.jpg"
                className='h-[220px] w-full rounded-t-full object-cover grayscale grayscale-100 hover:grayscale-0'
                height={400}
                width={400}/>
          </div>

          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-t-full h-[220px] w-full pt-6 p-4">
          <p className="text-3xl text-center font-semibold">
              30+
            </p>
            <p className="text-xl text-center">Projects Delivered</p>
            <p className="text-sm mt-4 text-center">
              We have 6 in house software developers and 5+ remote developers.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-t-full h-[220px] w-full pt-6 p-4">
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


        {/* <div className="rounded-3xl flex flex-col items-center pt-10 pb-24">
          <p className="text-[80px] font-semibold">
            {" "}
            We <span className="text-blue-600">#Develop</span>
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
                    <p className="text-[#ffffff00] outline-text3">{tab.label}</p>
                  </div>
                ))}
              </motion.div>

              <div className="scroll-fade scroll-fade-left-white text-[80px] text-blue-700 font-semibold ">
                {"{"}
              </div>

              <div className="scroll-fade scroll-fade-right-white text-[80px] text-blue-700 font-semibold flex justify-end">
                {"}"}
              </div>
            </div>
          </div>

          <p className="text-center text-lg font-medium text-gray-800 pt-10">
          From the initial spark of an idea to achieving market dominance, we work alongside you,<br/>carefully navigating every stage of product development to ensure innovation, efficiency, and lasting success.
            
          </p>
        </div> */}

        {/* <div className="flex gap-6 justify-between mx-auto w-4/5 pt-10 pb-20">
          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-2xl h-[220px] w-full p-4 pt-6">
            <p className="text-3xl font-semibold">
              10+
            </p>
            <p className="text-xl">Software Enginners & Developers</p>
            <p className="text-sm mt-4">
              We have 7 in house software engineers and 5+ remote developers.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#141414] to-black rounded-t-full h-[220px] w-full"><Image 
                alt=""
                src="/image/web-developers.jpg"
                className='h-[220px] w-full rounded-t-full object-cover grayscale grayscale-100 hover:grayscale-0'
                height={400}
                width={400}/>
          </div>

          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-t-full h-[220px] w-full pt-6 p-4">
          <p className="text-3xl text-center font-semibold">
              30+
            </p>
            <p className="text-xl text-center">Projects Delivered</p>
            <p className="text-sm mt-4 text-center">
              We have 6 in house software developers and 5+ remote developers.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#eff0f3] to-white rounded-t-full h-[220px] w-full pt-6 p-4">
          <p className="text-3xl text-center font-semibold">
              4+
            </p>
            <p className="text-xl text-center">Years Experience</p>
            <p className="text-sm mt-4 text-center">
              We have 6 in house software developers and 5+ remote developers.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Hero;
