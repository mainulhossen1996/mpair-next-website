"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import app from "@/firebase/firebase.config";
import { Button } from "@nextui-org/react";

const db = getFirestore(app);

export default function Queries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="p-6">Loading queries...</p>;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">All Contact Queries</h2>

      {queries.length === 0 ? (
        <p>No queries received yet.</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Organization</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Industry</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Submitted</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {queries.map((q) => (
                <tr key={q.id}>
                  <td className="px-4 py-3">{q.name}</td>
                  <td className="px-4 py-3">{q.organization || "—"}</td>
                  <td className="px-4 py-3">{q.email}</td>
                  <td className="px-4 py-3">{q.industry || "—"}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {q.createdAt?.toDate().toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-3">
                      <Button size="sm" color="primary" variant="flat">
                        View
                      </Button>
                      <Button size="sm" color="success" variant="bordered">
                        Response
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
