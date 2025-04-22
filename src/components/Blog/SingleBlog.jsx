"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; 
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import { useParams } from "next/navigation";

const SingleBlog = () => {
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
      const selectedBlog = blogs.find((item) => item.id === id);
      setBlog(selectedBlog || null);
    }
  }, [id, blogs]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-screen bg-white">
      
      <div className="relative w-full h-[500px]">
        {blog.image && (
          <Image
            alt="Blog Header"
            src={blog.image}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

   
      <div className="relative z-10 -mt-[200px] px-4 md:px-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {blog?.blog_name}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {blog?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;