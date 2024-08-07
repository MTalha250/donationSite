"use client";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [scroll, setScroll] = useState(
    "text-lg rounded-full top-5 scale-[0.8]"
  );
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll("rounded-none top-0 scale-100");
      } else {
        setScroll("text-lg rounded-full top-5 scale-[0.8]");
      }
    });
  });
  return (
    <div
      className={
        "z-50 w-full left-0 bg-white fixed shadow-lg transition duration-300 ease-in-out py-6 px-8 md:px-16 " +
        scroll
      }
    >
      Navbar
    </div>
  );
};

export default Navbar;
