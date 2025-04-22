"use client";
import React, { useState } from "react";
import Link from "next/link";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    experience: "",
    skills: "",
    currentSalary: "",
    expectedSalary: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="max-w-2xl mx-auto mb-20 p-6 mt-[180px]">
      <h1 className="text-4xl font-semibold mb-6 text-center">
        Job Application Form
      </h1>
      <p className="text-lg font-base mb-4">
        Enter your details into the Form below:
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block font-medium mb-1">
            First Name
            <span className="text-red-500"> *</span>{" "}
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block font-medium mb-1">
            Last Name <span className="text-red-500"> *</span>{" "}
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
            <span className="text-red-500"> *</span>{" "}
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contact" className="block font-medium mb-1">
            Contact Number
            <span className="text-red-500"> *</span>{" "}
          </label>
          <input
            type="tel"
            name="contact"
            placeholder="Enter your contact number"
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none"
            required
          />
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block font-medium mb-1">
            Years of Experience
            <span className="text-red-500"> *</span>{" "}
          </label>
          <input
            type="number"
            name="experience"
            placeholder="e.g., 3"
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none"
            required
          />
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" className="block font-medium mb-1">
            Skills
            <span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            name="skills"
            placeholder="e.g., JavaScript, React, Node.js"
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none"
            required
          />
        </div>

        {/* Current Salary */}
        <div>
          <label htmlFor="currentSalary" className="block font-medium mb-1">
            Current Salary (in Taka)
            <span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            name="currentSalary"
            placeholder="e.g., 50000"
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none"
            required
          />
        </div>

        {/* Expected Salary */}
        <div>
          <label htmlFor="expectedSalary" className="block font-medium mb-1">
            Expected Salary (in Taka)
            <span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            name="expectedSalary"
            placeholder="e.g., 60000"
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none"
            required
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label htmlFor="resume" className="block font-medium mb-1">
            Upload Resume
            <span className="text-red-500"> *</span>{" "}
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full"
            required
          />
          <p className="text-sm text-red-600 mt-1 mb-4">
            ⚠️ Please upload your resume in PDF or DOC format. Max size: 5MB.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[150px] rounded-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-200"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
