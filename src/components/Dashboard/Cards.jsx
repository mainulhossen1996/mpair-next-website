"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "@/firebase/firebase.config";
import { FaRegQuestionCircle,  FaRegUserCircle  } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GrArticle } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";

export default function Cards({ stats }) {
     const [articleCount, setArticleCount] = useState(0);
      const [queryCount, setQueryCount] = useState(0);
      const [jobCount, setJobCount] = useState(0);
      const [applicantCount, setApplicantCount] = useState(0);

  const cards = [
     {
       title: "Total Articles",
       count: articleCount,
       icon: <GrArticle className="text-3xl text-blue-500" />,
       bg: "bg-blue-100",
     },
     {
       title: "Total Queries",
       count: queryCount,
       icon: <FaRegQuestionCircle  className="text-3xl text-purple-500" />,
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
       icon: <FaRegUserCircle className="text-3xl text-orange-500" />,
       bg: "bg-orange-100",
     },
   ];
 

  return (
       <div className="grid grid-cols-4 gap-8 max-w-screen-lg ">
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
  );
}