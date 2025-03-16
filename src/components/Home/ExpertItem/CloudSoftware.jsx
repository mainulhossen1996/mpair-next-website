import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Cloud.svg"


const CloudSoftware = () => {
  return (
    <div className="lg:py-0 py-6">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={130}
                className="lg:h-[100px] h-[50px] px-[20px] mt-5 object-contain justify-start"/>
        <p className="px-[20px] lg:text-[30px] text-[18px] text-gray-800 font-semibold lg:mt-0 mt-4 mb-3">Cloud Software</p>
          <p className="px-[20px] font-light lg:text-lg text-sm text-slate-600 text-grayishOlive">
          Revolutionize the way your business operates with our cutting-edge cloud software solutions. Access your data and tools from anywhere, collaborate effortlessly with your team, grow your business with no worries. It’s all about making your workflows faster, easier, and more efficient.
          </p>

          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
            <span className="rounded-full lg:px-8 px-4 lg:py-2 py-1 font-medium text-[14px] lg:text-lg text-blue-800 border border-blue-950">Business Automation</span>
            <span className="rounded-full lg:px-8 px-4 lg:py-2 py-1 font-medium text-[14px] lg:text-lg text-blue-800 border border-blue-950">Flexible Workflow</span>
            <span className="rounded-full lg:px-8 px-4 lg:py-2 py-1 font-medium text-[14px] lg:text-lg text-blue-800 border border-blue-950">Data Security</span> 
            <span className="rounded-full lg:px-8 px-4 lg:py-2 py-1 font-medium text-[14px] lg:text-lg text-blue-800 border border-blue-950">Interactive Design</span> 
            
          </div>
          
    </div>
  );
};

export default CloudSoftware;