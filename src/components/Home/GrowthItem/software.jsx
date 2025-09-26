import Image from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/growth-ui1.jpg"
import { MdOutlineCloudSync } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { AiOutlineAntDesign } from "react-icons/ai";


const Software = () => {
  return (
    <div className="py-6 border-b border-gray-200">
        <div className="flex justify-between">
<div className="w-4/6">
<p className="text-xl font-semibold mb-2">Cloud applications that fit your exact business needs.</p>
<p className="font-light leading-[20px] lg:text-md text-sm text-slate-600 text-grayishOlive">
          Access your data and tools from anywhere, collaborate effortlessly with your team, grow your business with no worries.
          </p>
</div>
<div className="w-2/6">
<Image 
      alt=""
      src= {serviceImg}
                height={200}
                width={200}
                className="lg:h-[100px] w-auto h-[50px] px-[20px] object-cover"/>
</div>
        </div>
          
    </div>
  );
};

export default Software;