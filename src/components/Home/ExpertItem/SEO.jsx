import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Pacman.svg"

const SEO = () => {
  return (
    <div className="lg:py-0 py-6">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={130}
                className="lg:h-[100px] h-[70px] lg:px-[20px] px-0 mt-5 object-contain justify-start"/>
        <p className="px-[20px] lg:text-[30px] text-[18px] text-gray-800 font-semibold lg:mt-0 mt-4 mb-3">SEO & Marketing</p>
          <p className="px-[20px] font-light lg:text-lg text-sm text-slate-600 text-grayishOlive">
          Shine in the digital world with our expert SEO and marketing strategies. We help bring the right audience to your site, increase your online visibility, and turn visitors into loyal customers. From fine-tuning your website to creating paid campaigns that deliver real results, we’re here to help your brand grow, thrive, and stay ahead of the competition.
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

export default SEO;
