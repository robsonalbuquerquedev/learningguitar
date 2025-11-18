import MemorizarBracoContent from "@/components/memorizar-braco/MemorizarBracoContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Memorizar o Braço do Violão | Guia Visual Completo"
    },

    description:
        "Aprenda a memorizar todas as notas do braço do violão de forma simples e visual. Tabela interativa, truques de memorização, casa 12, notas naturais, cromáticas e padrões essenciais para iniciantes.",

    keywords: [
        "memorizar braço do violão",
        "notas no violão",
        "notas no braço do violão",
        "como decorar as notas",
        "notas das casas do violão",
        "trastes do violão",
        "tabela de notas violão",
        "notas das cordas violão",
        "casa 12 violão",
        "truques para memorizar notas"
    ],

    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/memorizar-braco-do-violao"
    },

    openGraph: {
        title: "Memorizar o Braço do Violão | Guia Visual Completo",
        description:
            "Veja como memorizar todas as notas do violão com uma abordagem simples, visual e prática. Inclui truques, tabela interativa e padrões essenciais.",
        url: "https://aprenderviolaoonline.com.br/memorizar-braco-do-violao",
        images: ["/og-image.png"],
        type: "article"
    },

    twitter: {
        card: "summary_large_image",
        title: "Memorizar o Braço do Violão | Guia Prático e Visual",
        description:
            "Descubra todas as notas do braço do violão com truques simples e uma tabela visual interativa.",
        images: ["/og-image.png"]
    }
};

export default function MemorizarBracoPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 px-6 py-12">

            <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300 mb-10 drop-shadow-lg animate-fadeSlide">
                🎸 Memorizar o Braço do Violão
            </h1>

            <div className="max-w-4xl mx-auto">
                <MemorizarBracoContent />
            </div>
        </main>
    );
}
