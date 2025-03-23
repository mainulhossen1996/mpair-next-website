"use client";
import React from 'react'
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const slide = [
    { text: "UX Research" },
    { text: "UX Audit" },
    { text: "Visual Identity Design" },
    { text: "Redesign" },
    { text: "UX Consulting" },
    { text: "Expert Review" },
  ];

export const Service = () => {

    const duplicatedSlides = [...slide, ...slide];
  return (
    <div className="bg-[#101012] lg:py-32 lg:pt-36">

        <div className='max-w-screen-xl mx-auto relative px-4 lg:px-0'>

        <p className='text-white text-[40px] text-center pb-10 lg:hidden block'>
                In-depth <span className='text-[50px] font-crimson-italic'>Services</span><br/>as A UI/UX <br/>Design Partner
            </p>

            <div className='lg:flex gap-20 items-center'>
<div className='flex gap-10 lg:w-6/12 lg:px-10' 
style={{
    borderImage: 'linear-gradient(to right, transparent, #363636,  #363636, transparent) 1',
    borderBottom: '1px dashed transparent',
    borderTop: '1px dashed transparent',
  }}>

<div className="overflow-hidden h-[500px] relative"
>
  <motion.div
    className="flex flex-col w-full"
    animate={{
      y: ["0%", "-50%"], // Moves half of the slides up for a seamless loop
    }}
    transition={{
      ease: "linear",
      duration: 60,
      repeat: Infinity,
    }}
  >
    {[...duplicatedSlides, ...duplicatedSlides].map((slide, index) => ( // Duplicate slides
      <div
        key={index}
        className="flex-shrink-0 lg:h-[200px] h-[160px] my-4 bg-[#161616] p-6 flex items-center pt-20 pb-8 relative"

      >
        <p className='absolute top-4 right-4 lg:text-2xl text-xl'>📌</p>
        <div className=' text-white'>
        
        <p className="lg:text-2xl text-xl">{slide.text}</p>
        </div>
       
      </div>
    ))}
  </motion.div>
</div>

<div className="overflow-hidden h-[500px] relative"
>
  <motion.div
    className="flex flex-col w-full"
    animate={{
      y: ["-50%", "0%"], // Moves half of the slides up for a seamless loop
    }}
    transition={{
      ease: "linear",
      duration: 60,
      repeat: Infinity,
    }}
  >
    {[...duplicatedSlides, ...duplicatedSlides].map((slide, index) => ( // Duplicate slides
      <div
        key={index}
        className="flex-shrink-0 lg:h-[200px] h-[160px] my-4 bg-[#161616] p-6 flex items-center pt-20 pb-8 relative"

      >
         <p className='absolute top-4 right-4 lg:text-2xl text-xl'>📌</p>
        <div className=' text-white'>
        <p className="lg:text-2xl text-xl">{slide.text}</p>
        </div>
       
      </div>
    ))}
  </motion.div>
</div>

</div>

<div className='lg:w-6/12 lg:block hidden'>
<p className='text-white text-[75px]'>
                In-depth <span className='text-[85px] font-crimson-italic'>Services</span><br/>as A UI/UX <br/>Design Partner
            </p>

            <Image
       src="/image/tube.png"
       height={400}
       width={400}
       className="h-[200px] absolute -right-20 -top-20 object-contain "
       />

</div>
            </div>
           

            

        </div>
        </div>
  )
}
