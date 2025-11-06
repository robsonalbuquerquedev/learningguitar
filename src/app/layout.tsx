import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aprenderviolaoonline.com.br"),
  title: {
    default: "LearningGuitar 🎸 | Aprenda Violão de Forma Interativa",
    template: "%s | LearningGuitar 🎸",
  },
  description:
    "Aprenda violão online com aulas, exercícios interativos e conteúdos sobre acordes, escalas, campo harmônico e teoria musical. Ideal para iniciantes e músicos que desejam evoluir com técnica e prática.",

  keywords: [
    "aprender violão",
    "curso de violão online",
    "aulas de violão",
    "acordes de violão",
    "campo harmônico",
    "escalas musicais",
    "progressões de acordes",
    "teoria musical básica",
    "dicas de violão para iniciantes",
    "aprendizado musical interativo"
  ],

  authors: [{ name: "Robson Albuquerque", url: "https://aprenderviolaoonline.com.br" }],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aprenderviolaoonline.com.br",
    siteName: "LearningGuitar 🎸",
    title: "LearningGuitar 🎸 | Blog de Violão e Teoria Musical Interativa",
    description:
      "Aprenda violão online com aulas, exercícios interativos e conteúdos sobre acordes, escalas, campo harmônico e teoria musical. Ideal para iniciantes e músicos que desejam evoluir com técnica e prática.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LearningGuitar 🎸 – Aprenda Violão Online e Teoria Musical",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LearningGuitar 🎸 | Aprenda Violão Online e Teoria Musical",
    description:
      "Aprenda violão com exercícios práticos, acordes, escalas e teoria musical simplificada. Um blog educativo e interativo criado por Robson Albuquerque.",
    images: ["/og-image.png"],
    creator: "@robsonalbuquerque", // mantenha se quiser associar a sua conta X/Twitter
  },
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ✅ Tag de verificação do Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-9360124149047745" />
      </head>

      <body className="flex flex-col min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />

        {/* ✅ Script padrão do Google AdSense (sem data-nscript) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9360124149047745"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
