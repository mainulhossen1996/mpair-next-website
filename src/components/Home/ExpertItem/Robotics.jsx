import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Fingerprint.svg"

const Robotics = () => {
  return (
    <div className="lg:py-0 py-6">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={120}
                className="lg:h-[100px] h-[50px] px-[20px] mt-5 object-contain justify-start"/>
        <p className="px-[20px] lg:text-[30px] text-[18px] text-gray-800 font-semibold lg:mt-0 mt-4 mb-3">Robotics & IoT</p>
          <p className="px-[20px] font-light lg:text-lg text-sm text-slate-600 text-grayishOlive">
          Step into a smarter world with our advanced robotics and IoT solutions. Automate everyday tasks, monitor your operations in real-time, and unlock insights that drive better decisions. With intelligent integration, we create systems that learn, adapt, and take your business to the next level, boosting productivity and innovation like never before.</p>
          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
            <span className="rounded-full lg:px-8 px-4 lg:py-2 py-1 font-medium text-[14px] lg:text-lg text-blue-800 border border-blue-950">Business Automation</span>
            <span className="rounded-full lg:px-8 px-4 lg:py-2 py-1 font-medium text-[14px] lg:text-lg text-blue-800 border border-blue-950">Flexible Workflow</span>
            <span className="rounded-full lg:px-8 px-4 lg:py-2 py-1 font-medium text-[14px] lg:text-lg text-blue-800 border border-blue-950">Data Security</span> 
            <span className="rounded-full lg:px-8 px-4 lg:py-2 py-1 font-medium text-[14px] lg:text-lg text-blue-800 border border-blue-950">Interactive Design</span> 
            
          </div>
    </div>
  );
};

export default Robotics;
