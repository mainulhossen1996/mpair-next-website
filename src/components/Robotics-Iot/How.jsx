"use client";
import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-20'>
        <div  className="py-20">
        <div className="">
        <div className="flex items-center">
            
            <div className="w-1/2 pe-6"><p className="text-[60px] font-regular mb-4">How Robotics & Automation

Make Life Easier</p>
<p className="text-lg font-light text-gray-600">Robotics and automation simplify tasks, increase efficiency, and improve quality of life. In industries, robots boost productivity by handling repetitive jobs with precision. Healthcare benefits from robotic surgeries and automated systems for better patient care. At home, smart devices manage chores like cleaning, while autonomous vehicles enhance transportation. By saving time and effort, these technologies empower people to focus on creativity and innovation in their daily lives.</p>
</div>
<div className="flex relative w-1/2">
  <div className="flex flex-col justify-center h-[500px] overflow-hidden rounded-[30px]">
<video
        className="h-[700px] mt-4 mb-2"
        src="/image/robotics.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      </div>
      <div className="robotics-card h-[100px] w-[300px] absolute bottom-24 right-24 flex items-center gap-4 px-4">
        <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
        <Image
                className="w-[100px] object-cover rounded-full"
                src="/image/bot.webp"
                alt="vector"
                width={200}
                height={200}
              />

              
        </div>
        <p className="text-xl font-semibold">Ideate The Future</p>
      </div>
      </div>
        </div>

        </div>
        </div>
    </div>
  )
}
export default Solution;
