"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation";

export default function page() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Biz Kimiz?
        </h1>
      </div>
      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl">
            Harika bir fikrimiz ve iç tasarımımız var{" "}
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5">
            İç tasarım şirketimiz, evler, ofisler, apartmanlar ve diğer mekanlar
            için tasarım hizmeti sunan bir firmadır. Deneyimli bir iç mekan
            tasarım ekibimiz var ve müşterilerimize en iyi iç tasarım
            hizmetlerini sunmak için buradayız.
          </motion.p>
        </div>
        <div className="items-center lg:flex gap-x-8">
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image
              src="/image/gallery1123.jpg"
              width={700}
              height={700}
              alt="gallery"
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}>
            <p className="pb-8 tracking-wide mt-6">
              Biz uluslararası bir mimarlık firmasıyız ve inanıyoruz ki mimarlık
              eğitimini tamamen yeniden düşünmek çok önemlidir. İzdiham sadece
              toplum üzerinde yeni vizyonları benimsemekle kalmaz, aynı zamanda
              yaratıcılık, üretim ve iletişim konularında çağdaş araçlar ve yeni
              yöntemlerle de bağlantılıdır. Tasarlanmış ve ikinci yıl mimarlık
              öğrencilerinin el işi portföylerini sergilemek için açılan kutu
              portföy sayfaları sunmaktadır, böylece öğrencilerin çalışmalarını
              daha iyi gösterebilirler. <br />
              <br />
              Biz uluslararası bir mimarlık firmasıyız ve inanıyoruz ki mimarlık
              eğitimini tamamen yeniden düşünmek çok önemlidir. İzdiham sadece
              toplum üzerinde yeni vizyonları benimsemekle kalmaz, aynı zamanda
              yaratıcılık, üretim ve iletişim konularında çağdaş araçlar ve yeni
              yöntemlerle de bağlantılıdır. Tasarlanmış ve ikinci yıl mimarlık
              öğrencilerinin el işi portföylerini sergilemek için açılan kutu
              portföy sayfaları sunmaktadır, böylece öğrencilerin çalışmalarını
              daha iyi gösterebilirler.
              <br /> <br />
              <span className="text-xl font-extrabold tracking-tight">
                The backpiperARCH olarak, ortak bir amaç etrafında birleşen
                insanların dönüştürücü gücüne olan inancımızı paylaşıyoruz. Bu
                inancımızı, insanların bir araya gelerek yarattıkları sinerji ve
                potansiyeldeki büyüme ile destekliyoruz.
              </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-700 ring-offset-2">
              Daha fazla bilgi edinin{" "}
              <TbArrowUpRight className="w-5 h-5 ml-2" />{" "}
            </Button>
          </motion.div>
        </div>
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-4xl font-bold tracking-wider text-center uppercase">
              Takım
            </motion.h1>
          </div>
          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  className="mx-auto rounded-full"
                  src="/image/profile3.jpg"
                  width={200}
                  height={200}
                  alt="profile"
                />
                <h2 className="py-4 text-2xl font-semibold upp">
                  Yapı Etütleri
                </h2>
                <p className="text-sm">
                  Yaratıcılık, yeni fikirler, çözümler ve olasılıklar üretme,
                  yaratma veya keşfetme yeteneğidir
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  className="mx-auto rounded-full"
                  src="/image/profile1.jpg"
                  width={200}
                  height={200}
                  alt="profile"
                />
                <h2 className="py-4 text-2xl font-semibold upp">
                  Yapı Etütleri
                </h2>
                <p className="text-sm">
                  Yaratıcılık, yeni fikirler, çözümler ve olasılıklar üretme,
                  yaratma veya keşfetme yeteneğidir
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                <Image
                  className="mx-auto rounded-full"
                  src="/image/profile2.jpg"
                  width={200}
                  height={200}
                  alt="profile"
                />
                <h2 className="py-4 text-2xl font-semibold upp">
                  Yapı Etütleri
                </h2>
                <p className="text-sm">
                  Yaratıcılık, yeni fikirler, çözümler ve olasılıklar üretme,
                  yaratma veya keşfetme yeteneğidir
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
