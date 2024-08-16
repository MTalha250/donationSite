import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 xl:px-32 pt-32 h-[80vh]">
      <div className="flex h-full items-center border-b border-neutral-400 pb-20">
        <div className="w-full md:w-[65%]">
          <h1 className="text-2xl md:text-6xl font-semibold text-[#252525] leading-tight">
            Discover medical fundraisers on GoFundMe
          </h1>
          <p className="my-10 text-neutral-500 text-2xl">
            Help others by donating to their fundraiser, or start one for
            someone you care about.
          </p>
          <Button className="bg-primary hover:bg-primary-dark text-lg py-4 px-8">
            Start a Fundraiser
          </Button>
        </div>
        <div className="pl-10 w-[35%] h-full">
          <Image
            src="https://d25oniaj7o2jcw.cloudfront.net/photo-category-medical-uk@2x.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
