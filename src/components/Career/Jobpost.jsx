"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { getDatabase, onValue, ref } from "firebase/database";
import {app} from "@/firebase/firebase.config";
import { formatDate } from "@/utils/date";

const categories = [
  "All",
  "Software Engineer",
  "UI-UX Designer",
  "Database Engineer",
];

const Jobpost = () => {
   const [activeCategory, setActiveCategory] = useState("All");
  const [jobs, setJobs] = useState([]);

  const filteredCards = {
    All: jobs,
    "Software Engineer": jobs.filter((job) =>
      job?.subheading?.includes("Software Engineer")
    ),
    "UI-UX Designer": jobs.filter((job) =>
      job?.subheading?.includes("UI-UX Designer")
    ),
    "Database Engineer": jobs.filter((job) =>
      job?.subheading?.includes("Database Engineer")
    ),
  };

  // console.log("hellllllo", filteredCards);

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "job");

    onValue(blogRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const jobs = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log(jobs);
        setJobs(jobs);
      } else {
        setJobs([]);
      }
    });
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-22 p-6">
        <div className="flex gap-4 justify-start mb-8 ">
          {/*selected caterogies here */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeCategory === category
                  ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-2lg"
                  : "text-gray-400 bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* job list */}
        <div className="flex flex-col gap-5">
          {filteredCards[activeCategory]?.map((jobs, index) => (
            <div key={index} className=" p-4 ">
              <div className="flex flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mt-4">{jobs?.heading}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {jobs.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {" "}
                    Deadline: {formatDate(jobs?.deadline)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Status: {jobs.status}
                  </p>
                </div>

                <Link href={`/career/${jobs.id}`}>
                  <button className="flex justify-end items-center mt-8 px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-400">
                    Apply Now
                    <ArrowUp
                      className="ml-2 rotate-45"
                      style={{ color: "#ffffff" }}
                    />
                  </button>
                </Link>
              </div>
              <hr className="my-8 border-t border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobpost;
