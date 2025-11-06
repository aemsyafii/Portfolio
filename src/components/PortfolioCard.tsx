import { Github, Figma, FileText, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  type: "github" | "figma" | "figma-wip" | "presentation";
  link: string;
  image: string;
  tags: string[];
  category: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  const getIcon = () => {
    switch (item.type) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "figma":
      case "figma-wip":
        return <Figma className="w-4 h-4" />;
      case "presentation":
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeLabel = () => {
    switch (item.type) {
      case "github":
        return "GitHub Project";
      case "figma":
        return "Figma Design";
      case "figma-wip":
        return "Figma - Work in Progress";
      case "presentation":
        return "Presentation (PDF)";
    }
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-neutral-900 rounded-xl overflow-hidden hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] border border-neutral-800 hover:border-neutral-700"
    >
      <div className="aspect-video overflow-hidden bg-neutral-950 relative">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.type === "figma-wip" && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" />
            Work in Progress
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium uppercase tracking-wide">
          {getIcon()}
          <span>{getTypeLabel()}</span>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold leading-tight group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <p className="text-neutral-400 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}