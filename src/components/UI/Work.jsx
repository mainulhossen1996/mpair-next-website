import React from 'react'
import Image from "next/image";


const projects = [
    {
      id: 1,
      title: "DGFI",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#0b0b0d",
    },
    {
      id: 2,
      title: "Arcland",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#111113",
    },
    {
      id: 3,
      title: "Dubai Curtain",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#16161a",
    },
    {
      id: 4,
      title: "Emedi Pharma",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#1c1c20",
    },
  ];

  
const Work = () => {
  return (
    <div className=''>
        <div className='max-w-screen-xl mx-auto mb-36 pt-20'>
           
            <p className='text-[40px] font-normal text-white text-center'>Recent Completed Project</p>
            

            <div className="relative mt-10 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="sticky top-32 h-[550px] px-6 rounded-3xl text-white flex w-10/12 mx-auto"
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="flex gap-10 pt-6 w-full">
            <p className="text-[14px] font-Code w-2/12">Project 0{project.id}</p>
            <div className="w-10/12">
              <div className="flex items-center gap-10 mb-6">
                <p className="text-3xl">{project.title}</p>
                <div className="flex gap-4 items-center">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="h-[30px] rounded-full px-6 py-[5px] bg-[#262626] text-sm text-gray-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex">
                <div className="w-full">
                  <Image
                    src={project.images}
                    width={800}
                    height={500}
                    alt=""
                    className="h-[440px] w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

        </div>
    </div>
  )
};
export default Work;
