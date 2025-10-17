"use client";

import { motion } from "framer-motion";

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
            descricao: "Muito usado em baladas, arranjos com sopros e em músicas que pedem calor harmônico.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300">
                    🎸 Progressão com Subdominante Menor (IV → iv)
                </h1>

                <p className="text-lg leading-relaxed text-center">
                    Essa progressão é conhecida pelo toque emocional que o{" "}
                    <strong>iv</strong> (subdominante menor) traz.
                    É comum em baladas, MPB, pop e até louvores.
                </p>

                {tons.map((item, index) => (
                    <div
                        key={index}
                        className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-xl font-bold mb-2">🎵 Tom de {item.tom}</h3>

                        <div className="flex flex-wrap justify-center gap-3 mb-3">
                            {item.acordes.map((acorde, i) => (
                                <motion.span
                                    key={i}
                                    className={`px-3 py-2 rounded-lg font-semibold ${acorde.match(/m\b/) && !acorde.includes("7")
                                        ? "bg-yellow-600 text-white"
                                        : "bg-yellow-200 text-yellow-900"
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {acorde}
                                </motion.span>
                            ))}
                        </div>

                        <p className="italic text-yellow-800 mb-1">{item.descricao}</p>
                        <p className="text-sm text-yellow-700">
                            💡 Dica: toque o acorde menor ({item.acordes.find(a => a.match(/m\b/) && !a.includes("7"))})
                            mais suave para realçar a emoção.
                        </p>
                    </div>
                ))}

                <p className="text-center text-sm text-amber-200 mt-6">
                    💬 Experimente tocar lentamente e sinta a &quot;virada&quot; emocional entre o IV e o iv.
                </p>
            </div>
        </main>
    );
}
