// "use client";
// import React, { useState } from "react";
// import { ArrowUp } from "lucide-react";
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "@/firebase/firebase.config";
// // import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

// const ApplyForm = ({ title }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     portfolio: "",
//     linkedin: "",
//     resume: "",
//   });



//   const handleFileUpload = async(e) =>{
//     const file = e.target.files[0];
//     if(!file) return 
//     const data = new FormData();
//     data.append("file",file)
//     data.append("upload_preset","resume_upload")
//     data.append("Cloud name","dl2ab6ow3")

//     const res = await fetch(" https://api.cloudinary.com/v1_1/dl2ab6ow3/image/upload",{
//       method:"POST",
//       body: data
//     })


//     const uploadedImageURL = await res.json()
//     console.log(uploadedImageURL)
//   }






//   const handleChange = (e) => {
//     const { name, value, files } = e?.target;
//     console.log(files);
//     if (name === "resume") {
//       setFormData({ ...formData, resume: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const db = getDatabase(app);
//     const applicantId = `applicant-${Date.now()}`;

//     const newDocRef = ref(db, `applicant/${applicantId}`);
//     console.log(formData)
//     set(newDocRef, {
//       title: title,
//       name: formData?.name,
//       email: formData?.email,
//       phone: formData?.phone,
//       portfolio: formData?.portfolio,
//       linkedin: formData?.linkedin,
//       resume: formData?.resume,
//     }).then(() => {
//       alert("added successfully");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         portfolio: "",
//         linkedin: "",
//         resume: "",
//       });
//     });

//     console.log(formData);
//   };





//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const db = getDatabase(app);
//   //   const storage = getStorage(app);
//   //   const applicantId = `applicant-${Date.now()}`;

//   //   // 1. Upload resume file to Firebase Storage
//   //   const file = formData.resume;
//   //   const fileRef = storageRef(storage, `resumes/${applicantId}-${file.name}`);

//   //   try {
//   //     await uploadBytes(fileRef, file); // upload the file
//   //     const downloadURL = await getDownloadURL(fileRef); // get file URL

//   //     // 2. Save form data with resume URL in Firebase Realtime Database
//   //     const newDocRef = ref(db, `applicant/${applicantId}`);
//   //     await set(newDocRef, {
//   //       title: title,
//   //       name: formData.name,
//   //       email: formData.email,
//   //       phone: formData.phone,
//   //       portfolio: formData.portfolio,
//   //       linkedin: formData.linkedin,
//   //       resume: downloadURL, // store only the URL
//   //     });

//   //     alert("Application submitted successfully!");

//   //     // Clear form
//   //     setFormData({
//   //       name: "",
//   //       email: "",
//   //       phone: "",
//   //       portfolio: "",
//   //       linkedin: "",
//   //       resume: "",
//   //     });

//   //   } catch (error) {
//   //     console.error("Error uploading resume or saving data:", error);
//   //     alert("Failed to submit application. Please try again.");
//   //   }
//   // };














//   return (
//     <div className="max-w-2xl items-center mx-auto border-2 p-8 rounded-xl my-10 ">
//       <h2 className="text-4xl font-semibold mb-3 text-center">
//         Job Application Form
//       </h2>
//       <p className=" text-center text-base text-gray-500 font-base mb-4">
//         Enter your details into the Form below:
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-5 ">
//         {[
//           { label: "Full Name", name: "name", placeholder: "Enter your name" },
//           { label: "Email", name: "email", placeholder: "Enter your email" },
//           { label: "Phone", name: "phone", placeholder: "ex. +8801** ** ****" },
//           {
//             label: "Portfolio",
//             name: "portfolio",
//             placeholder: "Enter link here",
//           },
//           {
//             label: "Linkedin",
//             name: "linkedin",
//             placeholder: "Enter link here",
//           },
//         ].map(({ label, name, placeholder }) => (
//           <div key={name}>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               {label} <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name={name}
//               value={formData[name]}
//               onChange={handleChange}
//               placeholder={placeholder}
//               required
//               className="w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
//             />
//           </div>
//         ))}

