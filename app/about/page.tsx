import AboutUs from "@/assets/AboutUs.png";
import Image from "next/image";
import Logo from "@/assets/Logo.jpeg";
import { FaPeopleGroup, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Globe from "@/assets/Globe.jpeg";
import TravelInfo from "@/assets/TravelInfo.png";
import Footer from "@/components/Footer";
import { IoPersonOutline } from "react-icons/io5";
import { LiaMountainSolid } from "react-icons/lia";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="md:h-[500px] h-[400px] w-full relative">
        <Image src={AboutUs} alt="About Us" fill className="object-cover" />
        <p className="absolute text-[50px] top-0 text-white w-full z-20 h-full flex items-center justify-center text-center">
          About Us
        </p>
      </div>

      <div className="grid md:grid-cols-3 p-4 gap-4 md:p-10">
        <div className="flex flex-col items-center px-4 gap-1">
          <FaPeopleGroup size={60} />
          <p className="text-3xl font-bold">Great Team</p>
          <p>
            At our travel agency, our dedicated team collaborates seamlessly to
            ensure every detail of our journey is carefully planned, making your
            travel experience unforgettable
          </p>
        </div>

        <div className="flex flex-col items-center px-4 gap-1">
          <MdOutlineRocketLaunch size={60} />
          <p className="text-3xl font-bold">Our Vision</p>
          <p>
            Our vision is to redefine travel by curating experiences that
            inspire, connect, and leave a lasting impact on every adventure
          </p>
        </div>

        <div className="flex flex-col items-center px-4 gap-1">
          <GoGraph size={60} />
          <p className="text-3xl font-bold">Our Mission</p>
          <p>
            Our mission is to provide exceptional travel experiences that not
            only meet but exceed your expectations, ensuring you create memories
            that last a lifetime
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-10 gap-8">
        <div className="w-full h-[230px] relative ">
          <Image
            src={Logo}
            alt="Logo"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-3">
          <FaQuoteLeft size={25} />
          <p>
            This agency offers unparalleled journeys, meticulously tailored to
            your unique preference and budget. Our expert team leverages
            extensive industry knowledge and exclusive partnerships to craft
            exceptional travel experiences that exceed expectations. With a
            commitment to personalized service and attention to, we ensure that
            every aspect of your trip is seamlessly orchestrated, allowing you
            to focus on enjoying your adventure.
          </p>
          <FaQuoteRight size={25} />
        </div>
      </div>

      <div className="relative w-full h-[400px] ">
        <Image
          className="rounded-md object-cover"
          fill
          src={TravelInfo}
          alt="Globe"
        />

        <div className="absolute w-full flex h-full items-center justify-evenly flex-wrap text-white p-10 md:p-0">
          <div className="flex gap-4">
            <FaPeopleGroup size={44} />
            <div className="text-white">
              <p className="font-bold text-3xl">126 {"+"} </p>
              <p>Satisfied Client</p>
            </div>
          </div>

          <div className="flex gap-4">
            <IoPersonOutline size={44} />
            <div className="text-white">
              <p className="font-bold text-3xl">102 {"+"} </p>
              <p>New Traveler</p>
            </div>
          </div>

          <div className="flex gap-4">
            <LiaMountainSolid size={44} />
            <div className="text-white">
              <p className="font-bold text-3xl">230 {"+"} </p>
              <p>Destination</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[400px] flex items-center justify-center">
        <div className="relative w-[300px] h-[300px]">
          <Image
            className="rounded-md object-fill"
            fill
            src={Globe}
            alt="Travel Info"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
