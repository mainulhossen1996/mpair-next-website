import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Fingerprint.svg"

const Robotics = () => {
  return (
    <div className="export-box py-6 rounded-3xl px-4">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={120}
                className="lg:h-[80px] h-[50px] px-[20px] object-contain justify-start"/>
        <p className="px-[20px] lg:text-[30px] text-[18px] text-gray-800 font-semibold lg:mt-0 mt-4 mb-3">Robotics & IoT Automation</p>
          <p className="px-[20px] font-light lg:text-md text-sm text-slate-600 text-grayishOlive">
          Step into a smarter world with our advanced robotics and IoT solutions. Automate everyday tasks, monitor your operations in real-time, and unlock insights that drive better decisions. With intelligent integration, we create systems that learn, adapt, and take your business to the next level, boosting productivity and innovation like never before.</p>
          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
             <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center">Smart Integration</span>
             <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center">Sensor-Based Systems</span>
             <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center">Remote Access & Control</span> 
             <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center">Data-Driven Automation</span> 
            
          </div>
    </div>
  );
};

export default Robotics;
