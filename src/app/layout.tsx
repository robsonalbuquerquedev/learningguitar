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
    "Aprenda violão online com exercícios interativos, escalas, acordes, campo harmônico e técnicas práticas. Ideal para iniciantes e músicos que querem evoluir.",

  keywords: [
    "aprender violão",
    "curso de violão",
    "acordes violão",
    "campo harmônico",
    "escalas violão",
    "progressões de acordes",
    "teoria musical",
    "dicas de violão",
    "música para iniciantes"
  ],

  authors: [{ name: "Robson Albuquerque", url: "https://aprenderviolaoonline.com.br" }],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aprenderviolaoonline.com.br",
    siteName: "LearningGuitar 🎸",
    title: "LearningGuitar 🎸 | Aprenda Violão de Forma Interativa",
    description:
      "Aprenda violão com aulas práticas, acordes, escalas, campo harmônico e exercícios guiados.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LearningGuitar 🎸 – Aprenda Violão Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LearningGuitar 🎸 | Aprenda Violão Online",
    description:
      "Aprenda violão com exercícios práticos, teoria musical simplificada e ferramentas interativas.",
    images: ["/og-image.png"],
    creator: "@robsonalbuquerque", // se tiver Twitter
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
