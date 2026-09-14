"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ShapesSolosContent() {
    const [posicao, setPosicao] = useState(3);

    const shape = [
        { corda: 6, casas: [0, 2] },
        { corda: 5, casas: [-1, 0, 2] },
        { corda: 4, casas: [-1, 1, 2] },
        { corda: 3, casas: [-1, 1, 2] },
        { corda: 2, casas: [0, 2] },
        { corda: 1, casas: [-1, 0, 2] },
    ];

    const handleMover = (direcao: "esquerda" | "direita") => {
        setPosicao((prev) =>
            Math.max(
                1,
                prev + (direcao === "direita" ? 1 : -1)
            )
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                    onClick={() => handleMover("esquerda")}
                    aria-label="Mover o shape uma casa para a esquerda"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-600 text-white shadow-sm transition hover:bg-amber-700"
                >
                    <FaArrowLeft aria-hidden="true" />
                </button>

                <span className="text-center font-semibold text-gray-900">
                    Posição atual:{" "}
                    <span className="text-amber-700">
                        {posicao}ª casa
                    </span>
                </span>

                <button
                    onClick={() => handleMover("direita")}
                    aria-label="Mover o shape uma casa para a direita"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-600 text-white shadow-sm transition hover:bg-amber-700"
                >
                    <FaArrowRight aria-hidden="true" />
                </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-amber-200 bg-white p-5 shadow-sm md:p-6">
                <h3 className="mb-5 text-center text-xl font-bold text-gray-900">
                    Visualização do shape
                </h3>

                <div className="min-w-[700px] space-y-3">
                    {shape.map((linha) => (
                        <div
                            key={linha.corda}
                            className="flex items-center justify-center gap-2"
                        >
                            <span className="w-10 shrink-0 text-right text-sm font-semibold text-amber-700">
                                C{linha.corda}
                            </span>

                            <div className="flex gap-2">
                                {Array.from(
                                    { length: 15 },
                                    (_, casa) => {
                                        const ativo = linha.casas.includes(
                                            casa - posicao
                                        );

                                        return (
                                            <div
                                                key={casa}
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm ${
                                                    ativo
                                                        ? "border-amber-400 bg-amber-300 font-bold text-amber-950"
                                                        : "border-gray-200 bg-gray-50 text-gray-500"
                                                }`}
                                            >
                                                {casa}
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-5 text-center text-sm text-gray-600">
                    As bolinhas destacadas representam as notas pertencentes
                    ao shape. Use as setas para observar o mesmo padrão em
                    outras regiões do braço.
                </p>
            </div>
        </div>
    );
}