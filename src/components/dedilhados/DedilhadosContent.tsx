"use client";

import { dedilhados, type Dedilhado } from "@/data/dedilhados";

export default function DedilhadosContent() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dedilhados.map((ded: Dedilhado) => (
                <article
                    key={ded.nome}
                    className="rounded-2xl border border-amber-200 bg-white p-6 text-center shadow-sm"
                >
                    <h3 className="text-xl font-bold text-amber-900">
                        {ded.nome}
                    </h3>

                    {ded.descricao && (
                        <p className="mt-3 text-sm leading-relaxed text-gray-700">
                            {ded.descricao}
                        </p>
                    )}

                    <div
                        className="mt-5 flex flex-wrap justify-center gap-2"
                        aria-label={`Padrão do dedilhado ${ded.nome}`}
                    >
                        {ded.padrao.map((mov: string, index: number) => {
                            const isMute = mov.includes("X");
                            const isThumb = mov.includes("P");
                            const isMiddle = mov.includes("M");

                            return (
                                <span
                                    key={index}
                                    className={`rounded-lg px-3 py-1 text-sm font-bold ${
                                        isMute
                                            ? "bg-red-100 text-red-700"
                                            : isThumb
                                              ? "bg-amber-200 text-amber-900"
                                              : isMiddle
                                                ? "bg-yellow-100 text-yellow-900"
                                                : "bg-gray-100 text-gray-800"
                                    }`}
                                >
                                    {mov}
                                </span>
                            );
                        })}
                    </div>
                </article>
            ))}
        </div>
    );
}