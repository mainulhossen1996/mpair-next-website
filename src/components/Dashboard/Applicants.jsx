"use client";
import { useState } from "react";

const Applicants = () => {
  const [expandedJobs, setExpandedJobs] = useState({});
  const [openApplicants, setOpenApplicants] = useState({});

  const jobs = [
    {
      title: "Frontend Developer",
      applicants: [
        {
          name: "Ava Smith",
          email: "ava@email.com",
          phone: "123456789",
          portfolio: "https://ava.dev",
          linkedin: "https://linkedin.com/in/ava",
          resume: "https://example.com/ava_resume.pdf",
        },
        {
          name: "John Doe",
          email: "john@email.com",
          phone: "06845347",
          portfolio: "https://john.dev",
          linkedin: "https://linkedin.com/in/john",
          resume: "https://example.com/john_resume.docx",
        },
        {
          name: "Ava Smith",
          email: "ava@email.com",
          phone: "123456789",
          portfolio: "https://ava.dev",
          linkedin: "https://linkedin.com/in/ava",
          resume: "https://example.com/ava_resume.pdf",
        },
        {
          name: "John Doe",
          email: "john@email.com",
          phone: "06845347",
          portfolio: "https://john.dev",
          linkedin: "https://linkedin.com/in/john",
          resume: "https://example.com/john_resume.docx",
        },
        {
          name: "Ava Smith",
          email: "ava@email.com",
          phone: "123456789",
          portfolio: "https://ava.dev",
          linkedin: "https://linkedin.com/in/ava",
          resume: "https://example.com/ava_resume.pdf",
        },
        {
          name: "John Doe",
          email: "john@email.com",
          phone: "06845347",
          portfolio: "https://john.dev",
          linkedin: "https://linkedin.com/in/john",
          resume: "https://example.com/john_resume.docx",
        },
      ],
    },
    {
      title: "Backend Developer",
      applicants: [
        {
          name: "Lee Brown",
          email: "lee@email.com",
          phone: "05339373495",
          portfolio: "https://lee.dev",
          linkedin: "https://linkedin.com/in/lee",
          resume: "https://example.com/lee_resume.pdf",
        },
      ],
    },
  ];

  const toggleJobView = (index) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleApplicant = (jobIndex, applicantIndex) => {
    const key = `${jobIndex}-${applicantIndex}`;
    setOpenApplicants((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-center">Applicants</h2>

      {jobs.map((job, jobIndex) => {
        const applicants = expandedJobs[jobIndex]
          ? job.applicants
          : job.applicants.slice(0, 5);

        return (
          <div key={jobIndex} className="mb-8 bg-white p-4 rounded-xl border-2">
            <h3 className="text-xl font-semibold mb-4">{job.title}</h3>

            <div className="grid gap-4">
              {applicants.map((app, appIndex) => {
                const key = `${jobIndex}-${appIndex}`;
                const open = openApplicants[key];

                return (
                  <div
                    key={appIndex}
                    onClick={() => toggleApplicant(jobIndex, appIndex)}
                    className="cursor-pointer border rounded-lg p-4 bg-gray-100 "
                  >
                    <div>
                      <p className="font-semibold">{app.name}</p>
                      <p className="text-sm text-blue-600">
                        <a href={app.portfolio} target="_blank">Portfolio</a> |{" "}
                        <a href={app.linkedin} target="_blank">LinkedIn</a>
                      </p>
                    </div>

                    {open && (
                      <div className="mt-4 text-sm space-y-1">
                        <p><strong>Email:</strong> {app.email}</p>
                        <p><strong>Phone:</strong> {app.phone}</p>
                        <p>
                          <strong>Resume:</strong>{" "}
                          <a href={app.resume} target="_blank" className="text-green-600" download>
                            Download
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {job.applicants.length > 5 && !expandedJobs[jobIndex] && (
              <button
                onClick={() => toggleJobView(jobIndex)}
                className="mt-4 bg-violet-600 text-white px-4 py-2 rounded"
              >
                See Full List
              </button>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Applicants;
