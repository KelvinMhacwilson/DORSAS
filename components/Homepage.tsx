"use client";

import Image from "next/image";
import React from "react";
import HomepageImage from "@/assets/Homepage.jpeg";
import Logo from "@/assets/Logo.jpeg";
import Cities from "@/assets/Cities.jpeg";
import Adventure from "@/assets/Adventure.jpeg";
import Resorts from "@/assets/Resorts.jpeg";
import Tours from "@/assets/Tours.jpeg";
import OurServices from "@/assets/Services.jpeg";
import ServiceTransport from "@/assets/ServicesTransport.png";
import ServiceTour from "@/assets/ServicesTours.png";
import ServiceAccommodation from "@/assets/ServicesAccomodation.jpeg";
import Destination1 from "@/assets/Destination1.png";
import Destination2 from "@/assets/Destination2.jpeg";
import Destination3 from "@/assets/Destination3.jpeg";
import Destination4 from "@/assets/Destination4.jpeg";
import Destination5 from "@/assets/Destination5.jpeg";
import Destination6 from "@/assets/Destination6.jpeg";
import { FaQuoteLeft } from "react-icons/fa";
import Review from "@/assets/Review.jpeg";
import Footer from "./Footer";
import DestinationCard from "./DestinationCard";

const Homepage = () => {
  const popularDestinations = [
    {
      location: "Paris, France",
      image: Destination1,
    },
    {
      location: "London, England",
      image: Destination2,
    },
    {
      location: "Santorini, Greece",
      image: Destination3,
    },
    {
      location: "Rome, Italy",
      image: Destination4,
    },
    {
      location: "New York, USA",
      image: Destination5,
    },
    {
      location: "Tokyo, Japan",
      image: Destination6,
    },
  ];

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="relative">
        <div className="w-full relative h-[622px]  ">
          <Image
            fill
            src={HomepageImage}
            alt="Homepage Image"
            sizes="400px"
            className="object-fill"
          />
        </div>

        <div className="absolute z-30 top-[30%] w-full flex-col items-center justify-center text-center text-white">
          <p className="lg:text-[30px] text-[20px]">EXPLORE WITH</p>
          <p className="lg:text-[100px] text-[60px] font-extrabold ">DORSAS</p>
          <p className="lg:text-[30px] text-[20px] ">TRAVELS</p>
        </div>

        <div className=" w-[120px] h-[120px] absolute top-0">
          <Image fill src={Logo} alt="Logo" />
        </div>

        <div className="absolute bottom-10  md:right-10 w-[92%]  ml-3 md:w-full md:max-w-[420px] flex rounded-full bg-white p-2">
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

      <div className="md:p-10 p-4">
        <p className="text-center text-4xl text-black">
          What{"'s"} your style{"?"}{" "}
        </p>

        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div className="w-full relative h-[400px] rounded-md ">
            <Image
              className="rounded-md object-cover"
              fill
              src={Cities}
              alt="Cities"
            />
            <p className="absolute w-full text-center text-white  bottom-10 text-2xl ">
              Cities
            </p>
          </div>
          <div className="w-full relative h-[400px] rounded-md ">
            <Image
              className="rounded-md object-cover"
              fill
              src={Adventure}
              alt="Cities"
            />
            <p className="absolute w-full text-center text-white  bottom-10 text-2xl ">
              Adventure
            </p>
          </div>
          <div className="w-full relative h-[400px] rounded-md ">
            <Image
              className="rounded-md object-cover"
              fill
              src={Resorts}
              alt="Cities"
            />
            <p className="absolute w-full text-center text-white  bottom-10 text-2xl ">
              Resorts
            </p>
          </div>
          <div className="w-full relative h-[400px] rounded-md ">
            <Image
              className="rounded-md object-cover"
              fill
              src={Tours}
              alt="Cities"
            />
            <p className="absolute w-full text-center text-white  bottom-10 text-2xl ">
              Tours
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="md:px-10 p-4">
        <p className="text-center">About Us</p>
        <p className="text-center text-3xl ">Our Services</p>

        <div className="grid md:grid-cols-2 mt-8 gap-8">
          <div className="w-full relative h-[400px] ">
            <Image
              src={OurServices}
              alt="Our Services"
              fill
              className="rounded-md object-cover"
            />
          </div>

          <div className="flex flex-col justify-evenly gap-5">
            <div className="flex gap-8">
              <div className="border border-black p-2 rounded-md">
                <div className="relative h-[80px] w-[80px]  ">
                  <Image src={ServiceTransport} alt="Transport" fill />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">Transport</p>
                <p className="text-slate-700">
                  We provide our clients with quality and reliable transport and
                  prioritize your safety and comfort
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="border border-black p-2 rounded-md">
                <div className="relative h-[80px] w-[80px]  ">
                  <Image src={ServiceTour} alt="Transport" fill />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">Tours</p>
                <p className="text-slate-700">
                  Our Tours range from historical cultural, adventure and
                  wildlife safari. They are for everyone
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="border border-black p-2 rounded-md">
                <div className="relative h-[80px] w-[80px]  ">
                  <Image src={ServiceAccommodation} alt="Transport" fill />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">Accommodation</p>
                <p className="text-slate-700">
                  Get access to the best reviewed hotels around your area of
                  tour or trip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations */}
      <div className="p-10">
        <p className="text-center">The Best</p>
        <p className="text-center text-3xl font-bold ">Popular Destinations</p>

        <div className="max-w-[970px]  w-full md:flex md:mx-auto  md:items-center md:justify-center">
          <div className="grid md:grid-cols-3 mt-7 gap-10">
            {popularDestinations.map(({ image, location }) => (
              <DestinationCard
                key={location}
                image={image}
                location={location}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">Leave your reviews here</p>
          <button className="text-white bg-black px-3 py-2 rounded-lg">
            Tap here
          </button>
        </div>

        <div className="w-full relative h-[400px] mt-5">
          <Image fill src={Review} alt="Review" className="object-cover" />

          <div className="absolute top-4 left-4">
            <div className="w-[350px] bg-white p-10 ">
              <p className="text-orange-500">
                <FaQuoteLeft />
              </p>
              <p className="text-slate-600">
                One of the best agencies to book your travels and tours. Very
                patient and friendly tour guides. You should book your tours
                here and I guarantee you{"'"}ll have a goog time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
