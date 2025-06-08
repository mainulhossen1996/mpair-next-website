"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp } from 'lucide-react';
import jobInfo  from "./JobInfo"; 

const JobData = [
    {
      id: 'frontend-developer',
      heading: "Software Engineer",
      subheading: "Design and develop scalable software applications.",
      description:
        "As a Software Engineer, you'll be working with cross-functional teams to create high-performing, scalable, and secure software solutions. Your responsibilities include writing clean code, participating in code reviews, and collaborating with designers and product managers.",
      deadline: "2025-05-30",
      status: "Ongoing",
      experience: "2+ years",
      salary: "60k - 90k BDT",
      location: "Onsite / Remote",
      skills: ["JavaScript", "React", "Node.js", "Git", "REST API"],
      labels: ['All', 'Software Engineer'],
    },
    {
        id: "backend-engineer",
      heading: "Database Engineer",
      subheading: "Manage and optimize company-wide data infrastructure.",
      description:
        "As a Database Engineer, you will be responsible for designing, implementing, and maintaining the company’s database systems. You’ll work closely with the backend and data teams to ensure data security, performance, and scalability.",
      deadline: "2025-06-10",
      status: "Ongoing",
      experience: "3+ years",
      salary: "70k - 100k BDT",
      location: "Onsite/ Remote",
      skills: ["SQL", "PostgreSQL", "MongoDB", "Database Design", "Optimization"], 
      labels: ['All', 'Software Engineer'],
    },
    {
      id: "product-manager",
      heading: "Product Manager",
      subheading: "Lead product vision, development, and strategy.",
      description:
        "We're looking for a Product Manager to lead the development of new features and improve existing ones. You’ll be responsible for gathering user feedback, defining product requirements, and aligning cross-functional teams to achieve business goals.",
      deadline: "2025-06-01",
      status: "Ongoing",
      experience: "4+ years",
      salary: "100k - 130k BDT",
      location: "Hybrid/ Onsite",
      skills: ["Product Strategy", "Agile", "Jira", "Communication", "UX Insight"],
      labels: ['All', 'Product Manager'],
    },
    {
      id: "database-engineer",
      heading: "Database Engineer",
      subheading: "Ensure the highest quality of software through testing.",
      description:
        "As a QA Engineer, your primary role will be to write and execute test plans, identify bugs, and ensure that our applications meet the required standards of reliability and performance. Automation experience is a big plus.",
      deadline: "2025-05-25",
      status: "Ongoing",
      experience: "2+ years",
      salary: "50k - 70k BDT",
      location: "Remote/ Hybrid",
      skills: ["Test Cases", "Automation", "Selenium", "Cypress", "Bug Tracking"],
      labels: ['All', 'Database Engineer'],
    },
    {
      id: "app-developer",
      heading: "App Developer",
      subheading: "Create and maintain Android and iOS mobile apps.",
      description:
        "We're hiring an App Developer to build and maintain mobile applications using React Native or Flutter. You’ll work with designers and API developers to create smooth, responsive user experiences.",
      deadline: "2025-06-15",
      status: "Ongoing",
      experience: "2-3 years",
      salary: "65k - 85k BDT",
      location: "Remote/ Hybrid",
      skills: ["React Native", "Flutter", "UI/UX", "App Deployment", "Firebase"],
    },
  ];


const JobDetails = () => {
  const params = useParams();
  const id = params?.id;
      const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const selectedJob = JobData?.find((item) => item?.id === id);
      setJob(selectedJob);
      setLoading(false);
    }, [id]);
  
    if (loading) {
        return <div>Loading...</div>; 
      }
    
     
      //if (!job) return <div>Loading...</div>;
  
    return (
      <div className="w-full min-h-screen mt-[100px] ">

    <div className="max-w-screen-xl mx-auto h-[280px] text-white p-8 md:p-10" style={{  background: "linear-gradient(to right, #0055ff, #4D88ff)", }} >
     
     <div className="max-w-screen-xl mx-auto flex flex-col">
          <p className="text-sm font-medium ">Engineering</p>
          <h1 className="text-xl md:text-4xl font-semibold mt-10">{job.heading}</h1>
              <p className="text-sm text-gray-100 mt-4">Deadline: {job.deadline}</p>
            <p className="text-sm font-normal my-2 space-x-2">On site <span className="text-white/60">|</span> Full time <span className="text-white/60">|</span> Mid level</p>
          <p className="text-base  font-medium">18,000–26,000 BDT/month</p>
        </div>
        </div>

         <div className="py-6 pl-2 max-w-screen-xl mx-auto space-y-4 items-start">
      <section>
        <h2 className=" text-2xl font-semibold my-2">About</h2>
        <p className="text-gray-600 font-normal w-[90%]">{jobInfo.about}</p>
      </section>

      <section className="pt-4">
        <h2 className="text-2xl font-semibold mb-2">Position Overview</h2>
        <p className="text-gray-600 font-normal w-[90%]">{jobInfo.overview}</p>
      </section>

      <section className="pt-4">
        <h2 className="text-2xl font-semibold mb-2">Job Responsibilities</h2>
        <ul className="list-disc list-inside font-normal text-gray-600 space-y-1">
          {jobInfo.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pt-4">
        <h2 className="text-2xl font-semibold mb-2">Qualifications</h2>
        <ul className="list-disc list-inside text-gray-600 font-normal space-y-1">
          {jobInfo.qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>

          

      </div>
    );
  };
  

export default JobDetails;
