"use client";

import { Button } from "@nextui-org/react";

import Image from "next/image";

const Contact = () => {
  const areas = [
    { label: "Dhaka", value: "dhaka" },
    { label: "Chittagong", value: "chittagong" },
    { label: "Sylhet", value: "sylhet" },
    { label: "Rajshahi", value: "rajshahi" },
    { label: "Khulna", value: "khulna" },
  ];

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <div className="max-w-screen-xl mx-auto pt-36">
        <div className="flex gap-10">
          <div className="w-7/12">
            <p className="text-[#008CFF] lg:text-[90px] sm:text-[28px] font-semibold">
              Let's Talk.
            </p>
            <p className="text-[#909090] lg:text-[42px] sm:text-[20px] font-thin ">
              Reach out today and discover our approach
            </p>
            <div className="my-6">
              <div className="mb-6">
                <p className="text-lg font-bold mb-2">Drop us a line</p>
                <span className="text-xl font-normal text-blue-500 hover:text-white hover:bg-blue-700">
                  queries@mpairtech.com
                </span>
              </div>

              <div className="mb-6">
                <p className="text-lg font-bold mb-2">Reach us faster</p>
                <span className="text-xl font-normal text-blue-500 hover:text-white hover:bg-blue-700">
                  +88 01713368297
                </span>
              </div>

              <div>
                <p className="text-lg font-bold mb-2">Meet up for a coffee</p>
                <span className="text-xl font-normal text-gray-500 ">
                  Chattogram, Bangladesh
                </span>
              </div>
            </div>
          </div>

          <div className="w-5/12">
            <div className="border border-gray-800 p-6">

              <div>
                <div className="flex gap-4 mt-4 items-center">
                  <Image
                    src="/image/eshan.jpg"
                    alt=""
                    height={500}
                    width={500}
                    className="h-[80px] w-[80] filter grayscale object-cover rounded-full"
                  />
                  <div>
                    <p className="text-start text-xl">Syed Mainul Islam</p>
                    <p>Head of Business </p>
                  </div>
                </div>

                <p className="text-lg mt-10 my-[10px]">
                Speak with sales through email. Your bussiness team will respond you within short period.
                </p>

                <div >
                <form>

                <div className="mb-4">
      
      <input
        id="organization-name"
        type="text"
        placeholder="Your Name"
        className="w-full mt-1 p-2 border-b border-gray-600 outline-none bg-black"
        variant="bordered"
      />
    </div>
    {/* Organization Name */}
    <div className="mb-4">
  
      <input
        id="organization-name"
        type="text"
        placeholder="Organization Name"
        className="w-full mt-1 p-2 border-b border-gray-600 outline-none bg-black"
        variant="bordered"
      />
    </div>

    {/* Business Email */}
    <div className="mb-4">
 
      <input
        id="business-email"
        type="email"
        placeholder="Work Email"
        className="w-full mt-1 p-2 border-b border-gray-600 outline-none bg-black"
        variant="bordered"
      />
    </div>

    {/* Select Fields */}
    <div className="mb-4">

      <select
        id="industry"
        className="w-full mt-1 p-2 border-b border-gray-600 outline-none bg-black"
      >
        <option value="">Select your industry</option>
        <option value="technology">Technology</option>
        <option value="healthcare">Healthcare</option>
        <option value="education">Education</option>
        <option value="other">Other</option>
      </select>
    </div>


    {/* Requirements */}
    <div className="mb-4">
      
      <textarea
        id="requirements"
        placeholder="Your Message"
        className="w-full mt-1 p-2 border-b border-gray-600 outline-none bg-black"
        variant="bordered"
      />

    </div>

    {/* Submit Button */}
    <Button className="relative border border-[#0077ff] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group w-full">
  <span className="absolute inset-0 bg-[#008CFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
  <span className="relative flex items-center">
    Send Message
  </span>
</Button>
  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
