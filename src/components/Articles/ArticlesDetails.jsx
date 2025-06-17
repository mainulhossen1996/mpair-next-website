"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import app from "@/firebase/firebase.config";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";

const ArticlesDetails = () => {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [blogName, setBlogName] = useState("");
  const [description, setDescription] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [label, setLabel] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "blog");

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

  const handleDelete = (id) => {
    const db = getDatabase(app);
    remove(ref(db, `blog/${id}`));
  };

  const handleEdit = (blog) => {
    setEditId(blog.id);
    setBlogName(blog.blog_name);
    setCreateDate(blog.createDate);
    setLabel(blog.label);
    setDescription(blog.description);
    setImage(blog.image);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    if (!editId) return;
    const db = getDatabase(app);
    update(ref(db, `blog/${editId}`), {
      blog_name: blogName,
      description,
      createDate,
      label,
      image,
    }).then(() => {
      alert("Data Updated successfully");
      setEditId(null);
      setBlogName("");
      setCreateDate("");
      setLabel("");
      setDescription("");
      setImage("");
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog List</h2>
      <div className="grid grid-cols-1 gap-4">
        {blogs.map((blog) =>
          editId === blog.id ? (
            <div
              key={blog.id}
              className="p-4 flex flex-col gap-5 border rounded-lg shadow"
            >
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="border bg-white rounded-lg p-1 outline-none border-slate-300 w-full"
                  accept="image/*"
                  required
                />

                {image && (
                  <img
                    src={image}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded-lg"
                  />
                )}
              </div>

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
                  <span className="label-text">Description</span>
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
            <div key={blog.id} className="p-4 border rounded-lg shadow">
              <div className="flex justify-end my-2">
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="rounded"
                >
                  <RiDeleteBin6Line className="text-xl text-red-400" />
                </button>
                <button
                  onClick={() => handleEdit(blog)}
                  className="rounded ml-2"
                >
                  <RiEditBoxLine className="text-xl " />
                </button>
              </div>
              <img
                src={blog.image}
                alt="Blog"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-2">{blog.blog_name}</h3>
              <p className="text-gray-600">{blog.description}</p>
              <span className="text-sm text-gray-400">{blog.createDate}</span>
              <p className="text-md text-blue-500 ">  {blog.label}  </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ArticlesDetails;
