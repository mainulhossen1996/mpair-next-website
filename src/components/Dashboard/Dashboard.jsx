"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "@/firebase/firebase.config";

import Cards from "./Cards";
import Activity from "./Activity";
import Charts from "./Charts";
import Showcase from "./Showcase";


export default function DashboardHome() {

  useEffect(() => {
    const db = getDatabase(app);
  })

  return (
    <section className=" mt-24 px-8 ">
      <h2 className="text-2xl font-medium ">Dashboard Overview</h2>
      <p className=" text-sm mb-4">Here’s a quick summary of the platform.</p>
      <div className="h-[80vh] overflow-y-auto space-y-4">
        <Cards />
        <Charts />
        <Activity />
        <Showcase />
      </div>
    </section>
  );
}