//         {/* Resume Upload */}
//         <div>
//           <label
//             htmlFor="resume"
//             className="block text-sm text-gray-700 font-medium mb-2"
//           >
//             Upload Resume
//             <span className="text-red-500"> *</span>{" "}
//           </label>
//           <input
//             type="file"
//             name="resume"
//             accept=".pdf,.doc,.docx"
//             onChange={handleFileUpload}
//             className="w-full"
//             required
//           />
//           <p className="text-xs font-normal text-red-500 mt-2 mb-6">
//             ⚠️ Please upload your resume in PDF or DOC format. Max size: 5MB.
//           </p>
//         </div>


//         <div className="items-center justify-center flex">
//           <button
//             type="submit"
//             className=" flex items-center justify-center w-[170px] rounded-full bg-blue-500 text-white py-2 px-3 hover:bg-blue-600 transition duration-200"
//           >

//             Submit Now
//             <ArrowUp className="ml-2 rotate-45" style={{ color: "#ffffff" }} />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplyForm;




// "use client";
// import React, { useState } from "react";
// import { ArrowUp } from "lucide-react";
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "@/firebase/firebase.config";

// const ApplyForm = ({ title }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     portfolio: "",
//     linkedin: "",
//     resume: "",
//   });

//   const [uploading, setUploading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // const handleFileUpload = async (e) => {
//   //   const file = e.target.files[0];
//   //   if (!file) return;

//   //   if (file.size > 5 * 1024 * 1024) {
//   //     alert("File size must be less than 5MB");
//   //     return;
//   //   }

//   //   const allowedTypes = [
//   //     "application/pdf",
//   //     "application/msword",
//   //     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//   //   ];

//   //   if (!allowedTypes.includes(file.type)) {
//   //     alert("Only PDF or DOC/DOCX files allowed.");
//   //     return;
//   //   }

//   //   setUploading(true);
//   //   const data = new FormData();
//   //   data.append("file", file);
//   //   data.append("upload_preset", "resume_upload");


//   //   const res = await fetch("https://api.cloudinary.com/v1_1/dl2ab6ow3/raw/upload", {
//   //     method: "POST",
//   //     body: data,
//   //   });

//   //   const result = await res.json();
//   //   console.log("ppppppppp",result.secure_url)


//   //   if (result.secure_url) {
//   //     setFormData((prev) => ({ ...prev, resume: result.secure_url }));
//   //     alert("Resume uploaded successfully!");
//   //   } else {
//   //     alert("Upload failed");
//   //   }

//   // };



// const handleFileUpload = async (e) => {
//   const file = e.target.files[0];
//   if (!file) return;

//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", "resume_upload"); 
//   data.append("cloud_name", "dl2ab6ow3");

//   try {
//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/dl2ab6ow3/raw/upload",
//       {
//         method: "POST",
//         body: data,
//       }
//     );

//     const uploadResult = await res.json();
//     console.log("Uploaded PDF URL:", uploadResult.secure_url);

//     // Save the secure_url into formData
//     setFormData((prev) => ({
//       ...prev,
//       resume: uploadResult.secure_url,
//     }));
//   } catch (err) {
//     console.error("Error uploading to Cloudinary", err);
//     alert("Failed to upload resume to Cloudinary.");
//   }
// };





















//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("hhjhjhj", formData.resume)

//     if (!formData.resume) {
//       alert("Please upload a resume first.");
//       return;
//     }

//     const db = getDatabase(app);
//     const applicantId = `applicant-${Date.now()}`;
//     const newDocRef = ref(db, `applicant/${applicantId}`);
//     console.log(formData)

//     await set(newDocRef, {
//       title,
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       portfolio: formData.portfolio,
//       linkedin: formData.linkedin,
//       resume: formData?.resume,
//     });
//     console.log("llllllll", resume)
//     alert("Application submitted successfully!");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       portfolio: "",
//       linkedin: "",
//       resume: "",
//     });

//   };

