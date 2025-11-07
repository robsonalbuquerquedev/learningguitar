"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Guitar, Shirt, Pickaxe, Settings } from "lucide-react";

export default function LojaMusical() {
    const categorias = [
        {
            nome: "Afinadores",
            descricao: "Mantenha seu violão sempre no tom perfeito e com som profissional.",
            href: "/loja-musical/afinadores",
            icone: <Settings className="text-yellow-300 w-8 h-8" />,
        },
        {
            nome: "Capotrastes",
            descricao: "Mude o tom com facilidade e explore novas possibilidades harmônicas.",
            href: "/loja-musical/capotrastes",
            icone: <Guitar className="text-yellow-300 w-8 h-8" />,
        },
        {
            nome: "Palhetas",
            descricao: "Mais precisão e conforto ao tocar — encontre o tipo ideal para o seu estilo.",
            href: "/loja-musical/palhetas",
            icone: <Pickaxe className="text-yellow-300 w-8 h-8" />,
        },
        {
            nome: "Camisetas Musicais",
            descricao: "Vista sua paixão pela música com estampas criativas e inspiradoras.",
            href: "/loja-musical/camisetas-musicais",
            icone: <Shirt className="text-yellow-300 w-8 h-8" />,
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-20 px-6">
            {/* 🛍️ Cabeçalho da loja */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-extrabold text-center text-yellow-200 mb-4 drop-shadow-lg"
            >
                Loja Musical 🎸
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-center max-w-3xl mx-auto text-lg sm:text-xl mb-12 bg-black/30 p-5 rounded-xl shadow-md leading-relaxed"
            >
                Encontre os melhores acessórios e produtos musicais selecionados com carinho por{" "}
                <strong>LearningGuitar 🎶</strong>.
                Qualidade, praticidade e segurança em parceria com a <strong>Shopee Brasil</strong>.
            </motion.p>

            {/* 🎵 Cards de categorias */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {categorias.map((cat, index) => (
                    <motion.div
                        key={cat.nome}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="bg-white/10 backdrop-blur-sm border border-yellow-400/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-200/10 transition-transform duration-300"
                    >
                        <div className="flex justify-center mb-3">{cat.icone}</div>
                        <h2 className="text-2xl font-semibold text-yellow-300 text-center mb-2">
                            {cat.nome}
                        </h2>
                        <p className="text-sm text-center mb-4 text-amber-100/90">{cat.descricao}</p>
                        <div className="text-center">
                            <Link
                                href={cat.href}
                                className="inline-block bg-yellow-400 text-amber-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition"
                            >
                                Explorar
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 🔖 Rodapé */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-sm text-amber-100 mt-16 italic"
            >
                Produtos recomendados por <strong>LearningGuitar 🎸</strong> em parceria com Shopee Brasil.
            </motion.p>
        </main>
    );
}
