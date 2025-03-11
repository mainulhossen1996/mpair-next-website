"use client"
import { React, useState } from 'react';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "How does UX studio differ from other UX and web design agencies?",
        answer:
          "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
      },
      {
        question: "Do you work with startups or only with B2B/enterprise companies?",
        answer:
          "The accordion toggles visibility of content panels by tracking the active index in state.",
      },
      {
        question: "Does your UX design agency help with product redesign?",
        answer:
          "Yes, Tailwind CSS is highly customizable. You can extend or override its default configurations.",
      },
      {
        question: "How do you handle working in different time zones?",
        answer:
          "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
      },
      {
        question: "How quickly can you start my UX design project?",
        answer:
          "The accordion toggles visibility of content panels by tracking the active index in state.",
      },
    ];


  return (
    <div>
        <div className='max-w-screen-xl mx-auto mb-36'>
            <div className='rounded-3xl'>
                <div className='flex gap-10'>
                    <div className='w-4/12'>
                        <p className='text-[70px] font-semibold text-blue-700'>All The A’s To Your Q’s</p>
                    </div>

                    <div className='w-8/12'>

                        <div className='space-y-6'>
                        {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b w-full border-gray-900"
        >
          <p
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transform transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
          {activeIndex === index && (
            <div className="p-4 text-gray-300">
              <p className="font-thin">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
export default FAQ;
