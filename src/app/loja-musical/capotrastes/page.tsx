"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Capotrastes() {
    const produtos = [
        {
            nome: "Capotraste Braçadeira para Violão e Guitarra",
            descricao: "Capotraste de alta resistência para violão e guitarra — ideal para ajustar o tom rapidamente.",
            imagem: "/capotraste1.png",
            link: "https://s.shopee.com.br/qbTlIJ6ub",
        },
        {
            nome: "Capotraste com Porta-Palhetas + 5 Palhetas",
            descricao: "Versátil e prático — acompanha 5 palhetas e suporte integrado para armazená-las.",
            imagem: "/capotraste2.png",
            link: "https://s.shopee.com.br/7V8Ni9IJVc",
        },
        {
            nome: "Capotraste NV com Porta-Palhetas + 2 Palhetas",
            descricao: "Capotraste ergonômico com mola de pressão e porta-palhetas embutido.",
            imagem: "/capotraste3.png",
            link: "https://s.shopee.com.br/8pdlJ1OjXW",
        },
        {
            nome: "Capotraste Capo Braçadeira Guitarra e Violão",
            descricao: "Modelo leve e resistente, ideal para violão de aço ou guitarra elétrica.",
            imagem: "/capotraste4.png",
            link: "https://s.shopee.com.br/12MnOh51m",
        },
        {
            nome: "Capotraste Unidão Preto – Guitarras Acústicas e Elétricas",
            descricao: "Design profissional com mola reforçada. Excelente durabilidade e acabamento.",
            imagem: "/capotraste5.png",
            link: "https://s.shopee.com.br/AA98uLfqFZ",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-20 px-6">
            {/* 🎸 Título e descrição */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center mb-8 text-yellow-300"
            >
                🎸 Capotrastes
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center max-w-2xl mx-auto mb-12 text-lg bg-black/30 p-4 rounded-xl shadow-md"
            >
                Altere o tom do seu violão com facilidade! Os capotrastes abaixo foram selecionados para garantir praticidade, conforto e afinação precisa.
            </motion.p>

            {/* 🪶 Lista de produtos */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {produtos.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        {/* ✅ Imagem otimizada com next/image */}
                        <div className="relative w-full h-52 mb-3">
                            {/* 🔹 Container da imagem ajustado para não cortar nada */}
                            <div className="relative w-full h-52 mb-3 bg-black/20 flex items-center justify-center rounded-lg overflow-hidden">
                                <Image
                                    src={item.imagem}
                                    alt={item.nome}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain rounded-lg"
                                    priority={index === 0}
                                />
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold text-yellow-200 mb-2">{item.nome}</h2>
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

            {/* Rodapé */}
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
