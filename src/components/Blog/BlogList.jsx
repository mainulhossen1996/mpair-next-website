"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import Image from "next/image";
import TextBox from "./Textbox";
import { getAllBlogs } from "./AllBlogs";


const categories = ["All", "Software", "Robotics", "AI"];

export default function BlogList() {
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
    <section className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="pl-4 text-4xl font-semibold">DIscover More Blogs</h2>
          <div className="flex space-x-3 flex-wrap">
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
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 w-max px-2 h-fit">
            {filteredCards[activeCategory]?.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-900 rounded-xl min-w-[300px] max-w-[300px] p-4 relative hover:shadow-lg transition-shadow"
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}

                <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-300 mb-2">
                  {blog.description?.split(" ").slice(0, 10).join(" ")}...
                </p>
                <div className="flex justify-between text-xs text-gray-400">
                  <TextBox text={blog.label}> </TextBox>
                  <span className="text-white">{blog.date}</span>
                </div>
                <a
                  href={`/blog/${blog.id}`}
                  className="absolute top-3 right-3 text-white bg-blue-700 rounded-full p-1 hover:bg-blue-500 transition"
                  title="Read More"
                >
                  →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
