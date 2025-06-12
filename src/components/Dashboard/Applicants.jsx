
"use client";
import app from "@/firebase/firebase.config";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const Applicants = () => {
  const [applicants, setApplicants] = useState([]); 
  const [expandedJobs, setExpandedJobs] = useState({}); 
  const [openApplicants, setOpenApplicants] = useState({}); 

  useEffect(() => {
    const db = getDatabase(app);
    const applicantRef = ref(db,"applicant");

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

  const toggleJobView = (title) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleApplicant = (applicantId) => {
    setOpenApplicants((prev) => ({
      ...prev,
      [applicantId]: !prev[applicantId],
    }));
  };

 
  const jobTitles = [...new Set(applicants.map((app) => app.title))];

  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 text-center">Applicants</h2>

      {jobTitles.map((title) => {
        const filteredApplicants = applicants.filter((app) => app.title === title);
        const displayedApplicants = expandedJobs[title]
          ? filteredApplicants
          : filteredApplicants.slice(0, 5);

        return (
          <div key={title} className="mb-8 bg-white p-4 rounded-xl border-2">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>

            <div className="grid gap-4">
              {displayedApplicants.map((app) => {
                const open = openApplicants[app?.id];

                return (
                  <div
                    key={app.id}
                    onClick={() => toggleApplicant(app?.id)}
                    className="cursor-pointer border rounded-lg p-4 bg-gray-100"
                  >
                    <div>
                      <p className="font-semibold capitalize">{app?.name}</p>
                      <p className="text-sm text-blue-600">
                        <a href={app?.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a> |{" "}
                        <a href={app?.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      </p>
                    </div>

                    {open && (
                      <div className="mt-4 text-sm space-y-1">
                        <p><strong>Email:</strong> {app?.email}</p>
                        <p><strong>Phone:</strong> {app?.phone}</p>
                        <p>
                          <strong>Resume:</strong>{" "}
                          <a href={app?.linkedin} target="_blank" rel="noopener noreferrer" className="text-green-600">
                            View Resume
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {filteredApplicants.length > 5 && !expandedJobs[title] && (
              <button
                onClick={() => toggleJobView(title)}
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
