import type { Metadata } from "next";
import DedilhadosContent from "@/components/dedilhados/DedilhadosContent";

export const metadata: Metadata = {
    title: {
        absolute: "Dedilhados de Violão | Padrões Essenciais"
    },
    description:
        "Aprenda dedilhados clássicos e modernos para violão. P, I, M, A e padrões com abafado (X). Guia prático e visual para iniciantes e intermediários.",
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/dedilhados"
    },
};

export default function DedilhadosPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-10">

                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300 animate-fadeSlide">
                    🎶 Dedilhados de Violão
                </h1>

                <p className="text-lg leading-relaxed text-center text-amber-100 max-w-3xl mx-auto animate-fadeIn">
                    Aqui você encontrará dedilhados clássicos e modernos usando os dedos
                    <strong> P</strong>, <strong>I</strong>, <strong>M</strong>, <strong>A</strong> e o abafado <strong>X</strong>.
                </p>

                <DedilhadosContent />

            </div>
        </main>
    );
}
