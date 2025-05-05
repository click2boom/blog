"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
const LinkData = [
  { name: "主页", href: "/" },
  { name: "项目", href: "/projects" },
  { name: "文章", href: "/posts" },
  { name: "关于", href: "/about" },
  { name: "歌单", href: "/playlist" },
];
const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="h-28 flex justify-between items-center sticky top-0 z-10  bg-background">
      <ul className="flex gap-4 font-bold text-xl">
        {LinkData.map((link, index) => (
          <li key={index} className="animated-underline pb-1">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
            <span className="sr-only">切换主题</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            明亮
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            黑暗
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            适应
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
export default Navbar;
