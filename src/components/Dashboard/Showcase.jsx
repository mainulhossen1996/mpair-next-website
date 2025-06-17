"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "@/firebase/firebase.config";
import { MdOutlineTextSnippet } from "react-icons/md";
import { GrCircleQuestion } from "react-icons/gr";
import { FaBriefcase } from "react-icons/fa";


const Showcase = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
    const [latestQueries, setLatestQueries] = useState([]);
      const [blogs, setBlogs] = useState([]); // jobs array



  useEffect(() => {
    const db = getDatabase(app);

    //for articles
    const blogRef = ref(db, "blog");

    onValue(blogRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const blogArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        // Sorting by createDate to take latest 5
        const sortedBlogs = blogArray
          .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
          .slice(0, 5);

        setLatestBlogs(sortedBlogs);
      }
    });

    //for queries
     const queryRef = ref(db, "queries");
    onValue(queryRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const queryArray = Object.keys(data)
          .map((key) => ({ id: key, ...data[key] }))
          .sort((a, b) => new Date(b.date || b.createDate) - new Date(a.date || a.createDate))
          .slice(0, 5);
        setLatestQueries(queryArray);
      }
    });

    //for jobs
     const jobRef = ref(db, "job");
    onValue(jobRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const jobArray = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
        setBlogs(jobArray);
      }
    }); 
  }, []);

  return (
    <section className="grid grid-cols-3 gap-4 pr-8 pb-6 ">
      {/*for articles */}
      <div className="bg-white p-5 rounded-xl border-2 ">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2 border-b-2 border-blue-400">
          <MdOutlineTextSnippet className="text-xl" /> Latest Articles
        </h3>
      
        <ul className="space-y-2">
          {latestBlogs.map((blog) => (
            <li
              key={blog.id}
              className="flex items-center space-x-3 border-b pb-3 last:border-none"
            >
              <img
                src={blog.image}
                alt={blog.blog_name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <p className="text-md line-clamp-1">
                  {blog.blog_name}
                </p>
                <span className="text-xs text-gray-400">{blog.createDate}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

     {/* for queries */}
         <div className="bg-white p-5 rounded-xl border-2">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2 border-b-2 border-blue-400"> <GrCircleQuestion className="text-xl" />
 Recent Queries</h2>
        <ul className="space-y-3">
          {latestQueries.map((query) => (
            <li key={query.id}>
              <p className="font-medium text-gray-800">{query.name || "Unknown Sender"}</p>
              <p className="text-sm text-gray-500">{query.message?.slice(0, 50)}...</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Jobs */}
      <div className="bg-white p-5 rounded-xl border-2">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2 border-b-2 border-blue-400">
          <FaBriefcase className="text-xl" /> Latest Jobs
        </h2>
        <ul className="space-y-3">
          {blogs.slice(0, 2).map((job) => (
            <li key={job.id}>
              <p className="font-semibold text-gray-800">{job.blog_name}</p>
              <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
              <span className="text-xs text-gray-400">{job.createDate}</span>
            </li>
          ))}
        </ul>
      </div>
     
    </section>
  );
}
export default Showcase
