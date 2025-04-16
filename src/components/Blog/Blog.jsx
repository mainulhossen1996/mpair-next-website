"use client";
import React, { useState } from "react";
import Image from "next/image";
import TextBox  from "./Textbox";
import Link from "next/link";



const Cardsgallery = [
    {
      id: 1,
      imageSrc: "/image/blog/bloglist1.png",
      imageSrc2: "/image/blog/arrow-up.png",
      heading: "How Robotics is Enhancing Everyday Life",
      subheading: "Web design is evolving rapidly, integrating immersive user experiences ... ...",
      date: "13 March, 2025; 04:30pm",
      labels: ["Robotics", "All"],
    },
    {
      id: 2,
      imageSrc: "/image/blog/bloglist2.png",
      imageSrc2: "/image/blog/arrow-up.png",
      heading: "How Robotics is Reshaping the Future",
      subheading: "Web design is evolving rapidly, integrating immersive user experiences ... ...",
      date: "13 March, 2025; 04:30pm",
      labels: ["Software", "All"],
    },
    {
      id: 3,
      imageSrc: "/image/blog/bloglist3.png",
      imageSrc2: "/image/blog/arrow-up.png",
      heading: "The Future of Software Development",
      subheading: "Web design is evolving rapidly, integrating immersive user experiences ... ...",
      date: "13 March, 2025; 04:30pm",
      labels: ["Web", "All"],
    },
    {
      id: 4,
      imageSrc: "/image/blog/bloglist1.png",
      imageSrc2: "/image/blog/arrow-up.png",
      heading: "Inventory Management",
      subheading: "Web design is evolving rapidly, integrating immersive user experiences ... ...",
      date: "13 March, 2025; 04:30pm",
      labels: ["Software", "All"],
    },
    {
      id: 5,
      imageSrc: "/image/blog/bloglist2.png",
      imageSrc2: "/image/blog/arrow-up.png",
      heading: "Robotics in Enhancing Everyday Life",
      subheading: "Web design is evolving rapidly, integrating immersive user experiences ... ...",
      date: "13 March, 2025; 04:30pm",
      labels: ["Robotics", "All"],
    },
];



const categories = ["All", "Software", "Robotics", "Web"];

const filteredCards = {
  All: Cardsgallery.filter(card => card.labels.includes("All")),
  Software: Cardsgallery.filter(card => card.labels.includes("Software")),
  Robotics: Cardsgallery.filter(card => card.labels.includes("Robotics")),
  Web: Cardsgallery.filter(card => card.labels.includes("Web")),
};



const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="flex gap-4 justify-center mb-8">
        {/*selected caterogies here */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === category
                ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-2lg"
                : "text-gray-400 bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* cards output */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredCards[activeCategory].map((card, index) => (
          <div key={index} className="border rounded-xl p-4 shadow hover:shadow-md transition">
            <div className="relative">
              <Image
                src={card.imageSrc}
                alt={card.heading}
                width={280}
                height={180}
                className="maskedImage  object-cover"
              />
              <Link href={`/blog/${card.id}`}>
              <Image
                src={card.imageSrc2}
                width={60}
                height={60}
                className="arrow  w-full h-full object-cover rounded-xl justify-end"
                />
                </Link>

             </div>

            <div className=" flex flex-row space-x-2 items-center py-3">
              <TextBox text="All" />
              <TextBox text={card.labels[0]} />
              </div>

            <h3 className="text-xl font-semibold mt-4">{card.heading}</h3>
            <p className="text-sm text-gray-600 mt-2">{card.subheading}</p>
            <p className="text-xs text-gray-400 mt-1">{card.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Blog;