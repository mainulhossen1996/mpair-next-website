import React from "react";
import Image from "next/image";
import p1 from '../../../public/image/career/stroke.png'
import p2 from '../../../public/image/career/Careerbanner.png'

const Hero = () => {
  return (
  <section className="w-full bg-gray-300">
    <div className=" flex flex-col justify-start items-start max-w-screen-xl mx-auto  ">
      <div className="py-28 mt-12">
        <p className="text-base font-normal ">We are Hiring! &#128640; </p>
        <h1 className="text-4xl font-medium my-4 ">
          Find the Best <span className="text-blue-600">Job Offer</span> For
          You.
        </h1>

        <Image
          src={p1}
          width={150}
          height={80}
          alt="stroke"
          className="absolute -my-8 left-[450px] md:h-[50px] object-contain filter"
        />

        <p className="text-sm font-light py-4">
          We are looking for passionate people to join us in our mission. <br />
          See our latest openings and pick what’s best for you.
        </p>
      </div>

      <Image
        src={p2}
        width={550}
        height={750}
        alt="hero banner"
        className="absolute my-20 w-[280px] h-[400px] right-[80px] lg:right-[150px] object-contain filter"
      />
    </div>
    </section>
  );
};

export default Hero;
