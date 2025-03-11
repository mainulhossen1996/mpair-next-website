"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Insight = () => {

  const imageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress calculation for 50% of the element's height
      const elementVisibleHeight = rect.height / 1; // 50% of element's height
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / elementVisibleHeight)
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className='max-w-screen-xl mx-auto py-32'>
        
    <div className='flex gap-20 items-center justify-between'>
    <div className="scroll-container">
      <Image
        src="/image/Local-SEO-Report.png"
        alt=""
        height={600}
        width={800}
        className="seo-report border-8 border-gray-400"
        style={{
          transform: `
            perspective(700px)
            translate3d(0px, 0px, ${-250 + scrollProgress * 250}px)
            rotateX(${35 - scrollProgress * 35}deg)
            scale(${0.9 + scrollProgress * 0.1})
          `,
        }}
        ref={imageRef}
      />
    </div>
   

      <div className='w-1/2'>
      <p className='text-[60px] font-semibold'>Wait a minute. </p>
      <p className='text-3xl text-blue-500 pb-3'>Losing valuable website visitors?</p>
        <p className='text-md font-normal text-gray-200'>Our expert SEO services ensure you capture and convert every opportunity. With innovative tools and strategies, we help you track visitor behavior, re-engage lost prospects, and boost conversions like never before.</p>
        <li
                        className="flex text-md items-start my-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-12 pt-[2px] text-blue-600 mr-2"
                        >
                          <circle cx="11" cy="12" r="10" fill="#0000ff" />
                          <path
                            d="M9.5 13.8l-2.3-2.3-1.4 1.4 3.7 3.7 7.1-7.1-1.4-1.4-5.7 5.7z"
                            fill="white"
                          />
                        </svg>

                       <p className='text-md text-gray-400'><span className='text-white font-semibold'>Persistent User Tracking: </span>
Gain a comprehensive view of your audience across devices and sessions. Understand their journey and preferences to deliver personalized experiences that drive engagement and loyalty.</p>

                      </li>

                      <li
                        className="flex text-md items-start my-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-12 pt-[2px] text-blue-600 mr-2"
                        >
                          <circle cx="11" cy="12" r="10" fill="#0000ff" />
                          <path
                            d="M9.5 13.8l-2.3-2.3-1.4 1.4 3.7 3.7 7.1-7.1-1.4-1.4-5.7 5.7z"
                            fill="white"
                          />
                        </svg>

                       <p className='text-md text-gray-400'><span className='text-white font-semibold'>Smart Conversion Insights: </span>
                       Detect and act on potential conversion signals, even when users don’t immediately take action. Our smart tracking system turns subtle interest into actionable opportunities.
</p>

                      </li>
      </div>

    </div>
    </div>
  )
}
export default Insight;