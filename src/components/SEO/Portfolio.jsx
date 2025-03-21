import React from 'react'
import Image  from "next/image";
const Portfolio = () => {
  return (
    <div className=''>
    <div className='max-w-screen-xl mx-auto pt-16 border-b border-gray-200'>
        
    <div className=' px-10'>
            <p className='text-[30px] text-center'>Trusted by Worldwide</p>

            <div className='flex gap-20 justify-center pt-10'>
            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/Family-planning.png"
                className='object-contain grayscale grayscale-100' title='Family Planning'
                height={60}
                width={60}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/Metro-Meals.png"
                className='object-contain grayscale grayscale-100' title='Metro Meals'
                height={70}
                width={70}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/parkv.png"
                className='object-contain grayscale grayscale-100' title='Parkview Hospital Ltd.'
                height={70}
                width={140}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/al-hasanain.png"
                className='object-contain grayscale grayscale-100' title='Al Hasanain'
                height={70}
                width={70}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/qurex.png"
                className='object-contain grayscale grayscale-100' title='Qrex Diagnostic'
                height={70}
                width={140}/>
            </div>
            

            <div className='flex justify-center mb-8 '>
                <Image 
                alt=""
                src="/image/clients/aromo.png"
                className='object-contain grayscale grayscale-100' title='Aromo Health'
                height={60}
                width={60}/>
            </div>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Portfolio;
