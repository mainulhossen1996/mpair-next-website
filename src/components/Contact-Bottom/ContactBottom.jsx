import Image from 'next/image'
import { Facebook, Youtube, Instagram } from 'lucide-react'
import { Button } from "@nextui-org/button";
import { ArrowUpRight } from "lucide-react";

const ContactBottom = () => {

    return (
        <div className="bg-slate-100 lg:py-20 py-10">
        <div className="max-w-screen-xl mx-auto">
<div className='flex flex-col items-center px-4 lg:px-0'>

    <div className=''>
    <p className='font-extralight lg:text-[90px] text-[40px] text-gray-800 text-center mb-4 lg:leading-[110px]'>
    Have any service queries?
    </p>
    </div>
    
  <div className='lg:w-2/5 lg:p-6 flex flex-col items-center gap-2 lg:mt-6 mt-2'
 >
  <p className='font-medium lg:text-3xl text-xl text-blue-500 text-start lg:mb-6'>
    Let's discuss with the Experts!
    </p>
    <Image 
    src="/image/eshan.jpg"
    alt=""
    height={500}
    width={500}
    className='h-[100px] w-[100] object-cover rounded-full'
    />
<p className='text-center lg:text-xl text-sm px-6 lg:px-0'>
Hi, I am Syed, Business Development Head at mPair.
Let me help you with any concerns.
</p>

<Button className=" bg-[#0077ff] hover:bg-[#0055ff] text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group flex">

    <p className='lg:text-xl text-sm'>Ask Now</p> <ArrowUpRight className="ml-3" />
</Button>
    

  </div>
</div>

     </div>
     </div>
    );
};
export default ContactBottom;