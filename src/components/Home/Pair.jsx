
'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image  from "next/image";
import { ChevronRight } from "lucide-react";

const Pair = () => {

return(
    <>
    <div className='bg-white lg:px-0 px-4 '>
        <div className='text-center max-w-screen-xl lg:py-12 py-6 mx-auto'>
            <div className='flex mx-auto py-10'>
            <p className='lg:text-[50px] text-[30px] lg:leading-[80px] leading-[45xpx] font-[200] text-black'>
            We are delighted to have partnered <br/> <span className="font-[500]">with over 35 notable companies,</span> delivering dynamic <span className="font-[500] ">
  SaaS products</span> and <span className="font-[500]">ERP solutions.</span>
            </p>
            </div>

            
           
<div className='hidden lg:block'>
        <div className='flex gap-16 justify-center '>
            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/Family-planning.png"
                className='object-contain h-[100px] grayscale grayscale-100 hover:grayscale-0' title='Family Planning'
                height={60}
                width={60}/>
            </div>
            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/moru-logo.png"
                className='object-cover h-[100px] grayscale grayscale-100 hover:grayscale-0' title='Family Planning'
                height={100}
                width={100}/>
            </div>

           

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/parkv.png"
                className='object-contain h-[100px] grayscale grayscale-100 hover:grayscale-0' title='Parkview Hospital Ltd.'
                height={70}
                width={140}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/al-hasanain.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Al Hasanain'
                height={70}
                width={70}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/qurex.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Qrex Diagnostic'
                height={70}
                width={140}/>
            </div>
            

            <div className='flex justify-center mb-8 '>
                <Image 
                alt=""
                src="/image/clients/aromo.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Aromo Health'
                height={60}
                width={60}/>
            </div>
            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/epic.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Epic Properties Ltd.'
                height={70}
                width={70}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/ahis.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Al-Hidaayah International School'
                height={70}
                width={180}/>
            </div>


            

        </div>

        <div className='flex justify-center gap-2 items-center'>
            
        <Link href="/client" className="text-sm text-gray-500 hover:text-blue-600 flex items-center">
        <p className='text-lg font-regular'>See More</p>
        <ChevronRight className="ml-2" size={24}/>
        </Link>
            </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Pair;