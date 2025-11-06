import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="max-w-4xl text-center space-y-6">
        <div className="space-y-1">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text inline-block">
              Andre
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Maulana Syafi'i
          </h2>
        </div><br />
        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light">
          Mahasiswa Teknologi Informasi Semester 5
        </p>
        <button 
          onClick={scrollToPortfolio}
          className="mt-8 inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-base font-medium"
        >
          Lihat Portfolio
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}