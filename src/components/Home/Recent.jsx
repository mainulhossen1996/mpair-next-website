import React from 'react'
import { Button } from "@nextui-org/button";
import Image  from "next/image";
import { ArrowUpRight } from "lucide-react";

const Recent = () => {
  return (
    <div className='bg-black'>
      <div className='max-w-screen-xl mx-auto lg:py-24 py-10 relative overflow-hidden lg:px-0 px-4'>

        <video
        className="absolute right-0 -top-20 m-auto h-[400px] object-cover lg:block hidden"
        src="/image/motion/star.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
<p className='text-center lg:text-[60px] text-[40px] text-white font-thin mb-6'>
Work You Can Experience – <br/>Where Ideas Meet Impact
</p>
<p className='text-center lg:text-2xl text-md text-gray-400 font-thin'>From empowering startups to scaling enterprises,<br/>we craft innovative software solutions that shape the digital future.</p>
<div className='lg:flex gap-20 mt-12 '>
  <div>
        <div className='lg:my-20 my-10'>
          <div className='rounded-3xl recent-item-back mb-2'>
            <Image 
            alt=""
            src="/image/release/family.jpg"
                className='object-cover lg:h-[400px] h-[250px] w-[100%]'
                height={1000}
                width={1000}/>
                </div>
       

          <div className=''>
            <p className=' mt-4 font-medium lg:text-2xl text-xl text-white'>
            Tracking follow up consultancy of DGFP
            </p>
            <p className='lg:pt-4 pt-2 lg:text-sm text-[13px] text-gray-300 font-light'>Streamlined attendance tracking and follow-up processes via a mobile app, enabling centralized and efficient monitoring for the Directorate General of Family Planning (DGFP).</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>
          </div>

          <div className='lg:my-20 my-10'>
          <div className='rounded-3xl recent-item-back mb-2'>
            <Image 
            alt=""
            src="/image/release/research.jpg"
                className='object-cover lg:h-[400px] h-[250px] w-[100%]'
                height={1000}
                width={1000}/>
                </div>
       

          <div className=''>
            <p className=' mt-4 font-medium lg:text-2xl text-xl text-white'>
            Assisting Doctors in Clinical Decisions for Ultrasound Diagnostics
            </p>
            <p className='lg:pt-4 pt-2 lg:text-sm text-[13px] text-gray-300 font-light'>The K-LUS app, an initiative by the Mahidol Oxford Tropical Medicine Research Unit (MORU), assists doctors in lung ultrasound diagnostics by providing clinical decision support to ensure accurate and informed diagnoses.</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>
          </div>
        </div>

        <div className='lg:block hidden'>
        <div className='lg:my-20 my-10'>
        <div className='mb-8'>
            <p className=' mt-4 font-medium lg:text-2xl text-xl text-white'>
            Enhancing School Management Efficiency with Full Automation
            </p>
            <p className='lg:pt-4 pt-2 lg:text-sm text-[13px] text-gray-300 font-light'>A fully automated solution for paperless school management. From attendance to fees, academics to communication—streamlining operations for efficiency, transparency, and smarter collaboration.</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>

          <div className='rounded-3xl recent-item-back '>
            <Image 
            alt=""
            src="/image/release/education.jpg"
                className='object-cover lg:h-[400px] h-[250px] w-[100%]'
                height={1000}
                width={1000}/>
                </div>
       

          
          </div>

          <div className='lg:my-20 my-10'>
        <div className='mb-8'>
            <p className=' mt-4 font-medium lg:text-2xl text-xl text-white'>
            Optimized Ecommerce Experience for Medicine
            </p>
            <p className='lg:pt-4 pt-2 lg:text-sm text-[13px] text-gray-300 font-light'>A dynamic ecommerce platform for Emedi Pharma, enabling a seamless product showcase with high-quality visuals, and a user-friendly interface to enhance customer engagement.</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>

          <div className='rounded-3xl recent-item-back '>
            <Image 
            alt=""
            src="/image/release/ecommerce.jpg"
                className='object-cover lg:h-[400px] h-[250px] w-[100%]'
                height={800}
                width={800}/>
                </div>
       

          
          </div>
        </div>

        <div className='lg:hidden block'>
        <div className='lg:my-20 my-10'>
        

          <div className='rounded-3xl recent-item-back '>
            <Image 
            alt=""
            src="/image/release/education.jpg"
                className='object-cover lg:h-[400px] h-[250px] w-[100%]'
                height={1000}
                width={1000}/>
                </div>
                <div className=''>
            <p className=' mt-4 font-medium lg:text-2xl text-xl text-white'>
            Enhancing School Management Efficiency with Full Automation
            </p>
            <p className='lg:pt-4 pt-2 lg:text-sm text-[13px] text-gray-300 font-light'>A fully automated solution for paperless school management. From attendance to fees, academics to communication—streamlining operations for efficiency, transparency, and smarter collaboration.</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>
       

          
          </div>

          <div className='lg:my-20 my-10'>
        

          <div className='rounded-3xl recent-item-back '>
            <Image 
            alt=""
            src="/image/release/ecommerce.jpg"
                className='object-cover lg:h-[400px] h-[250px] w-[100%]'
                height={800}
                width={800}/>
                </div>
                <div className=''>
            <p className=' mt-4 font-medium lg:text-2xl text-xl text-white'>
            Optimized Ecommerce Experience for Medicine
            </p>
            <p className='lg:pt-4 pt-2 lg:text-sm text-[13px] text-gray-300 font-light'>A dynamic ecommerce platform for Emedi Pharma, enabling a seamless product showcase with high-quality visuals, and a user-friendly interface to enhance customer engagement.</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>
       

          
          </div>
        </div>
        </div>
<div className='flex justify-center'>
        <Button className="relative border border-[#008CFF] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
  <span className="absolute inset-0 bg-[#008CFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative flex items-center lg:text-xl text-sm">
    See All Work <ArrowUpRight className="ml-3" />
  </span>
</Button>
</div>



        </div>
      </div>
  )
}
export default Recent;