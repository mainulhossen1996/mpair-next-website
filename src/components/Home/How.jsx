"use client"
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const How = () => {
  const { scrollYProgress } = useScroll();

  const startOffset1 = "60%";
  const endOffset1 = "-20%";

  const startOffset2 = "-60%";
  const endOffset2 = "20%";

  const x1 = useTransform(
    scrollYProgress,
    [1, 0],
    [endOffset1, startOffset1]
  );
  const x2 = useTransform(
    scrollYProgress,
    [1, 0],
    [endOffset2, startOffset2]
  );

  return (
    <div className="bg-black">
    <div className="relative overflow-hidden">
      <video
        className="absolute right-24 top-0 m-auto h-[500px] object-cover"
        src="/image/motion/ring.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="max-w-screen-xl mx-auto py-36">
        <motion.div
          style={{ x: x1 }}
          className="w-full flex justify-center" // Center the content
        >
          <h1 className="text-[70px] text-slate-300 font-medium text-start">
            HOW WE AUTOMATE
          </h1>
        </motion.div>

        <div className="grid grid-cols-5 gap-4">
          <div className="w-full process-bg-l h-[370px] px-6">
            <p className="text-[80px] text-end text-slate-800 font-regular">
              01
            </p>

            <Image
            alt=""
              src="/image/how/bipolar.png"
              className="object-contain mt-12 mb-4 grayscale grayscale-100"
              height={40}
              width={40}
            />
            <p className="text-2xl font-semibold text-gray-200">Empathize</p>
            <p className="text-md mt-2 text-gray-400">
              Define the challange & explore the human context
            </p>
          </div>

          <div className="w-full process-bg-l h-[370px] px-6">
            <p className="text-[80px] text-end text-slate-800 font-regular">
              02
            </p>

            <Image
            alt=""
              src="/image/how/aim.png"
              className="object-contain mt-12 mb-4 grayscale grayscale-100"
              height={40}
              width={40}
            />
            <p className="text-2xl font-semibold text-gray-200">Define</p>
            <p className="text-md mt-2 text-gray-400">
              Research, observe, understand & create a point of view
            </p>
          </div>

          <div className="w-full process-bg h-[370px] px-6">
            <p className="text-[80px] text-end text-slate-800 font-regular">
              03
            </p>

            <Image
            alt=""
              src="/image/how/idea.png"
              className="object-contain mt-12 mb-4 grayscale grayscale-100"
              height={40}
              width={40}
            />
            <p className="text-2xl font-semibold text-gray-200">Ideate</p>
            <p className="text-md mt-2 text-gray-400">
              Brainstorm ideas good or bad, dont stop at the obvious
            </p>
          </div>

          <div className="w-full process-bg-r  h-[370px] px-6">
            <p className="text-[80px] text-end text-slate-800 font-regular">
              04
            </p>

            <Image
            alt=""
              src="/image/how/3d.png"
              className="object-contain mt-12 mb-4 grayscale grayscale-100"
              height={40}
              width={40}
            />
            <p className="text-2xl font-semibold text-gray-200">Prototype</p>
            <p className="text-md mt-2 text-gray-400">
              Start creating, experiment, fall cheap, & fast
            </p>
          </div>

          <div className="w-full process-bg-r h-[370px] px-6">
            <p className="text-[80px] text-end text-slate-800 font-regular">
              05
            </p>

            <Image
            alt=""
              src="/image/how/launch.png"
              className="object-contain mt-12 mb-4 grayscale grayscale-100"
              height={40}
              width={40}
            />
            <p className="text-2xl font-semibold text-gray-200">Launch</p>
            <p className="text-md mt-2 text-gray-400">
              Implement the product, show & start to refine the product
            </p>
          </div>
        </div>
        <div className="">
          <motion.div
            style={{ x: x2 }}
            className="flex justify-center" // Center the content
          >
            <h1 className="text-[70px] text-slate-300 font-medium text-start">
              YOUR BUSINESS GROWTH
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default How;