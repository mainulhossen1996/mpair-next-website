"use client"
import { useRef } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const items = [
    {
        title: "Meta Marketing",
        description:
          "Effective marketing strategies to grow your brand and expand your audience globally.",
        image: "/image/meta.png",
      },
      {
        title: "Google Ads",
        description:
          "Effective marketing strategies to grow your brand and expand your audience globally.",
        image: "/image/business.png",
      },
    {
      title: "SEO",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi facere eos in, magni provident necessitatibus libero voluptatem veniam.",
      image: "/image/seo.png",
    },
    {
      title: "Analytics",
      description:
        "Understand your data with powerful tools and insights tailored for your business.",
      image: "/image/data-analytics.png",
    },
    {
      title: "Content Writing",
      description:
        "Deliver engaging content to captivate your audience and increase brand loyalty.",
      image: "/image/copy-writing.png",
    },

  ];
const Service = () => {

  const serviceRef = useRef(null);

  const scrollLeft = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };


  return (
    <div className='py-10'>
    <div className="w-full mx-auto">
      <div className="max-w-screen-xl mx-auto flex justify-between">
        <p className="text-[60px] text-white font-semibold">What We Do</p>
        <div className="flex gap-4 items-center">
          <div
            className="flex bg-white rounded-full items-center justify-center h-[50px] w-[50px] cursor-pointer left-button"
            onClick={scrollLeft}
          >
            <FaArrowLeft fill="black" size={26} />
          </div>
          <div
            className="flex bg-white rounded-full items-center justify-center h-[50px] w-[50px] cursor-pointer right-button"
            onClick={scrollRight}
          >
            <FaArrowRight fill="black" size={26} />
          </div>
        </div>
      </div>

      <div
        ref={serviceRef}
        className="overflow-x-auto flex gap-6 mt-10 px-96 scrollbar-hide service"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="p-10 pt-16 rounded-lg border border-gray-800 w-[350px] h-[400px] flex-shrink-0"
          >
            <Image
              src={item.image}
              height={60}
              width={60}
              alt={item.title}
              className="h-[60px] object-contain mb-4"
            />
            <p className="text-3xl">{item.title}</p>
            <div className="border-t border-dashed border-gray-800 mt-6 pt-4">
              <p className="text-md text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  )
}
export default Service
