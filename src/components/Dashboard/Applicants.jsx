"use client";
import {app} from "@/firebase/firebase.config";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [openApplicants, setOpenApplicants] = useState({});
  const [selectedTitle, setSelectedTitle] = useState("All");

  useEffect(() => {
    const db = getDatabase(app);
    const applicantRef = ref(db, "applicant");

    onValue(applicantRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const applicantArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setApplicants(applicantArray);
      } else {
        setApplicants([]);
      }
    });
  }, []);

  const toggleApplicant = (applicantId) => {
    setOpenApplicants((prev) => ({
      ...prev,
      [applicantId]: !prev[applicantId],
    }));
  };

  const jobTitles = ["All", ...new Set(applicants.map((app) => app?.title))];

  const filteredApplicants =
    selectedTitle === "All"
      ? applicants
      : applicants.filter((app) => app.title === selectedTitle);

  return (
    <section className="ml-8 mt-32 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-semibold mb-6 text-center">Applicants</h2>
      <div className="mb-6 max-h-[50vh] ">
        <select
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
          className="border rounded px-4 py-2"  >
          {jobTitles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4 mb-10">
        {filteredApplicants.map((app) => {
          const open = openApplicants[app?.id];
          return (
            <div
              key={app.id}
              onClick={() => toggleApplicant(app?.id)}
              className="cursor-pointer border rounded-lg p-4 bg-gray-50 "
            >
              <div>
                <p className="font-semibold capitalize">{app?.name}</p>
                <p className="text-sm text-blue-600">
                  <a
                    href={app?.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>{" "}
                  |{" "}
                  <a
                    href={app?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>

              {open && (
                <div className="mt-4 text-sm space-y-1">
                  <p>
                    <strong>Email:</strong> {app?.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {app?.phone}
                  </p>
                  <p>
                    <strong>Resume:</strong>
                    <a
                      href={app?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600"
                    >
                      View Resume
                    </a>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Applicants;
