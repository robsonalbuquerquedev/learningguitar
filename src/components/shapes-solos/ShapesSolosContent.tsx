"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ShapesSolos() {
    const [posicao, setPosicao] = useState(3); // começa na 3ª casa (G)

    // Shape da escala maior (em relação à casa inicial)
    const shape = [
        { corda: 6, casas: [0, 2] },
        { corda: 5, casas: [-1, 0, 2] },
        { corda: 4, casas: [-1, 1, 2] },
        { corda: 3, casas: [-1, 1, 2] },
        { corda: 2, casas: [0, 2] },
        { corda: 1, casas: [-1, 0, 2] },
    ];

    const handleMover = (dir: "esquerda" | "direita") => {
        setPosicao((prev) => Math.max(1, prev + (dir === "direita" ? 1 : -1)));
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* 📖 Explicação */}
                <p className="text-lg leading-relaxed text-center bg-black/40 p-6 rounded-2xl shadow-md">
                    O <strong>shape</strong> é o desenho fixo da escala no braço do violão.
                    Abaixo você vê o <strong>shape da escala maior</strong>, começando na{" "}
                    <strong>{posicao}ª casa da 6ª corda</strong>.
                    <br /><br />
                    Mova o shape para frente ou para trás com as setas abaixo para mudar a tonalidade.
                </p>

                {/* 🎚️ Controle de posição */}
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => handleMover("esquerda")}
                        className="p-3 bg-amber-700 hover:bg-amber-800 rounded-full shadow-md transition cursor-pointer"
                    >
                        <FaArrowLeft />
                    </button>
                    <span className="text-lg font-semibold text-yellow-200">
                        Posição atual: {posicao}ª casa
                    </span>
                    <button
                        onClick={() => handleMover("direita")}
                        className="p-3 bg-amber-700 hover:bg-amber-800 rounded-full shadow-md transition cursor-pointer"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                {/* 🎶 Braço do violão */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-amber-800/40 p-6 rounded-2xl shadow-md overflow-x-auto"
                >
                    <h2 className="text-2xl font-semibold text-yellow-200 mb-4 text-center">
                        Visualização do Shape
                    </h2>

                    {/* Grid das cordas e casas */}
                    <div className="grid grid-rows-6 gap-3 text-center">
                        {shape.map((linha, i) => (
                            <div key={i} className="flex items-center justify-center gap-2">
                                <span className="text-sm text-amber-300 w-10 text-right">C{linha.corda}</span>
                                <div className="flex gap-2 overflow-x-auto">
                                    {Array.from({ length: 15 }, (_, casa) => {
                                        const ativo = linha.casas.includes(casa - posicao);
                                        return (
                                            <div
                                                key={casa}
                                                className={`w-8 h-8 flex items-center justify-center rounded-full border ${ativo
                                                    ? "bg-yellow-400 text-amber-900 font-bold"
                                                    : "border-amber-600 bg-amber-950/30"
                                                    }`}
                                            >
                                                {casa}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm mt-4 text-amber-200">
                        💡 O número indica a <strong>casa</strong>. As bolinhas douradas mostram as notas do shape.
                    </p>
                </motion.div>

                {/* 💬 Dica final */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="bg-black/40 p-6 rounded-2xl shadow-md text-center"
                >
                    <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Dica de Estudo</h3>
                    <p className="text-lg leading-relaxed">
                        Toque cada nota do shape alternando palhetadas para baixo e para cima.
                        Repita o mesmo desenho em outras posições para ouvir a diferença de tonalidade.
                        Essa prática vai te ajudar a <strong>memorizar o braço</strong> e a
                        <strong>criar solos com fluidez</strong>.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
