"use client";

import { motion } from "framer-motion";
import { FaGuitar, FaArrowRight } from "react-icons/fa";

export default function AcordesDeMinutos() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-10 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Título */}
                <motion.h1
                    className="text-4xl font-bold mb-6 text-amber-400 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    🎵 Acordes de Minutos e Meio de Minuto
                </motion.h1>

                {/* Introdução */}
                <motion.p
                    className="text-lg mb-6 text-gray-200 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Os <strong>acordes diminutos</strong> e os <strong>meio-diminutos</strong> são como
                    &quot;pontes sonoras&quot; — eles ligam um acorde ao outro criando uma sensação de
                    movimento suave e elegante. Vamos entender como isso funciona na prática!
                </motion.p>

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
