"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { LuCircleCheckBig } from "react-icons/lu";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";

const tabs = [
  {
    name: "SchoolSys",
    value: (
      <div className="flex items-center justify-center lg:h-[32rem] h-[24rem]">

        <div className="flex flex-col items-center">
          <p className="font-16 mb-4 text-center">Learn More About Schoolsys</p>
        <Button className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300">
  <GoArrowRight className="text-black" size={32} />
</Button>

          </div>
      </div>
    ),
    component: (
      <div>
        <div className="pb-10 lg:h-[32rem] h-[24rem] relative">
          <div className="lg:p-6 p-4">
          <Image
            alt=""
            src="/image/product/schoolsys.png"
            className="object-contain lg:h-[30px] h-[24px] w-auto lg:my-6 my-4"
            height={200}
            width={250}
          />
          <p className="text-md font-semibold lg:mb-4 mb-2">Paperless School Management Solution</p>

          <p className="lg:text-sm text-[13px] font-light">
            A comprehensive software solution that integrates various
            administrative, academic, and communication processes within an
            educational institution.
          </p>
          </div>


          <Image
          alt=""
          src="/image/product/schoolsys-sample.png"
          className="object-contain h-[180px] w-auto absolute bottom-0 right-0"
          height={800}
          width={800}
        />


          
        </div>
      </div>
    ),
  },

  {
    name: "Emventory",
    value: (

      <div className="flex items-center justify-center lg:h-[32rem] h-[24rem]">

        <div className="flex flex-col items-center">
          <p className="font-16 mb-4 text-center">Learn More About Emventory</p>
        <Button className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300">
  <GoArrowRight className="text-black" size={32} />
</Button>

          </div>
          </div>
    ),

    component: (
      <div>
       <div className="pb-10 lg:h-[32rem] h-[24rem] relative">
          <div className="lg:p-6 p-4">
          <Image
            alt=""
            src="/image/product/emventory.png"
            className="object-contain lg:h-[30px] h-[24px] w-auto lg:my-6 my-4"
            height={200}
            width={250}
          />

          <p className="text-md font-semibold lg:mb-4 mb-2">
            Manage Inventory & Scaleup Sales Rate</p>

          <p className="lg:text-sm text-[13px] font-light">
            A comprehensive software solution that integrates various
            administrative, academic, and communication processes within an
            educational institution.
          </p>
          </div>

          <Image
          alt=""
          src="/image/product/emventory-sample.png"
          className="object-contain h-[180px] w-auto absolute bottom-0 right-0"
          height={800}
          width={800}
        />

        </div>
      </div>
    ),
  },

  {
    name: "Someekoron",
    value: (
      <div className="flex items-center justify-center lg:h-[32rem] h-[24rem]">

        <div className="flex flex-col items-center">
          <p className="font-16 mb-4 text-center">Learn More About Someekoron</p>
        <Button className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300">
  <GoArrowRight className="text-black" size={32} />
</Button>

          </div>
      </div>
    ),
    component: (
      <div>
        <div className="pb-10 lg:h-[32rem] h-[24rem] relative">
          <div className="lg:p-6 p-4">
          <Image
            alt=""
            src="/image/product/someekoron.png"
            className="object-contain lg:h-[30px] h-[24px] w-auto lg:my-6 my-4"
            height={200}
            width={250}
          />

          <p className="text-md font-semibold lg:mb-4 mb-2">
            Precise Project Accounting & Task</p>

          <p className="lg:text-sm text-[13px] font-light">
            A comprehensive software solution that integrates various
            administrative, academic, and communication processes within an
            educational institution.
          </p>
          </div>

          <Image
          alt=""
          src="/image/product/someekoron-sample.png"
          className="object-contain h-[180px] w-auto absolute bottom-0 right-0"
          height={800}
          width={800}
        />
        </div>
      </div>
    ),
  },

  {
    name: "DocAppoint",
    value: (
      <div className="flex items-center justify-center lg:h-[32rem] h-[24rem]">

        <div className="flex flex-col items-center">
          <p className="font-16 mb-4 text-center">Learn More About DocAppoint</p>
        <Button className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300">
  <GoArrowRight className="text-black" size={32} />
</Button>

          </div>
      </div>
    ),
    component: (
      <div>
         <div className="pb-10 lg:h-[32rem] h-[24rem] relative">
          <div className="lg:p-6 p-4">
          <Image
            alt=""
            src="/image/product/docappoint.png"
            className="object-contain lg:h-[30px] h-[24px] w-auto lg:my-6 my-4"
            height={200}
            width={250}
          />

          <p className="text-md font-semibold lg:mb-4 mb-2">
            Docotor Appointment Booking & Analytics</p>

          <p className="lg:text-sm text-[13px] font-light">
            A comprehensive software solution that integrates various
            administrative, academic, and communication processes within an
            educational institution.
          </p>
          </div>

          <Image
          alt=""
          src="/image/product/docappoint-sample.png"
          className="object-contain h-[180px] w-auto absolute bottom-0 right-0"
          height={800}
          width={800}
        />

   
        </div>
      </div>
    ),
  },
];

const Product = () => {
  const [activeTab, setActiveTab] = useState();
  const [mobileComponent, setMobileComponent] = useState(tabs[0].component);
  const refs = useRef([]);
  const contentWrapperRef = useRef(null);




  return (
    <div className="relative lg:py-24 py-10 product-bg px-4 lg:px-0">
      <div className="mb-6 max-w-screen-xl mx-auto">
        <h1 className="lg:text-[60px] text-[30px] font-medium">
          Our <span className="font-crimson-italic">Products</span> For Your<br/>
          Business
        </h1>
        <p className="mb-3 font-regular lg:text-xl text-sm text-gray-500">
          Explore mPair Products to meet the diverse requirements of desired
          industries.
        </p>
      </div>
      <Image
      src="/image/product-rotate.png"
      height={600}
      width={600}
      className="h-[300px] object-contain absolute right-0 top-10 lg:block hidden"
      />
      <div className="max-w-screen-xl mx-auto lg:mt-10 mt-4 grid lg:grid-cols-4 grid-cols-1 border-s lg:border-t-0 border-t gap-0">
  {tabs.map((tab, index) => (
    <div
      key={tab.name}
      ref={(el) => (refs.current[index] = el)}
      data-tab-name={tab.name}
      onMouseEnter={() => setActiveTab(tab.name)}
      onMouseLeave={() => setActiveTab(null)}
      className="bg-white border-e lg-borderb-0 border-b lg:h-[32rem] h-[24rem] flex items-center justify-center relative"
    >
      {/* Initially visible content */}
      <div className={`absolute transition-all duration-300 ${activeTab === tab.name ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
        {tab.component}
      </div>

      {/* Content on hover */}
      <div className={`absolute transition-all duration-300 ${activeTab === tab.name ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        {tab.value}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Product;
