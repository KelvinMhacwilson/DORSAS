import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#F4F4F4] py-10 ">
      <div className="flex items-center justify-center gap-4 border-b pb-2 border-slate-400">
        <Link href="/destinations">Destinations</Link>
        <Link href="/about">About Us</Link>
        <Link href="/">Privacy Policy</Link>
      </div>

      <div className="p-5 flex justify-between flex-wrap gap-8">
        <div>
          <p className="font-bold">Contact us</p>
          <p>
            Email{":"}{" "}
            <a href="mailto:dorsasgroup@yahoo.com">dorsasgroup@yahoo.com</a>
          </p>
          <a href="tel:0209492440"> 0209492440/</a>
          <a href="tel:0245963055"> 0245963055</a>
          <p>Location{":"} Accra </p>
        </div>

        <div>
          <p className="font-bold">Follow us on</p>
          <div className="bg-gray-700 px-4 py-3 rounded flex items-center gap-4 text-white">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <BsTwitterX />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
