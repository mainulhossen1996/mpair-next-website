import React from "react";
import PrivateRoute from "@/components/privateRoute";
import Dashboard from "@/components/Dashboard/Dashboard";
import Sidebar from "@/components/Dashboard/Sidebar";


export default function Page() {
  return (
    <PrivateRoute>
      <Sidebar/>
      <Dashboard />
    </PrivateRoute>
  );
}
