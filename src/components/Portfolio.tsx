import { PortfolioCard } from "./PortfolioCard";
import React from "react";
import ssgenerator from "../assets/ssgenerator.png";
import pwrush from "../assets/pwrush.png";
import quaccess from "../assets/quaccess.png";
import fgrotine from "../assets/fgrotine.png";
import fgkantine from "../assets/fgkantine.png";
import spdginjal from "../assets/spdginjal.png";
import pdfcanva from "../assets/pdfcanva.png";
import pdfhaji from "../assets/pdfhaji.png";
import pdfpaten from "../assets/pdfpaten.png";
import powerrushvideo from "../assets/20250829223102.mp4";

const portfolioItems = [
  // GitHub Projects
  {
    id: 1,
    title: "Search Suggestion Generator",
    description: "Tool untuk generate saran pencarian dalam jumlah sangat banyak dengan fitur download hasil, atur bahasa, mode salin, dan buka hasil dengan mesin pencarian populer",
    type: "github" as const,
    link: "https://aemsyafii.github.io/Search-Suggestion-Generator/",
    image: ssgenerator,
    category: "GitHub Project"
  },
  {
    id: 2,
    title: "Power Rush",
    description: "Permainan interaktif yang dikembangkan untuk merayakan kemerdekaan dan di uji coba di acara Pasar Jajan. Password admin dashboard: admin123",
    type: "github" as const,
    link: "https://aemsyafii.github.io/Power-Rush/",
    image: pwrush,
    category: "GitHub Project"
  },
  {
    id: 3,
    title: "Quick Access",
    description: "Aplikasi mobile yang dirancang menggunakan Kodular dengan tampilan bersih untuk kebutuhan sehari-hari",
    type: "kodular" as const,
    link: "https://github.com/aemsyafii/Quick-Access",
    image: quaccess,
    category: "Kodular"
  },
  
  // Figma Designs
  {
    id: 4,
    title: "Rotine",
    description: "Desain UI aplikasi Rotine untuk manajemen rutinitas harian dengan interface yang clean dan user-friendly",
    type: "figma" as const,
    link: "https://www.figma.com/proto/Ll68sSUTCqhN01KpKCfddO/UI-Roti-Ne?page-id=0%3A1&node-id=432-382&starting-point-node-id=432%3A382&t=kouIqG9bAfceyrBk-1",
    image: fgrotine,
    category: "Figma Design"
  },
  {
    id: 5,
    title: "Kantine",
    description: "Aplikasi mobile untuk sistem kantin dengan fokus pada kemudahan pemesanan dan pembayaran",
    type: "figma" as const,
    link: "https://www.figma.com/proto/PrNYjcG2tyGvGqKVhKXYKV/KantiNe?page-id=0%3A1&node-id=2329-207&starting-point-node-id=2329%3A439&t=XQladw1MCrelMbaS-1",
    image: fgkantine,
    category: "Figma Design"
  },
  {
    id: 6,
    title: "Sistem Pakar Diagnosa Ginjal",
    description: "Sistem pakar dengan survey interaktif untuk mendeteksi tingkat risiko penyakit ginjal (rendah, sedang, tinggi)",
    type: "figma-wip" as const,
    link: "https://drive.google.com/file/d/1CkJxFCPj1PppUAg8zOSSArNcCmDYzo_f/view?usp=sharing",
    image: spdginjal,
    category: "Figma Design"
  },
  
  // Presentation Designs
  {
    id: 7,
    title: "Belajar Canva",
    description: "Desain presentasi edukatif untuk pembelajaran Canva dengan layout menarik dan easy-to-follow",
    type: "presentation" as const,
    link: "https://drive.google.com/file/d/1P5aR_LJ8sEIaT6A-nWSAhbRac9z8ptjU/view?usp=sharing",
    image: pdfcanva,
    category: "Presentation"
  },
  {
    id: 8,
    title: "Haji dan Umrah",
    description: "Presentasi informatif tentang ibadah haji dan umrah dengan desain visual yang menarik dan konten yang komprehensif",
    type: "presentation" as const,
    link: "https://drive.google.com/file/d/10VAdVM29hwGIdG3GwWTZgaiJ8fsJpFGn/view?usp=sharing",
    image: pdfhaji,
    category: "Presentation"
  },
  {
    id: 9,
    title: "Hak Paten",
    description: "Materi presentasi tentang hak paten dan kekayaan intelektual dengan visualisasi data yang efektif",
    type: "presentation" as const,
    link: "https://drive.google.com/file/d/1xP1SLYyafC3R4iLGeAIMmfjKIocGOlzB/view?usp=sharing",
    image: pdfpaten,
    category: "Presentation"
  }
];

export function Portfolio() {
  const categories = ["All", "GitHub Project", "Figma Design", "Kodular", "Presentation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleCardClick = (item: typeof portfolioItems[0]) => {
    // Open in new tab for all items
    window.open(item.link, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">Portfolio</h2>
          <p className="text-neutral-400 mb-8 text-base md:text-lg">
            Beberapa proyek desain, development, dan presentasi yang telah saya kerjakan
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all text-sm font-semibold ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onClick={() => handleCardClick(item)} />
          ))}
        </div>

        {/* Power Rush Video Experience */}
        <div className="mt-16 border-t border-neutral-900 pt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl mb-3 font-bold">Power Rush Experience</h3>
            <p className="text-neutral-400 text-base md:text-lg">Lihat keseruan bermain Power Rush</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800">
              <video
                src={powerrushvideo}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}