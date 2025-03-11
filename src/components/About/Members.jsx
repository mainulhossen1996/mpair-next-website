import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const Members = () => {

    const images = [
        "/image/Tasin.png", "/image/Tasin.png", "/image/Tasin.png", 
        "/image/Tasin.png", "/image/Tasin.png", "/image/Tasin.png", 
        "/image/Tasin.png",
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const car_images = [
        '/image/office/image1.jpg',
        '/image/office/image2.jpg',
        '/image/office/image3.jpg',
      ];
    
      // Next image on interval
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % car_images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
      }, []);


      const [isInView, setIsInView] = useState(false);
      const imageRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsInView(true);
              } else {
                setIsInView(false);
              }
            });
          },
          { threshold: 1 } // Trigger when 50% of the image is in the viewport
        );
    
        if (imageRef.current) {
          observer.observe(imageRef.current);
        }
    
        return () => {
          if (imageRef.current) {
            observer.unobserve(imageRef.current);
          }
        };
      }, []);



  return (
    <div className='bg-dark pb-24'>
    <div className='max-w-screen-xl mx-auto '
    
      >
        <div >
        <p className="text-center font-thin text-[80px] pt-20 text-white">Your Business Powered By US</p>

          <div className="flex -space-x-6 transition-all duration-300 mt-4 justify-center">
        {images.map((img, index) => (
          <div key={index} className="relative w-20 h-20">
            <Image 
              src={img} 
              alt={`Person ${index + 1}`} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-full border-4 border-black bg-white"
            />
          </div>
        ))}
        </div>
        <p className='text-center py-4 text-xl text-white'
       >Where 20+ With US </p>
      </div>
    </div>

    <div className='max-w-screen-lg mx-auto flex justify-between mt-10'>

    <div className="carusel mt-36 w-3/12 overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ filter: 'blur(6px)' }}  
        animate={{ filter: 'blur(0)' }}      
        exit={{ filter: 'blur(0px)' }}      
        transition={{
          duration: 1,                      
          ease: 'easeInOut',                
        }}
        className="relative h-[300px]"
      >
        <Image
          src={car_images[currentIndex]}
          alt="Office Image"
          height={500}
          width={500}
          className="h-[300px] w-full object-cover about-image-left"
        />
      </motion.div>
    </div>

        <div className='mt-24 w-4/12'>
            <p className='text-gray-300 mb-6'>Team collaboration is pivotal for project success. It enables diverse perspectives, maximizes collective strengths, and fosters innovative problem-solving.</p>
        <div className="flex gap-4 border-b border-gray-700 pe-4 pb-3 items-end mb-4">
        <p className="text-black outline-text font-semibold text-[70px] leading-[60px]">
            04
        </p>
        <p className="font-normal text-2xl text-gray-400">Years Experience</p>
    </div>

    <div className="flex gap-4 border-b border-gray-700 pe-4 pb-3 items-end">
        <p className="text-black outline-text font-semibold text-[70px] leading-[60px]">
            35
        </p>
        <p className="font-normal text-2xl  text-gray-400">Brand Collaboration</p>
    </div>
        </div>
        <div
        ref={imageRef}
        className={`h-[450px] object-contain about-image-left transition-all duration-1000 ${
          isInView ? 'blur-0' : 'blur-sm'
        }`}
      >
        <Image
          src="/image/office/image4.jpg"
          alt="Office Image"
          height={500}
          width={500}
          className="h-[450px] w-full object-contain"
        />
      </div>
    </div>
    </div>
  )
}
export default Members;
