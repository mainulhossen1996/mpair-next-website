import React from 'react'
import Image from "next/image";
import {Button} from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const teamMembers = [
    {
      name: "Syed Mainul Islam",
      role: "Chairman & Co-Fouder",
      imageSrc: "/image/eshan2.png",
    },
    {
      name: "Md. Mainul Hossen",
      role: "Managing Director & Co-Founder",
      imageSrc: "/image/Mainul.jpg",
    },
    {
      name: "Irfath Chowdhury",
      role: "Team Lead & Server Admin",
      imageSrc: "/image/joy.jpg",
    },
    {
      name: "Yeasin Arafat",
      role: "Operational Manager & R&D Engineer",
      imageSrc: "/image/Yeasin.jpg",
    },
    {
      name: "Muntasir Hasan",
      role: "Product Visualizer Jr. Project Manager",
      imageSrc: "/image/muntasir.png",
    },
    {
      name: "Apu Ullah",
      role: "Public Relationship Officer",
      imageSrc: "/image/Apu.jpeg",
    },


      {
        name: "Abdullah Kaisar Sabbir",
        role: "Software Engineer",
        imageSrc: "/image/sabbir.png",
      },
      {
        name: "Mahmuda Sultana",
        role: "Software Engineer",
        imageSrc: "/image/female2.png",
      },
      {
        name: "Kazi Nafis Tasin",
        role: "Digital Marketer",
        imageSrc: "/image/tasin2.jpg",
      },
      {
        name: "Mariya Sultana",
        role: "Software Engineer",
        imageSrc: "/image/female.png",
      },

      {
        name: "Asif Ahmed Sahil",
        role: "Software Engineer",
        imageSrc: "/image/eshan2.png",
      },
      
      
  ];

  const Executive = () => {
    const [isFixedHeadVisible, setIsFixedHeadVisible] = useState(true);
    const scrollMemberRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollableElement = document.querySelector('.scroll-member');
  
        if (scrollableElement) {
          scrollableElement.scrollTop = scrollPosition;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When 40% of the scroll-member is visible, fade out the fixed-head
            if (entry.intersectionRatio >= 0.4) {
              setIsFixedHeadVisible(false);
            } else {
              setIsFixedHeadVisible(true);
            }
          });
        },
        {
          threshold: [0.4], // Trigger when 40% of the element is visible
        }
      );
  
      if (scrollMemberRef.current) {
        observer.observe(scrollMemberRef.current);
      }
  
      return () => {
        if (scrollMemberRef.current) {
          observer.unobserve(scrollMemberRef.current);
        }
      };
    }, []);
  
    return (
      <div className="relative">
        <div
          className="fixed-head sticky top-0 left-0 z-10 w-full h-screen flex items-center justify-center pointer-events-none"
          style={{ opacity: isFixedHeadVisible ? 1 : 0.5, transition: 'opacity 0.2s' }}
        >
          <p className="text-center font-light text-[120px]"><span className='font-crimson-italic'>We Are</span> mPair</p>
        </div>
  
        <div className="scroll-member relative overflow-y-scroll pt-[10vh] scrollbar-hidden" ref={scrollMemberRef}>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-20 my-[50px]">
              {teamMembers.map((member, index) => (
                <div key={index} className="my-4">
                  <div>
                    <Image
                      className="w-full h-[350px] object-cover filter grayscale-[100%] hover:grayscale-0"
                      src={member.imageSrc}
                      alt={member.name}
                      width={500}
                      height={500}
                    />
                    <p className="text-xl font-bold mt-[20px]">{member.name}</p>
                    <p className="text-gray-400 text-[14px]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Executive;