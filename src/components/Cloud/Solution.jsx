import React from 'react'
import Image  from "next/image";


const Solution = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-24'>
        <p className='text-[50px] text-center font-medium'>What Solution You Want to Build?</p>
        <p className='text-center px-60 text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, necessitatibus. Repellendus perspiciatis provident magnam in, necessitatibus labore eos.</p>
         <div className="grid grid-cols-3 gap-6 mt-16">
      <div>

      <div className="relative it-back rounded-xl  bg-cover bg-center opacity-100  p-6 h-[250px] pt-10 overflow-hidden mb-6">

<div className="absolute inset-0 bg-black opacity-80"></div>


<div className="relative z-10">
  <p className="text-3xl mb-4 text-white">IT Consultation</p>
  <p className="text-sm text-gray-300">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt tempora adipisci commodi id eum consequuntur neque iure facere enim recusandae sequi fuga
  </p>
</div>
</div>



        <div className='rounded-xl bg-[#0225A3] pt-10'>
            <p className='text-3xl mb-4 text-white px-6'>Enterprise Application Development</p>
            <p className='text-sm text-gray-200 px-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt tempora adipisci commodi id eum consequuntur neque iure facere enim recusandae sequi fuga</p>
        <Image
        src="/image/enterprise-soft.webp"
        height={700}
        width={700}
        className='h-[240px] w-full object-contain rounded-b-xl'
        />
        </div>
      </div>

      <div>
        <div className='rounded-xl border border-gray-200  mb-6 pb-10'>
        <video
        className="h-[200px] mt-4 mb-2"
        src="/image/saas-motion.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
            <p className='text-3xl mb-4 text-gray-800 px-6'>SaaS Product Development</p>
            <p className='text-sm text-gray-600 px-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt tempora adipisci commodi id eum consequuntur neque iure facere enim recusandae sequi fuga</p>
        
            
        </div>

        <div className='rounded-xl bg-[#F2F5F9] p-6 h-[264px] pt-10'>
            <p className='text-3xl mb-4 text-gray-800'>Website<br/> Development</p>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt tempora adipisci commodi id eum consequuntur neque iure facere enim recusandae sequi fuga</p>
        </div>
      
      </div>

      <div>
        <div className='rounded-xl bg-indigo-800 p-6 h-[250px] pt-10 mb-6'>
            <p className='text-3xl mb-4 text-white'>Mobile Application Development</p>
            <p className='text-sm text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt tempora adipisci commodi id eum consequuntur neque iure facere enim recusandae sequi fuga</p>
        </div>
        <div className='rounded-xl bg-[#F2F5F9] p-6  pt-10'>
            <p className='text-3xl mb-4 '>Custom Software <br/> Development</p>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione deserunt tempora adipisci commodi id eum consequuntur neque iure facere enim recusandae sequi fuga</p>
            <Image
        src="/image/custom-soft.webp"
        height={500}
        width={500}
        className='h-[216px] object-contain'
        />
       </div>
      </div>
    </div>
    </div>
  )
}
export default Solution;