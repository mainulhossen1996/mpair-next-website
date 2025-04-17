"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextBox from "./Textbox";
import Link from "next/link";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
// import p1 from "/image/blog/arrow-up.png"
import p1 from "../../../public/image/blog/arrow-up.png";

const categories = ["All", "Software", "Robotics", "Web"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const filteredCards = {
    All: blogs,
    Software: blogs?.filter((card) => card?.label.includes("Software")),
    Robotics: blogs?.filter((card) => card?.label.includes("Robotics")),
    Web: blogs?.filter((card) => card?.label.includes("Web")),
  };

  // console.log("hello", filteredCards);

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

  return (
    <div className="pb-20">
      <div className="max-w-screen flex justify-center items-center pt-20 pb-10">
        <p className=" font-medium text-2xl ">Recommended for you</p>
      </div>

      <div class="flex rounded-full border-2 border-blue-300 overflow-hidden max-w-md mx-auto  mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="24px"
          className="fill-gray-500 ml-10"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input
          type="email"
          placeholder="Search Something..."
          class="w-full outline-none bg-white text-sm px-5 py-3"
        />
        <button
          type="button"
          class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-6 text-sm font-regular text-gray-200"
        >
          Search
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Category Buttons */}
        <div className="flex gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeCategory === category
                  ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-2lg"
                  : "text-gray-400 bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCards[activeCategory].map((card) => (
            <div
              key={card.id}
              className="border rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <div className="relative">
                <Image
                  src={card?.image}
                  alt="image background"
                  width={280}
                  height={180}
                  className="maskedImage object-cover"
                />
                <Link href={`/blog/${card.id}`}>
                  <Image
                    src={p1}
                    alt="arrow"
                    width={60}
                    height={60}
                    className="arrow  w-full h-full object-cover rounded-xl justify-end"
                  />
                </Link>
              </div>

              <div className="flex flex-row space-x-2 items-center py-3">
                {/* {card?.label.map((label, index) => (
                <TextBox key={index} text={label} />
              ))} */}
                <TextBox text={card?.label} />
              </div>

              <h3 className="text-xl font-semibold mt-4">{card?.blog_name}</h3>
              <p className="text-sm text-gray-600 mt-2">{card?.description}</p>
              <p className="text-xs text-gray-400 mt-1">{card?.createDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
