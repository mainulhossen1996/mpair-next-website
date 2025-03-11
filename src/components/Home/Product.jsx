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
      <div className="flex items-center justify-center h-[32rem]">

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
        <div className="pb-10 h-[32rem] relative">
          <div className="p-6">
          <Image
            alt=""
            src="/image/product/schoolsys.png"
            className="object-contain h-[30px] w-auto my-6"
            height={200}
            width={250}
          />
          <p className="text-md font-semibold mb-4">Paperless School Management Solution</p>

          <p className="text-sm font-light">
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

      <div className="flex items-center justify-center h-[32rem]">

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
       <div className="pb-10 h-[32rem] relative">
          <div className="p-6">
          <Image
            alt=""
            src="/image/product/emventory.png"
            className="object-contain h-[30px] w-auto my-6"
            height={200}
            width={250}
          />

          <p className="text-md font-semibold mb-4">
            Manage Inventory & Scaleup Sales Rate</p>

          <p className="text-sm font-light">
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
      <div className="flex items-center justify-center h-[32rem]">

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
        <div className="pb-10 h-[32rem] relative">
          <div className="p-6">
          <Image
            alt=""
            src="/image/product/someekoron.png"
            className="object-contain h-[30px] w-auto my-6"
            height={200}
            width={250}
          />

          <p className="text-md font-semibold mb-4">
            Precise Project Accounting & Task</p>

          <p className="text-sm font-light">
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
      <div className="flex items-center justify-center h-[32rem]">

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
         <div className="pb-10 h-[32rem] relative">
          <div className="p-6">
          <Image
            alt=""
            src="/image/product/docappoint.png"
            className="object-contain h-[30px] w-auto my-6"
            height={200}
            width={250}
          />

          <p className="text-md font-semibold mb-4">
            Docotor Appointment Booking & Analytics</p>

          <p className="text-sm font-light">
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
    <div className="relative py-24 product-bg">
      <div className="mb-6 max-w-screen-xl mx-auto">
        <h1 className="text-[60px] font-medium">
          Our <span className="font-tinos-italic">Products</span> For Your<br/>
          Business
        </h1>
        <p className="mb-3 font-regular text-xl  text-gray-500">
          Explore mPair Products to meet the diverse requirements of desired
          industries.
        </p>
      </div>
      <Image
      src="/image/product-rotate.png"
      height={600}
      width={600}
      className="h-[300px] object-contain absolute right-0 top-10"
      />
      <div className="max-w-screen-xl mx-auto mt-10 grid grid-cols-4 border-s gap-0">
  {tabs.map((tab, index) => (
    <div
    key={tab.name}
    ref={(el) => (refs.current[index] = el)}
    data-tab-name={tab.name}
    onMouseEnter={() => setActiveTab(tab.name)}
    onMouseLeave={() => setActiveTab(null)}
    className=" bg-white border-e  h-[32rem]"
     
  >
      {activeTab === tab.name ? (
        <div className="">
          <div className="">
            {tab.value}
          </div>
        </div>
      ) : (
        <div className="">
        {tab.component}
        </div>
      )}
    </div>
  ))}
</div>
    </div>
  );
};

export default Product;
