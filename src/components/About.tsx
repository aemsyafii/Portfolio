export function About() {
  return (
    <section className="py-20 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 font-bold">About Me</h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed text-base md:text-lg">
              <p>
                Seorang mahasiswa yang sedang menekuni bidang desain digital dan memiliki passion dalam menciptakan pengalaman visual yang menarik, intuitif, dan fungsional dengan mengombinasikan berbagai tools desain modern serta kemampuan adaptasi terhadap perkembangan AI dalam dunia kreatif.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl mb-6 font-bold">Skills & Tools</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "UI/UX Design",
                "Graphic Design",
                "Canva",
                "Figma",
                "CorelDRAW",
                "Photoshop"
              ].map((skill) => (
                <div 
                  key={skill}
                  className="bg-neutral-900 px-4 py-3 rounded-lg text-center hover:bg-neutral-800 transition-colors text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}