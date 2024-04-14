"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { path: "/", name: "Anasayfa" },
  { path: "/about", name: "Hakkında" },
  { path: "/gallery", name: "Galeri" },
  { path: "/projects", name: "Projeler" },
  { path: "/contact", name: "İletişim" },
];

interface NavbarProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

export default function Navbar({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavbarProps) {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${linkStyles}`}>
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
