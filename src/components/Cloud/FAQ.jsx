"use client";
import { React, useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What industries do you develop software for?",
      answer: "We have experience in healthcare, e-commerce, finance, education, SaaS, and enterprise applications, and more.",
    },
    {
      question: "What is your process for developing custom software?",
      answer: "We follow a step-by-step approach: Requirement Analysis → UI/UX Design → Development → Testing → Deployment → Maintenance.",
    },
    {
      question: "How do you prevent downtime in SaaS applications?",
      answer: "We use load balancing, redundancy, and failover systems to ensure minimal downtime and high availability.",
    },
    {
      question: "Can you handle large-scale enterprise projects?",
      answer: "We specialize in large-scale enterprise projects, ensuring data consistency, security, and efficient performance.",
    },
    {
      question: "Can you integrate third-party APIs into my app?",
      answer: "Yes, we integrate third-party APIs to enhance functionality and connect your app with external services.",
    },
    {
      question: "Do you offer cross-platform mobile app development?",
      answer: "Yes, we develop cross-platform mobile apps using frameworks like React Native and Flutter for cost-effective solutions.",
    },
    {
      question: "Do you provide ongoing maintenance after project completion?",
      answer: "Yes, we offer continuous support and maintenance to keep your application up-to-date and running smoothly.",
    },
    {
      question: "How do you handle performance testing?",
      answer: "We conduct performance testing, including load and stress testing, to ensure your app can handle high traffic efficiently.",
    },
    {
      question: "Do you ensure data privacy and compliance?",
      answer: "Yes, we follow strict data privacy standards and ensure compliance with regulations like GDPR and HIPAA.",
    },
    {
      question: "What project management tools do you use?",
      answer: "We use tools like Jira, Trello, and Asana for seamless project tracking and collaboration.",
    },

  ];
  

  return (
    <div className="lg:pt-32 pt-20 px-4 lg:px-0">
    <div className='max-w-screen-xl mx-auto mb-36'>
        <div className='rounded-3xl'>
            <div className='lg:flex gap-10'>
                <div className='lg:w-4/12 mb-4 lg:mb-0'>
                    <p className='lg:text-[70px] text-[50px] font-semibold text-blue-600'>All The A’s To Your Q’s</p>
                </div>

                <div className='lg:w-8/12'>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b w-full border-gray-200">
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
  );
};
export default FAQ;
