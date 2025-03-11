import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/ServiceImage/mobileapp.png"


const MobileApp = () => {
  return (
    <div className="">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={120}
                className="h-[100px] px-[20px] mt-5 object-contain justify-start"/>
          <p className="px-[20px] text-[40px] text-gray-800 font-semibold mb-3">Mobile Application</p>
          <p className="px-[20px] text-xl text-slate-600 text-grayishOlive">
          Mobile applications are increasingly becoming the go-to choice for businesses and service providers. This trend highlights the growing importance of mobile apps in capturing consumer attention and driving engagement.</p>
          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Business Automation</span>
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Flexible Workflow</span>
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Data Security</span> 
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Interactive Design</span> 
            
          </div>
    </div>
  );
};

export default MobileApp;