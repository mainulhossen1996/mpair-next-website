"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";

const Article = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardsData = [
    {
      key: 1,
      image: "/image/uiux.jpg",
      title: "Why skipping UI/UX design could cost you more than you think",
      time: "14 Mar, 2025",
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
    <div className="bg-article pt-10 pb-24 ">
      <div className="max-w-screen-xl mx-auto pt-10 rounded-t-[80px] border-t border-gray-700">
        <p className="text-[50px] font-medium text-center text-white">
          Article For Your Business
        </p>
        <p className="text-gray-400 text-xl font-light text-center mb-3 px-36">
        Boost your business growth with insightful articles that engage your audience, enhance brand visibility, and drive meaningful connections.
        </p>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mt-10 px-10">
          {cardsData.map(({ key, image, title, time, label }, index) => (
            <Card
              key={key}
              className={`relative ${
                index === 0
                  ? hoveredIndex === null || hoveredIndex === 0
                    ? "w-10/12 md:w-7/12"
                    : "w-10/12 md:w-7/12 lg:w-4/12"
                  : hoveredIndex === index
                  ? "w-10/12 md:w-7/12"
                  : "w-10/12 md:w-7/12 lg:w-4/12"
              } h-[350px] rounded-2xl p-6 bg-cover bg-center  transition-none duration-0 lg:transition-all lg:duration-500 lg:group  `}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('${image}')`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            > 
              <div
                className={`relative text-gray-300 mt-36 ${
                  index === 0 && hoveredIndex === null ? "line-clamp-none" : ""
                }`}
              >
                <span className="rounded-full bg-gray-700 text-white text-[12px] px-3 py-1">
                    {label}
                </span>
                <p className="font-sm text-gray-400 mt-4">
                    {time}
                </p>
                <p
                  className={`font-medium text-xl ${
                    index === 0 && hoveredIndex === null
                      ? ""
                      : "line-clamp-3 hover:line-clamp-none"
                  }`}
                >
                  {title}
                </p>
  
              </div>

              <Button
                className={`absolute bottom-4 right-4 bg-white text-black p-3 rounded-full lg:transition-all lg:duration-500 ${
                  hoveredIndex === index ||
                  (index === 0 && hoveredIndex === null)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <GoArrowUpRight className="text-[28px]" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <Button className="relative border border-[#008CFF] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
          <span className="absolute inset-0 bg-[#008CFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="relative flex items-center">
            See More Article <ArrowUpRight className="ml-3" />
          </span>
        </Button>
      </div>
    </div>
  );
};
export default Article;
