"use client";

import React, { useState } from "react";
import AuthImage from "@/assets/Auth.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/");
    toast.success("Logged In");
  };

  return (
    <div className="md:grid md:grid-cols-2 md:h-screen">
      <div className="w-full md:flex relative h-[200px] md:h-full ">
        <Image
          fill
          src={AuthImage}
          alt="Auth Image"
          className="md:rounded-r-[100%]"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col  md:m-0 gap-5 md:gap-4 p-4  md:p-10 justify-center"
      >
        <p className="text-center text-4xl font-bold">Log In</p>
        <input
          required
          id="username"
          onChange={handleChange}
          type="text"
          placeholder="Username"
          className="px-2 py-2 rounded-md bg-slate-300 outline-slate-300"
        />
        <input
          required
          id="password"
          onChange={handleChange}
          type="password"
          className="px-2 py-2 rounded-md bg-slate-300 outline-slate-300"
          placeholder="Password"
        />
        <button className="bg-[#AB646C] py-2 text-white">Sign Up</button>
        <p className="text-right">
          Don{""}t have an account{"?"}{" "}
          <Link className=" text-blue-700" href={"/register"}>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
