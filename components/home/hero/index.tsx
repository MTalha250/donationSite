"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const [scroll, setScroll] = useState("0");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScroll("100");
      } else {
        setScroll("0");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-[#18412E] h-[80vh] fixed w-full top-0">
      <motion.img
        src="https://d25oniaj7o2jcw.cloudfront.net/full-illustration-desktop-20220802@2x.jpg"
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
        style={{ scale }}
      />
      <div className="bg-fixed flex flex-col justify-center items-center space-y-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-xl font-semibold">Leading crowdfunding platform</p>
        <h1 className="text-6xl font-semibold text-center">
          Your home <br /> for help
        </h1>
        <Link
          href="/campaigns"
          className="bg-white px-8 py-4 rounded-xl font-bold text-sm"
        >
          Start a campaign
        </Link>
      </div>
      <div
        className={
          "absolute w-full h-full bg-black/50 top-0 left-0 transition duration-300 opacity-" +
          scroll
        }
      />
    </div>
  );
};

export default Hero;
