"use client";

import { motion } from "framer-motion";

export default function Afinadores() {
    const produtos = [
        {
            nome: "Afinação Eletrônica para Guitarra, Violino e Ukulele",
            descricao: "Afinador eletrônico universal — ideal para violão, baixo, ukulele e violino.",
            imagem: "/afinador1.png",
            link: "https://s.shopee.com.br/6KwQEHPMip",
        },
        {
            nome: "Afinador Digital Cromático 360°",
            descricao: "Clip giratório com alta precisão — perfeito para músicos exigentes.",
            imagem: "/afinador2.png",
            link: "https://s.shopee.com.br/9AGbbu8TZw",
        },
        {
            nome: "Afinador Cromático Clip – Multi-instrumento",
            descricao: "Compatível com violão, guitarra, baixo e ukulele. Prático e leve.",
            imagem: "/afinador3.png",
            link: "https://s.shopee.com.br/AUlzChGz7G",
        },
        {
            nome: "Afinador Clip para Violão e Cavaco",
            descricao: "Design compacto com display nítido. Ideal para uso diário.",
            imagem: "/afinador4.png",
            link: "https://s.shopee.com.br/1VrAUdLSeE",
        },
        {
            nome: "Afinador Miwayer LCD Universal",
            descricao: "Afinador eletrônico com tela LCD — compatível com todos os instrumentos.",
            imagem: "/afinador5.png",
            link: "https://s.shopee.com.br/gI3VLrqBS",
        },
        {
            nome: "Afinador Digital Cromático Clip Premium",
            descricao: "Alta sensibilidade e resposta rápida — indicado para músicos de todos os níveis.",
            imagem: "/afinador6.png",
            link: "https://s.shopee.com.br/8AO4RSqPKz",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-20 px-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center mb-8 text-yellow-300"
            >
                🎵 Afinadores
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center max-w-2xl mx-auto mb-12 text-lg bg-black/30 p-4 rounded-xl shadow-md"
            >
                Escolha o afinador ideal para manter seu violão sempre no tom perfeito. Produtos selecionados com segurança e praticidade via Shopee Brasil.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {produtos.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={item.imagem}
                            alt={item.nome}
                            className="rounded-lg mb-3 w-full object-cover h-52"
                        />
                        <h2 className="text-xl font-semibold text-yellow-200 mb-2">
                            {item.nome}
                        </h2>
                        <p className="text-sm mb-4">{item.descricao}</p>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-yellow-400 text-amber-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition"
                        >
                            Ver na Shopee
                        </a>
                    </motion.div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-sm text-amber-100 mt-16"
            >
                Produtos recomendados por <strong>LearningGuitar 🎸</strong> em parceria com Shopee Brasil.
            </motion.p>
        </main>
    );
}
