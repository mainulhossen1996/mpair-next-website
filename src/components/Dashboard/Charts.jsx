"use client";
import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {  Chart as ChartJS,  CategoryScale,  LinearScale,  BarElement,  Tooltip,  Legend,  ArcElement,} from "chart.js";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "@/firebase/firebase.config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ArcElement 
);

const Charts = () => {
  const [blogs, setBlogs] = useState([]);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);

    // Fetch blogs for bar chart
    const blogRef = ref(db, "blog");
    onValue(blogRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const blogArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBlogs(blogArray);
      }
    });

    // Fetch queries for doughnut chart
    const queriesRef = ref(db, "queries");
    onValue(queriesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const queryArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
          status: data[key].status || "Pending",
        }));
        setQueries(queryArray);
      } else {
        setQueries([]);
      }
    });
  }, []);

  // Color palette for bar chart
  const colorPalette = [
    "#4169E1", // Indigo
    "#10B981", // Emerald
    "#FFFF00", // yellow
    "#3B82F6", // Blue
    "#8B5CF6", // Violet
    "#EC4899", // Pink
    "#22D3EE", // Cyan
  ];

  // Mock 7 days for bar chart labels
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
  });

  // Bar chart datasets based on blogs (demo with random data)
  const datasets = blogs.map((blog, index) => ({
    label: blog.blog_name || `Blog ${index + 1}`,
    data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50)),
    backgroundColor: colorPalette[index % colorPalette.length],
  }));

  // Doughnut chart data - count queries by status
  const statusCounts = {
    Pending: 5,
    Responded: 8,
    Closed: 3,
  };

  queries.forEach((q) => {
    if (q.status === "Pending") statusCounts.Pending += 1;
    else if (q.status === "Responded") statusCounts.Responded += 1;
    else if (q.status === "Closed") statusCounts.Closed += 1;
    else statusCounts.Pending += 1; // treat unknown as Pending
  });

  const doughnutData = {
    labels: ["Pending", "Responded", "Closed"],
    datasets: [
      {
        label: "Queries Status",
        data: [
          statusCounts.Pending,
          statusCounts.Responded,
          statusCounts.Closed,
        ],
        backgroundColor: ["#FFAC1C", "#10B981", "#6B7280"], // yellow, green, gray
        hoverOffset: 8,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Views" },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="flex flex-row gap-6 pr-8">
      {/* Bar chart left side */}
      <div className="w-2/3 h-2/3 bg-white  p-4 rounded-xl border-2">
        <h3 className="text-lg font-medium mb-1">Weekly Article Views</h3>
        <Bar data={{ labels: last7Days, datasets }} options={barOptions} />
      </div>

      {/* Doughnut chart right side */}
      <div className="w-1/3 bg-white rounded-xl border-2 p-4">
        <h3 className="text-lg font-medium mb-4">Queries Status Overview</h3>
        <div className="h-5/6 w-full">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
