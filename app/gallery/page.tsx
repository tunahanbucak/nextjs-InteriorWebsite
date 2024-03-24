import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/badroom.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <Image
            src="/image/gallery2.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg  hover:scale-90 transition-all"
          />
        </div>
        <div>
          <Image
            src="/image/gallery.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg  hover:scale-90 transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/swiper1.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <Image
            src="/image/gallery11.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg  hover:scale-90 transition-all"
          />
        </div>
        <div>
          <Image
            src="/image/living.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg  hover:scale-90 transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/gallery14.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <Image
            src="/image/gallery15.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg  hover:scale-90 transition-all"
          />
        </div>
        <div>
          <Image
            src="/image/gallery12.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg  hover:scale-90 transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/gallery7.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
          />
        </div>
        <div>
          <Image
            src="/image/gallery11.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg  hover:scale-90 transition-all"
          />
        </div>
        <div>
          <Image
            src="/image/gallery3.jpg"
            alt=""
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg  hover:scale-90 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
