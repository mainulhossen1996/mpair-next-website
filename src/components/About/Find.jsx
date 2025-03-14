import React from 'react'
import {Button} from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Find = () => {
  return (
    <div className='bg-slate-100 py-32'>
    <div className='max-w-screen-xl mx-auto'>
        <div className="lg:h-[310px] sm:h-[250px] flex justify-between items-center lg:px-[0px] sm:px-[10px]">
 <div className="">
   <p className="lg:text-[50px] sm:text-[22px] text-blue-700 my-[25px] font-bold">Find us at.</p>
   <p className="lg:text-[18px] sm:text-[14px] text-gray-600">Iliyas Mansion,<br/>1309 O.R. Nizam Road,<br/>Chattogram, Bangladesh</p>
   <Button className=" bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 flex gap-2">
<p>Talk Now</p>
 <ArrowUpRight className="ml-3" />
</Button>
 </div>
 <div className="relative">
 <Image
       className="lg:h-[400px] w-full object-contain sm:h-[104px]"
       src="/image/map.png"
       alt="map"
       width={500}
       height={500}
       />

<div className="blinking-dot absolute"></div>
 </div>
</div>
    </div>
    </div>
  )
}

export default Find;
