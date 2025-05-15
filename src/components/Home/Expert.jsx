"use client";
import React, { useState, useRef, useEffect } from "react";
import UIUX from "./ExpertItem/UIUX";
import CloudSoftware from "./ExpertItem/CloudSoftware";
import Robotics from "./ExpertItem/Robotics";
import SEO from "./ExpertItem/SEO";
import MobileApp from "./ExpertItem/MobileApp";
import Image from "next/image";



const tabs = [
  { name: "UI/UX Design", component: <UIUX/> },
  { name: "Cloud Software", component: <CloudSoftware/> },
  { name: "Robotics & Iot", component: <Robotics /> },
  { name: "SEO & Marketing", component: <SEO /> },
];

const Expert = () => {
  
const [activeTab, setActiveTab] = useState(tabs[0].name);
const [mobileComponent, setMobileComponent] = useState(tabs[0].component);
const refs = useRef([]);
const contentWrapperRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tabName = entry.target.getAttribute("data-tab-name");
          setActiveTab(tabName);
        }
      });
    },
    { threshold: 0.5 }
  );

  refs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => {
    if (refs.current) {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    }
  };
}, [refs]);

const handleTabClick = (name, index) => {
  setActiveTab(name);
  setMobileComponent(tabs[index].component);
  if (refs.current[index] && window.innerWidth >= 1024) {
    refs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <div className="my-noise-background">
    <div className="max-w-screen-xl  mx-auto lg:flex">
      <div className=" lg:sticky lg:top-0 lg:w-1/3 font-semibold lg:pb-36 pb-0">


        <div className="sticky top-24 overflow-y-auto">
        <div className="lg:my-10 my-2 relative">


        <h2 className='text-start lg:text-[50px] text-[30px] text-gray-800 font-[400] lg:leading-[80px] leading:[40px] lg:px-0 px-4 lg:mt-24 mt-10 lg:mb-6 mb-2'><span className="font-[200]">Your Business Success Through Our </span>Expertise</h2>
        <p className="lg:text-lg text-sm text-start font-normal lg:px-0 px-4">Utilizing expertise to create innovative solutions and drive business goals.</p>
        
        {/* <Image
        src="/image/connect.png"
        height={400}
        width={400}
        className="h-[300px] object-contain" /> */}
         
        </div>
          {/* <ul className="list-none p-0 hidden lg:block ">
            {tabs.map((tab, index) => (
              <li
                key={tab.name}
                className={`cursor-pointer text-3xl font-normal py-4 px-4 ${activeTab === tab.name ? "text-[#0059ff]" : "text-gray-500"
                  }`}
                onClick={() => handleTabClick(tab.name, index)}
              >
                <span className="lg:flex gap-[22px]">
                  <span>
                    {activeTab === tab.name ? (
                      <svg
                        className="mt-3"
                        width="15"
                        height="19"
                        viewBox="0 0 15 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.375 18.3697V0.630341L14.3047 9.50001L0.375 18.3697Z"
                          fill="#0077ff"
                        />
                      </svg>
                    ) : null}
                  </span>
                  {tab.name}
                </span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>

<div className="lg:hidden block">
{tabs.map((tab, index) => (
            <div>
              {tab.component}
            </div>
          ))}
</div>
      <div
        ref={contentWrapperRef}
        className="lg:w-2/3 pb-24 lg:pt-24 scrollbar-hidden overflow-y-auto"
      >

        <div className="hidden lg:block">
          {tabs.map((tab, index) => (
            <div
            key={tab.name}
            ref={(el) => (refs.current[index] = el)}
            data-tab-name={tab.name}
            className="lg:px-[72px] py-12"
          >
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Expert;
