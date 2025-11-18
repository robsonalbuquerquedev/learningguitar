"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ---------------------------------------------------------
   🎵 NOTAS BÁSICAS PARA AS PRIMEIRAS DUAS ESCALAS (interativas)
--------------------------------------------------------- */
const escalaNatural = ["C", "D", "E", "F", "G", "A", "B", "C"];
const escalaCromatica = [
    "C", "C#", "D", "D#", "E",
    "F", "F#", "G", "G#", "A",
    "A#", "B", "C"
];

/* ---------------------------------------------------------
   🎼 COMPONENTE TABELA INTERATIVA
--------------------------------------------------------- */
function EscalaTabela({
    nome,
    notas,
    notaSelecionada,
    onClickNota
}: {
    nome: string;
    notas: string[];
    notaSelecionada: string | null;
    onClickNota: (nota: string) => void;
}) {
    return (
        <div className="w-full overflow-x-auto bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-lg mb-10">
            <table className="min-w-[700px] mx-auto border-collapse select-none text-sm sm:text-base">
                <thead>
                    <tr>
                        <th className="border border-amber-700 px-3 py-2 bg-amber-800 text-amber-100 sticky left-0">
                            Escala
                        </th>
                        {notas.map((_, idx) => (
                            <th
                                key={idx}
                                className="border border-amber-700 px-3 py-2 bg-amber-800 text-amber-100"
                            >
                                {idx + 1}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-amber-700 px-3 py-2 font-semibold bg-amber-900/70 sticky left-0 text-yellow-100">
                            {nome}
                        </td>
                        {notas.map((nota, idx) => {
                            const isSelected = nota === notaSelecionada;
                            return (
                                <td
                                    key={idx}
                                    onClick={() => onClickNota(nota)}
                                    className={`border border-amber-700 px-3 py-2 cursor-pointer text-center transition-all duration-200 ${isSelected
                                            ? "bg-yellow-300 font-bold text-amber-900 shadow-inner"
                                            : "hover:bg-amber-800/40"
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

/* ---------------------------------------------------------
   🎸 CONTEÚDO PRINCIPAL COMPLETO – SEO MAXIMIZADO
--------------------------------------------------------- */

export default function EscalasContent() {
    const [notaSelecionada, setNotaSelecionada] = useState<string | null>(null);

    const handleClickNota = (nota: string) => {
        setNotaSelecionada((prev) => (prev === nota ? null : nota));
    };

    const limparSelecao = () => setNotaSelecionada(null);

    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white p-6 sm:p-10 space-y-12">

            {/* ------------------------------------------- */}
            {/* INTRODUÇÃO */}
            {/* ------------------------------------------- */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl text-center bg-black/40 p-6 rounded-2xl shadow-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4">🎼 Escalas Musicais no Violão</h1>
                <p className="text-amber-100 leading-relaxed">
                    Estudar escalas é um dos pilares para evoluir no violão.
                    Aqui você encontrará **todas as escalas essenciais**, com explicações simples e aplicações práticas:
                    escala maior, menor natural, harmônica, melódica, modos gregos, pentatônica, escala blues, cromática
                    e muito mais.
                </p>
            </motion.div>

            {/* ------------------------------------------- */}
            {/* NOTA SELECIONADA */}
            {/* ------------------------------------------- */}
            {notaSelecionada && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                    <p className="mb-3 text-lg sm:text-xl font-semibold text-yellow-200">
                        🔍 Nota selecionada: <span className="underline">{notaSelecionada}</span>
                    </p>
                    <button
                        onClick={limparSelecao}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md cursor-pointer"
                    >
                        Limpar seleção
                    </button>
                </motion.div>
            )}

            {/* ------------------------------------------- */}
            {/* ESCALA NATURAL */}
            {/* ------------------------------------------- */}
            <EscalaTabela
                nome="Natural"
                notas={escalaNatural}
                notaSelecionada={notaSelecionada}
                onClickNota={handleClickNota}
            />

            {/* ------------------------------------------- */}
            {/* ESCALA CROMÁTICA */}
            {/* ------------------------------------------- */}
            <EscalaTabela
                nome="Cromática"
                notas={escalaCromatica}
                notaSelecionada={notaSelecionada}
                onClickNota={handleClickNota}
            />

            {/* ================================================================= */}
            {/* A PARTIR DAQUI — SEÇÕES PURAMENTE EXPLICATIVAS (SEO + Conteúdo)   */}
            {/* ================================================================= */}

            {/* ------------------------------------------- */}
            {/* ESCALA MAIOR */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">🌞 Escala Maior</h2>
                <p className="mb-3 text-amber-100">
                    A escala maior é a mais usada na música ocidental. Sua fórmula é:
                </p>
                <p className="font-semibold text-yellow-300 mb-4">T – T – ST – T – T – T – ST</p>

                <ul className="list-disc list-inside text-amber-100 space-y-2">
                    <li><strong>C Maior:</strong> C – D – E – F – G – A – B – C</li>
                    <li><strong>G Maior:</strong> G – A – B – C – D – E – F# – G</li>
                </ul>

                <p className="mt-4 text-amber-200/90">
                    É a escala base para a maioria das melodias simples e músicas populares.
                </p>
            </section>

            {/* ------------------------------------------- */}
            {/* ESCALA MENOR NATURAL */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">🌙 Escala Menor Natural</h2>
                <p className="mb-3 text-amber-100">Fórmula:</p>
                <p className="font-semibold text-yellow-300 mb-4">T – ST – T – T – ST – T – T</p>

                <ul className="list-disc list-inside text-amber-100 space-y-2">
                    <li><strong>A Menor:</strong> A – B – C – D – E – F – G – A</li>
                    <li><strong>E Menor:</strong> E – F# – G – A – B – C – D – E</li>
                </ul>

                <p className="mt-4 text-amber-200/90">Muito usada em músicas emocionais e trilhas sonoras.</p>
            </section>

            {/* ------------------------------------------- */}
            {/* ESCALA MENOR HARMÔNICA */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">🔥 Escala Menor Harmônica</h2>
                <p className="mb-3 text-amber-100">
                    Famosa por seu som árabe, dramático e cheio de tensão.
                </p>
                <p className="font-semibold text-yellow-300 mb-4">T – ST – T – T – ST – 1T+ST – ST</p>

                <ul className="list-disc list-inside text-amber-100 space-y-2">
                    <li><strong>A Harmônica:</strong> A – B – C – D – E – F – G# – A</li>
                </ul>
            </section>

            {/* ------------------------------------------- */}
            {/* ESCALA MENOR MELÓDICA */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">🎻 Escala Menor Melódica</h2>
                <p className="mb-3 text-amber-100">Subida:</p>
                <p className="font-semibold text-yellow-300">T – ST – T – T – T – T – ST</p>

                <p className="mt-4 text-amber-200/90">
                    Muito usada no jazz por seu som suave e elegante.
                </p>
            </section>

            {/* ------------------------------------------- */}
            {/* ESCALA PENTATÔNICA */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">🎸 Escala Pentatônica</h2>
                <p className="mb-3 text-amber-100">A favorita para solos de rock, pop e worship.</p>

                <ul className="list-disc list-inside text-amber-100 space-y-2">
                    <li><strong>A Pentatônica Menor:</strong> A – C – D – E – G – A</li>
                    <li><strong>C Pentatônica Maior:</strong> C – D – E – G – A – C</li>
                </ul>
            </section>

            {/* ------------------------------------------- */}
            {/* ESCALA BLUES */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">💙 Escala Blues</h2>
                <p className="mb-4 text-amber-100">
                    A pentatônica + a famosa “blue note”.
                </p>

                <ul className="list-disc list-inside text-amber-100">
                    <li><strong>A Blues:</strong> A – C – D – D# – E – G – A</li>
                </ul>
            </section>

            {/* ------------------------------------------- */}
            {/* MODOS GREGOS */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">🏛️ Modos Gregos</h2>

                <ul className="list-disc list-inside text-amber-100 space-y-2">
                    <li><strong>Jônio:</strong> escala maior (som brilhante)</li>
                    <li><strong>Dórico:</strong> som suave, usado no jazz</li>
                    <li><strong>Frígio:</strong> som espanhol, tenso</li>
                    <li><strong>Lídio:</strong> som flutuante, etéreo</li>
                    <li><strong>Mixolídio:</strong> ótimo para solos de rock</li>
                    <li><strong>Eólio:</strong> menor natural</li>
                    <li><strong>Lócrio:</strong> som instável, pouco usado</li>
                </ul>
            </section>

            {/* ------------------------------------------- */}
            {/* ESCALA DIATÔNICA */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">🎯 Escala Diatônica</h2>
                <p className="text-amber-100">
                    Conjunto de 7 notas que formam o **campo harmônico**.
                    Cada campo harmônico é construído usando a escala maior correspondente.
                </p>
            </section>

            {/* ------------------------------------------- */}
            {/* APLICAÇÕES PRÁTICAS */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">🎶 Como Usar as Escalas na Prática</h2>

                <ul className="list-disc list-inside text-amber-100 space-y-2">
                    <li>Para improvisar sobre progressões simples → use pentatônica/maior.</li>
                    <li>Para solos mais emocionais → use menor natural ou harmônica.</li>
                    <li>Para estudo de braço → use a escala cromática.</li>
                    <li>Para criar melodias bonitas → use a escala maior.</li>
                </ul>
            </section>

            {/* ------------------------------------------- */}
            {/* EXERCÍCIOS */}
            {/* ------------------------------------------- */}
            <section className="max-w-3xl bg-black/40 p-6 rounded-2xl shadow-xl mb-16">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">💪 Exercícios</h2>
                <ul className="list-disc list-inside text-amber-100 space-y-3">
                    <li>Toque cada escala devagar usando metrônomo.</li>
                    <li>Pratique diferentes digitações no braço do violão.</li>
                    <li>Improvise apenas com 3 notas de uma escala.</li>
                    <li>Combine pentatônica + blue note para criar frases.</li>
                </ul>
            </section>
        </main>
    );
}
