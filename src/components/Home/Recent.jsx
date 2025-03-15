import React from 'react'
import { Button } from "@nextui-org/button";
import Image  from "next/image";
import { ArrowUpRight } from "lucide-react";

const Recent = () => {
  return (
    <div className='bg-black'>
      <div className='max-w-screen-xl mx-auto py-24 relative overflow-hidden'>

        <video
        className="absolute right-0 -top-20 m-auto h-[400px] object-cover "
        src="/image/motion/star.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
<p className='text-center text-[60px] text-white font-thin mb-6'>
Work You Can Experience – <br/>Where Ideas Meet Impact
</p>
<p className='text-center text-2xl text-gray-400 font-thin'>From empowering startups to scaling enterprises,<br/>we craft innovative software solutions that shape the digital future.</p>
<div className='flex gap-20 mt-12'>
  <div>
        <div className='my-20'>
          <div className='rounded-3xl recent-item-back mb-2'>
            <Image 
            alt=""
            src="/image/release/test.jpg"
                className='object-cover h-[400px] w-[100%]'
                height={500}
                width={500}/>
                </div>
       

          <div className=''>
            <p className=' mt-4 font-medium text-2xl text-white'>
            Tracking follow up consultancy of DGFP
            </p>
            <p className='pt-4 text-sm text-gray-300 font-light'>Streamlined attendance tracking and follow-up processes via a mobile app, enabling centralized and efficient monitoring for the Directorate General of Family Planning (DGFP).</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>
          </div>

          <div className='my-20'>
          <div className='rounded-3xl recent-item-back mb-2'>
            <Image 
            alt=""
            src="/image/release/test.jpg"
                className='object-cover h-[400px] w-[100%]'
                height={500}
                width={500}/>
                </div>
       

          <div className=''>
            <p className=' mt-4 font-medium text-2xl text-white'>
            Assisting Doctors in Clinical Decisions for Ultrasound Diagnostics
            </p>
            <p className='pt-4 text-sm text-gray-300 font-light'>The K-LUS app, an initiative by the Mahidol Oxford Tropical Medicine Research Unit (MORU), assists doctors in lung ultrasound diagnostics by providing clinical decision support to ensure accurate and informed diagnoses.</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>
          </div>
        </div>

        <div>
        <div className='my-20'>
        <div className='mb-8'>
            <p className=' mt-4 font-medium text-2xl text-white'>
            Enhancing School Management Efficiency with Full Automation
            </p>
            <p className='pt-4 text-sm text-gray-300 font-light'>A fully automated solution for paperless school management. From attendance to fees, academics to communication—streamlining operations for efficiency, transparency, and smarter collaboration.</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>

          <div className='rounded-3xl recent-item-back '>
            <Image 
            alt=""
            src="/image/release/test.jpg"
                className='object-cover h-[400px] w-[100%]'
                height={500}
                width={500}/>
                </div>
       

          
          </div>

          <div className='my-20'>
        <div className='mb-8'>
            <p className=' mt-4 font-medium text-2xl text-white'>
            Optimized Ecommerce Experience for Home Decor Brands
            </p>
            <p className='pt-4 text-sm text-gray-300 font-light'>A dynamic ecommerce platform for Dubai Curtain, enabling a seamless product showcase with high-quality visuals, and a user-friendly interface to enhance customer engagement.</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>

          <div className='rounded-3xl recent-item-back '>
            <Image 
            alt=""
            src="/image/release/test.jpg"
                className='object-cover h-[400px] w-[100%]'
                height={500}
                width={500}/>
                </div>
       

          
          </div>
        </div>
        </div>
<div className='flex justify-center'>
        <Button className="relative border border-[#008CFF] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
  <span className="absolute inset-0 bg-[#008CFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative flex items-center">
    See All Work <ArrowUpRight className="ml-3" />
  </span>
</Button>
</div>



        </div>
      </div>
  )
}
export default Recent;