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
          <div className='rounded-3xl recent-item-back mb-8'>
            <Image 
            alt=""
            src="/image/release/test.jpg"
                className='object-cover h-[400px] w-[100%] rounded-3xl'
                height={500}
                width={500}/>
                </div>
       

          <div className=''>
            <p className=' mt-4 font-semibold text-2xl text-white'>
              Tracking Follow-Up Consultancy of DGFP
            </p>
            <p className='pt-6 text-lg pb-6 text-slate-300 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla consequuntur? Nihil rerum obcaecati quisquam ex dolorem</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>
          </div>

          <div className='my-20'>
          <div className='rounded-3xl recent-item-back mb-8'>
            <Image 
            alt=""
            src="/image/release/test.jpg"
                className='object-cover h-[400px] w-[100%] rounded-3xl'
                height={500}
                width={500}/>
                </div>
       

          <div className=''>
            <p className=' mt-4 font-semibold text-2xl text-white'>
              Tracking Follow-Up Consultancy of DGFP
            </p>
            <p className='pt-6 text-lg pb-6 text-slate-300 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla consequuntur? Nihil rerum obcaecati quisquam ex dolorem</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>
          </div>
        </div>

        <div>
        <div className='my-20'>
        <div className='mb-8'>
            <p className=' mt-4 font-semibold text-2xl text-white'>
              Tracking Follow-Up Consultancy of FPDB
            </p>
            <p className='pt-6 text-lg pb-6 text-slate-300 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla consequuntur? Nihil rerum obcaecati quisquam ex dolorem</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>

          <div className='rounded-3xl recent-item-back '>
            <Image 
            alt=""
            src="/image/release/test.jpg"
                className='object-cover h-[400px] w-[100%] rounded-3xl'
                height={500}
                width={500}/>
                </div>
       

          
          </div>

          <div className='my-20'>
        <div className='mb-8'>
            <p className=' mt-4 font-semibold text-2xl text-white'>
              Tracking Follow-Up Consultancy of FPDB
            </p>
            <p className='pt-6 text-lg pb-6 text-slate-300 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium nulla consequuntur? Nihil rerum obcaecati quisquam ex dolorem</p>
          <Button className='text-[#008CFF] hover:text-white px-0 mt-4 flex'><p>Learn More</p> <ArrowUpRight className="ml-1"/></Button>
         
          </div>

          <div className='rounded-3xl recent-item-back '>
            <Image 
            alt=""
            src="/image/release/test.jpg"
                className='object-cover h-[400px] w-[100%] rounded-3xl'
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