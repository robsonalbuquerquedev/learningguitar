import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LearningGuitar 🎸 | Aprenda Violão de Forma Interativa",
  description:
    "Aprenda violão online com truques práticos, exercícios interativos e dicas para memorizar acordes, notas e escalas. Ideal para iniciantes e estudantes de música.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
