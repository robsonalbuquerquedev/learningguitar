"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp, FaTimes } from "react-icons/fa";

const batidas = [
    { nome: "Batida 1", padrao: ["down", "up", "mute"], descricao: "Batida de reggae." },
    { nome: "Batida 2", padrao: ["down", "down", "up", "up", "down"], descricao: "Batida de rock." },
    { nome: "Batida 3", padrao: ["down", "mute", "up", "up", "mute", "up"] },
    { nome: "Batida 4", padrao: ["down", "down", "up", "up", "down", "up"] },
    { nome: "Batida 5", padrao: ["down", "down", "up", "up", "down", "down"], descricao: "Ideal para louvores suaves e lentos." },
    { nome: "Batida 6", padrao: ["down", "down", "up", "up", "down", "down", "up", "down", "up"] },
    { nome: "Batida 7", padrao: ["down", "mute", "up", "up", "down", "mute", "up", "down", "up"] },
    { nome: "Batida 8", padrao: ["down", "up", "up"], descricao: "Batida de sertanejo." },
    { nome: "Batida 9", padrao: ["down", "up", "up", "down"] },
    { nome: "Batida 10", padrao: ["down", "down", "up", "down", "up", "down"] },
    { nome: "Batida 11", padrao: ["down", "up", "up", "down", "up", "up", "down"], descricao: "Perfeita para músicas mais animadas." },
    { nome: "Batida 12", padrao: ["down", "down", "up", "down", "up", "down", "down"], descricao: "Muito usada em músicas pop e adoração." },
    { nome: "Batida 13", padrao: ["down", "down", "up", "up", "down", "down", "down", "up"] },
    { nome: "Batida 14", padrao: ["down", "up", "up", "down", "up", "up", "down", "up", "down", "up"] },
];

export default function Batidas() {
    const [filtro, setFiltro] = useState("");

    const batidasFiltradas = batidas.filter((b) =>
        b.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        (b.descricao && b.descricao.toLowerCase().includes(filtro.toLowerCase()))
    );

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <motion.div
                className="max-w-6xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300">
                    🎸 Batidas Básicas de Violão
                </h1>

                <p className="text-lg leading-relaxed text-center">
                    Explore e pratique diferentes padrões de batida. Use o campo abaixo para buscar por estilo ou nome.
                </p>

                {/* Campo de busca */}
                <div className="flex justify-center">
                    <motion.input
                        type="text"
                        placeholder="Buscar batida (ex: rock, sertanejo...)"
                        className="w-full sm:w-2/3 lg:w-1/2 p-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                        whileFocus={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </div>

                {/* Grid de batidas */}
                {batidasFiltradas.length > 0 ? (
                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                    >
                        {batidasFiltradas.map((batida, index) => (
                            <motion.div
                                key={index}
                                className="bg-amber-800/40 p-6 rounded-2xl shadow-md text-center hover:scale-105 transition-transform"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h2 className="text-2xl font-semibold text-yellow-200 mb-2">{batida.nome}</h2>
                                {batida.descricao && (
                                    <p className="text-lg leading-relaxed mb-4 text-amber-100">{batida.descricao}</p>
                                )}

                                <div className="flex justify-center gap-3 text-2xl">
                                    {batida.padrao.map((mov, i) => {
                                        if (mov === "down") return <FaArrowDown key={i} className="text-yellow-300" />;
                                        if (mov === "up") return <FaArrowUp key={i} className="text-yellow-100" />;
                                        if (mov === "mute") return <FaTimes key={i} className="text-red-400" />;
                                        return null;
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <p className="text-center text-yellow-200 mt-8">
                        Nenhuma batida encontrada para &quot;<span className="font-semibold">{filtro}</span>&quot;
                    </p>
                )}

                <p className="text-center text-sm text-amber-200 mt-6">
                    💡 Dica: pratique devagar e sinta o balanço natural entre o toque e o abafado (X).
                </p>
            </motion.div>
        </main>
    );
}
