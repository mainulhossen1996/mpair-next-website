import React from "react";
import { Button } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Find = () => {
  return (
    <div className="bg-slate-100 lg:py-32 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex justify-between items-center lg:px-[0px] px-4">
          <div className="address lg:w-1/2 lg:mb-0 mb-6">
            <p className="lg:text-[50px] text-[30px] text-blue-700 lg:my-[25px] my-4 font-bold">
              Find us at.
            </p>
            <p className="lg:text-[18px] sm:text-[14px] text-gray-600">
              Iliyas Mansion,
              <br />
              1309 O.R. Nizam Road,
              <br />
              Chattogram, Bangladesh 🇧🇩
            </p>
            <Button className=" bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 flex gap-2">
              <p className="lg:text-xl text-sm">Talk Now</p>
              <ArrowUpRight className="ml-3" />
            </Button>
          </div>

          <div className="relative">
            <Image
              className="lg:h-[400px] w-full object-contain h-auto"
              src="/image/map.png"
              alt="map"
              width={500}
              height={500}
            />

            <div className="blinking-dot absolute">
            <div class='pin'></div>
            <div class='pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
