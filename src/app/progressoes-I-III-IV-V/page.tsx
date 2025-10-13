"use client";

import { motion } from "framer-motion";

export default function ProgressoesI_III_IV_V() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-yellow-900 via-amber-800 to-amber-900 text-amber-50 py-10 px-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-8"
            >
                🎵 Progressão I–III–IV–V
            </motion.h1>

            {/* Introdução */}
            <section className="max-w-3xl mx-auto bg-amber-50 text-amber-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">✨ O que é essa progressão?</h2>
                <p className="mb-4">
                    A <strong>progressão I–III–IV–V</strong> é uma sequência clássica e muito
                    usada em diversos estilos musicais — do pop ao gospel. Ela combina{" "}
                    <em>movimento suave</em> e <em>resolução clara</em>, tornando-se uma das
                    mais agradáveis de tocar e ouvir.
                </p>
                <p>
                    Pegando como exemplo o <strong>Campo Harmônico de G (Sol Maior)</strong>,
                    temos:
                </p>
                <p className="text-center text-lg font-semibold bg-amber-100 p-3 rounded-xl mt-3">
                    G → Bm → C → D
                </p>
                <p className="mt-4">
                    🎸 Aqui, o <strong>G</strong> é a base (I), o <strong>Bm</strong> traz leveza
                    e emoção (III), o <strong>C</strong> abre a harmonia (IV), e o{" "}
                    <strong>D</strong> fecha com sensação de retorno e completude (V).
                </p>
            </section>

            {/* Em outras tonalidades */}
            <section className="max-w-3xl mx-auto bg-yellow-50 text-yellow-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎶 Tocando em Outras Tonalidades</h2>
                <p className="mb-4">
                    Para tocar essa mesma progressão em outros tons, basta seguir o{" "}
                    <strong>mesmo padrão de graus</strong> dentro do campo harmônico. Veja alguns exemplos:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Tom de A:</strong> A → C#m → D → E
                    </li>
                    <li>
                        <strong>Tom de B:</strong> B → D#m → E → F#
                    </li>
                    <li>
                        <strong>Tom de C:</strong> C → Em → F → G
                    </li>
                    <li>
                        <strong>Tom de D:</strong> D → F#m → G → A
                    </li>
                    <li>
                        <strong>Tom de E:</strong> E → G#m → A → B
                    </li>
                    <li>
                        <strong>Tom de F:</strong> F → Am → Bb → C
                    </li>
                </ul>

                <p className="mt-4 italic">
                    💡 Dica: toque lentamente, perceba a sensação de &quot;elevação&quot; que o III cria antes
                    de abrir para o IV e resolver no V.
                </p>
            </section>

            {/* Aplicações práticas */}
            <section className="max-w-3xl mx-auto bg-amber-100 text-amber-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎧 Onde essa progressão aparece?</h2>
                <p className="mb-4">
                    Essa progressão é muito comum em músicas com clima{" "}
                    <em>emocional, esperançoso e crescente</em>. Ela dá uma sensação de evolução
                    natural — perfeita para refrões e partes de &quot;subida&quot;.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>🎤 Músicas de pop cristão e louvor</li>
                    <li>🎸 Baladas românticas e acústicas</li>
                    <li>🎹 Temas instrumentais e intros suaves</li>
                </ul>

                <p className="mt-4">
                    🔥 Uma boa prática é tocar essa progressão alternando entre batidas simples e
                    dedilhados, testando diferentes intensidades.
                </p>
            </section>

            {/* Fechamento */}
            <section className="max-w-3xl mx-auto text-center text-lg bg-black/40 p-6 rounded-2xl shadow-lg">
                <p className="mb-3">
                    🌟 A progressão <strong>I–III–IV–V</strong> é um exemplo de como a harmonia
                    pode ser simples e, ainda assim, profundamente emocional.
                </p>
            </section>
        </main>
    );
}
