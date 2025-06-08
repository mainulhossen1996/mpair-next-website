"use client";
import React, { useState } from "react";

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
    console.log(formData);
    alert("Job listed successfully!");

    return (
      <div className=" flex justify-center max-w-2xl mx-auto mb-20 p-6 mt-[180px]">
        <h1 className="text-4xl font-semibold mb-6 text-center">
          Post a New Job
        </h1>
        <p className="text-lg font-base mb-4">Fill in the job details below:</p>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              className="w-full p-2 border rounded "
              required
            />
          </div>

          {/* Job Subheading */}
          <div>
            <label htmlFor="jobSubheading" className="block font-medium mb-1">
              {" "}
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="jobSubheading"
              placeholder="Assigning work in one line"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
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
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Job Description in 250 words */}
          <div>
            <label htmlFor="jobDescription" className="block font-medium mb-1">
              {" "}
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
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
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
    );
  };
};

export default JobPostingForm;
