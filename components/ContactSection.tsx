"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation";

const posts = [
  {
    id: 1,
    title: "Dönüşüm oranınızı artırın",
    href: "#",
    description:
      "Tonlarca tasarım ve düzen seçeneği ile harika bir tema ve müşteri hizmetleri tek kelimeyle olağanüstü. Hemen yanıt verirler ve ne kadar küçük olursa olsun herhangi bir rahatsızlığı çözerler.",
    date: "24 Mart 2024",
    datetime: "24-03-2024",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Ebru",
      role: "Kurucu Ortak / CTO",
      href: "#",
      imageUrl: "/image/profile1.jpg",
    },
  },
  {
    id: 2,
    title: "Dönüşüm oranınızı artırın",
    href: "#",
    description:
      "Tonlarca tasarım ve düzen seçeneği ile harika bir tema ve müşteri hizmetleri tek kelimeyle olağanüstü. Hemen yanıt verirler ve ne kadar küçük olursa olsun herhangi bir rahatsızlığı çözerler.",
    date: "24 Mart 2024",
    datetime: "24-03-2024",
    category: { title: "4.9", href: "#" },
    author: {
      name: "Zeynep",
      role: "Kurucu Ortak / CEO",
      href: "#",
      imageUrl: "/image/profile2.jpg",
    },
  },
  {
    id: 3,
    title: "Dönüşüm oranınızı artırın",
    href: "#",
    description:
      "Tonlarca tasarım ve düzen seçeneği ile harika bir tema ve müşteri hizmetleri tek kelimeyle olağanüstü. Hemen yanıt verirler ve ne kadar küçük olursa olsun herhangi bir rahatsızlığı çözerler.",
    date: "24 Mart 2024",
    datetime: "24-03-2024",
    category: { title: "4.2", href: "#" },
    author: {
      name: "Fatih",
      role: "Kurucu Ortak / CTO",
      href: "#",
      imageUrl: "/image/profile3.jpg",
    },
  },
];

export default function ContactSection() {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl">
          Müşteri Yorumları
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground">
          Uzman tavsiyemizle işinizi nasıl büyüteceğinizi öğrenin
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16">
          {posts.map((post) => (
            <article
              className="flex max-w-xl flex-col items-start justify-between"
              key={post.id}>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime}>
                  <Image
                    src="/image/star.svg"
                    alt="star"
                    width={80}
                    height={5}
                  />
                </time>
                <a
                  href={post.category.href}
                  className="relative bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all">
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.imageUrl}
                  alt="people"
                  width={100}
                  height={100}
                  className="h-10 w-10 rounded-full bg-gray-500"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span>{post.author.name}</span>
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
