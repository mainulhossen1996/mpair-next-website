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
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      id: 2,
      industry: "Infrustracture",
      title: "Old Martin",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
   
    },
    {
      id: 3,
      industry: "Health Care",
      title: "Moru",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
   
    },
    {
      id: 4,
      industry: "Education",
      title: "AL-Hasanain",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
   
    },
    {
      id: 5,
      industry: "Govt. & Public",
      title: "DGFI",
      categories: ["Software Development", "UI/UX"],
      images:
        "/image/UI-Principle/Information.png",
      bgColor: "#ffffff",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
   
    },
  ];

  
const Work = () => {
  return (
    <div className='bg-[#EDEEF7] relative'>
        <div className='max-w-screen-xl mx-auto pb-36 pt-20 relative'>
          <div className='flex gap-10'>
            <div className='w-4/12 relative mt-10 pb-32'>
              <div className='sticky top-48'>

            <span className='rounded-full px-4 text-blue-600 border border-blue-500  text-sm py-1 font-medium'>⭐ Industry Excelence</span>

            <p className='text-[40px] font-light text-black leading-[55px] mt-4'>Building Success<br/><span className=' font-crimson-italic text-[60px] font-semibold '>Accross Every Industry</span></p>
            
            <p className='text-xl mt-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quasi necessitatibus.
            </p>
            <Image
            src="/image/glass-star.png"
            height={300}
            width={300}
            className='h-[200] object-contain absolute -top-20 left-[320px] rotate-12'
            />
            </div>
            </div>
      
            <div className="relative mt-10 w-8/12">
           
      {projects.map((project) => (
        <div
          key={project.id}
          className="sticky top-48 h-[450px] px-6 rounded-3xl text-white flex mx-auto border"
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="flex gap-10 pt-6 w-full justify-between">
            <div className='w-4/12'>
            <p className="text-[14px] text-gray-600 font-Code">Project 0{project.id}</p>

            <p className="text-2xl text-gray-800 mt-10">{project.title}</p>
            <div className="flex gap-2 items-center my-2">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="h-[28px] text-[12px] rounded-full px-3 py-[5px] bg-[#e0e6eb] text-gray-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <p className='text-gray-800 mt-10 text-md'>{project.description}</p>
            </div>
            <div className="w-8/12">

              <div className="flex">
                <div className="w-full">
                  <Image
                    src={project.images}
                    width={800}
                    height={500}
                    alt=""
                    className="h-[400px] w-full rounded-xl object-cover"
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
    </div>
  )
};
export default Work;
