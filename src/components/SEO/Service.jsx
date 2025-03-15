"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const items = [
  {
    title: "Meta Marketing",
    description:
      "Take your brand to new heights with the power of Meta! From eye-catching Facebook ads to targeted Instagram campaigns, we help your brand stand out in the digital crowd.",
    image: "/image/meta.png",
  },
  {
    title: "Google Ads",
    description:
      "Put your business at the top of Google search results with smart, high-performing Google Ads. We design campaigns that don’t just get clicks but drive meaningful results.",
    image: "/image/google-ads.png",
  },
  {
    title: "SEO",
    description:
      "What good is a stunning website if no one finds it? With our high conversion SEO strategies, climb to the top of search engine rankings and stay there!",
    image: "/image/seo.png",
  },
  {
    title: "Analytics",
    description:
      "Understand your data with powerful tools and insights designed to enhance decision-making and drive growth for your business.",
    image: "/image/google-analytics.png",
  },
  {
    title: "Content Writing",
    description:
      "Great content doesn’t just tell a story; it inspires, and drives action. Whether it’s punchy headlines, blogs, or a website, our contents will make your audience stop, read, and respond.",
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
    <div className="py-32 bg-white">
      <div className="w-full mx-auto">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <div className="w-2/3">
            <p className="text-[50px] font-medium">What We Do <br/>
            For Your <span className="font-crimson-italic text-[56px]">Global Engagement</span></p>

            <p className="font-regular text-lg">We’re a team of skilled digital marketers, strategists, and content creators dedicated to driving online success. With over a decade of experience, we specialize in SEO, social media marketing, paid advertising, and data-driven campaigns that help businesses grow and thrive.</p>
            
          </div>
          <div className="flex gap-4 items-center">
            <div
              className="flex bg-gray-100 rounded-full items-center justify-center h-[50px] w-[50px] cursor-pointer left-button"
              onClick={scrollLeft}
            >
              <FaArrowLeft fill="black" size={26} />
            </div>
            <div
              className="flex bg-gray-100 rounded-full items-center justify-center h-[50px] w-[50px] cursor-pointer right-button"
              onClick={scrollRight}
            >
              <FaArrowRight fill="black" size={26} />
            </div>
          </div>
        </div>

        <div
          ref={serviceRef}
          className="overflow-x-auto flex gap-6 mt-16 px-72 scrollbar-hide service"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="p-10 pt-16 rounded-2xl  bg-[#EDEEF7] w-[350px] h-[400px] flex-shrink-0"
            >
              <Image
                src={item.image}
                height={60}
                width={60}
                alt={item.title}
                className="h-[60px] object-contain mb-16"
              />
              <p className="text-3xl">{item.title}</p>
              <div className="pt-4">
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Service;
