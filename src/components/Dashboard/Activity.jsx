"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function Activity() {
  const [activities, setActivities] = useState([]);

   useEffect(() => {
     const db = getDatabase(app);
     const activityArray = [];
     const fetchData = async () => {
       const articleRef = ref(db, "blog");
       onValue(articleRef, (snapshot) => {
         if (snapshot.exists()) {
           const data = Object.values(snapshot.val()).reverse();
           data.slice(0, 1).forEach((art) => {
             activityArray.push(`Blog “${blog.title || "Untitled"}” published`);
           });
         }

         const applicantsRef = ref(db, "applicants");
         onValue(applicantsRef, (snapshot) => {
           if (snapshot.exists()) {
             const data = Object.values(snapshot.val()).reverse();
             data.slice(0, 2).forEach((app) => {
               activityArray.push(
                 `New application received from ${app.name || "Unknown"} (${
                   app.position || "Unknown Role"
                 })`
               );
             });
           }

           const jobRef = ref(db, "job");
           onValue(jobRef, (snapshot) => {
             if (snapshot.exists()) {
               const data = Object.values(snapshot.val()).reverse();
               data.slice(0, 2).forEach((job) => {
                 activityArray.push(
                   `Job “${job.blog_name || "Unnamed Job"}” posted on ${
                     job.createDate || "Unknown Date"
                   }`
                 );
               });
             }

             setActivities(activityArray.slice(0, 5)); // limit to 5
           });
         });
       });
     };

     fetchData();
   }, []);


  return (
    <section className="my-4 flex flex-row justify-between gap-4 pr-8">
      <div className=" rounded-xl p-6 border-2  w-2/3 bg-white">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <MdOutlineNotificationsActive className=" text-xl" /> Recent Activity{" "}
        </h3>
        {activities.length === 0 ? (
          <p className="text-gray-500 text-sm">No recent activity </p>
        ) : (
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            {activities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white border-2 p-4 rounded-xl">
      <p className="font-medium text-lg m-4">Quick Actions:</p>

        <div className="flex flex-row gap-2 items-center justify-center ">
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-10 w-40  text-md p-2 rounded-full bg-white border-2 text-black hover:bg-gray-200 transition"
        >
          + Add Article
        </button>
          <button
          className="h-10 w-40  text-md p-2 rounded-full bg-white border-2 text-black hover:bg-gray-200 transition"
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
            setFormData(initialForm);
          }}
        >
          + Post a Job
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-10 w-40  text-md p-2 rounded-full bg-white border-2 text-black hover:bg-gray-200 transition"
        >
         view all queries
        </button>{" "}
      </div> 
      </div>
    </section>
  );
}
