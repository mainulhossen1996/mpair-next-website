"use client"
import { React, useState } from 'react';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "How do you measure the success of a digital marketing campaign?",
        answer:
          "We track success using metrics like traffic growth, conversion rates, engagement, and ROI. We also provide detailed reports to show progress and results.",
      },
      {
        question: "Can you help us with multi-channel marketing?",
        answer:
          "Yes, we manage and optimize campaigns across platforms like Google, Facebook, Instagram, LinkedIn, and email to maximize your reach and results.",
      },
      {
        question: "Do you offer consultation for our in-house marketing team?",
        answer:
          "Absolutely! We can train and guide your in-house team with the latest digital marketing strategies to improve their effectiveness.",
      },
      {
        question: "Do you handle local SEO for businesses targeting specific regions?",
        answer:
          "Yes, we specialize in local SEO to help businesses rank higher in location-based searches and attract nearby customers.",
      },
      {
        question: "Do you optimize Google My Business profiles?",
        answer:
          "Yes, we optimize your Google My Business profile to improve local visibility and attract more customers in your area.",
      },
      {
        question: "Do you offer geo-targeted digital marketing services?",
        answer:
          "Yes, we use geo-targeting to focus your campaigns on specific cities or regions, helping you reach the right audience in the right location.",
      },
      {
        question: "Do you offer services for e-commerce businesses?",
        answer:
          "Yes, we specialize in digital marketing for e-commerce, including product ads, SEO for product pages, and conversion-focused strategies.",
      },
      {
        question: "Do you help with analytics setup and reporting?",
        answer:
          "Yes, we set up tools like Google Analytics and Facebook Pixel, providing clear reports that show how your campaigns are performing.",
      },
      {
        question: "Do you provide regular updates during ongoing campaigns?",
        answer:
          "Yes, we maintain transparency with regular updates, performance reports, and actionable insights throughout your campaign.",
      },
    ];
    

  return (
    <div className='max-w-screen-xl mx-auto my-20'>
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
  )
}
export default FAQ;
