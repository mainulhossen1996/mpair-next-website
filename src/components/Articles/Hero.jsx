"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import Link from "next/link";

const Hero = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "blog");

    onValue(blogRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const blogArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        console.log(blogArray);

        const archived = blogArray?.toReversed();
        // console.log("archived",archived[0]);


        setBlogs(archived[0]);
      } else {
        setBlogs([]);
      }
    });
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto flex justify-between items-center" >
      <div className="pt-32 pb-20 relative bg-white py-20 text-center">
        <div className=" mt-[-20px]">
          <p className="text-[80px] font-regular text-center">
            Tech Unleashed:
          </p>
          <p className="text-[60px] font-regular text-center">
            Your Gateway to{" "}
            <span className="font-crimson-italic text-blue-600 text-[80px]">
              {" "}
              Innovation & Trends
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
