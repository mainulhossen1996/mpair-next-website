import Blog from "@/components/Dashboard/Blog";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

export default function Page() {
    return (
        <div className="flex min-h-screen ">
        <Sidebar />
        <main className="flex-1 ">
        <Blog />
        </main>
      </div>

    )
}