//   return (
//     <div className="max-w-2xl items-center mx-auto border-2 p-8 rounded-xl my-10">
//       <h2 className="text-4xl font-semibold mb-3 text-center">
//         Job Application Form
//       </h2>
//       <p className="text-center text-base text-gray-500 mb-4">
//         Enter your details into the form below:
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         {[
//           { label: "Full Name", name: "name", placeholder: "Enter your name" },
//           { label: "Email", name: "email", placeholder: "Enter your email" },
//           { label: "Phone", name: "phone", placeholder: "ex. +8801** ** ****" },
//           { label: "Portfolio", name: "portfolio", placeholder: "Enter link here" },
//           { label: "Linkedin", name: "linkedin", placeholder: "Enter link here" },
//         ].map(({ label, name, placeholder }) => (
//           <div key={name}>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               {label} <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name={name}
//               value={formData[name]}
//               onChange={handleChange}
//               placeholder={placeholder}
//               required
//               className="w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
//             />
//           </div>
//         ))}

//         <div>
//           <label
//             htmlFor="resume"
//             className="block text-sm text-gray-700 font-medium mb-2"
//           >
//             Upload Resume <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             name="resume"
//             accept=".pdf,.doc,.docx"
//             onChange={handleFileUpload}
//             className="w-full"
//             required
//           />
//           <p className="text-xs text-red-500 mt-2 mb-6">
//             ⚠️ Please upload your resume in PDF or DOC format. Max size: 5MB.
//           </p>
//         </div>

//         <div className="items-center justify-center flex">
//           <button
//             type="submit"
//             disabled={uploading}
//             className="flex items-center justify-center w-[170px] rounded-full bg-blue-500 text-white py-2 px-3 hover:bg-blue-600 transition duration-200"
//           >
//             {uploading ? "Uploading..." : "Submit Now"}
//             <ArrowUp className="ml-2 rotate-45" style={{ color: "#ffffff" }} />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplyForm;












"use client";
import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import { getDatabase, ref , set } from "firebase/database";
import { app } from "@/firebase/firebase.config";

const ApplyForm = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedin: "",
    resume: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.includes("pdf")) {
      alert("Only PDF files allowed");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Max file size is 5MB");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "resume_upload");
    data.append("cloud_name", "dl2ab6ow3");

    setUploading(true);

  
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dl2ab6ow3/image/upload", 
        {
          method: "POST",
          body: data,
        }
      );

      console.log("pppppppppppppppppp", data)

      const result = await res.json();
      console.log("ooooooooooooooooo",result.secure_url)
      if (result.secure_url) {
        setFormData((prev) => ({ ...prev, resume: result.secure_url }));
        alert("Resume uploaded successfully");
      } else {
        alert("Upload failed. Try again.");
      }
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume.startsWith("http")) {
      alert("Resume not uploaded or still uploading");
      return;
    }

    const db = getDatabase(app);
    const applicantId = `applicant-${Date.now()}`;
    const applicantRef = ref(db, `applicant/${applicantId}`);

    try {
      await set(applicantRef, {
        title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        portfolio: formData.portfolio,
        linkedin: formData.linkedin,
        resume: formData.resume,
        submittedAt: new Date().toISOString(),
      });

      alert("Application submitted!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        portfolio: "",
        linkedin: "",
        resume: "",
      });
    } catch (error) {
      console.error("Firebase error:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="max-w-2xl items-center mx-auto border-2 p-8 rounded-xl my-10">
      <h2 className="text-4xl font-semibold mb-3 text-center">
        Job Application Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { label: "Full Name", name: "name", placeholder: "Enter your name" },
          { label: "Email", name: "email", placeholder: "Enter your email" },
          { label: "Phone", name: "phone", placeholder: "ex. +8801** ** ****" },
          {
            label: "Portfolio",
            name: "portfolio",
            placeholder: "Enter link here",
          },
          {
            label: "Linkedin",
            name: "linkedin",
            placeholder: "Enter link here",
          },
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              className="w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm text-gray-700 font-medium mb-2">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="w-full"
            required
          />
          {uploading && (
            <p className="text-sm text-black">Uploading resume...</p>
          )}
          <p className="text-xs font-normal text-red-500 mt-2 mb-6">
            ⚠️ Only PDF, max 5MB.
          </p>
        </div>

        <div className="items-center justify-center flex">
          <button
            type="submit"
            className="flex items-center justify-center w-[170px] rounded-full bg-blue-500 text-white py-2 px-3 hover:bg-blue-600 transition duration-200"
            disabled={uploading}
          >
            Submit Now
            <ArrowUp className="ml-2 rotate-45" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;

