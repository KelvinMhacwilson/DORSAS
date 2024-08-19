"use client";

import Image from "next/image";
import React from "react";
import HomepageImage from "@/assets/Homepage.jpeg";
import Logo from "@/assets/Logo.jpeg";

const Homepage = () => {
  return (
    <div className="relative">
      <div className="w-full relative h-[622px]  ">
        <Image
          // width={100}
          // height={400}
          fill
          src={HomepageImage}
          alt="Homepage Image"
          sizes="400px"
          className="object-fill"
        />
      </div>

      <div className="absolute z-30 top-[30%] w-full flex-col items-center justify-center text-center text-white">
        <p className="text-[30px] ">EXPLORE WITH</p>
        <p className="text-[100px] font-extrabold ">DORSAS</p>
        <p className="text-[30px] ">TRAVELS</p>
      </div>

      <div className=" w-[120px] h-[120px] absolute top-0">
        <Image fill src={Logo} alt="Logo" />
      </div>

      <div className="absolute bottom-10 right-10 w-full max-w-[420px] flex rounded-full bg-white p-2">
        <input
          type="text"
          placeholder="Search for your favorite destination here "
          className="w-full p-1 outline-none"
        />
        <button className="p-2 rounded-full bg-black text-white px-3">
          Search
        </button>
      </div>
    </div>
  );
};

export default Homepage;
