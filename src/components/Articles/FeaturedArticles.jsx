'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { AllArticles } from "./AllArticles";
import TextBox from "./Textbox";
import Link from "next/link";

export default function FeaturedArticles() {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    AllArticles().then(setBlogs);
  }, []);

  const latest = blogs?.[0];
  const mostRead = blogs?.filter(b => b.mostRead);

  return (
    <section className="max-w-screen-xl mx-auto ">
      <div className="container gap-6 flex justify-between ">
        {/* Featured Latest */}
        <div className="w-2/3 mx-3 mb-20 ">
          {latest && (
            <div className=" rounded-lg border overflow-hidden flex flex-row">
              <div className="relative w-2/3 h-80">
                <Image
                  src={latest.Image}
                  alt={latest.title}
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>

              <div className="p-6">
                
                <h2 className="text-2xl font-bold text-black hover:text-blue-600">{latest.title}</h2>
                <p className="text-gray-600 mt-2">
                  {latest.description.split(" ").slice(0, 10).join(" ")}...
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Most Read blog List */}
        <div className="w-1/3 space-y-6">
          <span className="text-lg text-blue-800 font-medium">Most Read</span>
          {mostRead?.map((blog) => (
            <div key={blog.id} className="flex gap-4 items-start">
              <div className="relative w-20 h-20">
                <Image
                  src={blog.Image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded" />
              </div>

              <Link href={`/articles/${blog.id}`} className="w-3/5">
                <h3 className="text-lg font-medium text-black hover:text-blue-600">
                  {blog.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
