import { useState } from "react";
import Image from "next/image";
import {Button} from "@nextui-org/react";

const yearContent = {
    2020: (
        <div className="flex gap-20 py-6 ps-36">
          <div className="w-3/12">
            <Image src="/image/start.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         Md. Mainul Hossen and Syed Mainul Islam, founded mPair as a tech solutions provider and launched a robotics course.
            </p>
            <p className="text-sm font-bold text-gray-100">01 Oct, 2020</p>
            
          </div>


          <div className="w-3/12">
            <Image src="/image/start-2.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         mPair expanded team members for web development, robotics, and design services
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          <div className="w-3/12">
            <Image src="/image/start-3.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         We began offering robotics automation services from our single-desk lab, making the journey even more enjoyable.
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          
        </div>
      ),
      2021: (
        <div className="flex gap-20 py-6 ps-36">
          <div className="w-3/12">
            <Image src="/image/start.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         Md. Mainul Hossen and Syed Mainul Islam, founded mPair as a tech solutions provider and launched a robotics course.
            </p>
            <p className="text-sm font-bold text-gray-100">01 Oct, 2020</p>
            
          </div>


          <div className="w-3/12">
            <Image src="/image/start-2.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         mPair expanded team members for web development, robotics, and design services
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          <div className="w-3/12">
            <Image src="/image/start-3.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         We began offering robotics automation services from our single-desk lab, making the journey even more enjoyable.
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          
        </div>
      ),
      2022: (
        <div className="flex gap-20 py-6 ps-36">
          <div className="w-3/12">
            <Image src="/image/start.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         Md. Mainul Hossen and Syed Mainul Islam, founded mPair as a tech solutions provider and launched a robotics course.
            </p>
            <p className="text-sm font-bold text-gray-100">01 Oct, 2020</p>
            
          </div>


          <div className="w-3/12">
            <Image src="/image/start-2.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         mPair expanded team members for web development, robotics, and design services
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          <div className="w-3/12">
            <Image src="/image/start-3.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         We began offering robotics automation services from our single-desk lab, making the journey even more enjoyable.
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          
        </div>
      ),
      2023: (
        <div className="flex gap-20 py-6 ps-36">
          <div className="w-3/12">
            <Image src="/image/start.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         Md. Mainul Hossen and Syed Mainul Islam, founded mPair as a tech solutions provider and launched a robotics course.
            </p>
            <p className="text-sm font-bold text-gray-100">01 Oct, 2020</p>
            
          </div>


          <div className="w-3/12">
            <Image src="/image/start-2.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         mPair expanded team members for web development, robotics, and design services
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          <div className="w-3/12">
            <Image src="/image/start-3.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         We began offering robotics automation services from our single-desk lab, making the journey even more enjoyable.
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          
        </div>
      ),
      2024: (
        <div className="flex gap-20 py-6 ps-36">
          <div className="w-3/12">
            <Image src="/image/start.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         Md. Mainul Hossen and Syed Mainul Islam, founded mPair as a tech solutions provider and launched a robotics course.
            </p>
            <p className="text-sm font-bold text-gray-100">01 Oct, 2020</p>
            
          </div>


          <div className="w-3/12">
            <Image src="/image/start-2.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         mPair expanded team members for web development, robotics, and design services
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          <div className="w-3/12">
            <Image src="/image/start-3.jpg"
            height={300}
            width={300}
            className="h-[250px] w-[250px] object-cover mb-4"
            alt="" />
                         <p className="text-gray-600 font-regular mb-2 w-[250px]">
                         We began offering robotics automation services from our single-desk lab, making the journey even more enjoyable.
            </p>
            {/* <p className="text-sm font-bold text-gray-100">04 Sept, 2020</p> */}
            
          </div>

          
        </div>
      ),
};

const Timeline= () => {
  const [selectedYear, setSelectedYear] = useState(2024);


  return (
    <div className="">
    <div className="max-w-screen-xl mx-auto py-24">
        <p className="text-center text-[60px] font-medium">
            Our Story Since 2020
        </p>
      <div className="h-[350px] mt-10 mb-32">
        {yearContent[selectedYear]}
      </div>

      {/* Horizontal Timeline */}
      <div className="relative flex items-center">
        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 h-[2px] bg-gray-300 top-1/2 transform -translate-y-1/2"></div>

        {/* Year Buttons */}
        <div className="flex justify-between w-full">
          {Object.keys(yearContent).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(parseInt(year))}
              className={`relative z-10 px-4 py-1 font-semibold border rounded-full ${
                selectedYear === parseInt(year)
                  ? "bg-blue-600 border-2 border-blue-600 text-white"
                  : "border-2 bg-gray-200 border-gray-300 text-gray-600 hover:text-white hover:bg-gray-800 hover:border-gray-800"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>

    </div>

  );
}
export default Timeline;
