import type { Metadata } from "next";
import BatidasContent from "@/components/batidas/BatidasContent";

export const metadata: Metadata = {
    title: {
        absolute: "Batidas Básicas de Violão | Guia Visual e Prático"
    },
    description:
        "Aprenda batidas básicas de violão com exemplos visuais, setas de movimento e padrões rítmicos. Perfeito para iniciantes começando a tocar.",
    keywords: [
        "batidas de violão",
        "ritmo violão",
        "padrões de batida",
        "como fazer batida violão",
        "batida para iniciantes",
        "violão ritmos básicos",
        "levadas violão"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/batidas-basicas"
    },
    openGraph: {
        title: "Batidas Básicas de Violão | Guia Completo",
        description:
            "Aprenda batidas básicas de violão com animações visuais, setas para cima e para baixo e padrões rítmicos práticos.",
        url: "https://aprenderviolaoonline.com.br/batidas-basicas",
        images: ["/og-image.png"]
    }
};

export default function BatidasPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300 animate-fadeSlide">
                    🎸 Batidas Básicas de Violão
                </h1>

                <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto animate-fadeIn">
                    Explore e pratique diferentes padrões de batida. Use o campo abaixo para buscar por estilo ou nome.
                </p>

                <BatidasContent />
            </div>
        </main>
    );
}
