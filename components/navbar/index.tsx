"use client";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Profile from "../profile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/constants";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [scroll, setScroll] = useState(
    "text-lg rounded-full top-5 scale-[0.8] px-8"
  );
  const [scrolled, setScrolled] = useState(false);
  const { data } = useSession();
  const user = data?.user;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll("rounded-none top-0 scale-100 px-32");
        setScrolled(true);
      } else {
        setScroll("rounded-full top-5 scale-[0.8] px-8");
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        "z-50 w-full left-0 bg-white fixed shadow-lg flex justify-between items-center transition duration-300 ease-in-out py-5 " +
        scroll
      }
    >
      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                {link.children ? (
                  <>
                    <NavigationMenuTrigger className="text-base font-normal">
                      {link.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {link.children.map((child) => (
                          <li key={child.title}>
                            <Link
                              href={child.href}
                              className="flex space-x-3 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {child.icon && (
                                <div className="bg-primary/20 text-primary flex justify-center items-center px-3 rounded-md">
                                  {React.createElement(child.icon, {
                                    className: "text-3xl",
                                  })}
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-bold leading-none mb-1">
                                  {child.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 mr-3 px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition-colors rounded-lg"
                  >
                    {link.icon &&
                      React.createElement(link.icon, { className: "text-2xl" })}
                    {link.title}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        <Link href="/">
          <img src={logo.src} alt="logo" className="w-44" />
        </Link>
      </div>
      <div className="flex items-center">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="mr-5 px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition-colors rounded-lg">
              Hi {user.firstName}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Profile />
              <DropdownMenuItem
                className="cursor-pointer text-center block"
                onClick={() => {
                  signOut({
                    redirect: false,
                  });
                  toast.success("Logged out successfully");
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            href="/login"
            className="mr-5 px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition-colors rounded-lg"
          >
            Sign in
          </Link>
        )}
        <Link
          href="/fundraiser"
          className={
            scrolled
              ? "bg-primary rounded-full text-white font-semibold hover:bg-green-700 px-4 py-2"
              : "py-2 px-4 bg-transparent rounded-full border border-black text-lg text-black font-semibold hover:bg-primary hover:text-white"
          }
        >
          Start a Fundraiser
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
