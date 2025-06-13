"use client";

import app from "@/firebase/firebase.config";
import { Button } from "@nextui-org/react";
import { getDatabase, ref, set } from "firebase/database";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    industry: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const applicantId = `queries-${Date.now()}`;
    const newDocRef = ref(db, `queries/${applicantId}`);

    set(newDocRef, formData).then(() => {
      alert("Added successfully");
      setFormData({
        name: "",
        organization: "",
        email: "",
        industry: "",
        message: "",
      });
    });
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto py-36">
        <div className="flex gap-10">
          <div className="w-7/12">
            <p className="text-blue-600 lg:text-[90px] sm:text-[28px] font-semibold">
              Let's Talk.
            </p>
            <p className="text-gray-700 lg:text-[35px] sm:text-[20px] font-light ">
              Reach out today and discover our approach
            </p>
            <div className="my-6">
              <div className="mb-6">
                <p className="text-lg font-bold mb-2">Drop us a line</p>
                <span className="text-xl font-normal text-blue-500 hover:text-white hover:bg-blue-700">
                  queries@mpairtech.com
                </span>
              </div>

              <div className="mb-6">
                <p className="text-lg font-bold mb-2">Reach us faster</p>
                <span className="text-xl font-normal text-blue-500 hover:text-white hover:bg-blue-700">
                  +88 01713368297
                </span>
              </div>

              <div>
                <p className="text-lg font-bold mb-2">Meet up for a coffee</p>
                <span className="text-xl font-normal text-gray-500 ">
                  Chattogram, Bangladesh
                </span>
              </div>
            </div>
          </div>

          <div className="w-5/12">
            <div className=" bg-slate-100 p-6">
              <div>
                <div className="flex gap-4 mt-4 items-center">
                  <Image
                    src="/image/eshan.jpg"
                    alt=""
                    height={500}
                    width={500}
                    className="h-[80px] w-[80] filter grayscale object-cover rounded-full"
                  />
                  <div>
                    <p className="text-start text-xl">Syed Mainul Islam</p>
                    <p>Head of Business </p>
                  </div>
                </div>

                <p className="text-lg mt-10 my-[10px]">
                  Speak with sales through email. Your bussiness team will
                  respond you within short period.
                </p>

                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full mt-1 p-2 rounded-md py-3 outline-none"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Organization Name"
                        className="w-full mt-1 p-2 rounded-md py-3 outline-none"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Work Email"
                        className="w-full mt-1 p-2 rounded-md py-3 outline-none"
                      />
                    </div>

                    <div className="mb-4">
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 rounded-md py-3 outline-none"
                      >
                        <option value="">Select your industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full mt-1 p-2 rounded-md py-3 outline-none"
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="relative bg-[#0077ff] overflow-hidden text-white rounded-full font-semibold text-lg py-2 px-6 group w-full"
                    >
                      <span className="absolute inset-0 bg-[#0055ff]  transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative flex items-center">
                        Send Message <ArrowUpRight className="ml-3" />
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
