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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

            <p className="text-base text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <p className="text-base text-gray-700 mb-4">
              Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
            <p className="text-base text-gray-700">
              Fusce nec tellus sed augue semper porta. Mauris massa.
            </p>
          </div>

          {/* Relevant Image */}
          <div className="w-full">
            <Image 
              src="/image/blog/blogimage1.png" 
              alt="Relevant" 
              width={500} 
              height={400} 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
  

export default Blogdetails;
