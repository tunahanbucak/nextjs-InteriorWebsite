"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between">
      <div className="lg:w-1/2 xl:py-14 lg:py-8">
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="tracking-widest uppercase">
          En İyİ İç Mekan İçİn teklİf
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="text-6xl xl:text-[72px] xl:leading-[80px] font-bold mb-5 mt-4">
          Evinizi bir <br /> sanat eseri haline getirin{" "}
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="pb-6 text-muted-foreground xl:pb-10">
          Görünümünüzü en iyi iç tasarımla değiştirin. Ev için en iyisini
          sağlıyoruz iç tasarım konusunda. Her anı en iyisiyle güzelleştirin iç
          dizayn ile. Görünümünüzü en iyi iç tasarımla değiştirin. Eviniz için
          en iyi iç tasarımı sağlıyoruz, böylece her anı en iyi iç tasarıma
          sahip güzel bir şekilde yaşayabilirsiniz.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}>
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Şimdi rezervasyon yaptırın{" "}
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
      <div className="w-1/2">
        <Image
          src="/image/hall.png"
          width={800}
          height={500}
          alt="hall"
          className="absolute right-19 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
        />
      </div>
    </div>
  );
}
