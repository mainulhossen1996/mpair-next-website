import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Cloud.svg"
import { MdOutlineCloudSync } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { AiOutlineAntDesign } from "react-icons/ai";


const CloudSoftware = () => {
  return (
    <div className="export-box py-6 rounded-3xl px-4">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={130}
                className="lg:h-[50px] w-auto h-[50px] px-[20px] object-contain justify-start mb-4"/>
        <p className="px-[20px] lg:text-[24px] text-[18px] text-gray-800 font-semibold lg:mt-0 mt-4 mb-3">Cloud Software Development</p>
          <p className="px-[20px] font-light leading-[24px] lg:text-md text-sm text-slate-600 text-grayishOlive">
          Revolutionize the way your business operates with our cutting-edge cloud software solutions. Access your data and tools from anywhere, collaborate effortlessly with your team, grow your business with no worries.
          </p>

          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
           <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"> <MdOutlineCloudSync/>Business Automation</span>
           <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><LuWorkflow/>Flexible Workflow</span>
           <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><LuShieldCheck/>Data Security</span> 
           <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><AiOutlineAntDesign/>Interactive Design</span> 
            
          </div>
          
    </div>
  );
};

export default CloudSoftware;