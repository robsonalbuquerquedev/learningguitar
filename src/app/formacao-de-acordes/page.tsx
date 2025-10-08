"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FormacaoDeAcordes() {
    const notas = ["C", "D", "E", "F", "G", "A", "B"];
    const acordeCMaior = ["C", "E", "G"];
    const acordeCMenor = ["C", "Eb", "G"];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-yellow-50 py-10 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Título principal */}
                <motion.h1
                    className="text-4xl font-bold mb-8 text-center drop-shadow-md"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    🎶 Formação de Acordes
                </motion.h1>

                {/* Introdução */}
                <p className="mb-6 leading-relaxed text-lg">
                    Um <strong>acorde</strong> é um conjunto de três ou mais notas tocadas juntas que soam
                    harmoniosamente. Para entender como eles se formam, usamos como base a{" "}
                    <Link
                        href="/escalas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 underline hover:text-yellow-200"
                    >
                        escala maior (natural)
                    </Link>
                    .
                </p>

                {/* Seção: Acordes tríades */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">📚 Acordes Tríades</h2>
                    <p className="leading-relaxed">
                        A maioria dos acordes é formada por três notas — as <em>tríades</em> — compostas por:
                        <br />
                        <strong>Tônica</strong> (base), <strong>terça</strong> e <strong>quinta</strong>.
                    </p>

                    <div className="bg-amber-800/50 rounded-2xl shadow-lg p-6 mt-6 border border-yellow-800">
                        <p className="mb-3">
                            Exemplo: Na escala de C (C, D, E, F, G, A, B)
                            <br />
                            → C (tônica), E (terça) e G (quinta)
                            <br />
                            🎵 Resultado: Acorde de <strong>C</strong> = C / E / G
                        </p>

                        {/* Visualização interativa */}
                        <div className="mt-6 flex justify-center gap-2">
                            {notas.map((nota, index) => (
                                <motion.div
                                    key={nota}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${acordeCMaior.includes(nota)
                                            ? "bg-yellow-400 text-amber-900 shadow-lg"
                                            : "bg-amber-700 text-yellow-100 opacity-60"
                                        }`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {nota}
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-center mt-4 text-sm italic">
                            As notas destacadas (C, E, G) formam o acorde de C (Dó Maior).
                        </p>
                    </div>
                </section>

                {/* Seção: Acordes maiores e menores */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">⚖️ Acordes Maiores e Menores</h2>
                    <p className="leading-relaxed">
                        Para saber se um acorde é <strong>maior</strong> ou <strong>menor</strong>, contamos a
                        distância entre a <strong>tônica</strong> e a <strong>terça</strong> usando a{" "}
                        <Link
                            href="/escalas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-300 underline hover:text-yellow-200"
                        >
                            escala cromática
                        </Link>
                        .
                    </p>

                    <ul className="list-disc ml-6 mt-3 space-y-2">
                        <li>
                            <strong>Acorde Maior:</strong> 2 tons entre tônica e terça → som alegre ☀️ (ex: C → E)
                        </li>
                        <li>
                            <strong>Acorde Menor:</strong> 1 tom e meio entre tônica e terça → som triste 🌧️ (ex:
                            C → Eb)
                        </li>
                    </ul>
                </section>

                {/* Visualização comparativa */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">🎧 Visualizando a Diferença</h2>
                    <p className="leading-relaxed mb-4">
                        Observe como o acorde de <strong>C Maior</strong> e o acorde de <strong>C Menor</strong>{" "}
                        diferem apenas na <strong>terça</strong> — essa pequena alteração muda totalmente o
                        sentimento do som!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        {/* Acorde Maior */}
                        <div className="flex-1 bg-amber-800/60 rounded-2xl p-6 border border-yellow-800">
                            <h3 className="text-xl font-semibold text-center mb-4">☀️ C Maior</h3>
                            <div className="flex justify-center gap-3">
                                {acordeCMaior.map((nota, index) => (
                                    <motion.div
                                        key={nota}
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-amber-900 font-bold shadow-lg"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        {nota}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Acorde Menor */}
                        <div className="flex-1 bg-amber-800/60 rounded-2xl p-6 border border-yellow-800">
                            <h3 className="text-xl font-semibold text-center mb-4">🌧️ C Menor</h3>
                            <div className="flex justify-center gap-3">
                                {acordeCMenor.map((nota, index) => (
                                    <motion.div
                                        key={nota}
                                        className={`w-12 h-12 flex items-center justify-center rounded-full font-bold shadow-lg ${nota === "Eb"
                                                ? "bg-yellow-200 text-amber-900"
                                                : "bg-yellow-400 text-amber-900"
                                            }`}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        {nota}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="text-center mt-6 text-sm italic">
                        A diferença entre o “E” e o “Eb” é o que transforma o clima do acorde. 🎶
                    </p>
                </section>

                {/* Curiosidade final */}
                <section className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">💡 Curiosidade</h2>
                    <p className="leading-relaxed">
                        O sétimo grau da escala é especial — ele não é nem maior nem menor, e é chamado de{" "}
                        <em>meio diminuto</em>. Ele aparece bastante em estilos como o jazz e o blues, criando
                        tensão antes de resolver o acorde.
                    </p>
                </section>
            </div>
        </main>
    );
}
