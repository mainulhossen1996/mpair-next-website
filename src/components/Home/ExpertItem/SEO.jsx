import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Pacman.svg"
import { RiSeoLine } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";

const SEO = () => {
  return (
    <div className="export-box py-6 rounded-3xl px-4">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={130}
                className="lg:h-[60px] w-auto h-[70px] lg:px-[20px] px-0 object-contain justify-start mb-2"/>
        <p className="px-[20px] lg:text-[24px] text-[18px] text-gray-800 font-semibold lg:mt-0 mt-4 mb-3">Marketing & Growth Strategy</p>
          <p className="px-[20px] font-light leading-[24px] lg:text-md text-sm text-slate-600 text-grayishOlive">
          Shine in the digital world with our expert SEO and marketing strategies. We help bring the right audience to your site, increase your online visibility, and turn visitors into loyal customers.
          </p>
          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
             <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><RiSeoLine />SEO Optimigation</span>
             <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><FaMeta />Social Media Marketing</span>
             <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><MdOutlineAutoGraph />Performance Analytics</span> 
             <span className="rounded-lg lg:px-4 px-4 lg:py-1 py-1 font-semibold text-[14px] lg:text-md text-gray-700 bg-gray-50 border border-gray-200 flex gap-3 items-center"><PiStrategyBold />Convertion Strategy</span> 
            
          </div>
    </div>
  );
};

export default SEO;
