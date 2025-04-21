"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const selectedJob = JobData?.find((item) => item?.id === id);
      setJob(selectedJob);
      setLoading(false);
    }, [id]);
  
    if (loading) {
        return <div>Loading...</div>; // Display a loading indicator
      }
    
     
      //if (!job) return <div>Loading...</div>;
  
    return (
      <div className="w-full min-h-screen ">
       
          <div className="flex flex-col gap-10 justify-center items-center mx-auto pl-16 mt-[120px]">
            {/* Job Content */}
            <div className=" ">
              <h1 className="lg:text-4xl md:text-2xl font-semibold my-5 text-gray-800"> {job.heading}</h1>
              <p className="text-sm text-gray-400 mb-6">{job.subheading}</p>
              <p className="text-sm text-gray-400 mb-6">Deadline: {job.deadline}</p>
              <p className="text-base text-gray-600 mb-4 w-1/2">{job.description}</p>

              <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc pl-5">
                <li> <span className="font-medium text-lg">Experience:</span> {job.experience}</li>
                <li> <span className="font-medium text-lg">Salary:</span> {job.salary}</li>
                <li> <span className="font-medium text-lg">Location:</span> {job.location}</li>
                <li> <span className="font-medium text-lg">Skills:</span> {job.skills && job.skills.join(", ")}</li>
                <li> <span className="font-medium text-lg">Status:</span> {job.status}</li>
              </ul>
            </div>
         <div>

        
          <Link href={`/career/apply`}>          
            <button className="justify-end mt-8 px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">Apply Now   
                <FontAwesomeIcon icon={faArrowUp} className="ml-2 rotate-45" style={{color: "#ffffff"}} />
                </button>
                </Link>
                 </div>
            </div>
        </div>
    );
  };
  

export default JobDetails;
