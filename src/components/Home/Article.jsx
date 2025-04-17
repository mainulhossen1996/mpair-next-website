"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import Link from "next/link";

const Article = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        setBlogs(blogArray);
      } else {
        setBlogs([]);
      }
    });
  }, []);

  const cardsData = [
    {
      key: 1,
      image: "/image/uiux.jpg",
      title: "Why skipping UI/UX design could cost you more than you think",
      time: "14 Mar, 2025",
      label: "UI/UX",
    },
    {
      key: 2,
      image: "/image/release/test.jpg",
      title: "Strong Global Partnerships",
      time: "28 Nov, 2024",
      label: "Security",
    },
    {
      key: 3,
      image: "/image/release/test.jpg",
      title: "Unmatched Expertise in Medical Tourism",
      time: "28 Nov, 2024",
      label: "Node.js",
    },
  ];

  return (
    <div className="bg-article pt-10 lg:pb-24 pb-10">
      <div className="max-w-screen-xl mx-auto lg:pt-10 rounded-t-[80px] lg:border-t lg:border-gray-700">
        <p className="lg:text-[50px] text-[25px] lg:font-medium font-normal text-center text-white">
          Article For Your Business
        </p>
        <p className="text-gray-400 lg:text-xl text-sm font-light text-center mb-3 lg:px-36 px-4">
          Boost your business growth with insightful articles that engage your
          audience, enhance brand visibility, and drive meaningful connections.
        </p>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mt-10 lg:px-10 px-0">
          {blogs?.map((blog, index) => (
            <Card
              key={blog.id}
              className={`relative ${
                index === 0
                  ? hoveredIndex === null || hoveredIndex === 0
                    ? "w-10/12 md:w-7/12"
                    : "w-10/12 md:w-7/12 lg:w-4/12"
                  : hoveredIndex === index
                  ? "w-10/12 md:w-7/12"
                  : "w-10/12 md:w-7/12 lg:w-4/12"
              } lg:h-[350px] h-[220px] rounded-2xl lg:p-6 p-3 bg-cover bg-center  transition-none duration-0 lg:transition-all lg:duration-500 lg:group  `}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('${blog.image}')`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative text-gray-300 lg:mt-36 mt-20 ${
                  index === 0 && hoveredIndex === null ? "line-clamp-none" : ""
                }`}
              >
                <span className="rounded-full bg-gray-700 text-white lg:text-[12px] text-[10px] lg:px-3 px-2 py-1">
                  {blog.label}
                </span>
                <p className="text-sm text-gray-300 lg:mt-4 mt-2">
                  {blog.createDate}
                </p>
                <p
                  className={`font-medium lg:text-xl ${
                    index === 0 && hoveredIndex === null
                      ? ""
                      : "line-clamp-3 hover:line-clamp-none"
                  }`}
                >
                  {blog.blog_name}
                </p>
              </div>

              <Button
                className={`absolute bottom-4 right-4 bg-white text-black p-3 rounded-full lg:transition-all lg:duration-500 ${
                  hoveredIndex === index ||
                  (index === 0 && hoveredIndex === null)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <GoArrowUpRight className="text-[28px]" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center lg:pt-10 pt-4">
        <Link href="/articles">
        <Button className="relative border border-[#008CFF] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 mt-5 group">
          <span className="absolute inset-0 bg-[#008CFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="relative flex items-center lg:text-xl text-sm">
            See More Article <ArrowUpRight className="ml-3" />
          </span>
        </Button></Link>
      </div>
    </div>
  );
};
export default Article;
