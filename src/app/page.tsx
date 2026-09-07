import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import StartHere from "@/components/home/StartHere";
import BeginnerPath from "@/components/home/BeginnerPath";
import ExploreUniverse from "@/components/home/ExploreUniverse";
import FeaturedContent from "@/components/home/FeaturedContent";
import Equipment from "@/components/home/Equipment";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: {
    absolute: "LearningGuitar 🎸 | Aprenda Violão com Prática e Simplicidade",
  },
  description:
    "Aprenda violão online com aulas práticas, truques simples, exercícios interativos, acordes, escalas e progressões. Ideal para iniciantes e músicos intermediários.",
  keywords: [
    "aprender violão",
    "violão para iniciantes",
    "aulas de violão",
    "acordes de violão",
    "escalas de violão",
    "progressões de acordes",
    "como tocar violão",
    "violão online",
    "curso de violão grátis",
    "dicas de violão",
  ],
  alternates: {
    canonical: "https://aprenderviolaoonline.com.br",
  },
  openGraph: {
    title: "LearningGuitar 🎸 | Aprenda Violão Online",
    description:
      "Exercícios práticos, acordes, escalas, campo harmônico e truques simples para aprender violão de forma intuitiva.",
    url: "https://aprenderviolaoonline.com.br",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearningGuitar 🎸 | Aprenda Violão",
    description:
      "Conteúdos fáceis e objetivos para aprender violão do zero até o nível intermediário.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white flex flex-col">
      <Hero />
      <StartHere />
      <BeginnerPath />
      <ExploreUniverse />
      <FeaturedContent />
      <Equipment />
      <FinalCta />
    </main>
  );
}
