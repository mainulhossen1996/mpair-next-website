import React from 'react'
import Image  from "next/image";

const Work = () => {
  return (
    <div className='max-w-screen-xl mx-auto lg:py-32 py-16'>
      <div className='lg:flex gap-10 items-center px-4 lg:px-0'>
<div className='lg:w-1/2'>
<p className='lg:text-[40px] text-[30px] font-regular mb-4'>Empower Your Business Operation
        with Cloud Solution
        </p>
        <p className='lg:text-xl text-sm'>Unlock the full potential of your business by transitioning to the cloud. Experience enhanced efficiency, scalability, and security while reducing operational costs. </p>
    
    <div className='flex lg:gap-20 gap-10 mt-10 lg:pe-20'>
<div className='lg:py-10 py-4 w-1/2'>
  <p className='lg:text-2xl text-lg lg:pb-4 pb-2 lg:mb-6 mb-2 border-b border-gray-300'>
  Growth
  </p>
  <p className='lg:text-[50px] text-[30px]'>40%</p>
  <span className='font-light lg:text-sm text-[12px] text-gray-500'>Average anual growth</span>
</div>
<div className='lg:py-10 py-4 w-1/2'>
<p className='lg:text-2xl text-lg lg:pb-4 pb-2 lg:mb-6 mb-2 border-b border-gray-300'>
  Productivity
  </p>
  <p className='lg:text-[50px] text-[30px]'>25%</p>
  <span className='font-light lg:text-sm text-[12px] text-gray-500'>Employee productivity</span>
</div>
    </div>
</div>

<div className='flex justify-center'>
  <Image
  src="/image/business-community.webp"
  height={1000}
  width={1000}
  className="lg:h-[450px] h-[350px] w-auto object-contain"
  />
</div>
      </div>
            
    </div>
  )
}
export default Work;