"use client";
import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="bg-black">
    <div className='max-w-screen-xl mx-auto py-36'>
        <div className="">
        <div className="flex justify-between items-center">
            <div><p className="text-[60px] font-medium text-white"><span className="text-[40px] text-gray-300">Explore</span>  <br/>Our Solutions</p></div>
            <div className="w-1/2">
                <p className="text-lg font-light text-gray-400">mPair Technologies assures better solutions for Embedded & Industrial revolution. The fourth industrial revolution is on the way that should make life easier, better and more productive. A simple idea can change the future but perfect execution of the idea is more important for the revolution.</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center justify-between gap-10 pt-20">
        <div className="w-4/12 ">
          <div className="card-back-bg border border-gray-800 rounded-xl flex flex-col justify-center p-6 pt-10 h-[428px]">
          <Image
                className="w-[80px] h-[80px] object-contain"
                src="/image/internet-of-things.png"
                alt="vector"
                width={200}
                height={200}
              />
              <p className="text-start text-white text-[20px] mt-[40px] font-semibold">Robotics & IoT<br/><span className="text-gray-300 font-light">Development</span></p>
              <p className="text-sm mt-4 text-gray-400">With the introduction of intellectual and automation learning, Robotics and Internet of Things (IoT) amplifies the learning curve to a far greater extent. mPair Technologies provides IoT and Robotics solutions with intelligence of technology.</p>
   
          </div>
        </div>


        <div className="w-4/12">
        <div className="card-back-bg border border-gray-800 rounded-xl flex flex-col justify-center p-6 pt-10 h-[428px]">
        <Image
                className="w-[80px] h-[80px] object-contain"
                src="/image/industry.png"
                alt="vector"
                width={200}
                height={200}
              />
              <p className="text-start text-white text-[20px] mt-[40px] font-semibold">Industrial Automation<br/><span className="text-gray-300 font-light">Solution</span></p>
              <p className="text-sm mt-4 text-gray-400">Most of the industries are now approaching towards smart industry technology because of rapidly increasing demand for fast production capacities. mPair Technologies has highly skilled and experienced teams to provide you the best automation solution.</p>
                
        </div>
        </div>  


        <div className="w-4/12">
        <div>
        <div className=" rounded-2xl flex items-center justify-center">
            <Image
             className="w-full h-[200px] object-cover rounded-2xl"
             src="/image/ai-cloud.jpg"
             alt="vector"
             width={500}
             height={500}
             />
</div>
        </div>
        
        <div className="card-back-bg border border-gray-800 rounded-xl flex flex-col justify-center p-6 py-10 mt-10">

        <p className="text-start text-white text-[20px] font-semibold">Product PCB Design</p>
                <p className="text-sm mt-4 text-gray-400">mPair Technologies Develops any kind of electronic products with the latest PCB design and fabrication process both for individual and industrial purposes.</p>
                </div>
        </div> 
      </div>
        </div>
    </div>
    </div>
  )
}
export default Solution;
