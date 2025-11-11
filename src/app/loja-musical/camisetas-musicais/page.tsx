"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CamisetasMusicais() {
    const produtos = [
        {
            nome: "Camiseta Gorillaz Punk Rock Vintage",
            descricao:
                "Blusa musical inspirada na banda Gorillaz — estilo retrô dos anos 90 com visual urbano e atitude.",
            imagem: "/camiseta1.png",
            link: "https://s.shopee.com.br/1BEKN9kyfo",
        },
        {
            nome: "Camiseta Clave de Sol – Nota Musical Personalizada",
            descricao:
                "Camiseta elegante com símbolo de clave de sol. Ideal para músicos e amantes da arte sonora.",
            imagem: "/camiseta2.png",
            link: "https://s.shopee.com.br/9fCsV0HlLU",
        },
        {
            nome: "Camiseta Lady Gaga Mayhem Streetwear",
            descricao:
                "Modelo oversized inspirado na cultura musical contemporânea. Estilo, conforto e expressão artística.",
            imagem: "/camiseta3.png",
            link: "https://s.shopee.com.br/3LIoxbmwc8",
        },
        {
            nome: "Camiseta Melanie Martinez Portals Pop",
            descricao:
                "T-shirt unissex com arte do álbum Portals — perfeita para fãs do pop alternativo e do visual artístico.",
            imagem: "/camiseta4.png",
            link: "https://s.shopee.com.br/2qMYMydFIX",
        },
        {
            nome: "Camiseta Retrô 3D Notas Musicais",
            descricao:
                "Design criativo com impressão 3D de notas musicais — conforto e originalidade para o dia a dia.",
            imagem: "/camiseta5.png",
            link: "https://s.shopee.com.br/7KoxjWsmBg",
        },
        {
            nome: "Camiseta Estampa Guitarra – Preto e Branco",
            descricao:
                "Modelo casual com estampa de guitarra, tecido leve e corte moderno. Ideal para o verão.",
            imagem: "/camiseta6.png",
            link: "https://s.shopee.com.br/6VFqkGxshE",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
            {/* 🟨 HERO SPLIT */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 gap-10">
                {/* 👕 Lado esquerdo: imagem hero-camiseta */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="md:w-1/2 flex justify-center"
                >
                    <Image
                        src="/hero-camiseta.png"
                        alt="Camisetas Musicais LearningGuitar"
                        width={480}
                        height={480}
                        className="rounded-2xl shadow-2xl border-4 border-yellow-400/70"
                        priority
                    />
                </motion.div>

                {/* ✨ Lado direito: texto e botão */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 drop-shadow-lg mb-4">
                        👕 Camisetas Musicais
                    </h1>

                    <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
                        Vista sua paixão pela música!
                        Explore camisetas com temas musicais, bandas e ícones da cultura sonora —
                        perfeitas para músicos e fãs de todos os estilos.
                    </p>

                    <button
                        onClick={() =>
                            document
                                .getElementById("produtos-section")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
                    >
                        🎵 Ver Produtos
                    </button>
                </motion.div>
            </section>

            {/* 🎶 Título de transição */}
            <motion.h2
                id="produtos-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-yellow-100 text-3xl sm:text-4xl font-bold drop-shadow-md mb-12"
            >
                🎶 Produtos em Destaque
            </motion.h2>

            {/* 🪶 Grade de produtos */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 pb-24">
                {produtos.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
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

                        <h2 className="text-xl font-semibold text-yellow-200 mb-2 text-center">
                            {item.nome}
                        </h2>
                        <p className="text-sm mb-4 text-center">{item.descricao}</p>
                        <div className="flex justify-center">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-yellow-400 text-amber-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition"
                            >
                                Ver na Shopee
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 🧡 Rodapé */}
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
