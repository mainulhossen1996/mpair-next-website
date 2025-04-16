import React from "react";
import Image from "next/image";
import TextBox from "./Textbox";

const Hero = () => {
  return (
    <div className="pt-32 pb-20">
      <div>
        <div className="max-w-screen-xl mx-auto flex justify-between lg:px-32 px-10">
          <Image
            src="/image/blog/image 19.svg"
            width={120}
            height={120}
            className="lg:ml-400px lg:h-[60px] h-[40px] object-contain filter"
          />
          <Image
            src="/image/blog/image17.svg"
            width={60}
            height={60}
            className="lg:ml-900px lg:h-[50px] h-[25px] object-contain filter"
          />
        </div>

        <div className="max-w-screen-xl mx-auto mt-[-20px]">
          <p className="text-[80px] font-regular text-center">
            Tech Unleashed:
          </p>
          <p className="text-[64px] font-regular text-center">
            Your Gateway to{" "}
            <span className="font-crimson-italic text-[80px]">
              {" "}
              Innovation & Trends{" "}
            </span>
          </p>
        </div>
        <Image
          src="/image/blog/image15.svg"
          width={120}
          height={120}
          className="lg:ml-40 lg:h-[60px] h-[40px] object-contain filter"
        />
        <div className="flex justify-end w-full lg:mr-80 px-4">
          <Image
            src="/image/blog/curveicon9.svg"
            width={100}
            height={100}
            className="lg:ml lg:h-[60px] h-[25px] object-contain filter mr-20 mt-[-70px]"
          />
        </div>
      </div>

      <div className="flex justify-center flex-row mx-40 pt-10">
        <div className="max-w-screen-xl ">
          <Image
            src="/image/blog/featured blog.png"
            width={510}
            height={100}
            className="lg:ml-400px object-contain filter h-[300px]"
          />
          <Image
            src="/image/blog/See more.png"
            width={120}
            height={120}
            className="lg:ml-400px lg:h-[80px] h-[40px] object-contain filter ml-[380px] mt-[-82px]"
          />
        </div>

        <div className="flex flex-col ">
          <div className=" flex flex-row space-x-2 items-center py-3">
            <TextBox text="This Week" />
            <TextBox text="Software" />
          </div>
          <p className="text-[18px] font-regular ">
            The Evolution of Software:{" "}
          </p>
          <p className="font-regular text-[18px]">
            {" "}
            From Traditional Development to AI-Powered Innovation
          </p>
          <p className="pt-1 text-[14px] text-black font-light">
            Software development has come a long way, evolving from manual
            coding <br />
            to AI-assisted automation. Early programming required <br />{" "}
            extensive knowledge{" "}
          </p>
          <p className="pt-2 text-[14px] font-extralight ">
            13 March, 2025; 04:30pm
          </p>
        </div>
      </div>
      </div>

  );
};
export default Hero;
