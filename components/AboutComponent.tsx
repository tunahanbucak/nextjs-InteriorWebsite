"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation";

export default function AboutComponent() {
  return (
    <div className="container  py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}>
          <Image
            src="/image/aboutfront.png"
            alt="about"
            width={900}
            height={500}
            className="max-md:hidden"
          />
        </motion.div>
        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">
            Ödül Kazanan Bir Şirketiz
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="px-12 tracking-wider uppercase text-gray-400 mt-3">
            Dünya Ödülü
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4">
            Bu, iç tasarım alanında faaliyet gösteren bir şirkettir. Biz eviniz
            için en iyi iç tasarımı sağlayın. Bize güvenildi birçok kişi
            evlerini tasarlamak için. Biz de çok aldık çalışmalarımız için
            çeşitli ülkelerden ödüller.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 ">
            Bu, iç tasarım alanında faaliyet gösteren bir şirkettir. Biz eviniz
            için en iyi iç tasarımı sağlayın. Bize güvenildi birçok kişi
            evlerini tasarlamak için. Biz de çok aldık çalışmalarımız için
            çeşitli ülkelerden ödüller.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
