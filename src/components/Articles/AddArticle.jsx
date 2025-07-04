"use client";

import {  useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "@/firebase/firebase.config";
import ArticlesDetails from "./ArticlesDetails";
import toast from "react-hot-toast";

const AddArticle = () => {
  const [image, setImage] = useState("");
  const [blogName, setBlogName] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const saveData = async () => {
    const db = getDatabase(app);
    const blogId = `blog-${Date.now()}`;

    const newDocRef = ref(db, `blog/${blogId}`);

    set(newDocRef, {
      image: image,
      blog_name: blogName,
      createDate,
      label,
      description,
    }).then(() => {
      toast.success("Data Added successfully");
      setImage("");
      setBlogName("");
      setCreateDate("");
      setLabel("");
      setDescription("");
    });
  };

  

  return (
    <div className="p-16">
      <h2 className="text-4xl text-black text-center p-10">Add Blog</h2>
      <div className="flex flex-row">

        <div className="bg-violet-200 w-2/3 max-h-[70vh] rounded-xl p-8">
          <div className="mb-8 flex">
            <div className="w-1/2">
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
                  className="mt-2 w-20 h-20 object-cover rounded-lg"
                />
              )}
            </div>

            <div className="md:w-1/2 ml-4">
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

              <select
                onChange={(e) => setLabel(e.target.value)}
                value={label}
                name=""
                id=""
                className="border rounded-lg p-[6px] outline-none border-slate-300 w-full bg-white"
              >
                <option defaultValue>Select label</option>
                <option value="Software">Software</option>
                <option value="Robotics">Robotics</option>
                <option value="Web">Web</option>
                <option value="All">All</option>
              </select>
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
            onClick={saveData}
            className="btn bg-violet-500 w-full p-1 rounded-lg text-white"
          >
            Submit
          </button>
        </div>
        
        <div className="w-1/3 h-[60vh] overflow-y-auto ml-4">
          <ArticlesDetails />
          <div className="my-4">
            <button
              onClick={handleLogOut}
              type="submit"
              className="text-xs w-full bg-violet-300 font-medium py-[2px] h-[35px]"
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;





