import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {

    return (
      <div className=''
      style={{
        borderImage: 'linear-gradient(to right, transparent, #4e8bc4, transparent) 1',
        borderTop: '1px solid transparent',
      }}>
<footer className="mt-auto max-w-screen-xl pt-10 mx-auto footer ">
  <div className="text-center">

<div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-20 mb-4 border-b-1 pb-4 lg:px-[0px] sm:px-[30px]'>


<div className='text-start'>
    <p className='font-regular text-lg text-gray-600 mb-4'>
      Contact
    </p>

    <p className='text-xs text-gray-400'>For Collaboration</p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      business@mpairtech.com
    </p>

    <p className='text-xs text-gray-400'>For Join</p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      career@mpairtech.com
    </p>

    <p className='text-xs text-gray-400'>Visit Us</p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      Iliyas Mansion, 1309 O.R. Nizam Road, Chattogram
    </p>

  </div>





  <div className='text-center'>
    <p className='font-regular text-lg text-gray-600 mb-4'>
      Services
    </p>

    <p className='font-light text-sm text-gray-600 mb-2'>
      UI/UX Design
    </p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      Cloud Software
    </p>

    <p className='font-light text-sm text-gray-600 mb-2'>
      Marketing
    </p>
    <p className='font-light text-sm text-gray-600 mb-2'>
     Robotics & IoT
    </p>
  </div>


  <div className='text-center'>
    <p className='font-regular text-lg text-gray-600 mb-4'>
      Products
    </p>

    <p className='font-light text-sm text-gray-600 mb-2'>
      SchoolSys
    </p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      emventory
    </p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      Someekoron
    </p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      docAppoint
    </p>
  </div>

  <div className='text-center'>
    <p className='font-regular text-lg text-gray-600 mb-4'>
      Company
    </p>

    <p className='font-light text-sm text-gray-600 mb-2'>
      About Us
    </p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      Clients
    </p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      Career
    </p>
    <p className='font-light text-sm text-gray-600 mb-2'>
      Articles & Events
    </p>

    <p className='font-light text-sm text-gray-600 mb-2'>
      Company Profile
    </p>

  </div>



</div>
<div className='flex justify-center mb-3'>
<div className="mt-3 flex space-x-4">
     <a className='text-gray-500 hover:text-blue-600' href=''>
     <FaFacebook size={24}/>
     </a>
     <a className='text-gray-500 hover:text-red-500' href=''>
     <FaInstagram size={24}/>
     </a>
     <a className='text-gray-500 hover:text-black' href=''>
     <FaXTwitter size={24}/>
     </a>
     <a className='text-gray-500 hover:text-blue-600' href=''>
     <FaLinkedin size={24}/>
     </a>
    </div>
</div>

    <div className="mb-4 flex flex-col items-center border-t pt-4">
    <Image src="/image/mPair.png"
                alt='mpair'
                className='object-contain mb-4'
                height={100}
                width={100}/>
<p className="text-gray-500 dark:text-neutral-500 text-sm">© mPair Technologies Ltd. 2025. All rights reserved.</p>
    </div>




  </div>

</footer>

      </div>
    );
};
export default Footer;