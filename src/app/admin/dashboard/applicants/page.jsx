import Applicants from "@/components/Dashboard/Applicants";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";


export default function Page() {
    return(
        <div>
            <Sidebar />
            <Applicants />
        </div>
    )
}