"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import jobInfo from "./JobInfo";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "@/firebase/firebase.config";
import ApplyForm from "./ApplyForm";


const JobDetails = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "job");

    onValue(blogRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const blogArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        // console.log("uuuuuuuuuuuuu",blogArray);
        setJobs(blogArray);
      } else {
        setJobs([]);
      }
    });
  }, []);

  useEffect(() => {
    if (id && jobs?.length > 0) {
      const selectedBlog = jobs?.find((item) => item?.id === id);
      setJob(selectedBlog || null);
    }
  }, [id, jobs]);

  if (!job) return <div>Loading...</div>;

  return (
    <>
    <div className="w-full min-h-screen mt-[100px] ">
      <div
        className="max-w-screen-xl mx-auto h-[280px] text-white p-8 md:p-10"
        style={{ background: "linear-gradient(to right, #0055ff, #4D88ff)" }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col">
          <p className="text-sm font-medium ">Engineering</p>
          <h1 className="text-xl md:text-4xl font-semibold mt-10">
            {job.heading}
          </h1>
          <p className="text-sm text-gray-100 mt-4">Deadline: {job?.deadline}</p>
          <p className="text-sm font-normal my-2 space-x-2">
            On site <span className="text-white/60">|</span> Full time{" "}
            <span className="text-white/60">|</span> Mid level
          </p>
          <p className="text-base  font-medium">18,000–26,000 BDT/month</p>
        </div>
      </div>

      <div className="py-6 pl-2 max-w-screen-xl mx-auto space-y-4 items-start">
        <section>
          <h2 className=" text-2xl font-semibold my-2">About</h2>
          <p className="text-gray-600 font-normal w-[90%]">{jobInfo.about}</p>
        </section>

        <section className="pt-4">
          <h2 className="text-2xl font-semibold mb-2">Position Overview</h2>
          <p className="text-gray-600 font-normal w-[90%]">
            {jobInfo.overview}
          </p>
        </section>

        <section className="pt-4">
          <h2 className="text-2xl font-semibold mb-2">Job Responsibilities</h2>
          <ul className="list-disc list-inside font-normal text-gray-600 space-y-1">
            {jobInfo.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="pt-4">
          <h2 className="text-2xl font-semibold mb-2">Qualifications</h2>
          <ul className="list-disc list-inside text-gray-600 font-normal space-y-1">
            {jobInfo.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
    <ApplyForm title={job.heading}/>
    </>
  );
};

export default JobDetails;
