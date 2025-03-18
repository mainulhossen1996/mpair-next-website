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
        <div className='max-w-screen-xl mx-auto lg:pb-36 pb-10 pt-20 relative'>
          <div className='lg:flex gap-10'>
            <div className='lg:w-4/12 relative lg:mt-10 mt-0 lg:pb-32 pb-4 px-4 lg:px-0'>
              <div className='sticky top-48'>

            <span className='rounded-full px-4 text-blue-600 border border-blue-500  text-sm py-1 font-medium'>⭐ Industry Excelence</span>

            <p className='lg:text-[40px] text-[30px] font-light text-black lg:leading-[55px] leading-[40px] mt-4'>Building Success<br/><span className=' font-crimson-italic lg:text-[60px] text-[40px] font-semibold '>Accross Every Industry</span></p>
            
            <p className='lg:text-xl text-sm lg:mt-10 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quasi necessitatibus.
            </p>
            <Image
            src="/image/glass-star.png"
            height={300}
            width={300}
            className='lg:h-[200] h-[100px] object-contain absolute lg:-top-20 -top-16 lg:left-[320px] left-40 rotate-12'
            />
            </div>
            </div>
      
            <div className="relative lg:mt-10 mt-4 lg:w-8/12 px-4 lg:px-0">
           
      {projects.map((project) => (
        <div
          key={project.id}
          className="lg:sticky lg:top-48 lg:h-[450px] h-[400px] lg:px-6 p-4 lg:rounded-3xl rounded-xl text-white flex mx-auto border lg:mb-0 mb-6"
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="lg:flex gap-10 lg:pt-2 pt-0 w-full justify-between">
            <div className='lg:w-4/12'>
            <p className="text-[14px] text-gray-600 font-Code">Project 0{project.id}</p>

            <p className="lg:text-2xl text-lg text-gray-800 lg:mt-10 mt-2">{project.title}</p>
            <div className="flex gap-2 items-center my-2">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="h-[28px] text-[12px] rounded-full px-3 py-[5px]  bg-[#e0e6eb] text-gray-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <p className='text-gray-800 lg:mt-10 mt-4 lg:text-md text-[12px]'>{project.description}</p>
            </div>
            <div className="lg:w-8/12 lg:mt-0 mt-4">

              <div className="flex">
                <div className="w-full">
                  <Image
                    src={project.images}
                    width={800}
                    height={500}
                    alt=""
                    className="lg:h-[400px] h-[187px] w-full lg:rounded-xl rounded-lg object-cover"
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
