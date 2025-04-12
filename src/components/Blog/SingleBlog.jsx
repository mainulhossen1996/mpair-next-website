"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";


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
                  "Artificial Intelligence (AI) and robotics have become integral to modern innovation, revolutionizing industries  and transforming the way we work and live. From autonomous vehicles to intelligent assistants, AI-driven robotics   is pushing technological boundaries, making  machines smarter, faster, and more efficient. AI has enabled robots to perform complex tasks that were once thought impossible. Traditional automation relied on  pre-programmed instructions, but modern AI-powered robots learn from data, adapt to new environments, and make decisions in real time. Machine learning and deep learning algorithms have significantly enhanced robotic capabilities, allowing them to understand and respond to human commands with greater precision.",
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
    content:
    "Artificial Intelligence (AI) and robotics have become integral to modern innovation, revolutionizing industries  and transforming the way we work and live. From autonomous vehicles to intelligent assistants, AI-driven robotics   is pushing technological boundaries, making  machines smarter, faster, and more efficient. AI has enabled robots to perform complex tasks that were once thought impossible. Traditional automation relied on  pre-programmed instructions, but modern AI-powered robots learn from data, adapt to new environments, and make decisions in real time. Machine learning and deep learning algorithms have significantly enhanced robotic capabilities, allowing them to understand and respond to human commands with greater precision.",
  },

  {
    id: "3",
    imageSrc: "/image/blog/bloglist3.png",
    imageSrc2: "/image/blog/arrow-up.png",
    heading: "The Future of Software Development",
    subheading: "Web design is evolving rapidly, integrating immersive user experiences ... ...",
    date: "13 March, 2025; 04:30pm",
    labels: ["Web", "All"],
    content:
    "Artificial Intelligence (AI) and robotics have become integral to modern innovation, revolutionizing industries  and transforming the way we work and live. From autonomous vehicles to intelligent assistants, AI-driven robotics   is pushing technological boundaries, making  machines smarter, faster, and more efficient. AI has enabled robots to perform complex tasks that were once thought impossible. Traditional automation relied on  pre-programmed instructions, but modern AI-powered robots learn from data, adapt to new environments, and make decisions in real time. Machine learning and deep learning algorithms have significantly enhanced robotic capabilities, allowing them to understand and respond to human commands with greater precision.",
  },
  {
    id: "4",
    imageSrc: "/image/blog/bloglist1.png",
    imageSrc2: "/image/blog/arrow-up.png",
    heading: "Inventory Management",
    subheading: "Web design is evolving rapidly, integrating immersive user experiences ... ...",
    date: "13 March, 2025; 04:30pm",
    labels: ["Software", "All"],
    content:
    "Artificial Intelligence (AI) and robotics have become integral to modern innovation, revolutionizing industries  and transforming the way we work and live. From autonomous vehicles to intelligent assistants, AI-driven robotics   is pushing technological boundaries, making  machines smarter, faster, and more efficient. AI has enabled robots to perform complex tasks that were once thought impossible. Traditional automation relied on  pre-programmed instructions, but modern AI-powered robots learn from data, adapt to new environments, and make decisions in real time. Machine learning and deep learning algorithms have significantly enhanced robotic capabilities, allowing them to understand and respond to human commands with greater precision.",
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
      <div className="relative w-[85%] h-[500px] mt-[100px] mx-auto">
        
        {blog?.imageSrc ? (
          <Image
            alt="Card background"
            src={blog?.imageSrc}
            fill
            className="object-cover rounded-2xl"
          />
        ) : null}
      </div>

       {/* Rectangle + Content */}
       <div className="relative z-10 w-[75%] max-w-5xl mx-auto bg-blue-50 rounded-xl shadow-xl -mt-[110px] px-10 py-16">
              <div className="flex flex-col md:flex-col-2 gap-10 items-start px-4">
                {/* Text Content */}
                <div>
                  <p className="font-light text-sm">{blog.labels}</p>
                  <h1 className="lg:text-4xl md:text-2xl font-semibold my-5 text-gray-800"> {blog.heading} </h1>
                  <p className="text-sm text-gray-400 mb-6">4 min read  · {blog.date}</p>
                  <div className="flex flex-row justify-end gap-6 mr-[80px]  -mt-10 mb-4">
                              <FaRegBookmark />
                              <FaShareAlt />

                  </div>
      
                  <div className="w-[850px] h-[1px] my-5 " style={{ backgroundColor: "#CACACA" }} />
                  <p className="text-base text-gray-600 mb-4"> {blog.content} </p>
                </div>
      
                {/* Relevant Image */}
                <div className="w-[70%] mx-auto">
                  <figure className="text-center">
                  <Image 
                    src="/image/blog/blogimage1.png" 
                    alt="Relevant" 
                    width={1050} 
                    height={300} 
                    className="rounded-lg w-full h-auto object-cover"/>
                     <figcaption className="mt-2 text-sm text-gray-500">Relevant caption for the photo </figcaption>
                    </figure>
                </div>
      
                <p className="text-base text-gray-700  ">AI-driven robotics is making a profound impact across various sectors:</p>
      <ul className="list-disc pl-5 -mt-5">
              <li><span className="font-medium">Manufacturing:</span> Smart robots automate assembly lines, improving efficiency and precision while reducing human intervention. </li>
              <li><span className="font-medium">Retail & Customer Service:</span> Chatbots and humanoid robots provide personalized shopping experiences <br /> and instant customer support.</li>
          </ul>
      
          <p className="text-base text-gray-700 mb-6">With continuous advancements in artificial intelligence, robotics will continue to enhance human capabilities, streamline operations, and open new possibilities for the future. </p>
      
              </div>
            </div>
    </div>
  );
};

export default SingleBlog;