"use client";

import { motion } from "framer-motion";

export default function ProgressoesII_V_I() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white p-6 sm:p-12">
            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-extrabold text-center mb-8 drop-shadow-lg"
            >
                Progressões II–V–I 🎶
            </motion.h1>

            {/* Introdução */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto bg-black/40 p-6 rounded-2xl shadow-lg mb-10 text-lg"
            >
                <p className="mb-4">
                    A progressão <strong>II–V–I</strong> é uma das mais usadas em todo o
                    mundo. Está presente em estilos como <strong>jazz, MPB, bossa nova,
                        pop e gospel</strong>. Ela cria um movimento natural entre tensão e
                    resolução — o famoso &quot;vai e volta&quot; da harmonia.
                </p>
                <p>
                    💬 Pense nela como uma conversa: o II começa o assunto, o V cria
                    expectativa e o I traz a resposta final.
                </p>
            </motion.section>

            {/* Estrutura teórica */}
            <section className="max-w-3xl mx-auto bg-amber-50 text-amber-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎵 Estrutura da Progressão</h2>
                <p className="mb-4">
                    No <strong>campo harmônico maior</strong>, a sequência é formada assim:
                </p>

                <table className="w-full text-center border-collapse bg-white rounded-lg overflow-hidden text-sm sm:text-base">
                    <thead className="bg-amber-300 text-amber-900">
                        <tr>
                            <th className="p-2">Grau</th>
                            <th className="p-2">Função</th>
                            <th className="p-2">Tipo de Acorde</th>
                            <th className="p-2">Exemplo (C maior)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2">II</td>
                            <td className="p-2">Pré-dominante</td>
                            <td className="p-2">Menor com 7ª</td>
                            <td className="p-2">Dm7</td>
                        </tr>
                        <tr>
                            <td className="p-2">V</td>
                            <td className="p-2">Dominante</td>
                            <td className="p-2">Maior com 7ª menor</td>
                            <td className="p-2">G7</td>
                        </tr>
                        <tr>
                            <td className="p-2">I</td>
                            <td className="p-2">Tônica</td>
                            <td className="p-2">Maior com 7ª maior</td>
                            <td className="p-2">C7M</td>
                        </tr>
                    </tbody>
                </table>

                <p className="mt-4 italic">
                    🎸 Toque e perceba: Dm7 → G7 → C7M soa completo, natural e cheio de
                    emoção. É o coração da música tonal!
                </p>
            </section>

            {/* Aplicações práticas */}
            <section className="max-w-3xl mx-auto bg-yellow-50 text-yellow-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎶 Aplicações na Prática</h2>
                <p className="mb-4">
                    Essa progressão aparece em diversos estilos. Veja alguns exemplos:
                </p>

                <div className="space-y-4">
                    <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-lg">
                        <p className="font-semibold">🎹 Jazz / Bossa Nova:</p>
                        <p>Dm7 → G7 → C7M → A7M → Dm7 → G7 → C7M</p>
                        <p className="text-sm text-yellow-700 mt-1">
                            (Circular e sofisticada, base de muitas harmonias jazzísticas)
                        </p>
                    </div>

                    <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-lg">
                        <p className="font-semibold">🎤 Pop / MPB:</p>
                        <p>Am7 → D7 → G7M → C7M</p>
                        <p className="text-sm text-yellow-700 mt-1">
                            (Aqui, o mesmo conceito aparece com acordes equivalentes)
                        </p>
                    </div>

                    <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-lg">
                        <p className="font-semibold">🎸 Louvor / Gospel:</p>
                        <p>Em7 → A7 → D7M</p>
                        <p className="text-sm text-yellow-700 mt-1">
                            (Sensação de entrega e resolução espiritual)
                        </p>
                    </div>
                </div>
            </section>

            {/* Transição / Dica final */}
            <div className="my-10 text-center">
                <p className="text-lg italic text-amber-200">
                    💡 Dica de ouro: pratique a II–V–I em todas as tonalidades!
                    Basta mover o mesmo padrão de acordes algumas casas à frente — assim
                    você se liberta de tocar apenas em Dó. 😉
                </p>
            </div>

            {/* Fechamento */}
            <section className="max-w-3xl mx-auto text-center text-lg bg-black/40 p-6 rounded-2xl shadow-lg">
                <p className="mb-3">
                    🔥 Compreendendo a progressão II–V–I, você já domina a base de grande
                    parte das músicas modernas.
                </p>
            </section>
        </main>
    );
}
