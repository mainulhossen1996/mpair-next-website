import React from "react";
import PrivateRoute from "@/components/privateRoute";
import Dashboard from "@/components/Dashboard/Dashboard";
import Sidebar from "@/components/Dashboard/Sidebar";


export default function Page() {
  return (
    <PrivateRoute>   
   <div className="flex min-h-screen ">
        <Sidebar />
        <main className="flex-1 ">
          <Dashboard />
        </main>
      </div>
    </PrivateRoute>
  );
}
