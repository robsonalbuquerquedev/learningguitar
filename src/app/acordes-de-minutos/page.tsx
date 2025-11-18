import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Acordes de Minutos e Meio Diminuto | Guia Completo para Violão"
    },

    description:
        "Aprenda como funcionam os acordes diminutos (°) e meio-diminutos (m7♭5) no violão. Guia simples e prático para identificar, montar e aplicar esses acordes como ponte harmônica entre outros acordes.",

    keywords: [
        "acorde diminuto",
        "acorde diminuto violão",
        "acorde de minuto",
        "acorde dim7",
        "acorde meio diminuto",
        "acorde m7b5",
        "como usar acordes diminutos",
        "acordes diminutos para iniciantes",
        "acordes tensos no violão",
        "função do acorde diminuto"
    ],

    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/acordes-de-minutos"
    },

    openGraph: {
        title: "Acordes de Minutos e Meio Diminuto | Guia Completo para Violão",
        description:
            "Entenda como usar acordes diminutos (°) e meio-diminutos (m7♭5) no violão para criar movimentos suaves, tensões harmônicas e passagens elegantes entre acordes.",
        url: "https://aprenderviolaoonline.com.br/acordes-de-minutos",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Acordes Minutos e Meio Diminuto — Guia para Violão"
            }
        ],
        type: "article",
        locale: "pt_BR",
        siteName: "LearningGuitar 🎸"
    },

    twitter: {
        card: "summary_large_image",
        title: "Acordes de Minutos e Meio Diminuto | Guia Completo",
        description:
            "Aprenda a aplicar acordes diminutos e meio-diminutos no violão de forma clara, musical e prática. Perfeito para iniciantes e músicos intermediários.",
        images: ["/og-image.png"],
        creator: "@LGuitarBr"
    }
};

export default function AcordesDeMinutos() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-10 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Título */}
                <h1 className="text-4xl font-bold mb-6 text-amber-400 text-center animate-fadeSlide">
                    🎵 Acordes de Minutos e Meio de Minuto
                </h1>

                {/* Introdução */}
                <p className="text-lg mb-6 text-gray-200 text-center animate-fadeIn">
                    Os <strong>acordes diminutos</strong> e os <strong>meio-diminutos</strong> são como
                    “pontes sonoras” — eles ligam um acorde ao outro criando uma sensação de
                    movimento suave e elegante. Vamos entender como isso funciona na prática!
                </p>

                {/* Explicação dos diminutos */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-amber-300 mb-3">
                        🔹 Acordes Diminutos (º)
                    </h2>
                    <p className="mb-4">
                        Os acordes <strong>diminutos</strong> são aqueles que <em>preparam o próximo semitom</em>.
                        Por exemplo:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Eº prepara o Fm</li>
                        <li>F#º prepara o Gm</li>
                        <li>G#º prepara o Am</li>
                    </ul>
                    <p>
                        Ou seja, sempre que você tocar um acorde diminuto, ele vai querer resolver
                        naturalmente para o acorde um <strong>semitom acima</strong>, quase como se estivesse &quot;puxando&quot;
                        o próximo som.
                    </p>
                </section>

                {/* Explicação dos meio diminutos */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-amber-300 mb-3">
                        🔸 Acordes Meio-Diminutos (ø)
                    </h2>
                    <p className="mb-4">
                        Já os acordes <strong>meio-diminutos</strong> (representados pelo símbolo &quot;ø&quot;) funcionam como
                        uma preparação do <em>acorde dominante</em>. É como se eles dissesse: &quot;Ei, estou
                        preparando o terreno para o acorde que vai preparar o próximo!&quot;
                    </p>
                    <p className="mb-4">
                        Por exemplo, o acorde <strong>B meio-diminuto (Bm7♭5)</strong> prepara o <strong>E7</strong>,
                        e o E7, por sua vez, prepara o <strong>Am</strong>.
                    </p>
                    <p>
                        🎯 Em resumo: <strong>Bø → E7 → Am</strong> é uma sequência de <em>preparação dentro da preparação</em>.
                        Uma escadinha harmônica perfeita!
                    </p>
                </section>

                {/* Resumo visual */}
                <div className="my-8 text-center">
                    <p className="text-lg italic text-amber-200">
                        💡 Pense nos acordes diminutos e meio-diminutos como &quot;degraus secretos&quot;
                        que ligam acordes de forma elegante e expressiva.
                    </p>
                </div>

            </div>
        </main>
    );
}
