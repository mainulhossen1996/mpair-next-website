import React from 'react'
import Image from "next/image";

const Principle = () => {
  return (
    <div className='bg-gray-100 '>

<div className='max-w-screen-xl mx-auto'>




<div className="py-10">
    <div className="max-w-screen-xl mx-auto">
       
     <div className="flex flex-col lg:flex-row items-center gap-16">
      <div className='w-4/12 '>

<Image
src="/image/hero-abstract-3.avif"
height={400}
width={400}
alt=""
className='h-[120px] w-[120px] object-contain grayscale'
/>
      <p className="text-[50px] font-medium">Our <span className='font-crimson-italic text-[60px]'>Principles</span> For Your 
        Business</p>
        <p className="text-gray-800 text-lg mt-4">Our principles define who we are, guiding how we develop innovative technology that enhances people's lives and relationships.</p>
        
      </div>

      <div className='w-8/12 py-20'
      style={{
        borderImage: 'linear-gradient(to bottom, transparent, #005eff, transparent) 1',
        borderLeft: '1px dashed transparent',
      }}
      >
      <div className="flex justify-start border-b border-dashed border-gray-400 ">
          <div className="flex flex-col justify-center p-6 w-4/12 ">
              <p className="text-start text-gray-800 text-[20px] ">Solutions through <span className="text-black font-bold">creative and groundbreaking </span>ingenuity.</p>
              {/* <p className="text-sm mt-4 text-gray-400">Delivering innovative solutions by blending creativity with groundbreaking ingenuity, transforming challenges into opportunities, and driving impactful success across industries.</p>
    */}
          </div>
        </div>


        <div className="flex justify-center border-b border-dashed border-gray-400 ">
       <div className="flex flex-col justify-center p-6 w-4/12 ">
              <p className="text-start text-gray-800 text-[20px] ">Visionary concepts driving <span className="text-black font-bold">exceptional growth.</span></p>
                {/* <p className="text-sm mt-4 text-gray-400">Pioneering visionary concepts that fuel exceptional growth, empowering businesses to thrive through innovative strategies and transformative solutions in every sector.</p> */}
                </div>
        </div> 

        <div className="flex justify-end border-b border-dashed border-gray-400 ">
        <div className="flex flex-col justify-center p-6 w-4/12 ">

              <p className="text-start text-gray-800 text-[20px] ">Unleashing transformation in <span className="text-black font-bold">digital journey.</span></p>
              {/* <p className="text-sm mt-4 text-gray-400">Empowering businesses to embrace digital transformation, fostering innovation, efficiency, and growth through advanced technologies and tailored digital strategies.</p>
                 */}
        </div>
        </div> 
      </div>
       
      </div>

      </div>

      </div>
</div>
    </div>
  )
}
export default Principle;
