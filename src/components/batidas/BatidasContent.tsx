"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp, FaTimes } from "react-icons/fa";
import { batidas, type Batida } from "@/data/batidas";

export default function BatidasContent() {
    const [filtro, setFiltro] = useState<string>("");

    const batidasFiltradas = batidas.filter((b: Batida) =>
        b.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        (b.descricao && b.descricao.toLowerCase().includes(filtro.toLowerCase()))
    );

    return (
        <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
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
                    {batidasFiltradas.map((batida: Batida, index: number) => (
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
                                {batida.padrao.map((mov: "down" | "up" | "mute", i: number) => {
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
                    Nenhuma batida encontrada para "<span className="font-semibold">{filtro}</span>"
                </p>
            )}

            <p className="text-center text-sm text-amber-200 mt-6">
                💡 Dica: pratique devagar e sinta o balanço natural entre o toque e o abafado (X).
            </p>
        </motion.div>
    );
}
