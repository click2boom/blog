import { BlurFade } from "@/components/blurfade";
import { Meteors } from "@/components/meteors";
import { AuroraText } from "@/components/aurora";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";

export default function Home() {
  return (
    <section className="flex gap-12 flex-col py-52">
      <Meteors />
      <section className="flex flex-col gap-4 text-2xl font-bold tracking-wide sm:text-4xl xl:text-5xl/none">
        <BlurFade delay={0.15} inView>
          你好👋
        </BlurFade>
        <BlurFade delay={0.15 * 2} inView>
          我是<AuroraText>SISHUI</AuroraText>
        </BlurFade>
      </section>
      <BlurFade delay={0.15 * 3} inView>
        <h2 className="text-muted-foreground text-pretty text-sm tracking-tighter sm:text-lg xl:text-xl/none">
          一名💻软件开发者、🚩CTFER、🎮游戏、算法爱好者
        </h2>
      </BlurFade>
      {/* <BlurFade delay={0.25 * 4} inView className="flex gap-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="secondary">
              <Link href="/posts">博客</Link>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <i className="text-muted-foreground text-sm">
              查看关于我的更多信息
            </i>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="secondary">
              <Link href="/about">关于我</Link>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <i className="text-muted-foreground text-sm">查看我的博客</i>
          </HoverCardContent>
        </HoverCard>
      </BlurFade> */}
    </section>
  );
}
