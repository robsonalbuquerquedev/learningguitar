"use client";

import { useState } from "react";

const notas = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
];

const afinacao = ["E", "A", "D", "G", "B", "E"];

function gerarNotasPorCorda() {
    return afinacao.map((notaBase) => {
        const indiceInicial = notas.indexOf(notaBase);

        return Array.from(
            { length: 12 },
            (_, i) => notas[(indiceInicial + i + 1) % notas.length]
        );
    });
}

export default function MemorizarBracoContent() {
    const [notaSelecionada, setNotaSelecionada] = useState<string | null>(
        null
    );

    const casas = Array.from({ length: 12 }, (_, i) => i + 1);

    const cordas = [
        "1ª (E fina)",
        "2ª (B)",
        "3ª (G)",
        "4ª (D)",
        "5ª (A)",
        "6ª (E grave)",
    ];

    const notasPorCorda = gerarNotasPorCorda().reverse();

    const handleClickNota = (nota: string) => {
        setNotaSelecionada((prev) => (prev === nota ? null : nota));
    };

    const limparSelecao = () => setNotaSelecionada(null);

    return (
        <div className="space-y-8">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-gray-700">
                    💡 <strong>Casa 0:</strong> antes da Casa 1 estão as
                    cordas soltas. A{" "}
                    <strong>Casa 12</strong> é um ponto de referência
                    importante porque repete as mesmas notas das cordas
                    soltas, uma oitava acima.
                </p>
            </div>

            {notaSelecionada && (
                <div className="rounded-xl border border-amber-200 bg-white p-5 text-center shadow-sm">
                    <p className="mb-3 font-semibold text-gray-900">
                        🔍 Você está visualizando todas as notas{" "}
                        <span className="text-amber-700 underline">
                            {notaSelecionada}
                        </span>
                    </p>

                    <button
                        onClick={limparSelecao}
                        className="rounded-lg bg-amber-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-amber-700"
                    >
                        Mostrar todas as notas 🎶
                    </button>
                </div>
            )}

            <div className="overflow-x-auto rounded-xl border border-amber-200 bg-white shadow-sm">
                <table className="w-full min-w-[700px] border-collapse text-center text-sm">
                    <thead>
                        <tr>
                            <th className="sticky left-0 border border-amber-200 bg-amber-100 px-3 py-3 text-amber-900">
                                Cordas ↓ / Casas →
                            </th>

                            {casas.map((casa) => (
                                <th
                                    key={casa}
                                    className="border border-amber-200 bg-amber-100 px-3 py-3 text-amber-900"
                                >
                                    {casa}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {cordas.map((corda, i) => (
                            <tr key={corda}>
                                <td className="sticky left-0 border border-amber-200 bg-amber-50 px-3 py-3 font-semibold text-amber-900">
                                    {corda}
                                </td>

                                {notasPorCorda[i].map((nota, idx) => {
                                    const isSelected =
                                        nota === notaSelecionada;

                                    const isCasa12 = idx === 11;

                                    return (
                                        <td
                                            key={idx}
                                            onClick={() =>
                                                handleClickNota(nota)
                                            }
                                            className={`min-w-[48px] cursor-pointer border border-amber-200 px-3 py-3 transition-colors ${
                                                isSelected
                                                    ? "bg-amber-300 font-bold text-amber-950"
                                                    : isCasa12
                                                      ? "bg-amber-100 font-semibold text-amber-900"
                                                      : "hover:bg-amber-50"
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

            <p className="text-center text-sm text-gray-500">
                Clique em uma nota para destacar todas as ocorrências dela no
                braço.
            </p>

            <section>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                    🧠 Três referências para começar
                </h3>

                <ol className="space-y-5">
                    <li>
                        <strong className="text-gray-900">
                            1. Casa 12:
                        </strong>{" "}
                        <span className="text-gray-700">
                            use a Casa 12 como referência. Ela repete as
                            mesmas notas das cordas soltas, uma oitava acima.
                        </span>
                    </li>

                    <li>
                        <strong className="text-gray-900">
                            2. E–F e B–C:
                        </strong>{" "}
                        <span className="text-gray-700">
                            entre E e F e entre B e C existe apenas um
                            semitom. Essa característica ajuda a prever a
                            distribuição das notas no braço.
                        </span>
                    </li>

                    <li>
                        <strong className="text-gray-900">
                            3. Padrões de oitava:
                        </strong>{" "}
                        <span className="text-gray-700">
                            algumas posições permitem encontrar rapidamente a
                            mesma nota em outra corda. Aprender esses padrões
                            reduz a necessidade de procurar cada nota
                            individualmente.
                        </span>
                    </li>
                </ol>
            </section>
        </div>
    );
}