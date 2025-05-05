import { Ripple } from "@/components/ripple";
import Image from "next/image";
import { AuroraText } from "@/components/aurora";

const About = () => {
  return (
    <section className="relative h-[calc(100vh-8rem)] w-full overflow-hidden">
      <Ripple />
      <section className="h-full justify-center items-center flex flex-col gap-4">
        <Image
          src="/icon.png"
          alt="avatar"
          width={100}
          height={100}
          className="rounded-xl"
        />
        <AuroraText className="text-2xl font-bold">SISHUI</AuroraText>
      </section>
    </section>
  );
};
export default About;
