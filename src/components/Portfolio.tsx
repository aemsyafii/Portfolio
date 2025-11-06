import { PortfolioCard } from "./PortfolioCard";
import React from "react";

const portfolioItems = [
  // GitHub Projects
  {
    id: 1,
    title: "Search Suggestion Generator",
    description: "Tool untuk generate saran pencarian dalam jumlah sangat banyak dengan fitur download hasil, atur bahasa, mode salin, dan buka hasil dengan mesin pencarian populer",
    type: "github" as const,
    link: "https://aemsyafii.github.io/Search-Suggestion-Generator/",
    image: "https://drive.google.com/thumbnail?id=1xP298NM-tdBjb9oI27PEL1TN743Cl-QH&sz=w1000",
    tags: ["Web App", "Generator", "SEO Tools"],
    category: "Development"
  },
  {
    id: 2,
    title: "Power Rush",
    description: "Permainan interaktif yang dikembangkan dengan Figma untuk merayakan kemerdekaan. Telah diuji di acara Pasar Jajan dengan dashboard admin untuk analitik dan integrasi audio",
    type: "github" as const,
    link: "https://aemsyafii.github.io/Power-Rush/",
    image: "https://drive.google.com/thumbnail?id=19XXlo_O4OwB2E1VWbgURnBCP4g3jKnLk&sz=w1000",
    tags: ["Interactive Game", "React", "Admin Dashboard"],
    category: "Development"
  },
  
  // Figma Designs
  {
    id: 3,
    title: "Rotine",
    description: "Desain UI aplikasi Rotine untuk manajemen rutinitas harian dengan interface yang clean dan user-friendly",
    type: "figma" as const,
    link: "https://www.figma.com/proto/Ll68sSUTCqhN01KpKCfddO/UI-Roti-Ne?page-id=0%3A1&node-id=432-382&starting-point-node-id=432%3A382&t=kouIqG9bAfceyrBk-1",
    image: "https://drive.google.com/thumbnail?id=14aAwbn-fEjrVVlawldpzULw3mj0zAFMS&sz=w1000",
    tags: ["Mobile App", "Productivity", "UI Design"],
    category: "UI/UX Design"
  },
  {
    id: 4,
    title: "Kantine",
    description: "Aplikasi mobile untuk sistem kantin dengan fokus pada kemudahan pemesanan dan pembayaran",
    type: "figma" as const,
    link: "https://www.figma.com/proto/PrNYjcG2tyGvGqKVhKXYKV/KantiNe?page-id=0%3A1&node-id=2329-207&starting-point-node-id=2329%3A439&t=XQladw1MCrelMbaS-1",
    image: "https://drive.google.com/thumbnail?id=19gCdfnpRyl-d0MmF9AsmJuA7fJR-xr9I&sz=w1000",
    tags: ["Mobile App", "Food Service", "UX Design"],
    category: "UI/UX Design"
  },
  {
    id: 5,
    title: "Sistem Pakar Diagnosa Ginjal",
    description: "Proyek ongoing - Aplikasi sistem pakar dengan survey interaktif untuk mendeteksi tingkat risiko penyakit ginjal (rendah, sedang, tinggi)",
    type: "figma-wip" as const,
    link: "https://drive.google.com/file/d/1CkJxFCPj1PppUAg8zOSSArNcCmDYzo_f/view?usp=sharing",
    image: "https://drive.google.com/thumbnail?id=1CkJxFCPj1PppUAg8zOSSArNcCmDYzo_f&sz=w1000",
    tags: ["Health Tech", "Expert System", "Work in Progress"],
    category: "UI/UX Design"
  },
  
  // Presentation Designs
  {
    id: 6,
    title: "Belajar Canva",
    description: "Desain presentasi edukatif untuk pembelajaran Canva dengan layout menarik dan easy-to-follow",
    type: "presentation" as const,
    link: "https://drive.google.com/file/d/1P5aR_LJ8sEIaT6A-nWSAhbRac9z8ptjU/view?usp=sharing",
    image: "https://drive.google.com/thumbnail?id=1YTRV9n2-8r_XqTS3QDzzQyX6c9pI3ce5&sz=w1000",
    tags: ["Presentation", "Education", "Canva"],
    category: "Visual Design"
  },
  {
    id: 7,
    title: "Haji dan Umrah",
    description: "Presentasi informatif tentang ibadah haji dan umrah dengan desain visual yang menarik dan konten yang komprehensif",
    type: "presentation" as const,
    link: "https://drive.google.com/file/d/10VAdVM29hwGIdG3GwWTZgaiJ8fsJpFGn/view?usp=sharing",
    image: "https://drive.google.com/thumbnail?id=1wvs2UDnrXtnMEmeRJ05258GN04WYPN5_&sz=w1000",
    tags: ["Presentation", "Religious", "Information"],
    category: "Visual Design"
  },
  {
    id: 8,
    title: "Hak Paten",
    description: "Materi presentasi tentang hak paten dan kekayaan intelektual dengan visualisasi data yang efektif",
    type: "presentation" as const,
    link: "https://drive.google.com/file/d/1xP1SLYyafC3R4iLGeAIMmfjKIocGOlzB/view?usp=sharing",
    image: "https://drive.google.com/thumbnail?id=1u5Q1WDX3JAk9urcIefehufVmhl7E4Rsf&sz=w1000",
    tags: ["Presentation", "Legal", "Education"],
    category: "Visual Design"
  }
];

export function Portfolio() {
  const categories = ["All", "Development", "UI/UX Design", "Visual Design"];
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
              <iframe
                src="https://drive.google.com/file/d/1bun5Y0WylVfXvCpx0J0F0aFyhIKnUclu/preview"
                className="w-full h-full"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}