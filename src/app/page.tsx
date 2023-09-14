import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-5">
      {/* Main Content */}
      <main className="grow container mx-auto px-12">
        <div className="flex flex-col items-center">
          <Hero />
          <Divider className="m-4" />
          <Projects />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
