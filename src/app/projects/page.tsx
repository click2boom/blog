import { BlurFade } from "@/components/blurfade";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import { motion } from "motion/react";
const projects = [
  { name: "alist", description: "聚合云盘", url: "https://alist.776102.xyz/" },
  {
    name: "tldraw",
    description: "虚拟白板",
    url: "https://tldraw.776102.xyz/",
  },
  {
    name: "temp-mail",
    description: "临时邮箱",
    url: "https://mail.sishuic.dpdns.org/",
  },
  {
    name: "ani-rss",
    description: "番剧RSS",
    url: "https://ani-rss.776102.xyz/",
  },
];

const Search = () => {
  return (
    <input
      className={cn(
        `outline-none p-4 border-2 font-bold w-full min-w-80 rounded-lg`,
        `transition duration-300border-white/50 focus:border-sky-500 `
      )}
      type="text"
      name="search"
      id="project-search"
      placeholder="搜索..."
    />
  );
};

const Projects = () => {
  return (
    <div className="space-y-10">
      <h1 className="inline-block bg-[var(--chart-1)] text-5xl font-bold mb-10">
        项目
      </h1>
      <Search />
      <ul className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 ">
        {projects.map(({ name, description, url }, index) => (
          <BlurFade
            key={index}
            delay={0.1 * index}
            inView
            className="transition duration-300 ease-in-out  hover:scale-103 "
          >
            <Link
              href={url}
              rel="noreferrer"
              target="blank"
              className="animated-underline flex flex-col justify-center items-start min-w-80 w-full h-full border-2 rounded-md p-6 space-y-2 "
            >
              <h4 className="text-2xl font-bold">{name}</h4>
              <p className="text-muted-foreground">{description}</p>
            </Link>
          </BlurFade>
        ))}
      </ul>
    </div>
  );
};
export default Projects;
