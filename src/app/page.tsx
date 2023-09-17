import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Hero />
        <Divider className="mb-8" />
        <div className="flex flex-col gap-6 px-12">
          <About />
          <Divider className="my-6" />
          <Projects />
        </div>
      </div>
    </main>
  );
}
