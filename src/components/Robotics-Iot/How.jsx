"use client";
import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <div  className="py-20"   style={{
        borderImage: 'linear-gradient(to bottom, transparent, #4e8bc4, transparent) 1',
        borderRight: '1px solid transparent',
        borderLeft: '1px solid transparent',
      }}>
        <div className="border-b border-t border-dashed border-gray-800">
        <div className="flex justify-between items-center">
            <div>
            <Image
                className="w-full h-[500px] object-contain"
                src="/image/robo-face.jpg"
                alt="vector"
                width={800}
                height={800}
              />
            </div>
            <div className="w-1/2 pe-6"><p className="text-[40px] font-semibold mb-4">How Robotics & Automation Technologies

Make Life Easier</p>
<p className="text-lg font-light text-gray-400">Robotics and automation simplify tasks, increase efficiency, and improve quality of life. In industries, robots boost productivity by handling repetitive jobs with precision. Healthcare benefits from robotic surgeries and automated systems for better patient care. At home, smart devices manage chores like cleaning, while autonomous vehicles enhance transportation. By saving time and effort, these technologies empower people to focus on creativity and innovation in their daily lives.</p>
</div>
        </div>

        </div>
        </div>
    </div>
  )
}
export default Solution;
