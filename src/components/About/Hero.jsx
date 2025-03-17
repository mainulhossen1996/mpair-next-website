import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";

 const Hero = () => {
  return (
    <div className='about-hero bg-about lg:h-[100vh] h-[70vh]'>
      

<div className="max-w-screen-xl mx-auto pb-32 pt-48 relative px-4 lg:px-0">

<div className='relative'>
<div className='inverted-radius lg:pt-24 pt-20 lg:px-10 px-4'>
<p className="lg:text-[60px] text-[22px] text-blue-100 lg:pt-4">With Sustainable Solutions</p>
<Button className="relative bg-[#0077ff] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 lg:mt-5 mt-2 group">
  <span className="absolute inset-0 bg-[#0055ff]  transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative flex items-center lg:text-xl text-sm">
    Company Brochure <ArrowUpRight className="ml-3" />
  </span>
</Button>

<div className="flex max-w-screen-xl lg:ps-48 justify-end lg:pt-10 ">
<p className="lg:text-xl text-[12px] text-white lg:text-end font-light lg:leading-[30px] lg:mt-20 mt-10 pb-6 lg:pb-0">We mPair Technologies Ltd. are the latest tech solution for any kind of business. By understanding your pain points, we deliver scalable automation, turning manual processes into efficient digital platforms. We believe in simplicity and exceptional UX, ensuring your business achieves the best user experience.</p>
</div>
</div>






<div className='absolute lg:top-0 -top-16 lg:left-10 left-4 z-10'>
  
  <h1 className="lg:text-[80px] text-[55px] text-white font-semibold lg:leading-[80px] leading-[65px]">Ideate The Future</h1>
            
  </div>

</div>


  </div>



    </div>
  )
}

export default Hero;
