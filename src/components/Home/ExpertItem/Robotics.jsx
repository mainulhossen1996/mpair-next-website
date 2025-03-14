import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Fingerprint.svg"

const Robotics = () => {
  return (
    <div className="">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={120}
                className="h-[100px] px-[20px] mt-5 object-contain justify-start"/>
        <p className="px-[20px] text-[30px] text-gray-800 font-semibold mb-3">Robotics & IoT</p>
          <p className="px-[20px] text-lg text-slate-600 text-grayishOlive">
          Step into a smarter world with our advanced robotics and IoT solutions. Automate everyday tasks, monitor your operations in real-time, and unlock insights that drive better decisions. With intelligent integration, we create systems that learn, adapt, and take your business to the next level, boosting productivity and innovation like never before.</p>
          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Business Automation</span>
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Flexible Workflow</span>
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Data Security</span> 
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Interactive Design</span> 
            
          </div>
    </div>
  );
};

export default Robotics;
