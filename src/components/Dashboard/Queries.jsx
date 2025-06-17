"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { GrView } from "react-icons/gr";
import { LuMessageSquareReply } from "react-icons/lu";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { IoClose } from "react-icons/io5"; // Close icon

export default function Queries() {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "queries");

    onValue(blogRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const query = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
          status: data[key].status ?? false,
        }));
        setQueries(query);
      } else {
        setQueries([]);
      }
    });
  }, []);

  const handleToggleClick = (id) => {
    setQueries((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, status: !q.status } : q
      )
    );
  };

  const handleViewClick = (query) => {
    setSelectedQuery(query);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedQuery(null);
    setShowModal(false);
  };

  return (
    <section className="ml-8 h-screen mt-32 max-w-screen-xl">
      <h2 className="text-3xl font-semibold mb-10 text-center">All Queries</h2>

      {queries.length === 0 ? (
        <p>No queries received yet.</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg max-h-[50vh] ">
          <table className="min-w-full divide-y divide-gray-500">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Organization</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Industry</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Message</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Submitted</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400 bg-white">
              {queries.map((q) => (
                <tr key={q.id}>
                  <td className="px-4 py-3">{q?.name}</td>
                  <td className="px-2 py-3">{q?.organization || "—"}</td>
                  <td className="px-2 py-3">{q?.industry || "—"}</td>
                  <td className="px-2 py-3 max-w-xs truncate" title={q.message}>
                    {q.message || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {q.createdAt instanceof Date
                      ? q.createdAt.toLocaleString()
                      : q.createdAt?.toDate?.().toLocaleString?.() || "—"}
                  </td>
                  <td className="">
                      <Button className="text-2xl " color="primary" onClick={() => handleViewClick(q)}>
                        <GrView />
                      </Button>
                  </td>
                  <td
                    className="p-3 cursor-pointer select-none"
                    onClick={() => handleToggleClick(q.id)}
                    title={q.status ? "Active" : "Inactive"}
                  >
                    {q.status ? (
                      <BsToggle2On className="text-blue-700 text-4xl" />
                    ) : (
                      <BsToggle2Off className="text-gray-400 text-4xl" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && selectedQuery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[40%] h-2/5  relative">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800"
            >
              <IoClose className="text-3xl" />
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center">Query Details</h3>
           <div className="text-lg space-y-1"> 
            <p><strong>Name:</strong> {selectedQuery.name}</p>
            <p><strong>Organization:</strong> {selectedQuery.organization || "—"}</p>
            <p><strong>Industry:</strong> {selectedQuery.industry || "—"}</p>
            <p><strong>Email:</strong> {selectedQuery.email || "—"}</p>
            <p><strong>Message:</strong> {selectedQuery.message || "—"}</p>
            <p><strong>Submitted:</strong>{" "}
              {selectedQuery.createdAt?.toDate?.().toLocaleString?.() ||
               (typeof selectedQuery.createdAt === "string"
                ? new Date(selectedQuery.createdAt).toLocaleString()
                : "—")}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={selectedQuery.status ? "text-blue-600" : "text-gray-400"}>
                {selectedQuery.status ? "Active" : "Inactive"}
              </span>
            </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
