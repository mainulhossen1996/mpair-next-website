"use client";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdRemoveRedEye } from "react-icons/md";
import app from "@/firebase/firebase.config";
import { redirect } from "next/navigation";
const auth = getAuth(app);
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (event) => {
    event.preventDefault(); 

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userName,
        password
      );
      console.log("User logged in:", userCredential.user);
      alert("User logged in");
      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form
        className="w-[381px] max-w-sm h-[530px] bg-white border rounded-xl px-[38px] pt-9 pb-8 mb-4"
        onSubmit={handleLogin}
      >
        <h1 className="font-bold text-lg mb-2 mt-6 text-[#3B3B3B]">
          User Login
        </h1>
        <hr className=" mb-9 px-9" />

        <div className="mb-6 w-[309px] h-[74px]">
          <label
            className="block text-[#6C6C6C] text-sm font-normal mb-2"
            htmlFor="user_name"
          >
            Username / Mobile Number
          </label>
          <input
            className="border bg-[#F7F7F7] rounded w-[309px] h-[47px] px-3"
            id="user_name"
            name="email"
            type="email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="mb-2 w-[309px] h-[74px] relative">
          <label
            className="block text-[#6C6C6C] text-sm font-normal mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border bg-[#F7F7F7] rounded w-[309px] h-[47px] px-3"
            id="password"
            name="password"
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            className="absolute right-3 top-[53px] text-xl transform -translate-y-1/2 cursor-pointer text-[#979797]"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <AiFillEyeInvisible /> : <MdRemoveRedEye />}
          </div>
        </div>

        <button
          type="button"
          className=" pb-3 mb-7 underline text-right text-[#959595] text-xs font-medium"
        >
          Forgot Password?
        </button>

        <div>
          <button
            type="submit"
            className="text-xs w-full bg-slate-100 font-medium py-[2px] h-[35px]"
          >
            Login
          </button>
        </div>

        <div className="ml-2 mt-8">
          <p className="flex flex-row justify-center items-center px-4 gap-1">
            <span className="text-[#959595] text-[11px] font-normal mt-1">
              Powered by
            </span>
            <a href="https://mpairtech.com" target="_blank">
              <span className="text-[#000000] text-[11px] font-normal">
                mPair Technologies Ltd.
              </span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
