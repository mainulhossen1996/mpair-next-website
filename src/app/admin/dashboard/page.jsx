import React from "react";
import PrivateRoute from "@/components/privateRoute";
import Dashboard from "@/components/Dashboard/Dashboard";


export default function Page() {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
}
