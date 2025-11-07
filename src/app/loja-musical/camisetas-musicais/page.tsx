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
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-20 px-6">
            {/* 🎸 Título e subtítulo */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center mb-8 text-yellow-300"
            >
                👕 Camisetas Musicais
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center max-w-3xl mx-auto mb-12 text-lg bg-black/30 p-4 rounded-xl shadow-md"
            >
                Vista sua paixão pela música! Explore camisetas com temas musicais, bandas e
                ícones da cultura sonora — perfeitas para músicos e fãs de todos os estilos.
            </motion.p>

            {/* 🪶 Grade de produtos */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {produtos.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
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

            {/* 🧡 Rodapé da página */}
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
