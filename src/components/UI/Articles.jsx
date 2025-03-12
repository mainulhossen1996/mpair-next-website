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
      time: "12 Dec, 2024",
      label: "UI/UX"
         },
    {
      key: 2,
      image: "/image/release/test.jpg",
      title: "Strong Global Partnerships",
      time: "28 Nov, 2024",
      label: "Security",
     },
    {
      key: 3,
      image: "/image/release/test.jpg",
      title: "Unmatched Expertise in Medical Tourism",
      time: "28 Nov, 2024",
      label: "Node.js"
        },
  ];

  return (
    <div className="py-32 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
            <div>
            <p className="text-[50px] font-semibold">
          Read UI/UX Journal
        </p>
        <p className="text-gray-500 text-lg font-light mb-3">
        Stay updated with the latest developments and best UI/UX design practices with our insightful articles.
        </p>
            </div>
            <div>
            <Button className="relative border border-[#008CFF] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
          <span className="absolute inset-0 bg-[#008CFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="relative flex items-center">
            More Article <ArrowUpRight className="ml-3" />
          </span>
        </Button>
            </div>
       
        </div>
        
        <div className="flex justify-between items-center gap-16 mt-10">
          {cardsData.map(({ key, image, title, time, label }, index) => (
            <div
              key={key}
              className="h-[350px] w-4/12 rounded-2xl"
            >
                 <Image src="/image/UI-Principle/Information.png"
                        width={500}
                        height={500}
                        alt=""
                        className="h-[250px] w-full rounded-xl object-cover"
                        />
              <div
              >

                <p className="font-sm text-gray-400 mt-4">
                    {time}
                </p>
                <p className="text-2xl font-medium" >
                  {title}
                </p>
  
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-10">
        
      </div>
    </div>
  );
};
export default Articles;
