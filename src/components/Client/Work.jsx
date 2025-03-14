"use client"
import React from 'react'
import { useState } from "react";
import Image from "next/image";

const Work = () => {

    const [activeTab, setActiveTab] = useState("ALL");

    const tabContent = {
      ALL: (
        <div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>

            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>

          </div>
        </div>
      ),

      Govt: (
        <div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            </div>
        </div>
      ),
      Health: (
        <div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            </div>
        </div>
      ),
      Education: (
        <div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            </div>
        </div>
      ),
      Sports: (
        <div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            </div>
        </div>
      ),

      Infrustructure: (
        <div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            <div className='work-item mb-6'>
                <Image src="/image/Yeasin.jpg"
                alt=""
                height={500}
                width={500}
                className="h-[400px] w-full object-cover mb-2"
                />
                <p className='text-3xl font-normal mb-2'>MORU</p>
                <p className='text-sm font-light'>Reseacrch Servy Making App</p>
            </div>
            </div>
        </div>
      ),
    };



  return (
    <div className='pb-20'>
        <div className='max-w-screen-xl mx-auto'>
            <div className="flex justify-center mb-8">
        <button
          className={`py-1 px-4 mx-2 text-lg font-normal ${
            activeTab === "ALL" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"}`}
          onClick={() => setActiveTab("ALL")}
        >
          ALL
        </button>
        <button
          className={`py-1 px-4 mx-2 text-lg font-normal ${
            activeTab === "Govt" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Govt")}
        >
          Govt. & Public
        </button>
        <button
          className={`py-1 px-4 mx-2 text-lg font-normal ${
            activeTab === "Health" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Health")}
        >
          Health
        </button>
        <button
          className={`py-1 px-4 mx-2 text-lg font-normal ${
            activeTab === "Education" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Education")}
        >
          Education
        </button>
        <button
          className={`py-1 px-4 mx-2 text-lg font-normal ${
            activeTab === "Sports" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Sports")}
        >
          Sports
        </button>
        <button
          className={`py-1 px-4 mx-2 text-lg font-normal ${
            activeTab === "Infrustructure" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Infrustructure")}
        >
          Infrustructure
        </button>
      </div>
      <div className="p-4">{tabContent[activeTab]}</div>
        </div>
    </div>
  )
}
export default Work;