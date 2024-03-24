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
            "World Award" olarak İfade edİlebİlİr. Bu, uluslararası alanda
            tanınan ve prestİjlİ olan bİr ödülü temsİl eder. İç tasarım
            şİrketİmİzİn çeşİtlİ ülkelerden aldığı bu tür bİr ödül, fİrmamızın
            başarı ve kalİtesİnİ vurgular.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4">
            İç tasarım alanında faaliyet gösteren bir şirketiz. Evler için en
            iyi iç tasarımı sağlıyoruz ve birçok kişi bize evlerini tasarlamak
            için güveniyor. Ayrıca, çalışmalarımız için çeşitli ülkelerden
            ödüller aldık.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 "></motion.p>
        </div>
      </div>
    </div>
  );
}
