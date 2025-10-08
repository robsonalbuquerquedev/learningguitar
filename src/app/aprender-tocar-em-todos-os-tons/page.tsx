"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AprenderTocarEmTodosOsTons() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Título */}
                <motion.h1
                    className="text-3xl sm:text-4xl font-bold text-center text-yellow-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    🎶 Aprender a Tocar em Todos os Tons
                </motion.h1>

                {/* Introdução */}
                <p className="text-lg leading-relaxed">
                    Um dos segredos para se tornar um músico completo é conseguir tocar em
                    qualquer tom. O <strong>padrão 7L</strong> permite aplicar os mesmos acordes
                    em diferentes regiões do braço do violão de forma simples e prática.
                </p>

                {/* Exemplo com G */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-semibold text-yellow-200">
                        🎸 Exemplo com o tom de G (Sol)
                    </h2>
                    <p className="leading-relaxed">
                        No tom de <strong>G</strong>, temos as seguintes notas:
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 text-lg font-semibold">
                        <span className="px-3 py-1 rounded-full bg-yellow-400 text-amber-900">G 🎵</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-200 text-amber-900">Am 🎶</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-200 text-amber-900">Bm 🎶</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-400 text-amber-900">C 🎵</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-400 text-amber-900">D 🎵</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-200 text-amber-900">Em 🎶</span>
                        <span className="px-3 py-1 rounded-full bg-pink-500 text-amber-900">F#° ⚡</span>
                    </div>

                    <p className="leading-relaxed">
                        O padrão visual 7L é formado assim:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div className="bg-amber-800/40 rounded-xl p-4 font-semibold">7 → G, C, D (maiores)</div>
                        <div className="bg-amber-800/40 rounded-xl p-4 font-semibold">L → Am, Bm, Em (menores)</div>
                        <div className="bg-amber-800/40 rounded-xl p-4 font-semibold">° → F#° (meio diminuto)</div>
                    </div>
                </motion.div>

                {/* Aplicando em outros tons */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold text-yellow-200">
                        🚀 Tocando em outros tons
                    </h2>
                    <p className="leading-relaxed">
                        Depois de entender o 7L no tom de G, basta aplicar o mesmo formato em
                        outro ponto do braço do violão:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Mova tudo uma casa acima → Tom de <strong>G#</strong></li>
                        <li>Mova duas casas acima → Tom de <strong>A</strong></li>
                        <li>E assim por diante, mantendo o padrão 7L</li>
                    </ul>
                    <p className="leading-relaxed">
                        O segredo é que o <strong>padrão se mantém</strong>, mudam apenas as notas.
                    </p>
                </motion.div>

                {/* CTA */}
                <div className="text-center mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/escalas"
                        target="_blank"
                        className="inline-block bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
                    >
                        🎵 Relembrar as escalas
                    </Link>
                    <Link
                        href="/memorizar-braco-do-violao"
                        target="_blank"
                        className="inline-block bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
                    >
                        🎸 Memorizar no braço do violão
                    </Link>
                </div>

            </div>
        </main>
    );
}
