"use client";
import { useContext, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "@/firebase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ArticlesDetails from "../Articles/ArticlesDetails";

const Blog = () => {

  const [image, setImage] = useState("");
  const [blogName, setBlogName] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { logout } = useContext(AuthContext);

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
      image,
      blog_name: blogName,
      createDate,
      label,
      description,
    }).then(() => {
      alert("Data Added successfully"); 
      setImage("");
      setBlogName("");
      setCreateDate("");
      setLabel("");
      setDescription("");
      setIsModalOpen(false); 
    });
  };

  const handleLogOut = () => {
    logout().then().catch();
  };

  return (
    <section className="ml-56 mt-32">
     
      <div className="flex justify-end mr-24">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white p-2 rounded-full w-44 h-12"
        >
          + Add Article
        </button>{" "}
      </div>
      <div className="flex flex-col ">
        <div className="l overflow-y-auto m-4 ">
          <ArticlesDetails />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-2/3 max-h-[90vh] overflow-y-auto rounded-xl p-8 relative">
             
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-black" >  &times;
              </button>

            
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
                className="btn bg-violet-500 w-full p-2 rounded-lg text-white"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
