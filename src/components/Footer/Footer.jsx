import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="bg-slate-100"
      style={{
        borderImage:
          "linear-gradient(to right, transparent, #4e8bc4, transparent) 1",
        borderTop: "1px solid transparent",
      }}
    >
      <footer className="mt-auto max-w-screen-xl pt-10 mx-auto footer px-4 lg:px-0">
        <div className="text-center">
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-20 gap-10 mb-4 border-b-1 pb-4 lg:px-[0px] sm:px-[30px]">
            <div className="text-start">
              <p className="font-regular lg:text-lg text-[16px] text-gray-600 lg:mb-4 mb-2">Contact</p>

              <p className="text-xs text-gray-400">For Collaboration</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                business@mpairtech.com
              </p>

              <p className="text-xs text-gray-400">For Join</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                career@mpairtech.com
              </p>

              <p className="text-xs text-gray-400">Visit Us</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                Iliyas Mansion, 1309 O.R. Nizam Road, Chattogram
              </p>
            </div>

            <div className="lg:text-center text-start">
              <p className="font-regular lg:text-lg text-[16px] text-gray-600 lg:mb-4 mb-2">
                Services
              </p>

              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                UI/UX Design
              </p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                Cloud Software
              </p>

              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">SEO & Marketing</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                Robotics & IoT
              </p>
            </div>

            <div className="lg:text-center text-start">
              <p className="font-regular lg:text-lg text-[16px] text-gray-600 lg:mb-4 mb-2">
                Products
              </p>

              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">SchoolSys</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">emventory</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                Someekoron
              </p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                docAppoint
              </p>
            </div>

            <div className="lg:text-center text-start">
              <p className="font-regular lg:text-lg text-[16px] text-gray-600 lg:mb-4 mb-2">Company</p>

              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">About Us</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">Clients</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">Career</p>
              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                Articles & Events
              </p>

              <p className="font-light lg:text-sm text-[13px] text-gray-600 lg:mb-2 mb-1">
                Company Profile
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-3">
            <div className="mt-3 flex space-x-4">
              <a className="text-gray-500 hover:text-blue-600" href="https://www.facebook.com/mPairtechnologies" target="_blank">
                <FaFacebook size={24} />
              </a>
              <a className="text-gray-500 hover:text-red-500" href="">
                <FaInstagram size={24} />
              </a>
              <a className="text-gray-500 hover:text-black" href="">
                <FaXTwitter size={24} />
              </a>
              <a className="text-gray-500 hover:text-blue-600" href="">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center border-t py-4">
            <Image
              src="/image/mPair.png"
              alt="mpair"
              className="object-contain mb-4"
              height={100}
              width={100}
            />
            <p className="text-gray-500 dark:text-neutral-500 lg:text-sm text-[10px]">
              © mPair Technologies Ltd. 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
