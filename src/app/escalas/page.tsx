"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Escalas
const escalaNatural = ["C", "D", "E", "F", "G", "A", "B", "C"];
const escalaCromatica = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];

// Componente para renderizar cada escala
function EscalaTabela({
    nome,
    notas,
    notaSelecionada,
    onClickNota,
}: {
    nome: string;
    notas: string[];
    notaSelecionada: string | null;
    onClickNota: (nota: string) => void;
}) {
    return (
        <div className="w-full overflow-x-auto sm:overflow-x-visible bg-black/40 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg mb-10 scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-transparent">
            <table className="min-w-[600px] sm:min-w-[700px] md:min-w-[800px] mx-auto border-collapse rounded-lg select-none text-xs sm:text-sm md:text-base">
                <thead>
                    <tr>
                        <th className="border border-amber-700 px-2 sm:px-3 py-2 bg-amber-800 text-amber-100 sticky left-0 backdrop-blur-md">
                            Escala
                        </th>
                        {notas.map((_, idx) => (
                            <th
                                key={idx}
                                className="border border-amber-700 px-2 sm:px-3 py-2 bg-amber-800 text-amber-100"
                            >
                                {idx + 1}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-amber-700 px-2 sm:px-3 py-2 font-semibold bg-amber-900/70 text-yellow-100 sticky left-0">
                            {nome}
                        </td>
                        {notas.map((nota, idx) => {
                            const isSelected = nota === notaSelecionada;
                            return (
                                <td
                                    key={idx}
                                    onClick={() => onClickNota(nota)}
                                    className={`border border-amber-700 px-2 sm:px-3 py-2 cursor-pointer text-center min-w-[40px] sm:min-w-[50px] transition-all duration-200 ${isSelected
                                            ? "bg-yellow-300 font-bold text-amber-900 shadow-inner"
                                            : "hover:bg-amber-800/50"
                                        }`}
                                >
                                    {nota}
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default function EscalasPage() {
    const [notaSelecionada, setNotaSelecionada] = useState<string | null>(null);

    const handleClickNota = (nota: string) => {
        setNotaSelecionada((prev) => (prev === nota ? null : nota));
    };

    const limparSelecao = () => setNotaSelecionada(null);

    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white p-6 sm:p-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-center drop-shadow-lg"
            >
                🎵 Escalas Musicais
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-amber-100 max-w-2xl mx-auto mb-6 leading-relaxed text-center bg-black/40 p-4 rounded-lg shadow-lg text-sm sm:text-base"
            >
                Explore a <strong>Escala Natural</strong> e a <strong>Escala Cromática</strong> para praticar e memorizar notas.
            </motion.p>

            {/* Botão de limpar seleção */}
            {notaSelecionada && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-center">
                    <p className="mb-3 text-base sm:text-lg font-semibold text-yellow-200">
                        🔍 Você selecionou a nota <span className="underline">{notaSelecionada}</span>
                    </p>
                    <button
                        onClick={limparSelecao}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-md cursor-pointer text-sm sm:text-base"
                    >
                        Limpar seleção
                    </button>
                </motion.div>
            )}

            {/* Tabelas de cada escala */}
            <EscalaTabela
                nome="Natural"
                notas={escalaNatural}
                notaSelecionada={notaSelecionada}
                onClickNota={handleClickNota}
            />

            <EscalaTabela
                nome="Cromática"
                notas={escalaCromatica}
                notaSelecionada={notaSelecionada}
                onClickNota={handleClickNota}
            />

            {/* Dicas */}
            <div className="max-w-2xl mx-auto bg-black/40 p-6 rounded-2xl shadow-xl backdrop-blur-md text-sm sm:text-base">
                <h2 className="text-2xl font-bold mb-4 text-amber-300 text-center">💡 Dicas</h2>
                <ul className="list-disc list-inside space-y-3 text-amber-100">
                    <li>Use a Escala Natural para estudar progressões de acordes simples.</li>
                    <li>A Escala Cromática ajuda a localizar todas as notas no braço do violão.</li>
                    <li>Clique nas notas para destacá-las e memorizar mais facilmente.</li>
                </ul>
            </div>
        </main>
    );
}
