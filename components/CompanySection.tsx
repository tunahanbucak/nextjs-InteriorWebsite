"use client";

import React from "react";
import Badge from "./Badge";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation";

export default function CompanySection() {
  return (
    <div className="bg-primary dark:bg-tertiary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-white leading-7">Her 24 saatte bir işlem</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={35} endCountText="bin" />
            </dd>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-white leading-7">Yürütülen Varlıklar</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={119} endCountText="bin" />
            </dd>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-white leading-7">Yıllık Yeni Kullanıcılar</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={45000} endCountText="+" />
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  );
}
