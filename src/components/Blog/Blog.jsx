"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import TextBox from "./Textbox";
import { Geist } from "next/font/google"; 

const Blog = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const tabContent = {
    
    ALL: (
      <div>
        <div className="grid grid-cols-4 gap-2">
          
          <div className="pt-5 pb-10">
            <div className="flex justify-center flex-col mx-4">
              <div className="max-w-screen-xl ">
                <div className="relative w-[270px] h-[220px]">
                  <Image
                    src="/image/blog/bloglist1.png"
                    alt=""
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="relative w-[70px] h-[70px]">
                <Image
                  src="/image/blog/See more.png"
                  fill
                  className=" ml-[210px] mt-[-65px]"
                />
                </div>
              </div>

              <div className="flex flex-col mt-[-50px]">
                <div className=" flex flex-row space-x-2 items-center">
                  <TextBox text="AI" />
                  <TextBox text="Robotics" />
                </div>
                <p className="text-[18px] font-regular pt-2">
                  How Robotics is Enhancing Everyday Life
                </p>
                <p className="text-sm font-light pt-2">
                  Web design is evolving rapidly, integrating immersive user
                  experiences ...
                </p>
                <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
              </div>
            </div>
          </div>

          <div className="pt-5 pb-10">
            <div className="flex justify-center flex-col mx-4">
              <div className="max-w-screen-xl ">
                <div className="relative w-[270px] h-[220px]">
                  <Image
                    src="/image/blog/bloglist2.png"
                    alt=""
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="relative w-[70px] h-[70px]">
                <Image
                  src="/image/blog/See more.png"
                  fill
                  className=" ml-[210px] mt-[-60px]"
                />
                </div>
              </div>

              <div className="flex flex-col mt-[-50px]">
                <div className=" flex flex-row space-x-2 items-center">
                  <TextBox text="WEB" />
                  <TextBox text="Robotics" />
                </div>
                <p className="text-[18px] font-regular pt-2">
                How Robotics is Reshaping the Future
                </p>
                <p className="text-sm font-light pt-2">
                  Web design is evolving rapidly, integrating immersive user
                  experiences ...
                </p>
                <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
              </div>
            </div>
          </div>

          <div className="pt-5 pb-10">
            <div className="flex justify-center flex-col mx-4">
              <div className="max-w-screen-xl ">
                <div className="relative w-[270px] h-[220px]">
                  <Image
                    src="/image/blog/bloglist3.png"
                    alt=""
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="relative w-[70px] h-[70px]">
                <Image
                  src="/image/blog/See more.png"
                  fill
                  className=" ml-[210px] mt-[-65px]"
                />
                </div>
              </div>

              <div className="flex flex-col mt-[-50px]">
                <div className=" flex flex-row space-x-2 items-center">
                  <TextBox text="Software" />
                  <TextBox text="WEB" />
                </div>
                <p className="text-[18px] font-regular pt-2">
                The Future of Software Development
                </p>
                <p className="text-sm font-light pt-2">
                  Web design is evolving rapidly, integrating immersive user
                  experiences ...
                </p>
                <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
              </div>
            </div>
          </div>

          <div className="pt-5 pb-10">
            <div className="flex justify-center flex-col mx-4">
              <div className="max-w-screen-xl ">
                <div className="relative w-[270px] h-[220px]">
                  <Image
                    src="/image/blog/bloglist1.png"
                    alt=""
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="relative w-[70px] h-[70px]">
                <Image
                  src="/image/blog/See more.png"
                  fill
                  className=" ml-[210px] mt-[-65px]"
                />
                </div>
              </div>

              <div className="flex flex-col mt-[-50px]">
                <div className=" flex flex-row space-x-2 items-center">
                  <TextBox text="AI" />
                  <TextBox text="Robotics" />
                </div>
                <p className="text-[18px] font-regular pt-2">
                  How Robotics is Enhancing Everyday Life
                </p>
                <p className="text-sm font-light pt-2">
                  Web design is evolving rapidly, integrating immersive user
                  experiences ...
                </p>
                <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    ),

    AI: (
      <div>
      <div className="grid grid-cols-4 gap-2">
        
        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist1.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-65px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="AI" />
                <TextBox text="Robotics" />
              </div>
              <p className="text-[18px] font-regular pt-2">
                How Robotics is Enhancing Everyday Life
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist2.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-60px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="WEB" />
                <TextBox text="Robotics" />
              </div>
              <p className="text-[18px] font-regular pt-2">
              How Robotics is Reshaping the Future
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist3.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-65px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="Software" />
                <TextBox text="WEB" />
              </div>
              <p className="text-[18px] font-regular pt-2">
              The Future of Software Development
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    ),

    Robotics: (
      <div>
      <div className="grid grid-cols-4 gap-2">
        
        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist1.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-65px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="AI" />
                <TextBox text="Robotics" />
              </div>
              <p className="text-[18px] font-regular pt-2">
                How Robotics is Enhancing Everyday Life
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist3.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-65px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="Software" />
                <TextBox text="WEB" />
              </div>
              <p className="text-[18px] font-regular pt-2">
              The Future of Software Development
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    ),

    Software: (
      <div>
      <div className="grid grid-cols-4 gap-2">
        
        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist2.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-60px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="WEB" />
                <TextBox text="Robotics" />
              </div>
              <p className="text-[18px] font-regular pt-2">
              How Robotics is Reshaping the Future
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist3.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-65px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="Software" />
                <TextBox text="WEB" />
              </div>
              <p className="text-[18px] font-regular pt-2">
              The Future of Software Development
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

       

      </div>
    </div>
    ),

    WEB: (
      <div>
      <div className="grid grid-cols-4 gap-2">
        
        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist1.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-65px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="AI" />
                <TextBox text="Robotics" />
              </div>
              <p className="text-[18px] font-regular pt-2">
                How Robotics is Enhancing Everyday Life
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>


        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist3.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-65px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="Software" />
                <TextBox text="WEB" />
              </div>
              <p className="text-[18px] font-regular pt-2">
              The Future of Software Development
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-10">
          <div className="flex justify-center flex-col mx-4">
            <div className="max-w-screen-xl ">
              <div className="relative w-[270px] h-[220px]">
                <Image
                  src="/image/blog/bloglist1.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative w-[70px] h-[70px]">
              <Image
                src="/image/blog/See more.png"
                fill
                className=" ml-[210px] mt-[-65px]"
              />
              </div>
            </div>

            <div className="flex flex-col mt-[-50px]">
              <div className=" flex flex-row space-x-2 items-center">
                <TextBox text="AI" />
                <TextBox text="Robotics" />
              </div>
              <p className="text-[18px] font-regular pt-2">
                How Robotics is Enhancing Everyday Life
              </p>
              <p className="text-sm font-light pt-2">
                Web design is evolving rapidly, integrating immersive user
                experiences ...
              </p>
              <p className="text-[12px] font-extralight pt-2">13 March, 2025; 04:30pm</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    ),

   
  };

  return (
    <div className="pb-20">
      <div className="max-w-screen flex justify-center items-center pt-20 pb-10">
        <p className=" font-medium text-2xl ">Recommended for you</p>
      </div>
      
      <div class="flex rounded-full border-2 border-blue-300 overflow-hidden max-w-md mx-auto  mb-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="24px" className="fill-gray-500 ml-10">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        <input type="email" placeholder="Search Something..."
          class="w-full outline-none bg-white text-sm px-5 py-3" />
        <button type='button' class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-6 text-sm font-regular text-gray-200">
          Search
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center  mb-5">

          <button className={`py-1 px-5 mx-2 text-lg font-normal ${
              activeTab === "ALL"
                ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-lg"
                : " text-gray-800"
            }`} onClick={() => setActiveTab("ALL")}> ALL
          </button>

          <button className={`py-1 px-5 mx-2 text-lg font-normal ${
              activeTab === "Robotics"
                ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-lg"
                : "text-gray-600"
            }`} onClick={() => setActiveTab("Robotics")}>
            Robotics
          </button>

          <button className={`py-1 px-5 mx-2 text-lg font-normal ${
              activeTab === "AI"
                ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-lg"
                : "text-gray-600"
            }`} onClick={() => setActiveTab("AI")}> AI
          </button>
          
          <button className={`py-1 px-5 mx-2 text-lg font-normal ${
              activeTab === "Software"
                ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-lg"
                : "text-gray-600"
            }`} onClick={() => setActiveTab("Software")}>  Software
          </button>

          <button className={`py-1 px-5 mx-2 text-lg font-normal ${
              activeTab === "WEB"
                ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-lg"
                : "text-gray-600"
            }`} onClick={() => setActiveTab("WEB")}>  WEB
          </button>

         
        </div>
        <div className="p-2">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};
export default Blog;
