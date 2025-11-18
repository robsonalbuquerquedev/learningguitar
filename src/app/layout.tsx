import "./globals.css";
import BreadcrumbInjector from "@/components/BreadcrumbInjector";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://aprenderviolaoonline.com.br"),

  title: {
    default: "LearningGuitar 🎸 | Aprenda Violão de Forma Interativa",
    template: "%s | LearningGuitar 🎸",
  },

  description:
    "Aprenda violão online com aulas, exercícios interativos, acordes, escalas, campo harmônico e teoria musical simplificada. Ideal para iniciantes e músicos que querem evoluir com técnica e prática.",

  keywords: [
    "aprender violão",
    "curso de violão online",
    "aulas de violão",
    "acordes de violão",
    "escalas musicais",
    "campo harmônico",
    "ritmos de violão",
    "violão para iniciantes",
    "teoria musical básica",
    "treinos de violão",
    "como tocar violão"
  ],

  category: "Music Education",

  authors: [
    {
      name: "Robson Albuquerque",
      url: "https://aprenderviolaoonline.com.br"
    }
  ],

  creator: "Robson Albuquerque",
  publisher: "LearningGuitar",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aprenderviolaoonline.com.br",
    siteName: "LearningGuitar 🎸",
    title: "LearningGuitar 🎸 | Aprenda Violão Online",
    description:
      "Aulas, exercícios práticos e conteúdos completos sobre acordes, escalas e teoria musical. Aprenda violão de forma simples e intuitiva.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LearningGuitar 🎸 – Aulas e Teoria Musical"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "LearningGuitar 🎸 | Aprenda Violão Online",
    description:
      "Acordes, escalas, campo harmônico e exercícios práticos para iniciantes e músicos que querem evoluir.",
    images: ["/og-image.png"],
    creator: "@LGuitarBr"
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  alternates: {
    canonical: "https://aprenderviolaoonline.com.br",
    languages: {
      "pt-BR": "https://aprenderviolaoonline.com.br"
    }
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ✅ Tag de verificação do Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-9360124149047745" />

        {/* ✅ Tag de verificação do Pinterest */}
        <meta name="p:domain_verify" content="66fb6e1cb728a61992a3b89e771294f1" />

        {/* 🧠 Google Consent Mode (AdSense + GA4) */}
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>

        {/* 📊 Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-06LMB9E4W6"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-06LMB9E4W6', {
              'anonymize_ip': true,
              'allow_ad_personalization_signals': false
            });
          `}
        </Script>

        {/* ⭐ INSERIR AQUI: JSON-LD PARA SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LearningGuitar 🎸",
              "url": "https://aprenderviolaoonline.com.br",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aprenderviolaoonline.com.br/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LearningGuitar",
              "url": "https://aprenderviolaoonline.com.br",
              "logo": "https://aprenderviolaoonline.com.br/logo.png",
              "description":
                "Aprenda violão online com aulas práticas, teoria musical, acordes, escalas e exercícios interativos.",
              "founder": "Robson Albuquerque",
              "foundingDate": "2025",
              "sameAs": [
                "https://www.instagram.com/robson.albuquerque_cm/",
                "https://www.facebook.com/robson.albuquerque098",
                "https://x.com/LGuitarBr?t=pw48V59DrKNemCeElocI9w&s=08"
              ]
            })
          }}
        />
      </head>

      <body className="flex flex-col min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
        <BreadcrumbInjector />
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <CookieConsent />

        {/* ✅ Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9360124149047745"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
