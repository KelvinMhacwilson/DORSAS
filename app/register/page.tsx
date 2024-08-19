"use client";

import React, { useState } from "react";
import AuthImage from "@/assets/Auth.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { value, id } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Logged In");
    router.push("/login");
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
        <p className="text-center text-4xl font-bold">Sign up</p>
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
        <input
          required
          id="confirmPassword"
          onChange={handleChange}
          type="password"
          className="px-2 py-2 rounded-md bg-slate-300 outline-slate-300"
          placeholder="Confirm Password"
        />
        <button className="bg-[#AB646C] py-2 text-white">Sign Up</button>
        <p className="text-right">
          Already have an account{"?"}{" "}
          <Link className=" text-blue-700" href={"/login"}>
            Sign In{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
