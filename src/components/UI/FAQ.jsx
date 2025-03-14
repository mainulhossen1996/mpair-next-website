"use client"
import { React, useState } from 'react';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "Do you design for both websites and mobile apps?",
        answer:
          "Yes! We specialize in creating user-friendly designs for websites, mobile apps (Android & iOS), and SaaS platforms, ensuring smooth experiences across all devices.",
      },
      {
        question: "Can you handle both UI/UX design and development?",
        answer:
          "Yes, we provide end-to-end solutions, including UI/UX design and development.",
      },
      {
        question: "What is your design process like?",
        answer:
          "We follow a structured process: Discovery, Wireframing, Prototyping, Visual Design, and Feedback Iterations, ensuring transparency at every step.",
      },
      {
        question: "What deliverables can we expect from your UX design process?",
        answer:
          "You’ll receive wireframes, interactive prototypes, high-fidelity designs, and a detailed design system, ensuring a seamless transition to development.",
      },
      {
        question: "Do you provide clickable prototypes for user testing?",
        answer:
          "Absolutely! We create interactive prototypes that allow you to test user flows and gather feedback before development.",
      },
      {
        question: "Can you redesign an existing app or website?",
        answer:
          "AAbsolutely! We can analyze your current design, identify areas for improvement, and create a fresh, modern look that enhances usability and engagement.",
      },
      {
        question: "How soon can you start working on our project?",
        answer:
          "We can typically start within 1-2 weeks after discussing your requirements and aligning on a project plan.",
      },
      {
        question: "Can you work with startups or small businesses?",
        answer:
          "Yes! We love working with startups and small businesses. We create designs that fit your budget while delivering professional, user-friendly experiences that help your brand grow.",
      },
      {
        question: "Will you work with our in-house design or development team?",
        answer:
          "Yes, we can collaborate with your in-house teams, aligning our designs with your processes and ensuring a smooth handoff for development.",
      },
      {
        question: "How do I get started with your UI/UX design services?",
        answer:
          "Getting started is simple! Just contact us through our website or email. We’ll discuss your project, understand your needs, and create a plan to deliver the best design for your business.",
      },
    ];


  return (
    <div className="pt-32">
        <div className='max-w-screen-xl mx-auto mb-36'>
            <div className='rounded-3xl'>
                <div className='flex gap-10'>
                    <div className='w-4/12'>
                        <p className='text-[70px] font-semibold text-blue-600'>All The A’s To Your Q’s</p>
                    </div>

                    <div className='w-8/12'>

                        <div className='space-y-6'>
                        {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b w-full border-gray-200"
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
            <div className="p-4 text-gray-600">
              <p className="font-light">{faq.answer}</p>
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
