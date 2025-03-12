import React from 'react'
import Image  from "next/image";

const Work = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-32'>
      <div className='flex gap-10 items-center'>
<div className='w-1/2'>
<p className='text-[40px] font-regular mb-4'>Empower Your Business Operation
        with Cloud Solution
        </p>
        <p className='text-xl'>Unlock the full potential of your business by transitioning to the cloud. Experience enhanced efficiency, scalability, and security while reducing operational costs. </p>
    
    <div className='flex gap-20 mt-10'>
<div className='py-10'>
  <p className='text-2xl pb-4 mb-6 border-b border-gray-300 pe-20'>
  Growth
  </p>
  <p className='text-[50px]'>40%</p>
  <span className='font-light text-sm text-gray-500'>Average anual growth</span>
</div>
<div className='py-10'>
  <p className='text-2xl pb-4 mb-6 border-b border-gray-300 pe-20'>
  Productivity
  </p>
  <p className='text-[50px]'>25%</p>
  <span className='font-light text-sm text-gray-500'>Employee productivity</span>
</div>
    </div>
</div>

<div className='flex justify-center'>
  <Image
  src="/image/business-community.webp"
  height={1000}
  width={1000}
  className="h-[450px] w-auto object-contain"
  />
</div>
      </div>
            
    </div>
  )
}
export default Work;