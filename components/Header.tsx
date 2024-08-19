"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex md:justify-end justify-center p-2 md:px-10 gap-10 bg-slate-300 h-[60px]  items-center absolute top-0 z-50 left-0 right-0">
      <Link href="/">Home</Link>
      <Link href="/destinations" className="hidden">Destinations</Link>
      <Link href="/about">About Us</Link>
      <button
        onClick={() => router.push("/login")}
        className="bg-black text-white md:px-6 px-2 py-1 rounded-md"
      >
        Sign In
      </button>
    </div>
  );
};

export default Header;
