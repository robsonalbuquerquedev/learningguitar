"use client";

import { motion } from "framer-motion";

export default function Palhetas() {
    const produtos = [
        {
            nome: "Kit Palhetas Celuloide Premium + Porta Palhetas + Capotraste",
            descricao:
                "Conjunto completo de palhetas de celuloide premium com capotraste e estojo prático. Ideal para violão, guitarra e ukulele.",
            imagem: "/palheta1.png",
            link: "https://s.shopee.com.br/60Ja1brICE",
        },
        {
            nome: "Kit 4 Palhetas Fender – 0.46 a 0.96mm",
            descricao:
                "Palhetas Fender originais, com diferentes espessuras para variados estilos musicais.",
            imagem: "/palheta2.png",
            link: "https://s.shopee.com.br/AKSZCET27E",
        },
        {
            nome: "Kit 5 Palhetas + Porta Palheta",
            descricao:
                "Kit com 5 palhetas de alta qualidade e 1 suporte prático — perfeito para músicos de todos os níveis.",
            imagem: "/palheta3.png",
            link: "https://s.shopee.com.br/gI3grc8V3",
        },
        {
            nome: "Porta Palhetas + 6 Palhetas Alice",
            descricao:
                "Estojo compacto com 6 palhetas Alice, ideal para quem busca conforto e versatilidade.",
            imagem: "/palheta4.png",
            link: "https://s.shopee.com.br/9Ka21ADWGl",
        },
        {
            nome: "Suporte Porta Palhetas Universal",
            descricao:
                "Suporte adesivo para violão, guitarra e baixo — mantenha suas palhetas sempre à mão.",
            imagem: "/palheta5.png",
            link: "https://s.shopee.com.br/8AO4dI6cq4",
        },
        {
            nome: "Kit 50 Palhetas com Estojo",
            descricao:
                "Kit econômico com 50 palhetas coloridas em caixinha transparente. Ideal para estudo e performance.",
            imagem: "/palheta6.png",
            link: "https://s.shopee.com.br/12MvPZpxa",
        },
        {
            nome: "Kit Marshall + Chaveiro + Palheta Fender",
            descricao:
                "Combo de acessórios premium: porta-palhetas Marshall, chaveiro e palheta Fender 0.96mm.",
            imagem: "/palheta7.png",
            link: "https://s.shopee.com.br/4VUmJCc03S",
        },
        {
            nome: "Porta Palhetas Colorido + 2 Palhetas",
            descricao:
                "Porta-palhetas colorido com 2 palhetas inclusas — compacto, leve e funcional.",
            imagem: "/palheta8.png",
            link: "https://s.shopee.com.br/30fyXB33rh",
        },
        {
            nome: "Porta Palhetas + Palheta VIP",
            descricao:
                "Conjunto elegante de porta-palhetas com palheta VIP — ideal para presentear músicos.",
            imagem: "/palheta9.png",
            link: "https://s.shopee.com.br/3qF5X4zSyR",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-20 px-6">
            {/* 🎵 Título principal */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center mb-8 text-yellow-300"
            >
                🎶 Palhetas
            </motion.h1>

            {/* ✨ Descrição */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center max-w-3xl mx-auto mb-12 text-lg bg-black/30 p-4 rounded-xl shadow-md"
            >
                Escolha o kit de palhetas ideal para o seu estilo! Seja para tocar violão,
                guitarra ou baixo, essas opções oferecem conforto, precisão e durabilidade —
                todos com envio garantido pela Shopee Brasil.
            </motion.p>

            {/* 🪶 Grid de produtos */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {produtos.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
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
