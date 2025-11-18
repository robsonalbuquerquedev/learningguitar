import ShapesSolosContent from "@/components/shapes-solos/ShapesSolosContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Shapes para Solos no Violão 🎸 | Escala Maior – Guia Visual"
    },
    description:
        "Aprenda a tocar solos usando o shape da escala maior no violão. Visualização interativa, mudança de posição, dicas práticas e exemplos. Ideal para iniciantes e músicos intermediários.",
    keywords: [
        "shapes de solos",
        "shape da escala maior",
        "solos no violão",
        "escala maior",
        "padrões de solos",
        "escalas para violão",
        "como improvisar no violão",
        "violão para iniciantes",
        "como fazer solo",
        "shape de guitarra",
        "shape de violão"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/shapes-solos"
    },
    openGraph: {
        title: "Shapes para Solos no Violão 🎸 | Visualize e Estude a Escala Maior",
        description:
            "Domine os shapes da escala maior no violão. Mova o shape no braço, visualize as notas e aprenda a improvisar com fluidez.",
        url: "https://aprenderviolaoonline.com.br/shapes-solos",
        images: ["/og-image.png"],
    },
};

export default function ShapesSolosPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <h1 className="text-4xl font-bold text-center text-yellow-300 mb-10 drop-shadow-lg">
                🎸 Shapes para Solos – Escala Maior
            </h1>

            <ShapesSolosContent />
        </main>
    );
}
