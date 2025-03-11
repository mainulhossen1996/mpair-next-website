import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Cloud.svg"


const CloudSoftware = () => {
  return (
    <div className="">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={130}
                className="h-[100px] px-[20px] mt-5 object-contain justify-start"/>
        <p className="px-[20px] text-[30px] text-gray-800 font-semibold mb-3">Cloud Software</p>
          <p className="px-[20px] text-lg text-slate-600 text-grayishOlive">
          Revolutionize the way your business operates with our cutting-edge cloud software solutions. Access your data and tools from anywhere, collaborate effortlessly with your team, grow your business with no worries. It’s all about making your workflows faster, easier, and more efficient.
          </p>

          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Business Automation</span>
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Flexible Workflow</span>
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Data Security</span> 
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Interactive Design</span> 
            
          </div>
          
    </div>
  );
};

export default CloudSoftware;