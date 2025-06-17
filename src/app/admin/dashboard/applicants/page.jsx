import Applicants from "@/components/Dashboard/Applicants";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";


export default function Page() {
    return (
      <div className="flex min-h-screen ">
        <Sidebar />
        <main className="flex-1 ">
          <Applicants />
        </main>
      </div>
    );
}