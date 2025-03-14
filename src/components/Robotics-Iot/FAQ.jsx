"use client"
import { React, useState } from 'react';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "Do you handle both hardware and software development for IoT and Robotics?",
        answer:
          "Absolutely! We design and develop both the hardware components (PCBs, sensors, controllers) and software (AI, automation, cloud integration).",
      },
      {
        question: "What kind of Robotics & IoT solutions do you offer?",
        answer:
          "We provide customized Robotics and IoT solutions, including industrial automation, smart devices, AI-powered robotics, and cloud-integrated systems.",
      },
      {
        question: "How do you approach a Robotics or IoT project?",
        answer:
          "We start with consultation, create a prototype, test functionality, and then finalize the deployment with full support.",
      },

      {
        question: "How do you ensure security in IoT devices?",
        answer:
          "We implement end-to-end encryption, secure authentication, and regular software updates to prevent cyber threats.",
      },
      {
        question: "Do you provide post-deployment support and maintenance?",
        answer:
          "Yes, we offer ongoing support, maintenance, and upgrades to keep your system running smoothly.",
      },
      {
        question: "Do you provide training for using your Robotics & IoT systems?",
        answer:
          "Yes, we offer onsite and remote training for your team to ensure smooth operation.",
      },
      {
        question: "Can your IoT solutions handle real-time data processing?",
        answer:
          "Yes, our IoT systems are designed for real-time monitoring and data analytics.",
      },
      {
        question: "Do you provide AI-based automation in Robotics and IoT solutions?",
        answer:
          "Yes, we integrate AI to enhance decision-making, automation, and predictive analytics.",
      },
      {
        question: "Why should I choose you over other Robotics & IoT service providers?",
        answer:
          "We deliver highly customized, scalable, and secure solutions with end-to-end support and proven expertise across multiple industries.",
      },
    ];
    


  return (
    <div>
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
