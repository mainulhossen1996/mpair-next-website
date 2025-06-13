"use client";
import React from "react";
import { useEffect, useState } from "react";

import { Button } from "@nextui-org/react";
import { GrView } from "react-icons/gr";
import { LuMessageSquareReply } from "react-icons/lu";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";

export default function Queries() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "queries");

    onValue(blogRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const query = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setQueries(query);
      } else {
        setQueries([]);
      }
    });
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
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Organization
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Industry
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Message
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Submitted
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400 bg-white">
              {queries.map((q) => (
                <tr key={q.id}>
                  <td className="px-4 py-3">{q?.name}</td>
                  <td className="px-2 py-3">{q?.organization || "—"}</td>
                  <td className="px-2 py-3">{q?.email}</td>
                  <td className="px-2 py-3">{q?.industry || "—"}</td>
                  <td className="px-2 py-3 max-w-xs truncate" title={q.message}>
                    {q.message || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {q.createdAt instanceof Date
                      ? q.createdAt.toLocaleString()
                      : q.createdAt?.toDate?.().toLocaleString?.() || "—"}
                  </td>
                  <td className="pr-4 py-3">
                    <div className="flex gap-1 justify-start">
                      <Button className="text-xl" color="primary">
                        {" "}
                        <GrView />
                      </Button>
                      <Button className="text-xl" color="success">
                        {" "}
                        <LuMessageSquareReply />
                      </Button>
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
