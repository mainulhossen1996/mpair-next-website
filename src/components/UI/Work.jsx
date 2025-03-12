import React from 'react'
import Image from "next/image";


const projects = [

    {
      id: 1,
      industry: "Ecommerce",
      title: "Emedi Pharma",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
    },
    {
      id: 2,
      industry: "Infrustracture",
      title: "Old Martin",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
    },
    {
      id: 3,
      industry: "Health Care",
      title: "Moru",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
    },
    {
      id: 4,
      industry: "Education",
      title: "AL-Hasanain",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
    },
    {
      id: 5,
      industry: "Govt. & Public",
      title: "DGFI",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
    },
  ];

  
const Work = () => {
  return (
    <div className='bg-[#EDEEF7] relative'>
        <div className='max-w-screen-xl mx-auto pb-36 pt-20 relative'>
        <div className='text-center mb-4'>
            <span className='rounded-full px-4 text-blue-600 border border-blue-500  text-sm py-1 font-medium'>⭐ Industry Excelence</span>
            </div>
            <p className='text-[50px] font-light text-black text-center leading-[55px]'>Building Success<br/><span className=' font-crimson-italic text-[60px] font-semibold '>Accross Every Industry</span></p>
            
            <Image
            src="/image/glass-star.png"
            height={300}
            width={300}
            className='h-[180] object-contain absolute top-32 right-32 rotate-12'
            />



            <div className="relative mt-10 ">
           
      {projects.map((project) => (
        <div
          key={project.id}
          className="sticky top-32 h-[550px] px-6 rounded-3xl text-white flex w-10/12 mx-auto border"
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="flex gap-10 pt-6 w-full">
            <p className="text-[14px] text-gray-600 font-Code w-2/12">Project 0{project.id}</p>
            <div className="w-10/12">
              <div className="flex items-center gap-10 mb-6">
                <p className="text-2xl text-gray-800">{project.title}</p>
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
