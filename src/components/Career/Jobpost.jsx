"use client";
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import TextBox from '../Blog/Textbox';
import Link from "next/link";

const Joblist = [
    {
        id: 'frontend-developer',
        title: 'Frontend Developer',
        description: 'Build and maintain UI components using React and Tailwind.',
        deadline: '2025-05-30',
        status: 'Ongoing',
        labels: ['All', 'Software Engineer'],
    },
    {
        id: 'backend-engineer',
        title: 'Backend Engineer',
        description: 'Work with Node.js and databases to develop APIs.',
        deadline: '2025-06-10',
        status: 'Ongoing',
        labels: ['All', 'Software Engineer'],
      },
      {
        id: 'ui-ux-designer',
        title: 'UI/UX Designer',
        description: 'Design clean and modern interfaces for web and mobile.',
        deadline: '2025-05-25',
        status: 'Ongoing',
        labels: ['All', 'UI-UX Designer'],
      },
      {
        id: 'product-manager',
        title: 'Project Manager',
        description: 'Manage sprints and coordinate team delivery.',
        deadline: '2025-06-15',
        status: 'Ongoing',
        labels: ['All', 'Product Manager'],
      },
      {
        id: 'database-engineer',
        title: 'Database Engineer',
        description: 'Work with data seamlessly.',
        deadline: '2025-06-05',
        status: 'Ongoing',
        labels: ['All', 'Database Engineer'],

      },
];


const categories = ["All", "Software Engineer", "UI-UX Designer", "Database Engineer"];

const filteredCards = {
  All: Joblist.filter(jobs => jobs.labels.includes("All")),
  SWE: Joblist.filter(jobs => jobs.labels.includes("Software Engineer")),
  Designer: Joblist.filter(jobs => jobs.labels.includes("UI-UX Designer")),
  Database: Joblist.filter(jobs => jobs.labels.includes("Database Engineer")),
};



const Jobpost = () => {

    const [activeCategory, setActiveCategory] = useState("All");


  return (
    <div>
       

     <div className="max-w-screen-xl mx-auto mt-22 p-6">
      <div className="flex gap-4 justify-start mb-8 ">
        {/*selected caterogies here */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeCategory === category
                ? "w-50 h-15 bg-blue-100 text-blue-800 rounded-2lg"
                : "text-gray-400 bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* job list */}
      <div className="flex flex-col gap-5">
        {filteredCards[activeCategory]?.map((jobs, index) => (
          <div key={index} className=" p-4 ">
            <div className="flex flex-row justify-between items-start">
            
            <div>
                <h3 className="text-xl font-semibold mt-4">{jobs.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{jobs.description}</p>
            <p className="text-xs text-gray-400 mt-1"> Deadline: {jobs.deadline}</p>
            <p className="text-xs text-gray-400 mt-1">Status: {jobs.status}</p>
            </div>

              <Link href={`/career/${jobs.id}`}>          
            <button className="justify-end mt-8 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">Apply Now   
                <FontAwesomeIcon icon={faArrowUp} className="ml-2 rotate-45" style={{color: "#ffffff"}} />
                </button>
                </Link>

             </div>
      <hr className="my-8 border-t border-gray-300" />

          </div>
        ))}
      </div>
      </div>
    
    </div>
  );
};

export default Jobpost;

