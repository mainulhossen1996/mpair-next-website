"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

// Example blog data
const Cardsgallery = [
  {
    id: "1",
    imageSrc: "/image/blog/bloglist1.png",
    imageSrc2: "/image/blog/arrow-up.png",
    heading: "How Robotics is Enhancing Everyday Life",
    subheading:
      "Web design is evolving rapidly, integrating immersive user experiences ... ...",
    date: "13 March, 2025; 04:30pm",
    labels: ["Robotics", "All"],
    content:
      "Artificial Intelligence (AI) is no longer just a buzzword. It’s actively transforming industries across the globe. From healthcare and education to finance and design, AI is optimizing processes and delivering solutions that were once thought impossible. One major area of impact is personalized learning. AI-powered tools now adapt to each learner’s pace, offering custom study paths and feedback. Meanwhile, in design, AI assists with generating layouts, analyzing user behavior, and even creating design assets automatically. While AI promises many benefits, it also raises ethical questions about bias, job displacement, and data privacy. As creators and users, we must balance innovation with responsibility. In conclusion, AI is here to stay — and it’s up to us to shape its impact for good.",
  },
  {
    id: "2",
    imageSrc: "/image/blog/bloglist2.png",
    imageSrc2: "/image/blog/arrow-up.png",
    heading: "How Robotics is Reshaping the Future",
    subheading:
      "Web design is evolving rapidly, integrating immersive user experiences ... ...",
    date: "13 March, 2025; 04:30pm",
    labels: ["Software", "All"],
  },
];

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const selectedBlog = Cardsgallery?.find((item) => item?.id === id);
    // console.log("details", selectedBlog);
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[500px]">
        
        {blog?.imageSrc ? (
          <Image
            alt="Card background"
            src={blog?.imageSrc}
            fill
            className="object-cover"
          />
        ) : null}
      </div>

      {/* Overlapping Content Box */}
      <div className="relative z-10 -mt-[200px] px-4 md:px-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {blog.heading}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
