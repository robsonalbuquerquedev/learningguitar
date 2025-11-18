"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Escala cromática completa
const notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Notas das cordas soltas (da 6ª para a 1ª)
const afinacao = ["E", "A", "D", "G", "B", "E"];

// Função para gerar as notas das casas (1 a 12) de cada corda
function gerarNotasPorCorda() {
    return afinacao.map((notaBase) => {
        const indiceInicial = notas.indexOf(notaBase);
        return Array.from({ length: 12 }, (_, i) => notas[(indiceInicial + i + 1) % notas.length]);
    });
}

export default function MemorizarBracoDoViolao() {
    const [notaSelecionada, setNotaSelecionada] = useState<string | null>(null);

    const casas = Array.from({ length: 12 }, (_, i) => i + 1);
    const cordas = ["1ª (E fina)", "2ª (B)", "3ª (G)", "4ª (D)", "5ª (A)", "6ª (E grave)"];
    const notasPorCorda = gerarNotasPorCorda().reverse();

    const handleClickNota = (nota: string) => {
        setNotaSelecionada((prev) => (prev === nota ? null : nota));
    };

    const limparSelecao = () => setNotaSelecionada(null);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white p-4 sm:p-8">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-amber-100 max-w-2xl mx-auto mb-6 leading-relaxed text-center bg-black/40 p-4 rounded-lg shadow-lg text-sm sm:text-base"
            >
                💡 <strong>Dica:</strong> No violão, a contagem das casas começa na <strong>Casa 1</strong> —
                as cordas soltas vêm antes dela (Casa 0).
                A <strong>Casa 12</strong> repete exatamente as mesmas notas das cordas soltas!
            </motion.p>

            {/* Botão de limpar seleção */}
            {notaSelecionada && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 text-center"
                >
                    <p className="mb-3 text-base sm:text-lg font-semibold text-yellow-200">
                        🔍 Você está visualizando todas as notas{" "}
                        <span className="underline">{notaSelecionada}</span>
                    </p>
                    <button
                        onClick={limparSelecao}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-md cursor-pointer text-sm sm:text-base"
                    >
                        Mostrar todas as notas 🎶
                    </button>
                </motion.div>
            )}

            {/* 🎵 Tabela de notas */}
            <div className="w-full overflow-x-auto bg-black/40 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg mb-10 scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-transparent">
                <table className="min-w-[600px] sm:min-w-[700px] md:min-w-[800px] mx-auto border-collapse rounded-lg select-none text-xs sm:text-sm md:text-base">
                    <thead>
                        <tr>
                            <th className="border border-amber-700 px-2 sm:px-3 py-2 bg-amber-800 text-amber-100 sticky left-0 backdrop-blur-md">
                                Cordas ↓ / Casas →
                            </th>
                            {casas.map((casa) => (
                                <th
                                    key={casa}
                                    className="border border-amber-700 px-2 sm:px-3 py-2 bg-amber-800 text-amber-100"
                                >
                                    {casa}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {cordas.map((corda, i) => (
                            <tr key={corda}>
                                <td className="border border-amber-700 px-2 sm:px-3 py-2 font-semibold bg-amber-900/70 text-yellow-100 sticky left-0">
                                    {corda}
                                </td>
                                {notasPorCorda[i].map((nota, idx) => {
                                    const isSelected = nota === notaSelecionada;
                                    const isCasa12 = idx === 11;
                                    return (
                                        <td
                                            key={idx}
                                            onClick={() => handleClickNota(nota)}
                                            className={`border border-amber-700 px-2 sm:px-3 py-2 cursor-pointer transition-all duration-200 text-center min-w-[40px] sm:min-w-[50px] ${isSelected
                                                ? "bg-yellow-300 font-bold text-amber-900 shadow-inner"
                                                : isCasa12
                                                    ? "bg-amber-600/40 font-semibold text-yellow-200"
                                                    : "hover:bg-amber-800/50"
                                                }`}
                                        >
                                            {nota}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 📚 Explicações dos truques */}
            <div className="max-w-2xl mx-auto bg-black/40 p-6 rounded-2xl shadow-xl backdrop-blur-md text-sm sm:text-base">
                <h2 className="text-2xl font-bold mb-4 text-amber-300 text-center">
                    🧠 Três Truques para Memorizar
                </h2>

                <ol className="list-decimal list-inside space-y-4 text-amber-100">
                    <li>
                        <strong>Truque da Casa 12:</strong> As notas da Casa 12 são as mesmas das cordas soltas —
                        pense nela como o “espelho” do início do braço.
                    </li>
                    <li>
                        <strong>Truque do E / F / B / C:</strong> O <em>B</em> e o <em>C</em> são colados, assim como
                        o <em>E</em> e o <em>F</em>. Lembre-se da frase: <strong>“Eu Faço Bom Café” ☕</strong>.
                    </li>
                    <li>
                        <strong>Truque da Oitava:</strong> Para achar a mesma nota na corda de baixo, pule uma corda e
                        avance uma casa (ou duas entre as cordas 4 e 3).
                    </li>
                </ol>
            </div>
        </main>
    );
}
