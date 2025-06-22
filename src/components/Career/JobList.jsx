"use client";

import app from "@/firebase/firebase.config";
import { getDatabase, onValue, ref, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";


const JobList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [blogName, setBlogName] = useState("");
  const [description, setDescription] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [label, setLabel] = useState("");

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

        console.log("blof", blogArray)
        setBlogs(blogArray);
      } else {
        setBlogs([]);
      }
    });
  }, []);

  const handleDelete = (id) => {
    const db = getDatabase(app);
    remove(ref(db, `job/${id}`));
  };

  const handleEdit = (blog) => {
    setEditId(blog?.id);
    setBlogName(blog?.blog_name);
    setCreateDate(blog.createDate);
    setLabel(blog.label);
    setDescription(blog.description);
  };

  const handleUpdate = () => {
    if (!editId) return;
    const db = getDatabase(app);
    update(ref(db, `job/${editId}`), {
      blog_name: blogName,
      description,
      createDate,
      label,
    }).then(() => {
      alert("Data Updated successfully");
      setEditId(null);
      setBlogName("");
      setCreateDate("");
      setLabel("");
      setDescription("");
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4 max-w-screen-xl mx-auto">
      {blogs.map((blog) =>
        editId === blog.id ? (
          <div
            key={blog.id}
            className="p-4 flex flex-col gap-5 border rounded-lg shadow"
          >
            <div className="w-full">
              <label className="label">
                <span className="label-text">Blog Name</span>
              </label>
              <input
                type="text"
                value={blogName}
                onChange={(e) => setBlogName(e.target.value)}
                className="border rounded-lg p-1 outline-none border-slate-300 w-full"
                required
              />
            </div>
            <div className="mb-8 flex">
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Create Date</span>
                </label>
                <input
                  type="date"
                  value={createDate}
                  onChange={(e) => setCreateDate(e.target.value)}
                  className="border rounded-lg p-1 outline-none border-slate-300 w-full"
                  required
                />
              </div>

              <div className="md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Label</span>
                </label>
                <input
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  className="border rounded-lg p-1 outline-none border-slate-300 w-full"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded-lg p-1 outline-none border-slate-300 w-full"
                rows="3"
                required
              />
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
            {/*dropdown */}
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

            <div className="flex justify-end -mt-12">
              <button onClick={() => handleDelete(blog.id)} className="rounded">
                <RiDeleteBin6Line className="text-2xl text-red-400" />
              </button>
              <button onClick={() => handleEdit(blog)} className="rounded ml-2">
                <RiEditBoxLine className="text-2xl " />
              </button>
            </div>


            <a
              href={`/career/${blog?.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold mt-2"
            >
              {blog?.heading}
            </a>
            <p className="text-gray-600">{blog?.jobResponsibilities}</p>
            <span className="text-sm text-gray-400">{blog?.status}</span>
          </div>
        )
      )}
    </div>
  );
};

export default JobList;
