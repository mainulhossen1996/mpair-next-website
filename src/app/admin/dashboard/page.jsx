import React from "react";
import PrivateRoute from "@/app/PrivateRoute";
import Dashboard from "@/components/Dashboard/Dashboard";


export default function Page() {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
}
