"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
            {/* 🟨 HERO SPLIT */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 gap-10">
                {/* 🎸 Lado esquerdo: imagem hero-loja */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="md:w-1/2 flex justify-center"
                >
                    <Image
                        src="/hero-loja.png"
                        alt="Loja Musical LearningGuitar"
                        width={480}
                        height={480}
                        className="rounded-2xl shadow-2xl border-4 border-yellow-400/70"
                        priority
                    />
                </motion.div>

                {/* ✨ Lado direito: texto + botão */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 drop-shadow-lg mb-4">
                        Loja Musical 🎸
                    </h1>

                    <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
                        Encontre os melhores acessórios e produtos musicais selecionados com carinho por{" "}
                        <strong>LearningGuitar 🎶</strong>.
                        Qualidade, praticidade e segurança em parceria com{" "}
                        <strong>Shopee Brasil</strong>.
                    </p>

                    <button
                        onClick={() =>
                            document
                                .getElementById("cards-section")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
                    >
                        🎵 Ver Produtos
                    </button>
                </motion.div>
            </section>

            {/* 🎶 TÍTULO DE TRANSIÇÃO ENTRE HERO E CARDS */}
            <motion.h2
                id="cards-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-yellow-100 text-3xl sm:text-4xl font-bold drop-shadow-md mb-12"
            >
                🎶 Categorias em Destaque
            </motion.h2>

            {/* 🎵 Cards de categorias */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 pb-24">
                {categorias.map((cat, index) => (
                    <motion.div
                        key={cat.nome}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
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
                className="text-center text-sm text-amber-100 mt-16 italic pb-6"
            >
                Produtos recomendados por <strong>LearningGuitar 🎸</strong> em parceria com Shopee Brasil.
            </motion.p>
        </main>
    );
}
