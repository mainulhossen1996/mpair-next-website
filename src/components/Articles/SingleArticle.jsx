"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image"; 
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import { useParams } from "next/navigation";
import AddArticle from "./AddArticle";

const SingleArticle = () => {
  const { id } = useParams();
  // console.log(id);
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
      } else {
        setBlogs([]);
      }
    });
  }, []);

 
  useEffect(() => {
    if (id && blogs?.length > 0) 
    {
      const selectedBlog = blogs?.find((item) => item?.id === id);
      setBlog(selectedBlog || null);
    }
  }, [id, blogs]);

 // if (!blog) return <div>Loading...</div>;

 

  return (
    <section className="w-full min-h-screen bg-white">
      
      <div className="relative w-full h-[500px]">
          <Image
            alt="Blog Header"
            src={blog?.image}
            width={300}
            height={100}
            className="object-cover w-full h-full"
            priority
          />
      
      </div>

   
      <div className="relative z-10 -mt-[200px] mb-[80px] px-4 md:px-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 max-w-5xl mx-auto flex flex-col gap-2">
 <h1 className="text-3xl md:text-4xl font-bold text-gray-900 my-3">
            {blog?.blog_name}</h1>
            <div className="flex flex-row gap-3 items-center">
          <p className="text-sm text-gray-600 font-normal"> {blog?.createDate}   </p>  
          <span>|</span>                 
          <p className="text-sm text-gray-600 font-normal"> {blog?.label} </p>
</div>
          <hr className="border-t border-gray-300"/>

          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {blog?.description}
          </p>
        </div>
      </div>

  
    </section>
  );
};

export default SingleArticle;