"use client";

import { motion } from "framer-motion";
import { dedilhados, type Dedilhado } from "@/data/dedilhados";

export default function DedilhadosContent() {
    return (
        <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
            }}
        >
            {dedilhados.map((ded: Dedilhado, index: number) => (
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
                        {ded.padrao.map((mov: string, i: number) => (
                            <motion.span
                                key={i}
                                className={`
                  px-3 py-1 rounded-lg font-semibold
                  ${mov.includes("X") ? "bg-red-500/70 text-white" :
                                        mov.includes("P") ? "bg-yellow-500/70 text-gray-900" :
                                            mov.includes("M") ? "bg-amber-300/70 text-gray-900" :
                                                "bg-yellow-200/70 text-gray-900"}
                `}
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
    );
}
