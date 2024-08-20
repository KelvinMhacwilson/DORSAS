import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

interface DestinationCardProps {
  image: StaticImageData;
  location: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  location,
}) => {
  return (
    <div className="md:w-[230px] lg:w-[260px] w-full">
      <div className="md:w-[230px] lg:w-[260px] w-full h-[200px] relative">
        <Image fill src={image} alt="Image" className="rounded-t-lg" />
      </div>

      <div className="my-5 flex w-full">
        <div className="flex-1">
          <p>{location}</p>
          <p className="text-orange-500 flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
        <button className="px-6 py-1 bg-black text-white rounded-2xl">
          Book
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
