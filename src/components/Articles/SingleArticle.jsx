"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getDatabase, onValue, ref } from "firebase/database";
import { useParams } from "next/navigation";
import { generateSlug } from "@/utils/genrateSlug";
import { formatDate } from "@/utils/date";
import app from "@/firebase/firebase.config";

const SingleArticle = () => {

  const { blog_name } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null);

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
        // console.log(blogArray);
        setBlogs(blogArray);
      }
    });
  }, []);

  useEffect(() => {
    if (blog_name && blogs.length > 0) {
      const matchedBlog = blogs.find((b) => generateSlug(b?.blog_name) === generateSlug(blog_name));
      console.log(matchedBlog)
      setBlog(matchedBlog);
    }
  }, [blog_name, blogs]);

  if (!blog) return <div>Loading...</div>;

  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full h-[500px] bg-gray-300">
        <h1 className=" text-4xl font-semibold ">{blog?.blog_name}</h1>
        <div>
          <span className="text-sm text-gray-600 font-normal">{formatDate(blog?.createDate)}</span>
          <span> | </span>
          <span className="text-sm text-gray-600 font-normal">{blog?.label}</span>
        </div>
      </div>

      <div className="relative z-10 -mt-[200px] mb-[80px] px-4 md:px-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto flex flex-col justify-center items-center gap-2">
          <Image
            alt="Blog Header"
            src={blog?.image}
            width={300}
            height={100}
            className="object-cover w-3/5 h-[250px]"
            priority
          />
          <p
            dangerouslySetInnerHTML={{
              __html:
                blog?.description
            }}

            className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">

          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleArticle;
