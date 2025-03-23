"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const slides = [
  { image: "/image/clients/Family-planning.png" },
  { image: "/image/clients/MORU.png" },
  { image: "/image/clients/Family-planning.png" },
  { image: "/image/clients/Family-planning.png" },
  { image: "/image/clients/Family-planning.png" },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(1);

  const duplicatedSlides = [...slides, ...slides];

  const changeTab = (index) => {
    setActiveTab(index);
  };


  return (
    <div className="h-[100vh] lg:h-auto pt-32 lg:pb-20">
      <section className="max-w-screen-xl mx-auto lg:px-0 px-4" id="Hero">
        <div className="">
          <div className="text-center lg:pt-24 pt-20 pb-10">

<p className="lg:text-[80px] text-[55px] font-medium mb-2 text-gray-800 lg:leading-[100px] leading-[60px]">
  UI/UX 
  <div className="inline-flex items-end gap-2 relative px-3">
    <Image 
      src="/image/illustrator.png"
      height={100}
      width={100}
      alt="illustrator"
      className="bg-white rounded-full object-contain lg:h-[60px] h-[45px] lg:w-[60px] w-[45px] border-2 border-black inline-block" 
    />
    <Image 
      src="/image/figma.webp"
      height={100}
      width={100}
      alt="figma"
      className="bg-white rounded-full object-contain p-2 lg:h-[60px] h-[45px] lg:w-[60px] w-[45px] border-2 border-black inline-block -ms-[20px]" 
    />
  </div> 
  <br className="lg:hidden block"/>
  <span className="font-medium lg:text-[95px] text-[50px] font-crimson-italic text-gray-800">Design Partner</span> 
  <br/>
  <span className="font-normal text-gray-800 lg:text-[70px] text-[30px]">For Your Startup, Brand</span>
</p>

           
            <p className="lg:text-xl text-sm font-light font-Code text-[#262834] leading-snug">
            We design top-quality SaaS, apps, and websites <br className="lg:block hidden"/>for smooth and user-friendly experiences.
            </p>
          </div>

{/* 
          <div className="flex justify-center lg:pb-0 pb-8">
        <Button className="relative bg-[#0077ff] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 group">
  <span className="absolute inset-0 bg-[#0055ff]  transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative flex items-center lg:text-xl text-sm">
    Let's Talk <ArrowUpRight className="ml-3" />
  </span>
</Button>
        </div> */}
        </div>




        <div className="border-t lg:border-b border-b-0 border-gray-300 mt-10">
            <div className="lg:flex justify-between ">
            <div className="border-e border-gray-300 lg:w-3/12 py-6 px-4 h-[210px] lg:block hidden">
                <div className="mb-4 flex gap-4 items-center">
            <Image src="/image/muntasir-2.png"
            width={400}
            height={400}
            alt="Muntasir"
            className="h-[60px] w-[60px] rounded-full object-cover "
            />
            <div className="">
                <p className="text-lg font-semibold text-black">Muntasir Hasan</p>
                <p className="text-sm text-gray-700">UI Design Head, mPair</p>
            </div>
            </div>
            <p className="pt-0 leading-[22px] text-gray-700 font-light text-sm">
           At mPair Technologies, we focus on finding the right balance between creativity and functionality, not just creating something pretty on the screen.
            </p>

                   
                </div>
                <div className="lg:flex-col flex gap-4 lg:border-e lg:border-b-0 border-b border-gray-300 lg:w-3/12 py-6 px-4 lg:h-[210px]">
                <div className="lg:mb-6 w-1/2 lg:w-full">
                  <p className="text-center lg:text-start font-medium text-[30px] text-gray-800 leading-[40px]">2+</p>
                    <p className="text-center lg:text-start lg:text-xl text-md font-light text-gray-800">Years Experience</p>
                    </div>
                  <div>
                  <p className="text-center lg:text-start font-medium text-[30px] text-gray-800 leading-[40px]">20+</p>
                    <p className="text-center lg:text-start lg:text-xl text-md font-light text-gray-800">Project Delivered</p>
                    </div>
                   
                </div>
                

                <div className="relative lg:w-6/12 w-full lg:py-6 py-8 overflow-hidden">

            <p className="font-medium lg:text-xl text:md text-black px-4 mb-8 lg:text-start text-center">Trusted By 🤝</p>

            <motion.div
  className="flex"
  animate={{
    x: ['0%', '-100%'],
    transition: {
      ease: 'linear',
      duration: 15,
      repeat: Infinity,
    },
  }}
>
  {duplicatedSlides.map((slide, index) => (
    <div
      key={index}
      className="flex-shrink-0"
      style={{ width: `${100 / slides.length}%` }}
    >
      <div className="flex flex-col items-center justify-center h-full text-4xl md:text-6xl">
        <img
          src={slide.image}
          height={300}
          width={300}
          className="h-[50px] sm:h-[60px] md:h-[70px] object-contain filter grayscale"
          alt={`Slide ${index + 1}`}
        />
      </div>
    </div>
  ))}
</motion.div>

<div className="scroll-fade scroll-fade-left-white lg:hidden block"></div>
            
          <div className="scroll-fade scroll-fade-right-white"></div>
        </div>
        

            </div>
        </div>

       
      </section>

    </div>
  );
};
export default Hero;
