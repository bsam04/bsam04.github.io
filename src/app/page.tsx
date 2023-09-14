import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col p-5">
        {/* Main Content */}
        <div className="grow">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Benjamin Sam</h1>
          </div>
        </div>
        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
