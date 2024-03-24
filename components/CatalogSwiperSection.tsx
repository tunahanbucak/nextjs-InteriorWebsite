"use client";

import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation";

const imageSources = [
  "/image/swiper1.jpg",
  "/image/swiper2.jpg",
  "/image/swiper3.jpg",
  "/image/swiper4.jpg",
  "/image/swiper5.jpg",
];

export default function CatalogSwiperSection() {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
            Modern Klasik
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5">
            EVİMİZDE KONFOR YARATMAK İÇİN LÜKS DEKOR
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="grid grid-cols-2 text-gray-500 gap-x-8">
          <p>
            Tasarım ve dekor tutkumuzla bir koleksiyon oluşturduk rahat bir
            ortam yaratmanıza yardımcı olacak mobilya ve aksesuarlardan oluşan
            şık bir ev. Tasarım ve dekora olan tutkumuzla size yardımcı olacak
            bir mobilya ve aksesuar koleksiyonu oluşturduk rahat ve şık bir ev
            yaratın.
          </p>
          <p>
            Tasarım ve dekor tutkumuzla bir koleksiyon oluşturduk rahat bir
            ortam yaratmanıza yardımcı olacak mobilya ve aksesuarlardan oluşan
            şık bir ev. Tasarım ve dekora olan tutkumuzla size yardımcı olacak
            bir mobilya ve aksesuar koleksiyonu oluşturduk rahat ve şık bir ev
            yaratın.
          </p>
        </motion.div>
        <Link href="/gallery">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-700 ring-offset-2">
            Galeriyi Görüntüle <TbArrowUpRight className="w-5 h-5 ml-2" />{" "}
          </Button>
        </Link>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}>
        {imageSources.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`swiper ${index + 1}`}
              width={520}
              height={220}
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
