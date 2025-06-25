"use client";
import React from "react";
import app from "@/firebase/firebase.config";
import { getDatabase, onValue, ref, remove, update } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import toast from "react-hot-toast";


const JobList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [deadline, setDeadline] = useState("");
  const [positionOverview, setPositionOverview] = useState("");
  const [jobResponsibilities, setJobResponsibilities] = useState("");
  const [status, setStatus] = useState("");

  const editRef = useRef();

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
        setBlogs(blogArray);
      } else {
        setBlogs([]);
      }
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editId && editRef.current && !editRef.current.contains(event.target)) {
        setEditId(null);
        setHeading("");
        setSubheading("");
        setDeadline("");
        setPositionOverview("");
        setJobResponsibilities("");
        setStatus("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editId]);

  const handleDelete = (id) => {
  const db = getDatabase(app);
 
  toast((t) => (
    <span className="text-base">
      Are you sure you want to delete this job?
      <div className="mt-2 flex justify-center gap-4">
        <button
          onClick={() => {
            remove(ref(db, `blog/${id}`))
              .then(() => toast.success("Blog deleted successfully"))
              .catch(() => toast.error("Failed to delete blog"));
            toast.dismiss(t.id);
          }}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 text-sm"
        >
          Yes
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded text-sm"
        >
          Cancel
        </button>
      </div>
    </span>
  ), {
    duration: 6000,
   
  });
};


  const handleEdit = (blog) => {
    setEditId(blog?.id);
    setHeading(blog?.heading || "");
    setSubheading(blog?.subheading || "");
    setDeadline(blog?.deadline || "");
    setPositionOverview(blog?.positionOverview || "");
    setJobResponsibilities(blog?.jobResponsibilities || "");
    setStatus(blog?.status || "");
  };

  const handleUpdate = () => {
    if (!editId) return;
    const db = getDatabase(app);
    update(ref(db, `job/${editId}`), {
      heading,
      subheading,
      deadline,
      positionOverview,
      jobResponsibilities,
      status,
    }).then(() => {
      toast.success("Job updated successfully!");
      setEditId(null);
      setHeading("");
      setSubheading("");
      setDeadline("");
      setPositionOverview("");
      setJobResponsibilities("");
      setStatus("");
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4 w-[98%]">
      {blogs.map((blog) =>
        editId === blog.id ? (
          <div
            key={blog.id}
            ref={editRef}
            className="p-4 flex flex-col gap-5 border rounded-lg shadow "
          >
            <div className="w-full">
              <label className="label">
                <span className="label-text">Job Heading</span>
              </label>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="border rounded-lg p-1 outline-none border-slate-300 w-full"
                required
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <select
                value={subheading}
                onChange={(e) => setSubheading(e.target.value)}
                className="w-full p-2 border rounded outline-none"
                required
              >
                <option value="">Select title</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="UI-UX Designer">UI-UX Designer</option>
                <option value="Database Engineer">Database Engineer</option>
              </select>
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="border rounded-lg p-1 outline-none border-slate-300 w-full"
                required
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Position Overview</span>
              </label>
              <textarea
                value={positionOverview}
                onChange={(e) => setPositionOverview(e.target.value)}
                className="border rounded-lg p-1 outline-none border-slate-300 w-full"
                rows="3"
                required
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Job Responsibilities</span>
              </label>
              <textarea
                value={jobResponsibilities}
                onChange={(e) => setJobResponsibilities(e.target.value)}
                className="border rounded-lg p-1 outline-none border-slate-300 w-full"
                rows="3"
                required
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 border rounded outline-none"
                required
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <button
              onClick={handleUpdate}
              className="bg-violet-100 text-black px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        ) : (
          <div
            key={blog?.id}
            className="p-4 border rounded-lg shadow max-w-screen-2xl"
          >
            {/* Dropdown for status */}
            <div className="mb-8">
              <select
                value={blog.status}
                onChange={(e) =>
                  update(ref(getDatabase(app), `job/${blog?.id}`), {
                    status: e.target.value,
                  })
                }
                className="mt-1 outline-none block w-40 px-2 py-1 border rounded-md shadow-sm border-gray-300"
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            {/* Edit/Delete buttons */}
            <div className="flex justify-end -mt-12">
              <button onClick={() => handleDelete(blog.id)} className="rounded">
                <RiDeleteBin6Line className="text-2xl text-red-400" />
              </button>
              <button onClick={() => handleEdit(blog)} className="rounded ml-2">
                <RiEditBoxLine className="text-2xl" />
              </button>
            </div>

            {/* Blog Content */}
            <a
              href={`/career/${blog?.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium block"
            >
              {blog?.heading}
            </a>
            <p className="text-gray-600 text-sm">{blog?.jobResponsibilities}</p>
            <span className="text-sm text-gray-400">{blog?.status}</span>
          </div>
        )
      )}
    </div>
  );
};

export default JobList; 
