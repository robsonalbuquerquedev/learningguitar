"use client";

import { motion } from "framer-motion";

export default function ProgressoesHarmonicasMaisUsadas() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-yellow-900 via-amber-800 to-amber-900 text-amber-50 py-10 px-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-8"
            >
                🎶 Progressões Harmônicas Mais Usadas
            </motion.h1>

            {/* Introdução */}
            <section className="max-w-3xl mx-auto bg-amber-50 text-amber-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎸 O que são progressões harmônicas?</h2>
                <p className="mb-4">
                    Uma <strong>progressão harmônica</strong> é uma sequência de acordes que cria
                    uma sensação de movimento e emoção na música. Existem algumas combinações que
                    se tornaram clássicas — usadas em milhares de canções — porque soam bem e
                    funcionam em praticamente qualquer estilo.
                </p>
                <p>
                    As progressões abaixo são as <strong>mais populares</strong> e podem ser aplicadas
                    em <strong>todas as tonalidades naturais</strong>.
                    Basta seguir o mesmo padrão de graus do campo harmônico de cada tom — o segredo
                    está na sequência, não nas letras dos acordes!
                </p>
            </section>

            {/* Lista de Progressões */}
            <section className="max-w-3xl mx-auto space-y-6">
                {/* 1-5-6-4 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 1–5–6–4</h3>
                    <p className="mb-2 italic text-yellow-800">Usada em pop, louvor e baladas</p>
                    <p><strong>No tom de G:</strong> G / D / Em / C</p>
                    <p><strong>No tom de A:</strong> A / E / F#m / D</p>
                    <p><strong>No tom de B:</strong> B / F# / G#m / E</p>
                    <p><strong>No tom de C:</strong> C / G / Am / F</p>
                    <p><strong>No tom de D:</strong> D / A / Bm / G</p>
                    <p><strong>No tom de E:</strong> E / B / C#m / A</p>
                    <p><strong>No tom de F:</strong> F / C / Dm / Bb</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 É a progressão de hits como &quot;Let It Be&quot; (The Beatles) e &quot;With or Without You&quot; (U2).
                    </p>
                </div>

                {/* 1-6-2-5 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 1–6–2–5</h3>
                    <p className="mb-2 italic text-yellow-800">Clássica no jazz, gospel e MPB</p>
                    <p><strong>No tom de G:</strong> G / Em / Am / D</p>
                    <p><strong>No tom de A:</strong> A / F#m / Bm / E</p>
                    <p><strong>No tom de B:</strong> B / G#m / C#m / F#</p>
                    <p><strong>No tom de C:</strong> C / Am / Dm / G</p>
                    <p><strong>No tom de D:</strong> D / Bm / Em / A</p>
                    <p><strong>No tom de E:</strong> E / C#m / F#m / B</p>
                    <p><strong>No tom de F:</strong> F / Dm / Gm / C</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 Essa sequência cria uma sensação suave de continuidade e &quot;ida e volta&quot;.
                    </p>
                </div>

                {/* 1-6-4-5 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 1–6–4–5</h3>
                    <p className="mb-2 italic text-yellow-800">Muito usada em louvores e pop romântico</p>
                    <p><strong>No tom de G:</strong> G / Em / C / D</p>
                    <p><strong>No tom de A:</strong> A / F#m / D / E</p>
                    <p><strong>No tom de B:</strong> B / G#m / E / F#</p>
                    <p><strong>No tom de C:</strong> C / Am / F / G</p>
                    <p><strong>No tom de D:</strong> D / Bm / G / A</p>
                    <p><strong>No tom de E:</strong> E / C#m / A / B</p>
                    <p><strong>No tom de F:</strong> F / Dm / Bb / C</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 Leve e emocional — transmite esperança e crescimento.
                    </p>
                </div>

                {/* 1-2-4-5 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 1–2–4–5</h3>
                    <p className="mb-2 italic text-yellow-800">Típica de músicas alegres e otimistas</p>
                    <p><strong>No tom de G:</strong> G / Am / C / D</p>
                    <p><strong>No tom de A:</strong> A / Bm / D / E</p>
                    <p><strong>No tom de B:</strong> B / C#m / E / F#</p>
                    <p><strong>No tom de C:</strong> C / Dm / F / G</p>
                    <p><strong>No tom de D:</strong> D / Em / G / A</p>
                    <p><strong>No tom de E:</strong> E / F#m / A / B</p>
                    <p><strong>No tom de F:</strong> F / Gm / Bb / C</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 Essa sequência é muito comum em músicas infantis e canções tradicionais.
                    </p>
                </div>

                {/* 6-4-1-5 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 6–4–1–5</h3>
                    <p className="mb-2 italic text-yellow-800">Usada em pop e rock moderno</p>
                    <p><strong>No tom de G:</strong> Em / C / G / D</p>
                    <p><strong>No tom de A:</strong> F#m / D / A / E</p>
                    <p><strong>No tom de B:</strong> G#m / E / B / F#</p>
                    <p><strong>No tom de C:</strong> Am / F / C / G</p>
                    <p><strong>No tom de D:</strong> Bm / G / D / A</p>
                    <p><strong>No tom de E:</strong> C#m / A / E / B</p>
                    <p><strong>No tom de F:</strong> Dm / Bb / F / C</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 Muito usada em refrões de músicas internacionais.
                    </p>
                </div>

                {/* 6-5-4-1 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 6–5–4–1</h3>
                    <p className="mb-2 italic text-yellow-800">Cria movimento descendente e emocional</p>
                    <p><strong>No tom de G:</strong> Em / D / C / G</p>
                    <p><strong>No tom de A:</strong> F#m / E / D / A</p>
                    <p><strong>No tom de B:</strong> G#m / F# / E / B</p>
                    <p><strong>No tom de C:</strong> Am / G / F / C</p>
                    <p><strong>No tom de D:</strong> Bm / A / G / D</p>
                    <p><strong>No tom de E:</strong> C#m / B / A / E</p>
                    <p><strong>No tom de F:</strong> Dm / C / Bb / F</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 Gera uma sensação de retorno e leveza — perfeita para encerramentos.
                    </p>
                </div>

                {/* 2-5-1 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 2–5–1</h3>
                    <p className="mb-2 italic text-yellow-800">A rainha das progressões do jazz</p>
                    <p><strong>No tom de G:</strong> Am / D / G</p>
                    <p><strong>No tom de A:</strong> Bm / E / A</p>
                    <p><strong>No tom de B:</strong> C#m / F# / B</p>
                    <p><strong>No tom de C:</strong> Dm / G / C</p>
                    <p><strong>No tom de D:</strong> Em / A / D</p>
                    <p><strong>No tom de E:</strong> F#m / B / E</p>
                    <p><strong>No tom de F:</strong> Gm / C / F</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 É a base do jazz, da bossa nova e de boa parte da MPB.
                    </p>
                </div>

                {/* 1-4-5 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 1–4–5</h3>
                    <p className="mb-2 italic text-yellow-800">A sequência mais antiga e universal</p>
                    <p><strong>No tom de G:</strong> G / C / D</p>
                    <p><strong>No tom de A:</strong> A / D / E</p>
                    <p><strong>No tom de B:</strong> B / E / F#</p>
                    <p><strong>No tom de C:</strong> C / F / G</p>
                    <p><strong>No tom de D:</strong> D / G / A</p>
                    <p><strong>No tom de E:</strong> E / A / B</p>
                    <p><strong>No tom de F:</strong> F / Bb / C</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 É o coração do blues, do rock e de muitas músicas tradicionais.
                    </p>
                </div>

                {/* 5-4-1 */}
                <div className="bg-yellow-50 text-yellow-900 p-5 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">🎵 5–4–1</h3>
                    <p className="mb-2 italic text-yellow-800">Progressão de retorno e fechamento</p>
                    <p><strong>No tom de G:</strong> D / C / G</p>
                    <p><strong>No tom de A:</strong> E / D / A</p>
                    <p><strong>No tom de B:</strong> F# / E / B</p>
                    <p><strong>No tom de C:</strong> G / F / C</p>
                    <p><strong>No tom de D:</strong> A / G / D</p>
                    <p><strong>No tom de E:</strong> B / A / E</p>
                    <p><strong>No tom de F:</strong> C / Bb / F</p>
                    <p className="mt-2 text-sm text-yellow-700">
                        💡 Ideal para finais de música — dá sensação de conclusão e repouso.
                    </p>
                </div>
            </section>

            {/* Fechamento */}
            <section className="max-w-3xl mx-auto text-center text-lg bg-black/40 p-6 rounded-2xl shadow-lg mt-10">
                <p className="mb-3">
                    🚀 Agora que você conhece as progressões mais usadas, tente aplicá-las em
                    músicas que você já toca ou compõe.
                </p>
            </section>
        </main>
    );
}
