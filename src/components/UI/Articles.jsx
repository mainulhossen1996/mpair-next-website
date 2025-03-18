"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

const Articles = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardsData = [
    {
      key: 1,
      image: "/image/release/test.jpg",
      title: "Unmatched Expertise in Medical Tourism",
      shortbfief: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      time: "12 Dec, 2024",
      label: "UI/UX"
         },
    {
      key: 2,
      image: "/image/release/test.jpg",
      title: "Strong Global Partnerships with EdTech",
      shortbfief: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      time: "28 Nov, 2024",
      label: "Security",
     },
    {
      key: 3,
      image: "/image/release/test.jpg",
      title: "Unmatched Expertise in Medical Tourism",
      shortbfief: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      time: "28 Nov, 2024",
      label: "Node.js"
        },
  ];

  return (
    <div className="lg:py-32 py-10 pt-20 px-4 lg:px-0 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
            <div>
            <p className="lg:text-[50px] text-[30px] font-medium text-white lg:leading-[65px] leading-[40px]">
          Read UI/UX <br className="lg:hidden block"/><span className="font-crimson-italic lg:text-[60px] text-[45px]">Case Studies</span>
        </p>
        <p className="text-gray-500 lg:text-lg text-sm font-light lg:pt-0 pt-2 lg:mb-3 mb-0">
        Stay updated with the latest developments and best UI/UX design practices with our insightful articles.
        </p>
            </div>
            <div className="lg:block hidden">
            <Button className="relative border border-[#008CFF] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
          <span className="absolute inset-0 bg-[#008CFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="relative flex items-center text-sm">
            More Article <ArrowUpRight className="ml-3" />
          </span>
        </Button>
            </div>
       
        </div>
        
        <div className="lg:flex justify-between gap-10 mt-10">
          {cardsData.map(({ key, image, title, shortbfief, time, label }, index) => (
            <div
              key={key}
              className=" lg:w-4/12 rounded-3xl border-t hover:border-blue-950 border-gray-800 hover:bg-gray-900 p-4 pt-6 lg:mb-0 mb-4"
            >
                
              <div
              >

               
                <p className="lg:text-xl text-[16px] font-medium text-gray-200 pb-2" >
                  {title}
                </p>
                <p className="lg:text-sm text-[12px] font-regular text-gray-400 pb-2">
                  {shortbfief}
                </p>
                <span className="lg:text-[12px] text-[10px] rounded-full px-2 py-1 text-gray-300 mt-4 bg-blue-900 border border-blue-600">
                    {label}
                </span>
  
              </div>

              <Image src="/image/UI-Principle/Information.png"
                        width={500}
                        height={500}
                        alt=""
                        className="lg:h-[350px] h-[280px] w-full rounded-xl object-cover mt-6"
                        />

            </div>
          ))}
        </div>

        <div className="lg:hidden flex justify-center">
            <Button className="relative border border-[#008CFF] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
          <span className="absolute inset-0 bg-[#008CFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="relative flex items-center text-sm">
            More Article <ArrowUpRight className="ml-3" />
          </span>
        </Button>
            </div>
      </div>

      <div className="flex justify-center pt-10">
        
      </div>
    </div>
  );
};
export default Articles;
