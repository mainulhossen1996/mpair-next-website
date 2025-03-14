import Image  from "next/image";
import React from "react";
import serviceImg from "../../../../public/image/expert-icon/Conversation.svg"


const UIUX = () => {
  return (
    <div className="">
      <Image 
      alt=""
      src= {serviceImg}
                height={350}
                width={130}
                className="h-[100px] px-[20px] mt-5 object-contain justify-start"/>
        <p className="px-[20px] text-[30px] text-gray-800 font-semibold mb-3">UI/UX Design</p>
          <p className="px-[20px] font-light text-lg text-slate-600 text-grayishOlive">
          Great design isn’t just about looking good, it’s about making things simple, fun, and easy to use. Our UI/UX solutions are all about creating smooth and enjoyable experiences that keep your users coming back for more. From wireframes to final designs, we work hard to bring your ideas to life, ensuring every detail leaves your users happy and impressed.
          </p>
          <div className="flex flex-wrap px-[20px] mt-6 gap-4">
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Wireframing</span>
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Prototyping</span>
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Multi Device Responsive</span> 
            <span className="rounded-full px-8 py-2 font-medium text-blue-800 border border-blue-950">Interactive Design</span> 
            
          </div>
          
    </div>
  );
};

export default UIUX;