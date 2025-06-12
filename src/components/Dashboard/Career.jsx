"use client";

import React, { useState } from "react";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import app from "@/firebase/firebase.config";

import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";

// Sample  data
const initialJobs = [
  {
    id: 1,
    jobHeading: "Frontend Developer",
    jobSubheading: "React & Tailwind Expert",
    deadline: "2025-06-30",
    status: "Ongoing",
    experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora minus delectus ullam rem? Sed molestias eligendi id minus, dignissimos eos voluptatum similique ratione laudantium incidunt velit ullam consequuntur? Eligendi.",
  },
  {
    id: 2,
    jobHeading: "Backend Developer",
    jobSubheading: "Node.js & MongoDB",
    deadline: "2025-07-10",
    status: "Closed",
    experience:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora minus delectus ullam rem? Sed molestias eligendi id minus, dignissimos eos voluptatum similique ratione laudantium incidunt velit ullam consequuntur? Eligendi.",
  },
];

const Career = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);

  const initialForm = {
    jobHeading: "",
    jobSubheading: "",
    deadline: "",
    jobDescription: "",
    experience: "",
    salary: "",
    Location: "",
    skills: "",
    status: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setJobs((prev) =>
        prev.map((job) =>
          job.id === editingJobId ? { ...job, ...formData, id: job.id } : job
        )
      );
    } else {
      const newJob = { ...formData, id: Date.now() };
      setJobs([newJob, ...jobs]);
    }

    setFormData(initialForm);
    setShowModal(false);
    setIsEditing(false);
    setEditingJobId(null);
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleEdit = (job) => {
    setFormData(job);
    setShowModal(true);
    setIsEditing(true);
    setEditingJobId(job.id);
  };

  return (
    <div className="p-6 max-w-screen mx-auto">
      <h1 className="text-3xl font-semibold text-center">Job Listings</h1>

      <div className="flex justify-end items-center mb-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
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
      <div className="space-y-10">
        {jobs.map((job) => (
          <div key={job.id} className="relative border p-4 rounded shadow-sm">
            <div className="flex justify-end">

              <button onClick={() => handleDelete(job.id)} className="rounded">
                <RiDeleteBin6Line className="text-2xl text-red-400" />
              </button>
              <button onClick={() => handleEdit(job)} className="rounded ml-2">
                <RiEditBoxLine className="text-2xl " />
              </button>
            </div>

            <h2 className="text-xl font-semibold my-2">{job.jobHeading}</h2>
            <p className="text-gray-600">{job.jobSubheading}</p>
            <p className="text-sm text-gray-500 my-2">
              Deadline: {job.deadline}
            </p>
            <p className="text-sm">
              Experience:{" "}
              <span className="text-gray-500">{job.experience}</span>
            </p>
            <span
              className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
                job.status === "Ongoing"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {job.status}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium mb-1">Job Heading</label>
                <input
                  type="text"
                  name="jobHeading"
                  onChange={handleChange}
                  value={formData.jobHeading}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Job Title</label>
                <input
                  type="text"
                  name="jobSubheading"
                  onChange={handleChange}
                  value={formData.jobSubheading}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  onChange={handleChange}
                  value={formData.deadline}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Job Description
                </label>
                <textarea
                  name="jobDescription"
                  onChange={(e) => {
                    const words = e.target.value.trim().split(/\s+/);
                    if (words.length <= 250) {
                      setFormData((prev) => ({
                        ...prev,
                        jobDescription: e.target.value,
                      }));
                    }
                  }}
                  value={formData.jobDescription}
                  className="w-full p-2 border rounded"
                  rows={3}
                  required
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">
                  {
                    formData.jobDescription.trim().split(/\s+/).filter(Boolean)
                      .length
                  }{" "}
                  / 250 words
                </p>
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Experience Required
                </label>
                <input
                  type="text"
                  name="experience"
                  onChange={handleChange}
                  value={formData.experience}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Salary</label>
                <input
                  type="text"
                  name="salary"
                  onChange={handleChange}
                  value={formData.salary}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="Location"
                  onChange={handleChange}
                  value={formData.Location}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Required Skills
                </label>
                <input
                  type="text"
                  name="skills"
                  onChange={handleChange}
                  value={formData.skills}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Job Status</label>
                <select
                  name="status"
                  onChange={handleChange}
                  value={formData.status}
                  className="w-full p-2 border rounded"
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
