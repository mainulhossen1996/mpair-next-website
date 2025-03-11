import Image from 'next/image'
import { Facebook, Youtube, Instagram } from 'lucide-react'
import { Button } from "@nextui-org/button";
import { ArrowUpRight } from "lucide-react";

const ContactBottom = () => {

    return (
        <div className="py-20">
        <div className="max-w-screen-xl mx-auto">
<div className='flex flex-col items-center'>

    <div className=''>
    <p className='font-thin text-[100px] text-gray-800 text-start mb-4 leading-[110px]'>
    Have any service queries?
    </p>
    </div>
    
  <div className='w-2/5 p-6 flex flex-col items-center gap-2 mt-6'
 >
  <p className='font-medium text-3xl text-blue-500 text-start mb-6'>
    Let's discuss with the Experts!
    </p>
    <Image 
    src="/image/eshan.jpg"
    alt=""
    height={500}
    width={500}
    className='h-[100px] w-[100] object-cover rounded-full'
    />
<p className='text-center text-xl'>
Hi, I am Syed, Business Development Head at mPair.
Let me help you with any concerns.
</p>

<Button className=" bg-[#0077ff] hover:bg-[#0055ff] text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group flex">

    <p>Ask Now</p> <ArrowUpRight className="ml-3" />
</Button>
    

  </div>
</div>

     </div>
     </div>
    );
};
export default ContactBottom;