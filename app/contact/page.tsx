"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function page() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          İLETİŞİM
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Lütfen herhangi bir şey sormaktan çekinmeyin
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <Input type="name" id="firstname" placeholder="İsim" />
          </div>
          <div className="mt-2.5">
            <Input type="name" id="lastname" placeholder="Soyisim" />
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="name" id="Company" placeholder="Şirket" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="email" id="email" placeholder="E-posta Adresi" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea placeholder="Mesajınızı Buraya Yazın..." />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-primary" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}>
                <span className="sr-only">Politikaları kabul etmek</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="dark:text-white text-sm leading-6 text-gray-600">
              Bunu seçerek
              <a href="" className=" mx-1 font-semibold text-primary">
                gizlilik politikamızı
              </a>
              kabul etmiş olursunuz.
            </Switch.Label>
          </Switch.Group>
          <div className="mt-10">
            <Button
              type="submit"
              className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Gönder <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
