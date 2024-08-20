import Link from "next/link";
import React from "react";

const Hero = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-32 h-auto md:h-[80vh]">
      <div className="flex flex-col md:flex-row h-full items-center border-b border-neutral-400 pb-10 md:pb-20 md:gap-5">
        <div className="w-full md:w-[60%] lg:w-[65%] mb-10 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#252525] leading-tight">
            {title}
          </h1>
          <p className="my-6 md:my-10 text-neutral-500 text-lg md:text-2xl">
            Help others by donating to their fundraiser, or start one for
            someone you care about.
          </p>
          <Link
            href="/fundraiser"
            className="bg-primary hover:bg-primary-dark text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-md text-white"
          >
            Start a Fundraiser
          </Link>
        </div>
        <div className="w-full md:w-[40%] lg:w-[35%] h-64 md:h-full flex justify-center md:justify-end">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
