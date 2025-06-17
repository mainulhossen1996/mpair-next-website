"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "@/firebase/firebase.config";
import { FaBlog, FaUsers } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdQueryStats } from "react-icons/md";

export default function DashboardHome() {
  const [articleCount, setArticleCount] = useState(0);
  const [queryCount, setQueryCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);
  const [applicantCount, setApplicantCount] = useState(0);

  useEffect(() => {
    const db = getDatabase(app);

    onValue(ref(db, "articles"), (snapshot) => {
      if (snapshot.exists()) setArticleCount(Object.keys(snapshot.val()).length);
    });

    onValue(ref(db, "queries"), (snapshot) => {
      if (snapshot.exists()) setQueryCount(Object.keys(snapshot.val()).length);
    });

    onValue(ref(db, "jobs"), (snapshot) => {
      if (snapshot.exists()) setJobCount(Object.keys(snapshot.val()).length);
    });

    onValue(ref(db, "applicants"), (snapshot) => {
      if (snapshot.exists()) setApplicantCount(Object.keys(snapshot.val()).length);
    });
  }, []);

  const cards = [
    {
      title: "Total Articles",
      count: articleCount,
      icon: <FaBlog className="text-3xl text-blue-500" />,
      bg: "bg-blue-100",
    },
    {
      title: "Total Queries",
      count: queryCount,
      icon: <MdQueryStats className="text-3xl text-purple-500" />,
      bg: "bg-purple-100",
    },
    {
      title: "Jobs Listed",
      count: jobCount,
      icon: <HiOutlineDocumentReport className="text-3xl text-green-500" />,
      bg: "bg-green-100",
    },
    {
      title: "Applicants Applied",
      count: applicantCount,
      icon: <FaUsers className="text-3xl text-orange-500" />,
      bg: "bg-orange-100",
    },
  ];

  return (
   
    <section className="ml-56 mt-28 px-8">
      <h2 className="text-3xl font-semibold ">Dashboard Overview</h2>
      <p className="mb-8">Here’s a quick summary of the platform.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md ${card.bg} flex items-center gap-4`}
          >
            <div>{card.icon}</div>
            <div>
              <h4 className="text-xl font-bold">{card.count}</h4>
              <p className="text-sm text-gray-600">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  
  );
}
