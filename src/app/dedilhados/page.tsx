"use client";
import { motion } from "framer-motion";

export default function Dedilhados() {
    const dedilhados = [
        {
            nome: "Dedilhado de Pagode (Nível Iniciante)",
            padrao: ["P+IMA", "IMA", "P", "IMA"],
            descricao: "Clássico dedilhado de pagode. Mistura o polegar com os dedos indicador, médio e anelar (IMA).",
        },
        {
            nome: "Dedilhado 1",
            padrao: ["P", "I", "M", "A", "I"],
        },
        {
            nome: "Dedilhado 2",
            padrao: ["P e M", "I", "A", "I"],
        },
        {
            nome: "Dedilhado 3",
            padrao: ["P+IMA", "I", "A", "I"],
        },
        {
            nome: "Dedilhado 4",
            padrao: ["P", "I", "M", "A", "M", "I"],
        },
        {
            nome: "Dedilhado 5",
            padrao: ["P", "I", "M", "I", "A", "I", "M", "I"],
        },
        {
            nome: "Dedilhado 6",
            padrao: ["P", "I", "A", "M"],
        },
        {
            nome: "Dedilhado 7",
            padrao: ["P e M", "I", "M", "I", "P e A", "I", "M", "I"],
        },
        {
            nome: "Dedilhado 8",
            padrao: ["P+IMA", "A", "X", "P+IMA", "X"],
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <motion.div
                className="max-w-6xl mx-auto space-y-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300">
                    🎶 Dedilhados de Violão
                </h1>

                <p className="text-lg leading-relaxed text-center text-amber-100 max-w-3xl mx-auto">
                    Aqui você encontrará dedilhados clássicos e modernos. Cada padrão mostra a sequência dos dedos usados:
                    <strong> P</strong> (polegar), <strong>I</strong> (indicador), <strong>M</strong> (médio), <strong>A</strong> (anelar) e <strong>X</strong> (abafado).
                </p>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {dedilhados.map((ded, index) => (
                        <motion.div
                            key={index}
                            className="bg-amber-800/40 p-6 rounded-2xl shadow-md text-center hover:scale-105 transition-transform"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <h2 className="text-2xl font-semibold text-yellow-200 mb-3">{ded.nome}</h2>
                            {ded.descricao && (
                                <p className="text-amber-100 mb-4">{ded.descricao}</p>
                            )}

                            <div className="flex flex-wrap justify-center gap-2 text-lg">
                                {ded.padrao.map((mov, i) => (
                                    <motion.span
                                        key={i}
                                        className={`px-3 py-1 rounded-lg font-semibold ${mov.includes("X")
                                                ? "bg-red-500/70 text-white"
                                                : mov.includes("P")
                                                    ? "bg-yellow-500/70 text-gray-900"
                                                    : mov.includes("M")
                                                        ? "bg-amber-300/70 text-gray-900"
                                                        : "bg-yellow-200/70 text-gray-900"
                                            }`}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        {mov}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <p className="text-center text-sm text-amber-200 mt-10">
                    💡 Dica: treine com o metrônomo, começando devagar e priorizando a constância.
                    Quando sentir fluidez, aumente o tempo gradualmente.
                </p>
            </motion.div>
        </main>
    );
}
