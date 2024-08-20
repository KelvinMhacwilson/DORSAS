import Image from "next/image";
import React from "react";
import HomepageImage from "@/assets/Homepage.jpeg";
import Logo from "@/assets/Logo.jpeg";
import Time from "@/assets/Time.jpeg";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <div className="w-full relative md:h-[622px] h-[400px]  ">
          <Image
            fill
            src={HomepageImage}
            alt="Homepage Image"
            sizes="400px"
            className="object-fill"
          />
        </div>

        <div className="absolute z-30 top-[30%] w-full flex-col items-center justify-center text-center text-white">
          <p className="lg:text-[100px] text-[60px] font-extrabold ">
            Book your trip
          </p>
        </div>

        <div className=" w-[120px] h-[120px] absolute top-0">
          <Image fill src={Logo} alt="Logo" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-3">
        <div className="max-w-[400px] w-full my-8">
          <button className="bg-[#AB646C] w-full p-5">MAKE BOOKING</button>
        </div>
        <form
          action=""
          className="max-w-[800px] w-full border border-slate-500 p-3 flex-col flex gap-4"
        >
          <div className="flex gap-4 bg-slate-300 py-3 items-center px-4">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="p-2 w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex gap-4 bg-slate-300 py-3 items-center px-4">
            <label htmlFor="email">Email</label>
            <input
              className="p-2 w-full outline-none bg-transparent"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="flex gap-4 bg-slate-300 py-3 items-center px-4">
            <label htmlFor="phone">Phone</label>
            <input
              className="p-2 w-full outline-none bg-transparent"
              id="phone"
              type="tel"
              placeholder="Phone"
            />
          </div>

          <div className="flex gap-4 bg-slate-300 py-3 items-center px-4">
            Type
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-slate-300 p-3">Adult </div>
            <div className="bg-slate-300 p-3">Kids</div>
          </div>

          <div className="flex gap-4 bg-slate-300 py-3 items-center px-4">
            <label htmlFor="date">Date</label>
            <input
              className="p-2 w-full outline-none bg-transparent"
              id="date"
              type="date"
            />
          </div>

          <button className="bg-[#AB646C] py-2">BOOK NOW</button>
        </form>
      </div>

      <div className="relative w-full h-[400px] ">
        <Image fill src={Time} alt="Time" className="object-cover" />
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
