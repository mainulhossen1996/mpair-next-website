

"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import app from "@/firebase/firebase.config";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { generateSlug } from "@/utils/genrateSlug";

const ArticlesDetails = () => {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [blogName, setBlogName] = useState("");
  const [description, setDescription] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [label, setLabel] = useState("");
  const [image, setImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContent, setEditingContent] = useState("");

  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['clean'],
      ],
    },
  });


  useEffect(() => {
    if (quill && isModalOpen && editingContent) {
      quill.clipboard.dangerouslyPasteHTML(editingContent);
    }
  }, [quill, isModalOpen, editingContent]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setDescription(quill.root.innerHTML);
      });
    }
  }, [quill]);

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

    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      remove(ref(db, `blog/${id}`));
    }
  };


  const handleEdit = (blog) => {
    setEditId(blog.id);
    setBlogName(blog.blog_name);
    setCreateDate(blog.createDate);
    setLabel(blog.label);
    setImage(blog.image);
    setEditingContent(blog.description || "");
    setIsModalOpen(true);
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
      alert("Data updated successfully");
      setEditId(null);
      setBlogName("");
      setCreateDate("");
      setLabel("");
      setDescription("");
      setImage("");
      setEditingContent("");
      setIsModalOpen(false);
    });
  };

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed  inset-0  bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white  p-6 rounded-lg w-full max-w-xl shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-500"
              onClick={() => {
                setIsModalOpen(false);
                setEditingContent("");
              }}
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>

            <div className=" flex flex-col gap-5">
              <div>
                <label className="block font-medium">Image</label>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="border bg-white rounded-lg p-1 w-full outline-none"
                  accept="image/*"
                />
                {image && (
                  <img
                    src={image}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded-lg"
                  />
                )}
              </div>

              <div>
                <label className="block font-medium">Blog Name</label>
                <input
                  type="text"
                  value={blogName}
                  onChange={(e) => setBlogName(e.target.value)}
                  className="border rounded-lg p-1 w-full outline-none"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-medium">Create Date</label>
                  <input
                    type="date"
                    value={createDate}
                    onChange={(e) => setCreateDate(e.target.value)}
                    className="border rounded-lg p-1 w-full outline-none"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block font-medium">Label</label>
                  <select
                    onChange={(e) => setLabel(e.target.value)}
                    value={label}
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

              <div className="mb-14">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <div className="bg-white rounded-md h-[100px]">
                  <div ref={quillRef} />
                </div>
              </div>

              <div className=""> <button
                onClick={handleUpdate}
                className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
              >
                Update Blog
              </button></div>

            </div>
          </div>
        </div>
      )}

      {/* Blog Cards */}
      {/* <a href={`/articles/${generateSlug(blog?.blog_name)}`}></a> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded-lg shadow bg-white">
            <p className="text-lg font-semibold text-blue-500">{blog.label}</p>
            <div className="flex justify-end mb-2">
              <button onClick={() => handleDelete(blog.id)} className="rounded">
                <RiDeleteBin6Line className="text-2xl text-red-400" />
              </button>
              <button
                onClick={() => handleEdit(blog)}
                className="rounded ml-2"
              >
                <RiEditBoxLine className="text-2xl" />
              </button>
            </div>
            <img
              src={blog.image}
              alt="Blog"
              className="w-full h-48 object-cover rounded-lg "
            />
            <a
              className="text-lg font-semibold mt-2"
              target="_blank"
              rel="noopener noreferrer"
              href={`/articles/${generateSlug(blog?.blog_name)}`}>{blog.blog_name}</a>
            <p
              className="text-gray-600 py-2 text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  blog.description.length > 250
                    ? blog.description.slice(0, 250) + "..."
                    : blog.description,
              }}
            ></p>
            <span className="text-sm text-gray-400">{blog.createDate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesDetails;
