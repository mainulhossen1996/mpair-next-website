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
    { id: 2, label: "Health Care" },
    { id: 3, label: "E-Commerce" },
    { id: 4, label: "Infrastructure" },
    { id: 5, label: "Sports & Fitness" },
    { id: 6, label: "Govt. & Public" },
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
    <div className=" pt-32 home-hero-back">
      
      <div className=" relative" id="Hero">
      
        <div className="w-full mx-auto flex justify-center">
          <div className="items-center text-center lg:py-12 py-0 relative">
            <h1 className="text-[80px] font-regular mb-2 tracking-tight">
              Automate Your <span className="font-medium relative inline-block">
        <span className=" text-blue-700 font-semibold">Business</span>
       
    </span> <br /> through<span className="font-medium font-crimson-italic "> B2B</span> Collaboration
            </h1>
            <p className="text-2xl font-normal  text-gray-600 leading-snug mb-5">
              Experience rapid business growth with mPair Technologies through our<br /> integrated approach and expert solutions.
            </p>

            <Button className="relative bg-[#0077ff] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
  <span className="absolute inset-0 bg-[#0055ff]  transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative flex items-center">
    Let's Talk <ArrowUpRight className="ml-3" />
  </span>
</Button>

<div className="flex justify-center mt-10 mx-auto gap-2 items-center">
  <a href="https://clutch.co/profile/mpair-technologies" target="_blank">
  <Image
            src="/image/clutch.png"
            width={150}
            height={200}
            alt=""
            className="h-[30px] object-contain filter"
            />
            <p className="mt-[9px] font-semibold">5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
  </a>

  <a href="https://g.co/kgs/6aa2r7W" target="_blank">
  <Image
            src="/image/google.png"
            width={150}
            height={200}
            alt=""
            className="h-[30px] object-contain filter"
            />
             <p className="mt-[9px] font-semibold">5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
  </a>

</div>
{/* <motion.img
  src="/image/hero-abstract-2.avif"
  width={400}
  height={400}
  alt=""
  className="absolute -right-[200px] top-[105px] m-auto h-[100px] object-contain filter "
  animate={{
    rotate: [0, 360],
  }}
  transition={{
    duration: 10, 
    repeat: Infinity, 
    repeatType: "loop",
    ease: "linear",
  }}
/> */}

          </div>



        </div>
       
        {/* <video
        className="absolute right-10 top-0 m-auto h-[400px] object-cover -z-10"
        src="/image/moving_cube.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}

      </div>

      <div className="w-full mx-auto justify-center">
        {/* <p className="text-center mb-6 font-medium text-lg">Industry Excellence</p> */}
        <div className="">
        <div className="relative overflow-hidden w-full ">
      <motion.div
        ref={scrollRef}
        className="flex gap-20 whitespace-nowrap overflow-x-hidden"
      >
        {tabs.concat(tabs).map((tab, index) => (
          <div
            key={index}
            className=" text-transparent outline-text3 flex items-center font-medium text-[100px] text-center whitespace-nowrap mx-2"
          >
            <p className="">
            {tab.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>

        </div>
        
      </div>
      
    </div>
  );
};
export default Hero;
