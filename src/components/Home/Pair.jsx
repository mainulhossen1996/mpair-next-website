
'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image  from "next/image";
import { MoveRight } from "lucide-react";

const Pair = () => {

return(
    <>
    <div className='bg-gray-100'>
        <div className='text-center max-w-screen-xl py-12 mx-auto'>
            <div className='flex mx-auto py-10'>
            <p className='text-[70px] leading-[90px] tracking-tight text-gray-400'>
            We are delighted to have partnered <br/> <span className='bg-gradient-to-r from-blue-600 to-violet-900 bg-clip-text text-transparent transition-all duration-300 font-medium'>with over 35 notable companies,</span> delivering dynamic <span className="font-medium bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-900 hover:to-blue-600 hover:bg-clip-text hover:text-transparent">
  SaaS products</span> and <span className="font-medium bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-900 hover:to-blue-600 hover:bg-clip-text hover:text-transparent">ERP solutions.</span>
            </p>
            </div>

            
           

        <div className='flex gap-16 justify-center mt-12'>
            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/Family-planning.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Family Planning'
                height={60}
                width={60}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/Metro-Meals.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Metro Meals'
                height={70}
                width={70}/>
            </div>

            <div className='flex justify-center mb-8'>
                <Image 
                alt=""
                src="/image/clients/parkv.png"
                className='object-contain grayscale grayscale-100 hover:grayscale-0' title='Parkview Hospital Ltd.'
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
        <p className='text-xl font-regular'>See More</p>
        <MoveRight className="ml-2" size={24}/>
        </Link>
            </div>
        </div>
    </div>
    </>
)
}
export default Pair;