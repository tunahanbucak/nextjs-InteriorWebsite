"use client";

import React from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation";

export default function Footer() {
  return (
    <div className="bg-tertiary">
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">Şİrket</h2>
            <div className="flex flex-col">
              <Link className="py-1 hover:underline" href="/">
                Hakkımızda
              </Link>
              <Link className="py-1 hover:underline" href="/">
                Basın
              </Link>
              <Link className="py-1 hover:underline" href="/">
                Kariyerler
              </Link>
              <Link className="py-1 hover:underline" href="/">
                İletişim
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">Gelİşİm</h2>
            <div className="flex flex-col">
              <Link className="py-1 hover:underline" href="/">
                Dokümantasyon
              </Link>
              <Link className="py-1 hover:underline" href="/">
                Referans
              </Link>
              <Link className="py-1 hover:underline" href="/">
                Değişiklik
              </Link>
              <Link className="py-1 hover:underline" href="/">
                Durum
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">Bağlantı</h2>
            <div className="flex flex-col">
              <Link className="py-1 hover:underline" href="/">
                Instagram
              </Link>
              <Link className="py-1 hover:underline" href="/">
                Twitter
              </Link>
              <Link className="py-1 hover:underline" href="/">
                Linkedin
              </Link>
              <Link className="py-1 hover:underline" href="/">
                Facebook
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}>
          <p className="pb-4 text-xl font-semibold">İLETİŞİME GEÇİN</p>
          <div className="relative lg:max-w-sm">
            <Input type="name" id="first name" placeholder="E-posta adresi" />
            <button className="absolute bg-black h-10 px-3 text-sm top-2 right-2 text-white rounded-full hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary">
              Abone Ol
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="py-10 bg-black dark:bg-primary">
        <div className="container text-white text-center lg:justify-between lg:flex">
          <div className="pb-4 lg:pb-0 mt-4 ">
            <p> &copy; 2024 Tüm hakları saklıdır </p>
          </div>
          <Link className="p-4 hover:underline" href="/">
            Gizlilik
          </Link>
          <Link className="p-4 hover:underline" href="/">
            Şartlar
          </Link>
          <Link className="p-4 hover:underline" href="/">
            Destek
          </Link>
          <Link className="p-4 hover:underline" href="/">
            SSS
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
