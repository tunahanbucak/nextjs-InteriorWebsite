import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      category: "YATAK ODASI ",
      title: "Rahat Yatak Odası ",
      image: "/image/badroom.jpg",
      description:
        "Temiz, konforlu ve bi o kadar da  şık tasarıma sahip yatak odası",
    },
    {
      id: "02",
      category: "MUTFAK ",
      title: "Düzgün ve Temiz Mutfak",
      image: "/image/kitchen1.jpg",
      description:
        "Yemek yapmaktan aşırı keyif alacağınız şık ve çok kullanışlı mutfak.",
    },
    {
      id: "03",
      category: "OTURMA ODASI ",
      title: "Aile Oturma Odası",
      image: "/image/gallery3.jpg",
      description:
        "Aileniz için temiz ve konforlu bir tasarıma sahip aile oturma odası",
    },
    {
      id: "04",
      category: "SALON",
      title: "Temiz ve ferah bir salon",
      image: "/image/living.jpg",
      description:
        "Sevdiklerinizle rahatça oturup sohbet edebileceğiniz geniş, ferah salon.",
    },
  ];
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x ">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <Image
              src={item.image}
              width={380}
              height={100}
              alt="room"
              className="w-full"
            />
          </div>
          <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
            <div className="flex justify-between pb-4">
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>
            <p className="block text-xl font-semibold">{item.title}</p>
            <p className="py-4">{item.description}</p>
            <Link
              className="inline-flex items-center font-medium"
              href="/projects">
              Ayrıntılara Bakın <TbArrowNarrowRight className="ml-2" />
            </Link>
          </div>
          <div className=" hidden inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0">
            <p className="tracking-wider -rotate-90">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
