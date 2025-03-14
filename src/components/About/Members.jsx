import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const Members = () => {

    const images = [
        "/image/members/arfin.jpg", "/image/members/asif.jpg", "/image/members/hasib.jpg", "/image/members/emon.jpg", 
        "/image/members/fakwer.jpg", "/image/members/toufiq.jpg", "/image/members/shihab.jpg", 
        "/image/members/salman.jpg",
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [currentIndex2, setCurrentIndex2] = useState(0);

      const car_images = [
        '/image/office/image8.jpg',
        '/image/office/image1.jpg',
        '/image/office/image3.jpg',
      ];

      const car2_images = [
        '/image/office/image8.jpg',
        '/image/office/image1.jpg',
        '/image/office/image5.jpg',
        '/image/office/image4.png',
        '/image/office/image9.jpg',
      ];
    
      // Next image on interval
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % car_images.length);
        }, 3000); 
        return () => clearInterval(interval); 
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex2((prevIndex) => (prevIndex + 1) % car2_images.length);
        }, 3000); 
        return () => clearInterval(interval); 
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
        <p className="text-center font-light text-[80px] pt-20 text-white">Your Business Powered By US</p>

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


<div className='max-w-screen-xl mx-auto flex justify-between items-end mt-12 mb-10'>
<p className='text-gray-500 font-light text-3xl w-9/12 leading-[50px]'>Team collaboration is pivotal for project success. It enables diverse perspectives, maximizes collective strengths, and fosters innovative problem-solving.</p>
<motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }} // Adjust duration as needed
    >
      <Image
        src="/image/hero-abstract-2.avif"
        height={400}
        width={400}
        alt=""
        className="h-[200px] w-[200px] object-contain grayscale"
      />
    </motion.div>

</div>
    <div className='max-w-screen-xl mx-auto flex items-end gap-8  relative'>

      


    <div className="carusel w-4/12">
      <motion.div
        key={currentIndex2}
        initial={{ filter: 'blur(6px)' }}  
        animate={{ filter: 'blur(0)' }}      
        exit={{ filter: 'blur(0px)' }}      
        transition={{
          duration: 1,                      
          ease: 'easeInOut',                
        }}
        className="relative"
      >
        <Image
          src={car2_images[currentIndex2]}
          alt="Office Image"
          height={700}
          width={700}
          className="h-[292px] w-full object-cover grayscale"
        />
      </motion.div>
    </div>

        <div className='w-8/12'>
           <div className='flex gap-0'>
            <div className="flex flex-col gap-24  ps-4 pb-10 mb-4 w-4/12"
            style={{
              borderImage: 'linear-gradient(to bottom, #363636, #363636, transparent) 1',
              borderLeft: '1px dashed transparent',
            }}
            >
        <p className="font-normal text-4xl text-gray-100 font-crimson-italic">Years of<br/>Experience</p>
        <p className="text-slate-400 font-medium text-[70px] leading-[60px]">
            04
        </p>
    </div>

    <div className="flex flex-col gap-24 ps-4 pb-10 w-4/12"
    style={{
      borderImage: 'linear-gradient(to bottom, #363636, #363636, transparent) 1',
      borderLeft: '1px dashed transparent',
    }}
    >

        <p className="font-normal text-4xl text-gray-100 font-crimson-italic">Brand<br/>Collaboration</p>
        <p className="text-slate-400 font-medium text-[70px] leading-[60px]">
            35
        </p>
    </div>

    <div className="flex flex-col gap-24 ps-4 pb-10 w-4/12"
    style={{
      borderImage: 'linear-gradient(to bottom, #363636, #363636, transparent) 1',
      borderLeft: '1px dashed transparent',

    }}
    >

        <p className="font-normal text-4xl text-gray-100 font-crimson-italic">Countries<br/>Served</p>
        <p className="text-slate-400 font-medium text-[70px] leading-[60px]">
            05
        </p>
    </div>
            </div>
       
        </div>
        {/* <div
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
      </div> */}


    </div>
    </div>
  )
}
export default Members;
