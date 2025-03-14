import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Pacman.svg"

const SEO = () => {
  return (
    <div className="">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={130}
                className="h-[100px] px-[20px] mt-5 object-contain justify-start"/>
        <p className="px-[20px] text-[30px] text-gray-800 font-semibold mb-3">SEO & Marketing</p>
          <p className="px-[20px] text-lg text-slate-600 text-grayishOlive">
          Shine in the digital world with our expert SEO and marketing strategies. We help bring the right audience to your site, increase your online visibility, and turn visitors into loyal customers. From fine-tuning your website to creating paid campaigns that deliver real results, we’re here to help your brand grow, thrive, and stay ahead of the competition.
          </p>
          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
            <span className="rounded-full px-8 py-2  font-medium text-blue-800 border border-blue-950">Business Automation</span>
            <span className="rounded-full px-8 py-2  font-medium text-blue-800 border border-blue-950">Flexible Workflow</span>
            <span className="rounded-full px-8 py-2  font-medium text-blue-800 border border-blue-950">Data Security</span> 
            <span className="rounded-full px-8 py-2  font-medium text-blue-800 border border-blue-950">Interactive Design</span> 
            
          </div>
    </div>
  );
};

export default SEO;
