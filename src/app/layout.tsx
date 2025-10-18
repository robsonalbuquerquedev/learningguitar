import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Tag de verificação e script do Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-9360124149047745" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9360124149047745"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body className="flex flex-col min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
