"use client";
import React, { useState } from "react";
import JobList from "../Career/JobList";
import app from "@/firebase/firebase.config";
import { getDatabase, ref, set } from "firebase/database";
import toast from 'react-hot-toast';


const Career = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const initialForm = {
    jobHeading: "",
    jobSubheading: "",
    deadline: "",
    positionOverview: "",
    qualifications: "",
    salaryRange: "",
    Location: "",
    jobResponsibilities: "",
    status: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // console.log("Field changed:", { name, value, type, checked });

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const jobId = `job-${Date.now()}`;
    const newDocRef = ref(db, `job/${jobId}`);

   // console.log("Submitted Data:", formData);

    set(newDocRef, {
      heading: formData.jobHeading,
      subheading: formData.jobSubheading,
      deadline: formData.deadline,
      positionOverview: formData.positionOverview,
      qualifications: formData.qualifications,
      salaryRange: formData.salaryRange,
      location: formData.Location,
      jobResponsibilities: formData.jobResponsibilities,
      status: formData.status,
      submittedAt: new Date().toISOString().split('T')[0],
    }).then(() => {
      toast.success("Job posted successfully!");
      setFormData(initialForm);
      setShowModal(false);
  }).catch(() => {
    toast.error("Failed to post!");
  });
  };

  return (
    <div className="pl-8 mt-24">
      <h1 className="text-2xl font-medium ">Job Listings</h1>
      
      <div className="flex justify-end items-center mb-2 mr-14 ">
        <button
          className="h-10 w-44 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
            setFormData(initialForm);
          }}
        >
          + Post a Job
        </button>
      </div>

      {/* Job List */}
      <div className=" max-h-[70vh] overflow-y-auto ">
        <JobList />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowModal(false);
                setIsEditing(false);
                setFormData(initialForm);
              }}
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-red-600"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4">
              {isEditing ? "Update Job" : "Post a New Job"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium mb-1">Job Heading</label>
                <input
                  type="text"
                  name="jobHeading"
                  value={formData.jobHeading}
                  placeholder="Enter job heading"
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Job Title</label>
                <select
                  name="jobSubheading"
                  value={formData.jobSubheading}
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none"
                  required
                >
                  <option value="">Select title</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="UI-UX Designer">UI-UX Designer</option>
                  <option value="Database Engineer">Database Engineer</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Position Overview
                </label>
                <textarea
                  name="positionOverview"
                  placeholder="Describe the job (max 250 words)"
                  onChange={(e) => {
                    const words = e.target.value.trim().split(/\s+/);
                    if (words.length <= 250) {
                      setFormData((prev) => ({
                        ...prev,
                        positionOverview: e.target.value,
                      }));
                    }
                  }}
                  value={formData.positionOverview}
                  className="w-full p-2 border rounded outline-none"
                  rows={4}
                  required
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">
                  {
                    formData.positionOverview
                      .trim()
                      .split(/\s+/)
                      .filter(Boolean).length
                  }{" "}
                  / 250 words
                </p>
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Qualifications Required
                </label>
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  placeholder="e.g., React, Tailwind, Firebase"
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none resize-y"
                  rows={3}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Job Responsibilities
                </label>
                <textarea
                  name="jobResponsibilities"
                  value={formData.jobResponsibilities}
                  placeholder="e.g., Bachelor’s degree in Computer Science"
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none"
                  rows={3}
                  required
                >
                  {" "}
                </textarea>
              </div>

              <div>
                <label className="block font-medium mb-1">Salary Range</label>
                <input
                  type="text"
                  name="salaryRange"
                  value={formData.salaryRange}
                  placeholder="e.g., 50000-60000"
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="Location"
                  value={formData.Location}
                  placeholder="e.g., Dhaka"
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Job Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2 border rounded outline-none"
                  required
                >
                  <option value="">Select status</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-blue-500 text-white p-3 hover:bg-blue-600 transition duration-200"
              >
                {isEditing ? "Update Job" : "Add to the List"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
