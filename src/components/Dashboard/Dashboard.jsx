"use client"
import React from "react";
import { useState } from "react";
import Blog from "./Blog";
import Career from "./Career";
import Queries from "./Queries";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("blogs");

  return (
    <div className="flex h-screen pt-32 ">
      {/* Sidebar */}
      <nav className="w-48 bg-gray-100 p-4 flex flex-col space-y-4 ">
        <button
          className={`text-left px-4 py-2 rounded ${
            activePage === "blogs" ? "bg-blue-500 text-white" : "hover:bg-gray-300"
          }`}
          onClick={() => setActivePage("blogs")}
        >
          Articles
        </button>
        <button
          className={`text-left px-4 py-2 rounded ${
            activePage === "career" ? "bg-blue-500 text-white" : "hover:bg-gray-300"
          }`}
          onClick={() => setActivePage("career")}
        >
          Career
        </button>
        <button
          className={`text-left px-4 py-2 rounded ${
            activePage === "queries" ? "bg-blue-500 text-white" : "hover:bg-gray-300"
          }`}
          onClick={() => setActivePage("queries")}
        >
          Queries
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white overflow-auto  ">
        {activePage === "blogs" && <Blog />}
        {activePage === "career" && <Career />}
        {activePage === "queries" && <Queries />}
      </main>
    </div>
  );
};

export default Dashboard;
