// "use client";

// import Image from "next/image";

// const Blogdetails = () => {
//   return (
//     <section className="flex flex-col items-center justify-center w-full relative">
//       {/* Banner Image */}
//       <div className=" relative mt-[100px] w-[80%] z-0">
//         <Image
//           src="/image/blog/banner image.png"
//           alt="Banner"
//           width={1600}
//           height={1000}
//           className="rounded-lg w-full h-auto object-cover"
//         />
//       </div>

//       {/* Rectangle + Content */}
//       <div className="relative z-10 w-[75%] bg-blue-50 rounded-xl shadow-xl -mt-[110px] px-10 py-16">
//         <div className="flex flex-col md:flex-col-2 gap-10 items-start px-4">
//           {/* Text Content */}
//           <div>
//             <p className="font-light text-sm">Robotics and AI</p>
//             <h1 className="lg:text-4xl md:text-2xl font-semibold my-3">
//               The Rise of AI: How Robotics is Reshaping the Future
//             </h1>
//             <p className="text-sm text-gray-400 mb-6">
//               4 min read · 12.04.2025
//             </p>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
//               />
//             </svg>

//             <p className="text-base text-gray-700 mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//               nec odio. Praesent libero.
//             </p>
//             <p className="text-base text-gray-700 mb-4">
//               Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
//               sagittis ipsum.
//             </p>
//             <p className="text-base text-gray-700">
//               Fusce nec tellus sed augue semper porta. Mauris massa.
//             </p>
//           </div>

//           {/* Relevant Image */}
//           <div className="w-full">
//             <Image
//               src="/image/blog/blogimage1.png"
//               alt="Relevant"
//               width={500}
//               height={400}
//               className="rounded-lg w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blogdetails;

"use client";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import app from "@/firebase/firebase.config";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";

const BlogDetails = () => {
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
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
