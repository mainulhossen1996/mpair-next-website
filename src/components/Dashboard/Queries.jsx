"use client";
import React from "react";
import  { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import app from "@/firebase/firebase.config";
import { Button } from "@nextui-org/react";
import { GrView } from "react-icons/gr";
import { LuMessageSquareReply } from "react-icons/lu";



const db = getFirestore(app);

export default function Queries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);


//sample data for testing 
   /* { useEffect(() => {
   const sampleData = [
      {
        id: "1",
        name: "John Doe",
        organization: "Bright Future Foundation",
        email: "nafija@bff.org",
        industry: "Non-Profit",
        requirements:
          "We’re looking for a custom-built donation tracking dashboard and volunteer management portal.",
        createdAt: new Date("2025-06-10T14:30:00Z"),
      },
      {
        id: "2",
        name: "Alice Brown",
        organization: "DCraft Solutions",
        email: "alice@dcraft.com",
        industry: "IT Services",
        requirements:
          "We need to integrate a secure payment gateway into our existing client platform.",
        createdAt: new Date("2025-06-11T09:45:00Z"),
      },
      {
        id: "3",
        name: "Elizabeth Bennet",
        organization: "EduBridge",
        email: "eli.bennet@edubridge.com",
        industry: "Education",
        requirements:
          "Interested in building a mobile app for student progress tracking and parent notifications.",
        createdAt: new Date("2025-06-12T08:15:00Z"),
      },
    ];

    // Simulate async fetch
    setTimeout(() => {
      setQueries(sampleData);
      setLoading(false);
    }, 500);
  }, []); }*/


 useEffect(() => {
    const fetchQueries = async () => {
      try {
        const q = query(collection(db, "queries"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQueries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching queries:", error);
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  //if (loading) return <p className="p-6">Loading queries...</p>;


  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6">All Queries</h2>

      {queries.length === 0 ? (
        <p>No queries received yet.</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg ">
          <table className="min-w-full divide-y divide-gray-500">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Organization</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Industry</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Message</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Submitted</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400 bg-white">
              {queries.map((q) => (
                <tr key={q.id}>
                  <td className="px-4 py-3">{q.name}</td>
                  <td className="px-2 py-3">{q.organization || "—"}</td>
                  <td className="px-2 py-3">{q.email}</td>
                  <td className="px-2 py-3">{q.industry || "—"}</td>
                  <td className="px-2 py-3 max-w-xs truncate" title={q.requirements}>
                    {q.requirements || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                                     {q.createdAt?.toLocaleString()}
  
                  </td>
                  <td className="pr-4 py-3">
                    <div className="flex gap-1 justify-start">
                      <Button className="text-xl" color="primary">    <GrView />  </Button>
                      <Button className="text-xl" color="success" >  <LuMessageSquareReply />   </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
