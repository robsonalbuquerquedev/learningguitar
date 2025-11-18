import type { Metadata } from "next";
import FeedbackContent from "@/components/feedback/FeedbackContent";

export const metadata: Metadata = {
    title: {
        absolute: "Enviar Feedback | LearningGuitar 🎸"
    },
    description:
        "Envie sugestões, elogios ou opiniões sobre o LearningGuitar. Seu feedback ajuda a melhorar o conteúdo e criar uma experiência ainda mais completa.",
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/feedback"
    },
    keywords: [
        "feedback",
        "opinião",
        "sugestão",
        "contato",
        "mensagem de feedback",
        "LearningGuitar",
        "violão online"
    ],
    openGraph: {
        title: "Envie seu Feedback | LearningGuitar",
        description:
            "Envie sugestões, opiniões e ideias para melhorar o LearningGuitar!",
        url: "https://aprenderviolaoonline.com.br/feedback",
        images: ["/og-image.png"]
    }
};

export default function FeedbackPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-yellow-50 px-6 py-20">

            {/* Título da página */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300 mb-12 drop-shadow-lg">
                Envie seu Feedback 🎸
            </h1>

            {/* Container amplo para o HERO SPLIT */}
            <div className="max-w-6xl mx-auto">
                <FeedbackContent />
            </div>

        </main>
    );
}