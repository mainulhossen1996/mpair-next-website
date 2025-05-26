import Image  from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Conversation.svg"
import { MdOutlineShapeLine, MdOutlinePermMedia } from "react-icons/md";
import { RiGitBranchLine, RiDeviceLine } from "react-icons/ri";



const UIUX = () => {
  return (
    <div className="export-box py-6 rounded-3xl px-4">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={130}
                className="lg:h-[50px] w-auto h-[50px] px-[20px] object-contain justify-start mb-4"/>
        <p className="px-[20px] lg:text-[26px] text-[18px] text-gray-800 font-semibold lg:mt-0 mt-4 mb-3">Product Design</p>
          <p className="px-[20px] font-light leading-[24px] lg:text-md text-sm text-slate-600 text-grayishOlive">
          Great design isn’t just about looking good, it’s about making things simple, fun, and easy to use. Our UI/UX solutions are all about creating smooth and enjoyable experiences that keep your users coming back for more.
          </p>
          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
            <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><MdOutlineShapeLine /> Wireframing</span>
            <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><RiGitBranchLine /> Prototyping</span>
            <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><RiDeviceLine />Multi Device Responsive</span> 
            <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><MdOutlinePermMedia />Interactive Design</span> 
            
          </div>
          
    </div>
  );
};

export default UIUX;