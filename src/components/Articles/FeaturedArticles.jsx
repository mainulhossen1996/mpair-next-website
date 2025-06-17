"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import { formatDate } from "@/utils/date";

export default function FeaturedArticles() {
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


  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-14 ">
      <div className="flex flex-row gap-10">

        {/* first one in array */}
        {blogs.length > 0 && (
          <Link href={`/articles/${blogs[0].id}`}>

            <div className=" h-full flex flex-row  text-black  rounded-lg overflow-hidden border-2">

              <div className="relative w-3/5 ">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].blog_name}
                  fill
                  className="object-cover "
                />
              </div>

              <div className="p-6 flex flex-col justify-start gap-2 w-3/5">

                <h2 className="text-2xl font-bold hover:text-blue-500 cursor-pointer">
                  {blogs[0].blog_name}
                </h2>

                <p className="text-sm text-gray-500 ">
                  {blogs[0].description?.split(" ").slice(0, 30).join(" ")}...
                </p>
                <div className="flex justify-between text-sm mt-6">
                  <span className="text-gray-600">{blogs[0].label}</span>
                  <span className="text-gray-400">{formatDate(blogs[0].createDate)}</span>
                </div>
              </div>

            </div>


          </Link>
        )}



        {/* Most Read Blogs */}
        <div className=" space-y-6 p-4">
          <h3 className="text-lg font-medium">Most Read</h3>

          {[blogs[0], blogs[3]].map(
            (blog, index) =>
              blog && (
                <div key={index} className="flex gap-4 items-start">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={blog.image}
                      alt={blog.blog_name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  <Link href={`/articles/${blog.id}`} className="w-full">
                    <h4 className="text-md font-normal hover:text-blue-500">
                      {blog.blog_name}
                    </h4>
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
