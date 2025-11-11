"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Projeto = {
    nome: string;
    descricao: string;
    link: string;
    tecnologias?: string[];
};

const projetos: Projeto[] = [
    {
        nome: "LearningGuitar",
        descricao: "Plataforma interativa para aprender violão.",
        link: "https://learningguitar.vercel.app/",
        tecnologias: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
    {
        nome: "Learning Basic Computing",
        descricao: "Projetos de aprendizado de computação básica.",
        link: "https://learningbasiccomputing.vercel.app/",
        tecnologias: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
    {
        nome: "Mensageiros do Una",
        descricao: "Site de divulgação de um projeto social.",
        link: "https://mensageiros-do-una-site.vercel.app/",
        tecnologias: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
    {
        nome: "DevShowcase",
        descricao: "Showcase de projetos e estudos de desenvolvimento.",
        link: "https://devshowcase-bice.vercel.app/",
        tecnologias: ["HTML", "CSS", "Sass", "JavaScript"],
    },
    {
        nome: "Portfólio Robson Dev",
        descricao: "Meu portfólio pessoal com projetos e estudos contínuos.",
        link: "https://robson-dev-portfolio.vercel.app/#/",
        tecnologias: ["HTML", "CSS", "JavaScript", "Vue.js"],
    },
    {
        nome: "ArtevivaQ",
        descricao: "Portal de expressão artística e visual. Projeto de design e cultura digital.",
        link: "https://artevivaq.vercel.app/",
        tecnologias: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
];

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
            {/* 🟨 HERO SPLIT */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 gap-10">
                {/* 🎸 Lado esquerdo: imagem hero-sobre */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="md:w-1/2 flex justify-center"
                >
                    <Image
                        src="/hero-sobre.png"
                        alt="Robson Albuquerque - Desenvolvedor e Músico"
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
                        👋 Sobre o Desenvolvedor
                    </h1>

                    <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
                        Olá! Sou <strong>Robson Albuquerque</strong>, formado em <strong>Análise e Desenvolvimento de Sistemas</strong>
                        e apaixonado por tecnologia, música e aprendizado contínuo.
                        Crio projetos que unem **criatividade, design e interatividade**, buscando inspirar e ensinar.
                    </p>

                    <button
                        onClick={() =>
                            document
                                .getElementById("projetos-section")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
                    >
                        🎨 Ver Projetos
                    </button>
                </motion.div>
            </section>

            {/* 🎶 Título de transição */}
            <motion.h2
                id="projetos-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-yellow-100 text-3xl sm:text-4xl font-bold drop-shadow-md mb-12"
            >
                🚀 Projetos em Destaque
            </motion.h2>

            {/* 🧱 Grid de Projetos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-6 pb-24">
                {projetos.map((projeto, index) => (
                    <motion.a
                        key={projeto.nome}
                        href={projeto.link}
                        target="_blank"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-amber-700 hover:scale-105 hover:shadow-yellow-200/30 transition-transform duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-amber-300 mb-2">{projeto.nome}</h3>
                            <p className="text-amber-100 text-sm mb-3">{projeto.descricao}</p>
                            {projeto.tecnologias && (
                                <div className="flex flex-wrap gap-2">
                                    {projeto.tecnologias.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-amber-700/40 px-2 py-1 rounded-lg text-yellow-200 text-xs font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <p className="mt-4 text-yellow-200 font-semibold text-sm underline hover:text-yellow-300 text-center">
                            Ver Projeto →
                        </p>
                    </motion.a>
                ))}
            </div>
        </main>
    );
}
