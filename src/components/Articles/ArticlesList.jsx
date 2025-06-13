"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import Image  from "next/image";
import TextBox from "./Textbox";
import { AllBlogs } from "./AllArticles";
import Link from "next/link";


const categories = ["All", "Software", "Robotics", "AI"];

export default function ArticlesList() {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filteredCards = {
    All: blogs,
    Software: blogs?.filter((card) => card?.label.includes("Software")),
    Robotics: blogs?.filter((card) => card?.label.includes("Robotics")),
    AI: blogs?.filter((card) => card?.label.includes("AI")),
  };


  return (
    <section className="bg-black text-white py-12 relative ">
      <div className="container max-w-screen-xl mx-auto py-20">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="pl-4 text-4xl font-semibold">
            Discover More Articles
          </h2>
          <div className="flex space-x-3 flex-wrap ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1 border rounded-full text-sm transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white font-semibold"
                    : "border-blue-200 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Blog Cards */}

        <div className="overflow-x-auto scrollbar-hide mt-10 scroll-smooth w-full">
          <div className="grid grid-cols-3 gap-6 w-max px-2">
            {filteredCards[activeCategory]?.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-900 rounded-xl min-w-[300px] max-w-[350px] h-auto p-4 relative hover:shadow-lg transition-shadow"
              >
                <Link href={`/articles/${blog.id}`}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={400}
                    className="w-full h-[220px] object-cover rounded-lg mb-4"
                  />

                  <div className="flex flex-col gap-4">
                    <TextBox text={blog.label} className="w-fit" />

                    <h3 className="text-lg font-semibold ">{blog.blog_name}</h3>
                    <p className="text-sm text-gray-300 ">
                      {blog.description?.split(" ").slice(0, 10).join(" ")}...
                    </p>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span className="text-white">{blog.createDate}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
