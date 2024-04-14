import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Aile zamanı için oturma odası",
    description:
      "Aileniz için temiz ve konforlu bir tasarıma sahip oturma odası. Modern bir tasarıma sahip büyüleyici",
    image: "/image/project3.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Mutfak modern ve temiz görünüyor",
    description:
      "Mutfak modern ve temiz görünüyor. büyüleyici beyaz modern bir tasarım",
    image: "/image/project2.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Ailece vakit geçirmek için mükemmel oturma odası",
    description:
      "Aileniz için temiz ve konforlu bir tasarıma sahip oturma odası.Modern bir tasarıma sahip büyüleyici.",
    image: "/image/project4.png",
    link: "",
  },
];

export default function page() {
  return (
    <div>
      <div className="bg-[url('/image/projectbackground.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-4xl lg:text-6xl font-semibold text-gray tracking-widest text-center lg:py-64">
          Projelerimiz
        </h1>
      </div>
      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group">
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4"> {project.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
