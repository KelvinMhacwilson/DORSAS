import Image from "next/image";
import HomepageImage from "@/assets/Homepage.jpeg";
import Logo from "@/assets/Logo.jpeg";
import Footer from "@/components/Footer";

const Destinations = () => {
  return (
    <div>
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

      <div></div>
      <Footer />
    </div>
  );
};

export default Destinations;
