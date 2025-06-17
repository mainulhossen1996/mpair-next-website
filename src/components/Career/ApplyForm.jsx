"use client";
import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import { getDatabase, ref, set } from "firebase/database";
import app from "@/firebase/firebase.config";

const ApplyForm = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedin: "",
    resume: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e?.target;
    // console.log(files);
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const applicantId = `applicant-${Date.now()}`;

    const newDocRef = ref(db, `applicant/${applicantId}`);
    set(newDocRef, {
      title: title,
      name: formData?.name,
      email: formData?.email,
      phone: formData?.phone,
      portfolio: formData?.portfolio,
      linkedin: formData?.linkedin,
      resume: formData?.resume,
    }).then(() => {
      alert("added successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        portfolio: "",
        linkedin: "",
        resume: "",
      });
    });

    console.log(formData);
  };

  return (
    <div className="max-w-2xl items-center mx-auto border-2 p-8 rounded-xl my-10 ">
      <h2 className="text-4xl font-semibold mb-3 text-center">
        Job Application Form
      </h2>
      <p className=" text-center text-base text-gray-500 font-base mb-4">
        Enter your details into the Form below:
      </p>
      <form onSubmit={handleSubmit} className="space-y-5 ">
        {[
          { label: "Full Name", name: "name", placeholder: "Enter your name" },
          { label: "Email", name: "email", placeholder: "Enter your email" },
          { label: "Phone", name: "phone", placeholder: "ex. +8801** ** ****" },
          {
            label: "Portfolio",
            name: "portfolio",
            placeholder: "Enter link here",
          },
          {
            label: "Linkedin",
            name: "linkedin",
            placeholder: "Enter link here",
          },
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              className="w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
            />
          </div>
        ))}

        {/* Resume Upload */}
        <div>
          <label
            htmlFor="resume"
            className="block text-sm text-gray-700 font-medium mb-2"
          >
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
          <p className="text-xs font-normal text-red-500 mt-2 mb-6">
            ⚠️ Please upload your resume in PDF or DOC format. Max size: 5MB.
          </p>
        </div>

        
        <div className="items-center justify-center flex">
          <button
            type="submit"
            className=" flex items-center justify-center w-[170px] rounded-full bg-blue-500 text-white py-2 px-3 hover:bg-blue-600 transition duration-200"
          >
            
            Submit Now
            <ArrowUp className="ml-2 rotate-45" style={{ color: "#ffffff" }} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
