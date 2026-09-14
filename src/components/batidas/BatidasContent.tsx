"use client";

import { useState } from "react";
import { FaArrowDown, FaArrowUp, FaTimes } from "react-icons/fa";
import { batidas, type Batida } from "@/data/batidas";

export default function BatidasContent() {
    const [filtro, setFiltro] = useState("");

    const batidasFiltradas = batidas.filter((batida: Batida) =>
        batida.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        (batida.descricao &&
            batida.descricao.toLowerCase().includes(filtro.toLowerCase()))
    );

    return (
        <div className="space-y-8">
            <div className="mx-auto max-w-xl">
                <label
                    htmlFor="busca-batidas"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                >
                    Encontre uma batida
                </label>

                <input
                    id="busca-batidas"
                    type="text"
                    placeholder="Ex.: rock, sertanejo..."
                    value={filtro}
                    onChange={(event) => setFiltro(event.target.value)}
                    className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                />
            </div>

            {batidasFiltradas.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {batidasFiltradas.map((batida: Batida) => (
                        <article
                            key={batida.nome}
                            className="rounded-2xl border border-amber-200 bg-white p-6 text-center shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-amber-900">
                                {batida.nome}
                            </h3>

                            {batida.descricao && (
                                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                                    {batida.descricao}
                                </p>
                            )}

                            <div
                                className="mt-5 flex justify-center gap-3 text-2xl"
                                aria-label={`Padrão da batida ${batida.nome}`}
                            >
                                {batida.padrao.map(
                                    (
                                        movimento:
                                            | "down"
                                            | "up"
                                            | "mute",
                                        index: number
                                    ) => {
                                        if (movimento === "down") {
                                            return (
                                                <FaArrowDown
                                                    key={index}
                                                    className="text-amber-700"
                                                    aria-hidden="true"
                                                />
                                            );
                                        }

                                        if (movimento === "up") {
                                            return (
                                                <FaArrowUp
                                                    key={index}
                                                    className="text-amber-500"
                                                    aria-hidden="true"
                                                />
                                            );
                                        }

                                        if (movimento === "mute") {
                                            return (
                                                <FaTimes
                                                    key={index}
                                                    className="text-red-500"
                                                    aria-hidden="true"
                                                />
                                            );
                                        }

                                        return null;
                                    }
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <p className="text-center text-sm text-gray-600">
                    Nenhuma batida encontrada para{" "}
                    <span className="font-semibold text-gray-900">
                        &quot;{filtro}&quot;
                    </span>
                    .
                </p>
            )}

            <p className="text-center text-sm text-gray-600">
                💡 Dica: pratique devagar e perceba o balanço entre os
                movimentos para baixo, para cima e os abafamentos (X).
            </p>
        </div>
    );
}