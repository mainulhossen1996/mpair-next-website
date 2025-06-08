import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-start items-start mx-[110px]  ">
      <div className="py-28 mt-12">
        <p className="text-base font-normal">We are Hiring! &#128640; </p>
        <h1 className="text-4xl font-medium my-4">
          Find the Best <span className="text-blue-600">Job Offer</span> For
          You.
        </h1>

        <Image
          src="/image/career/stroke.png"
          width={150}
          height={80}
          alt="stroke"
          className="absolute -my-8 left-[80px] lg:left-[380px] lg:h-[50px] object-contain filter"
        />

        <p className="text-sm font-light py-4">
          We are looking for passionate people to join us in our mission. <br />{" "}
          See our latest openings and pick what’s best for you.
        </p>
      </div>

      <Image
        src="/image/career/image 28.png"
        width={550}
        height={750}
        alt="hero banner"
        className="absolute my-20 w-[280px] h-[400px] right-[80px] lg:right-[150px] object-contain filter"
      />
    </div>
  );
};

export default Hero;
