import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Progressão com Subdominante Menor (IV → iv) | Guia de Harmonia 🎸"
    },
    description:
        "Aprenda como funciona a progressão com subdominante menor (IV → iv), usada em pop, MPB, louvores e baladas. Exemplos em vários tons, explicação clara e dicas práticas para violão.",
    keywords: [
        "subdominante menor",
        "IV iv",
        "progressão com iv",
        "progressões menores",
        "tom menor subdominante",
        "harmonia no violão",
        "acordes de violão",
        "como montar progressões",
        "campo harmônico menor",
        "violão para iniciantes",
        "música gospel acordes",
        "mpb harmonia"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/subdominante-menor"
    },
    openGraph: {
        title: "Progressão com Subdominante Menor (IV → iv) | Harmonia Explicada",
        description:
            "Entenda como funciona a progressão com subdominante menor e veja exemplos em vários tons. Guia simples e prático.",
        url: "https://aprenderviolaoonline.com.br/subdominante-menor",
        images: ["/og-image.png"],
    }
};

export default function ProgressaoComSubdominanteMenor() {
    const tons = [
        {
            tom: "G",
            acordes: ["G", "G7", "C", "Cm", "G", "D", "G", "D"],
            descricao: "Leve e otimista, ótimo para músicas alegres.",
        },
        {
            tom: "A",
            acordes: ["A", "A7", "D", "Dm", "A", "E", "A", "E"],
            descricao: "Perfeito para louvores e baladas intensas.",
        },
        {
            tom: "B",
            acordes: ["B", "B7", "E", "Em", "B", "F#", "B", "F#"],
            descricao: "Popular no rock, pop e em grooves com power-chords.",
        },
        {
            tom: "C",
            acordes: ["C", "C7", "F", "Fm", "C", "G", "C", "G"],
            descricao: "Clássico da Bossa Nova com sonoridade suave e emocional.",
        },
        {
            tom: "D",
            acordes: ["D", "D7", "G", "Gm", "D", "A", "D", "A"],
            descricao: "Muito usado em pop e sertanejo romântico.",
        },
        {
            tom: "E",
            acordes: ["E", "E7", "A", "Am", "E", "B", "E", "B"],
            descricao: "Muito usado em rock, blues e músicas com guitarra elétrica.",
        },
        {
            tom: "F",
            acordes: ["F", "F7", "Bb", "Bbm", "F", "C", "F", "C"],
            descricao: "Muito usado em baladas, arranjos com sopros e músicas com calor harmônico.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-8">

                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300 mb-4 animate-fadeSlide">
                    🎸 Progressão com Subdominante Menor (IV → iv)
                </h1>

                <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
                    Essa progressão é conhecida pelo toque emocional que o{" "}
                    <strong>iv</strong> (subdominante menor) traz.
                    Ela aparece bastante em baladas, MPB, pop e até louvores.
                </p>

                {tons.map((item, index) => (
                    <div
                        key={index}
                        className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg animate-fadeIn"
                    >
                        <h3 className="text-xl font-bold mb-2">🎵 Tom de {item.tom}</h3>

                        <div className="flex flex-wrap justify-center gap-3 mb-3">
                            {item.acordes.map((acorde, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-2 rounded-lg font-semibold animate-popIn ${acorde.match(/m\b/) && !acorde.includes("7")
                                        ? "bg-yellow-600 text-white"
                                        : "bg-yellow-200 text-yellow-900"
                                        }`}
                                >
                                    {acorde}
                                </span>
                            ))}
                        </div>

                        <p className="italic text-yellow-800 mb-1">{item.descricao}</p>

                        <p className="text-sm text-yellow-700">
                            💡 Dica: toque o acorde menor (
                            {item.acordes.find(a => a.match(/m\b/) && !a.includes("7"))})
                            mais suave para realçar a emoção.
                        </p>
                    </div>
                ))}

                <p className="text-center text-sm text-amber-200 mt-6">
                    💬 Experimente tocar lentamente e sinta a &quot;virada emocional&quot; entre o IV e o iv.
                </p>
            </div>
        </main>
    );
}
