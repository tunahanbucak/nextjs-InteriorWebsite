"use client";

import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Mobilenagivation from "./Mobilenagivation";
import { usePathname } from "next/navigation";

export default function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-tertiary shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-10 transition-all ${pathname === "/" && "bg-[#fff]"} `}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/Logo.webp" alt="logo" width={60} height={55} />
          </Link>

          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden xl:flex gap-x-8 items-center "
              linkStyles="relative hover:text-primary transition-all "
              underlineStyles="absolute left-0 top-full h-[2px]  bg-primary w-full"
            />
            <ThemeToggler />
            <div className=" flex items-center justify-end">
              <button
                type="button"
                className="text-black font-semibold text-xl bg-gray-600 items-center justify-center ">
                Dil secenekleri
              </button>
            </div>
            <div className="xl:hidden">
              <Mobilenagivation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
