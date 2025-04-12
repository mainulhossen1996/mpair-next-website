//this file is not in use

'use client';
import Image from 'next/image';


const  Blogdetails =() => {

    return (
    <section className="flex flex-col items-center justify-center w-full relative">
        {/* Banner Image */}
      <div className=" relative mt-[100px] w-[80%] z-0"> 
        <Image 
          src="/image/blog/banner image.png" 
          alt="Banner" 
          width={1600} 
          height={1000} 
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

 {/* Rectangle + Content */}
 <div className="relative z-10 w-[75%] bg-blue-50 rounded-xl shadow-xl -mt-[110px] px-10 py-16">
        <div className="flex flex-col md:flex-col-2 gap-10 items-start px-4">
          {/* Text Content */}
          <div>
            <p className="font-light text-sm">Robotics and AI</p>
            <h1 className="lg:text-4xl md:text-2xl font-semibold my-3">The Rise of AI: How Robotics is Reshaping the Future</h1>
            <p className="text-sm text-gray-400 mb-6">4 min read  · 12.04.2025</p>
            <div className="flex flex-row justify-end gap-6  -mt-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
            </div>

            <div className="w-[90%] h-[1px] my-4" style={{ backgroundColor: "#CACACA" }} />

            <p className="text-base text-gray-600 mb-4">
            Artificial Intelligence (AI) and robotics have become integral to modern innovation, revolutionizing industries <br /> and transforming the way we work and live. From autonomous vehicles to intelligent assistants, AI-driven robotics <br />  is pushing technological boundaries, making  machines smarter, faster, and more efficient.            </p>
            <p className="text-base text-gray-700 mb-4">
            AI has enabled robots to perform complex tasks that were once thought impossible. Traditional automation relied on <br /> pre-programmed instructions, but modern AI-powered robots learn from data, adapt to new environments, <br /> and make decisions in real time. Machine learning and deep learning algorithms have significantly enhanced robotic capabilities, allowing them to understand and respond to human commands with greater precision.            </p>

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
    </section>
  );
}
  
export default Blogdetails;
