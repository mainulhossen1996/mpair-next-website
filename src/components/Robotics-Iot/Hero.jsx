"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='robotic-hero-bg pt-36'>
        <div className="max-w-screen-xl mx-auto">
        <p className='text-[70px] text-center font-light text-white'>
        Fourth Industrial Revolution <br/> by Robotic Automation
        </p>
<div className="flex justify-center">
        <Image 
        src="/image/revolution.jpg"
        height={1200}
        width={1800}
        alt=""
        className="h-[550px] w-full object-cover rounded-[40px] mt-4"/>
        </div>
        </div>
    </div>
  )
}
export default Hero;
