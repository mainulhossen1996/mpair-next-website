'use client';
import { useEffect, useState } from "react";
import  AllBlogs from "./AllBlogs";
import TextBox from "./Textbox";

export default function FeaturedBlog() {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    getAllBlogs().then(setBlogs);
  }, []);

  const latest = blogs?.[0];
  const mostRead = blogs?.filter(b => b.mostRead);

  return (
    <section className="container mx-auto px-4 flex flex-row gap-8 mt-10">
      {/* Featured Latest */}
      <div className="md:w-2/3 mx-3 mb-20 ">
        {latest && (
          <div className="border rounded-lg shadow overflow-hidden flex flex-row">
            <TextBox />

            {latest.Image && (
              <img
                src={latest.Image}
                alt={latest.title}
                className="w-20 h-20 object-cover rounded"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold">{latest.title}</h2>
              <p className="text-gray-600 mt-2">
                {latest.description.split(" ").slice(0, 10).join(" ")}...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Most Read List */}
      <div className="md:w-1/3 space-y-6">
        <span className="text-lg text-blue-800 font-medium">Most Read</span>
        {mostRead?.map((blog) => (
          <div key={blog.id} className="flex gap-4 items-start">
            {blog.Image && (
              <img
                src={blog.Image}
                alt={blog.title}
                className="w-20 h-20 object-cover rounded"
              />
            )}

            <h3 className="w-2/3 text-lg font-medium text-black hover:text-blue-600">
              {blog.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
