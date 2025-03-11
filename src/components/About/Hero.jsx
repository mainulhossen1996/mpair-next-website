import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";

 const Hero = () => {
  return (
    <div className='about-hero'>
      

<div className="max-w-screen-xl mx-auto pb-32 pt-48 relative">
{/* <div className="absolute inset-0 flex items-center justify-center -z-10">
<video
        className="h-[600px] opacity-50 pt-10"
        src="/image/motion/process.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
</div> */}
<div className='relative'>
<div className='inverted-radius pt-24 px-10'>
<p className="text-[60px] text-blue-100 pt-4">With Sustainable Solutions</p>
<Button className="relative bg-[#0077ff] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
  <span className="absolute inset-0 bg-[#0055ff]  transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative flex items-center">
    Company Brochure <ArrowUpRight className="ml-3" />
  </span>
</Button>

<div className="flex max-w-screen-xl ps-48 justify-end pt-10">
<p className="text-xl text-white text-end font-light leading-[30px] mt-20">We mPair Technologies Ltd. are the latest tech solution for any kind of business. By understanding your pain points, we deliver scalable automation, turning manual processes into efficient digital platforms. We believe in simplicity and exceptional UX, ensuring your business achieves the best user experience.</p>
</div>
</div>

{/* <div className='absolute -top-48 left-0 z-10'>
  
  <Image src="/image/abouttrack.svg" 
alt=""
height={200}
width={800}
className='w-[1000px] overflow-hidden object-cover'
/>
            
  </div> */}


<div className='absolute top-0 left-10 z-10'>
  
  <h1 className="lg:text-[80px] sm:text-[30px] text-white font-semibold leading-[80px]">Ideate The Future</h1>
            
  </div>

</div>


  </div>



    </div>
  )
}

export default Hero;
