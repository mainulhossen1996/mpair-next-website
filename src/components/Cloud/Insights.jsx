"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const achievements = [
  { id: 1, text: "2 ERP Developed" },
  { id: 2, text: "2 SaaS Developed" },
  { id: 3, text: "6 Ecommerce Developed" },
  { id: 4, text: "15+ Websites Designed" },
];

const slides = [
  { image: "/image/Tech/js.png" },
  { image: "/image/Tech/react.png" },
  { image: "/image/Tech/next.png" },
  { image: "/image/Tech/vue.png" },
  { image: "/image/Tech/ts.png" },
  { image: "/image/Tech/flutter.png" },
  { image: "/image/Tech/kotlin.png" },
];

const slidesrev = [
  { image: "/image/Tech/node.png" },
  { image: "/image/Tech/php.png" },
  { image: "/image/Tech/go.png" },
  { image: "/image/Tech/mysql.png" },
  { image: "/image/Tech/mongo.png" },
  { image: "/image/Tech/firebase.png" },
  { image: "/image/Tech/post.png" },

];

const Insights = () => {
  const duplicatedSlides = [...slides, ...slides];
  const duplicatedSlidesrev = [...slidesrev, ...slidesrev];

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="pt-10 pb-36 relative">
        <div>
          <p className="font-semibold text-[50px] text-center mt-10">
            We Build like the best
          </p>
          <div className="flex gap-6 py-12">
            <div className="w-6/12 ">
              <div className="h-[450px] flex items-center card-back-bg border border-gray-800 rounded-xl">
                <div className="items-center">
                  <div className=" py-10 px-6">
                    <p className="text-[30px] text-white">
                      Technology We Offer
                    </p>
                    <p className="text-md font-thin text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor possimus doloribus accusamus error.
                </p>
                  </div>

                  <div>
                    <div className="relative overflow-hidden py-6">
                      {/* Wrapping div for seamless looping */}
                      <motion.div
                        className="flex"
                        animate={{
                          x: ["0%", "-100%"],
                          transition: {
                            ease: "linear",
                            duration: 20,
                            repeat: Infinity,
                          },
                        }}
                      >
                        {/* Render duplicated slides */}
                        {duplicatedSlides.map((slide, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0"
                            style={{ width: `${100 / slides.length}%` }}
                          >
                            <div className="flex pe-6 flex-col items-center justify-center h-full text-6xl grayscale hover:grayscale-0">
                              <img
                                src={slide.image}
                                height={300}
                                width={300}
                                className="h-[50px] object-contain filter"
                                alt={`Slide ${index + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </motion.div>

                      {/* <div className="scroll-fade scroll-fade-right2"></div> */}
                    </div>

                    <div className="relative overflow-hidden py-6">
                      {/* Wrapping div for seamless looping */}
                      <motion.div
                        className="flex"
                        animate={{
                          x: ["-100%", "0%"],
                          transition: {
                            ease: "linear",
                            duration: 20,
                            repeat: Infinity,
                          },
                        }}
                      >
                        {/* Render duplicated slides */}
                        {duplicatedSlidesrev.map((slide, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0"
                            style={{ width: `${100 / slides.length}%` }}
                          >
                            <div className="flex pe-6 flex-col items-center justify-center h-full text-6xl grayscale hover:grayscale-0">
                              <img
                                src={slide.image}
                                height={300}
                                width={300}
                                className="h-[60px] object-contain filter"
                                alt={`Slide ${index + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </motion.div>

                      {/* <div className="scroll-fade scroll-fade-right2"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-3/12">
              <div className="bg-white border border-gray-800 rounded-xl pt-10 h-[280px]">
                <Image
                  src="/image/cellfin.png"
                  height={300}
                  width={300}
                  alt=""
                  className="h-[90px] w-[180px] object-contain px-6"
                />
                <p className="px-6 pb-10 text-lg text-gray-800">
                  Fintech collaboration with largest private bank of bangladesh,
                  Islami Bank Bangladesh PLC.
                </p>
              </div>
              <div className="card-back-bg hover:bg-gray-700 p-6 rounded-xl h-[155px]">
                <p className="text-[20px] my-2">ERP Development</p>
                <p className="text-sm font-thin text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor possimus doloribus accusamus error.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-3/12">
              <div className="border border-gray-800 rounded-xl card-back-bg hover:bg-gray-700 h-[450px] pt-10">
                <Image
                  src="/image/web-browser.png"
                  height={300}
                  width={300}
                  alt=""
                  className="w-[180px] object-contain px-6 justify-start"
                />
                <p className="text-[15px] font-thin text-gray-300 px-6 py-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor possimus doloribus accusamus error.
                </p>

                <div className="py-2 px-6">
                  <ul className="space-y-2">
                    {achievements.map((achievement) => (
                      <li
                        key={achievement.id}
                        className="flex items-center text-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-blue-600 mr-2"
                        >
                          <circle cx="11" cy="12" r="10" fill="#22c55e" />
                          <path
                            d="M9.5 13.8l-2.3-2.3-1.4 1.4 3.7 3.7 7.1-7.1-1.4-1.4-5.7 5.7z"
                            fill="white"
                          />
                        </svg>

                        {achievement.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Insights;
