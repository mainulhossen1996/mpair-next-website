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
    <div className="ui-hero-bg pt-32 pb-20">
      <section className="max-w-screen-xl mx-auto" id="Hero">
        <div className="">
          <div className="text-center lg:py-16 py-0">

<p className="text-[70px] font-semibold mb-2 text-white">
  UI/UX 
  <span className="inline-flex items-center gap-2 relative px-3">
    <Image 
      src="/image/illustrator.png"
      height={100}
      width={100}
      alt="illustrator"
      className="bg-white rounded-full object-contain h-[60px] w-[60px] border-2 border-black inline-block " 
    />
    <Image 
      src="/image/figma.webp"
      height={100}
      width={100}
      alt="figma"
      className="bg-white rounded-full object-contain p-2 h-[60px] w-[60px] border-2 border-black inline-block -ms-[20px]" 
    />
  </span> 

  <span className="font-medium text-[86px] font-crimson-italic">Design Partner</span> 
  <br/>
  <span className="font-normal text-gray-100">For Your Startup, Brand</span>
</p>

           
            <p className="text-xl font-light font-Code text-[#b6bee1] leading-snug mb-5">
            We design top-quality SaaS, apps, and websites <br/>for smooth and user-friendly experiences.
            </p>
          </div>


          
        </div>

        <div className="border-t border-b border-[#1e2025] mt-10 ">
            <div className="flex justify-between ">
            <div className="border-e border-[#16171b] w-3/12 py-6 px-4 h-[210px]">
                <div className="mb-4 flex gap-4 items-center">
            <Image src="/image/muntasir-2.png"
            width={400}
            height={400}
            alt="Muntasir"
            className="h-[60px] w-[60px] rounded-full object-cover "
            />
            <div className="">
                <p className="text-lg font-semibold text-white">Muntasir Hasan</p>
                <p className="text-sm text-gray-400">UI Design Head, mPair</p>
            </div>
            </div>
            <p className="pt-0 leading-[22px] text-gray-200 font-extralight text-sm">
           At mPair Technologies, we focus on finding the right balance between creativity and functionality, not just creating something pretty on the screen.
            </p>

                   
                </div>
                <div className="border-e border-[#16171b] w-3/12 py-6 px-4 h-[210px]">
                <div className="mb-6">
                  <p className="font-semibold text-[30px] text-gray-300 leading-[40px]">2+</p>
                    <p className="text-xl text-gray-400">Years Experience</p>
                    </div>
                  <div>
                  <p className="font-semibold text-[30px] text-gray-300 leading-[40px]">20+</p>
                    <p className="text-xl text-gray-400">Project Delivered</p>
                    </div>
                   
                </div>
                

                <div className="relative w-6/12 py-6 overflow-hidden">
            {/* Wrapping div for seamless looping */}
            <p className="font-semibold text-xl text-white px-4 mb-8">Trusted By</p>

            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex flex-col items-center justify-center h-full text-6xl">
                        <img src={slide.image}
                        height={300}
                        width={300}
                        className="h-[70px] object-contain filter grayscale" alt={`Slide ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </motion.div>

            
          <div className="scroll-fade scroll-fade-right"></div>
        </div>
        

            </div>
        </div>

       
      </section>

    </div>
  );
};
export default Hero;
