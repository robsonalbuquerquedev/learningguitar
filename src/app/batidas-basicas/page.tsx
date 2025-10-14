"use client";

import { FaArrowDown, FaArrowUp, FaTimes } from "react-icons/fa";

export default function BatidasBasicas() {
    const batidas = [
        {
            nome: "Batida 1",
            padrao: ["down", "up", "mute"],
            descricao: "Batida de reggae.",
        },
        {
            nome: "Batida 2",
            padrao: ["down", "down", "up", "up", "down"],
            descricao: "Batida de rock.",
        },
        {
            nome: "Batida 3",
            padrao: ["down", "down", "up", "up", "down", "up"],
        },
        {
            nome: "Batida 4",
            padrao: ["down", "down", "up", "up", "down", "down"],
            descricao: "Ideal para louvores suaves e lentos.",
        },
        {
            nome: "Batida 5",
            padrao: ["down", "up", "up"],
            descricao: "Batida de sertanejo.",
        },
        {
            nome: "Batida 6",
            padrao: ["down", "up", "up", "down"],
        },
        {
            nome: "Batida 7",
            padrao: ["down", "down", "up", "down", "up", "down"],
        },
        {
            nome: "Batida 8",
            padrao: ["down", "up", "up", "down", "up", "up", "down"],
            descricao: "Perfeita para músicas mais animadas.",
        },
        {
            nome: "Batida 9",
            padrao: ["down", "down", "up", "down", "up", "down", "down"],
            descricao: "Muito usada em músicas pop e adoração.",
        },
        {
            nome: "Batida 10",
            padrao: ["down", "down", "up", "up", "down", "down", "down", "up"],
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300">
                    🎸 Batidas Básicas de Violão
                </h1>

                <p className="text-lg leading-relaxed text-center">
                    Aqui você encontra padrões de batidas simples, claros e fáceis de memorizar.
                    Cada padrão vem com uma visualização intuitiva do ritmo.
                </p>

                {batidas.map((batida, index) => (
                    <div
                        key={index}
                        className="bg-amber-800/40 p-6 rounded-2xl shadow-md text-center"
                    >
                        <h2 className="text-2xl font-semibold text-yellow-200 mb-2">
                            {batida.nome}
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">{batida.descricao}</p>

                        <div className="flex justify-center gap-4 text-2xl">
                            {batida.padrao.map((mov, i) => {
                                if (mov === "down") return <FaArrowDown key={i} className="text-yellow-300" />;
                                if (mov === "up") return <FaArrowUp key={i} className="text-yellow-100" />;
                                if (mov === "mute") return <FaTimes key={i} className="text-red-400" />;
                                return null;
                            })}
                        </div>
                    </div>
                ))}

                <p className="text-center text-sm text-amber-200 mt-6">
                    💡 Dica: pratique lentamente, sentindo o balanço entre o toque e o abafado (X).
                </p>
            </div>
        </main>
    );
}
