"use client";
import React, { useState } from "react";
import app from "@/firebase/firebase.config";
import { getDatabase, ref, set } from "firebase/database";
import JobList from "./JobList";

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    jobHeading: "",
    jobSubheading: "",
    deadline: "",
    jobDescription: "",
    experience: "",
    salary: "",
    Location: "",
    skills: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const jobId = `job-${Date.now()}`;

    const newDocRef = ref(db, `job/${jobId}`);

    set(newDocRef, {
      heading: formData.jobHeading,
      subheading: formData.jobSubheading,
      deadline: formData.deadline,
      description: formData?.jobDescription,
      experience: formData.experience,
      salary: formData.salary,
      location: formData.Location,
      skills: formData.skills,
      status: formData.status,
    }).then(() => {
      alert("Data Added successfully");
      setFormData("");
    });
  };
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 mt-[180px] mb-20 max-w-7xl mx-auto">
      {/* Left Section - Job Form */}
      <div className="flex flex-col w-full lg:w-2/3">
        <h1 className="text-4xl font-semibold mb-6 text-center">
          Post a New Job
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 w-full max-w-xl mx-auto"
        >
          {/* Job Heading */}
          <div>
            <label htmlFor="jobHeading" className="block font-medium mb-1">
              Job Heading <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="jobHeading"
              placeholder="Enter job heading"
              onChange={handleChange}
              className="w-full p-2 border rounded outline-none"
              required
            />
          </div>

          {/* Job Subheading */}
          <div>
            <label htmlFor="jobSubheading" className="block font-medium mb-1">
              Job Title <span className="text-red-500">*</span>
            </label>
            <select
              name="jobSubheading"
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

          {/* Deadline */}
          <div>
            <label htmlFor="deadline" className="block font-medium mb-1">
              Deadline <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="deadline"
              onChange={handleChange}
              className="w-full p-2 border rounded outline-none"
              required
            />
          </div>

          {/* Job Description */}
          <div>
            <label htmlFor="jobDescription" className="block font-medium mb-1">
              Job Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="jobDescription"
              placeholder="Describe the job (max 250 words)"
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
              className="w-full p-2 border rounded outline-none"
              rows={4}
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

          {/* Experience */}
          <div>
            <label htmlFor="experience" className="block font-medium mb-1">
              Experience Required <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="experience"
              placeholder="e.g., 2 years"
              onChange={handleChange}
              className="w-full p-2 border rounded outline-none"
              required
            />
          </div>

          {/* Salary */}
          <div>
            <label htmlFor="salary" className="block font-medium mb-1">
              Salary <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="salary"
              placeholder="e.g., 60000"
              onChange={handleChange}
              className="w-full p-2 border rounded outline-none"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="Location" className="block font-medium mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Location"
              placeholder="e.g., Dhaka"
              onChange={handleChange}
              className="w-full p-2 border rounded outline-none"
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="block font-medium mb-1">
              Required Skills <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="skills"
              placeholder="e.g., React, Tailwind, Firebase"
              onChange={handleChange}
              className="w-full p-2 border rounded outline-none"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block font-medium mb-1">
              Job Status <span className="text-red-500">*</span>
            </label>
            <select
              name="status"
              onChange={handleChange}
              className="w-full p-2 border rounded outline-none"
              required
            >
              <option value="">Select status</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[150px] rounded-full bg-blue-500 text-white p-3 hover:bg-blue-600 transition duration-200"
          >
            Add to the List
          </button>
        </form>
      </div>

      {/* Right Section - Job List */}
      <div className="w-full lg:w-1/3">
        <h1 className="text-4xl font-semibold mb-6 text-center mt-10 lg:mt-0">
          Job List
        </h1>
        <div>
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default JobPostingForm;
