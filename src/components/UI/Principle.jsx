"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const principles = [
  {
    id: 1,
    title: "Information Architecture",
    description:
    "We carefully plan how your content is structured, grouped, and labeled so users can quickly find what they need without confusion.",
    image: "/image/UI-Principle/Information.png",
  },
  {
    id: 2,
    title: "Consistent Visual Hierarchy",
    description:
    "By strategically using size, color, and spacing, we highlight what matters most so visitors can easily navigate and engage with your content.",
    image: "/image/UI-Principle/Information.png",
  },
  {
    id: 3,
    title: "User-Centered Design",
    description:
    "By understanding user needs, behaviors, and preferences, we create designs that are simple, and easy to use.",
    image: "/image/UI-Principle/Information.png",
  },
  {
    id: 4,
    title: "Responsive and Adaptive Layouts",
    description:
    "Whether it’s a phone, tablet, or desktop, our designs automatically adjust or switch to the perfect layout for a smooth user experience.",
    image: "/image/UI-Principle/Information.png",
  },
];

const Principle = () => {
  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (horizontalSectionRef.current) {
      const containerWidth = horizontalSectionRef.current.scrollWidth;
      const viewportHeight = window.innerHeight;
      setSectionHeight(containerWidth - viewportHeight + viewportHeight);
    }
  }, [principles]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const horizontalSection = horizontalSectionRef.current;

      if (!container || !horizontalSection) return;

      const scrollY = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = sectionHeight;

      if (scrollY >= containerTop && scrollY <= containerTop + containerHeight) {
        const progress = (scrollY - containerTop) / (containerHeight - window.innerHeight);
        horizontalSection.scrollLeft = progress * (horizontalSection.scrollWidth - horizontalSection.offsetWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionHeight]);

  return (
    <div className="bg-[#101012]">
    
      <div className="relative py-20 lg:block hidden"  ref={containerRef}
        style={{ height: `${sectionHeight}px` }}>
        <div className="sticky top-16 border-gray-800">
        <div
  className="max-w-screen-xl mx-auto items-center flex justify-between py-10 relative">
            <p className="text-[60px] font-medium text-gray-400">
              Our <span className="font-crimson-italic">Principle</span> of <br />
              <span className="text-[80px] text-white">Product Design</span>
            </p>

            {/* <p className="text-[340px] outline-text4 font-semibold text-[#101012] m-0 leading-3 absolute -z-10 right-0 top-[180px]">
              UI/UX
            </p> */}

            <Image
       src="/image/spring-tube.png"
       height={400}
       width={400}
       className="h-[300px] absolute -left-20 -bottom-[450px] -z-10 object-contain"
       />

            

          </div>
          <div 
            ref={horizontalSectionRef}
            className="flex pb-10 gap-20 overflow-x-scroll scrollbar-hide px-[400px]"
          >
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="principle-item w-[500px] flex-shrink-0 bg-[#000000] px-6 pb-12"
                
              >
                <p className=" text-gray-800 font-thin text-[100px]">
                  {principle.id.toString().padStart(2, "0")}
                </p>
                <p className="text-[24px] font-semibold text-gray-200 mb-4">
                  {principle.title}
                </p>
                <p className="text-lg font-thin text-gray-400">
                  {principle.description}
                </p>
                {/* <Image
                  src={principle.image}
                  height={500}
                  width={500}
                  alt={principle.title}
                  className="h-[300px] w-[360px] object-cover mt-4"
                /> */}
              </div>
            ))}
          </div>
        </div>
        
      </div>


      <div className="px-4 py-10 block lg:hidden"
       >
        <div className="relative">
        <div
  className="sticky top-0 max-w-screen-xl mx-auto items-center flex justify-between py-10 bg-[#101012]">
            <p className="lg:text-[60px] text-[40px] font-medium text-gray-400">
              Our <span className="font-crimson-italic">Principle</span> of <br />
              <span className="lg:text-[80px] text-[40px] text-white">Product Design</span>
            </p>

            

            <Image
       src="/image/tube.png"
       height={400}
       width={400}
       className="h-[100px] absolute -right-32 -top-[30px] -z-10 object-contain"
       />

            

          </div>
          <div 
            className="flex flex-col pb-10 gap-10"
          >
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="principle-item flex-shrink-0 bg-[#000000] px-6 pb-12"
                
              >
                <p className=" text-gray-800 font-thin lg:text-[100px] text-[70px]">
                  {principle.id.toString().padStart(2, "0")}
                </p>
                <p className="lg:text-[24px] text-[18px] font-semibold text-gray-200 mb-4">
                  {principle.title}
                </p>
                <p className="lg:text-lg text-sm font-light text-gray-400">
                  {principle.description}
                </p>

              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Principle;
