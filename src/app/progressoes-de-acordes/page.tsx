"use client";

import { motion } from "framer-motion";

export default function ProgressoesDeAcordes() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <motion.section
                className="max-w-3xl mx-auto p-6 backdrop-blur-md rounded-2xl shadow-md mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">
                    Progressões de Acordes 🎵
                </h1>

                <p className="text-lg leading-relaxed mb-4">
                    As <strong>progressões de acordes</strong> são a alma das músicas.
                    Elas indicam a ordem em que os acordes são tocados, criando sensação de
                    movimento, emoção e resolução.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-yellow-300">
                    🎶 Exemplo prático: "Eu Navegarei"
                </h2>

                <p className="leading-relaxed mb-3">
                    Uma das progressões mais conhecidas na música cristã é:
                </p>

                <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 mb-4 shadow-sm">
                    Am → G → F7M → E
                </div>

                <p className="leading-relaxed mb-3">
                    Com apenas esses quatro acordes é possível tocar a música completa
                    <strong> “Eu Navegarei”</strong>.
                    Essa sequência soa natural e bonita, porque respeita o <strong>campo harmônico</strong> e
                    cria um ciclo de <strong>tensão e repouso</strong>.
                </p>

                <p className="leading-relaxed mb-4">
                    O <strong>F7M</strong> (Fá com sétima maior) pode ser substituído por um <strong>F</strong> simples,
                    e ainda assim a música mantém sua harmonia.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-yellow-300">
                    ✨ Variação com acréscimo de Dm
                </h3>

                <p className="leading-relaxed mb-3">
                    Também é possível adicionar um <strong>Dm</strong> (Ré menor) entre o F e o E,
                    criando uma sensação de descida mais suave e musical:
                </p>

                <div className="bg-yellow-100 p-4 rounded-xl text-center font-semibold text-amber-900 mb-4 shadow-sm">
                    Am → G → F → Dm → E
                </div>

                <p className="leading-relaxed mb-4">
                    Essa é uma variação muito usada em diversas canções porque o <strong>Dm</strong> conecta
                    o acorde de <strong>F</strong> ao de <strong>E</strong> de forma mais fluida.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-yellow-300">
                    🧩 Entendendo o movimento harmônico
                </h2>

                <p className="leading-relaxed mb-3">
                    Cada progressão cria um tipo de sentimento:
                </p>

                <ul className="list-disc list-inside space-y-1 mb-4">
                    <li><strong>I → IV → V</strong> → Clássica, alegre e usada em pop, gospel e rock.</li>
                    <li><strong>vi → IV → I → V</strong> → Emocional e muito comum em baladas.</li>
                    <li><strong>ii → V → I</strong> → Muito usada em jazz e MPB.</li>
                </ul>

                <p className="leading-relaxed mb-4">
                    Aprender progressões é como aprender frases musicais — você começa a reconhecer
                    padrões e consegue criar suas próprias combinações.
                </p>

                <p className="leading-relaxed mt-6">
                    💡 Dica: pratique essas sequências em diferentes tons e perceba como o “clima”
                    muda. Isso ajuda o ouvido a se acostumar com o <strong>movimento harmônico</strong>.
                </p>
            </motion.section>
        </main>
    );
}
