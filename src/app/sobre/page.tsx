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
        nome: "Currículo Online",
        descricao: "Visualize meu currículo atualizado com experiência e projetos.",
        link: "https://robson-dev-cv.vercel.app/",
        tecnologias: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
];

export default function SobrePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white p-6 sm:p-8">

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-center drop-shadow-lg"
            >
                👋 Sobre o Desenvolvedor
            </motion.h1>

            {/* Foto */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-full overflow-hidden w-40 h-40 sm:w-48 sm:h-48 mb-6 shadow-xl"
            >
                <Image
                    src="/robson.png"
                    alt="Foto de Robson Albuquerque"
                    width={192}
                    height={192}
                    className="object-cover"
                />
            </motion.div>

            {/* Texto de apresentação */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-amber-100 max-w-2xl mx-auto mb-6 leading-relaxed text-center bg-black/40 p-4 rounded-lg shadow-lg text-sm sm:text-base"
            >
                Olá! Eu sou <strong>Robson Albuquerque</strong>, formado em <strong>Análise e Desenvolvimento de Sistemas</strong> e apaixonado por programação, música e aprendizado contínuo. 🎸💻
                Gosto de criar páginas web para estudar e revisar conteúdos que me interessam, o que me ajuda a memorizar, praticar e compartilhar meus projetos, fortalecendo meu portfólio.
            </motion.p>

            {/* Metodologia */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-2xl mx-auto bg-black/40 p-6 rounded-2xl shadow-xl backdrop-blur-md text-sm sm:text-base mb-10"
            >
                <h2 className="text-2xl font-bold mb-4 text-amber-300 text-center">💡 Minha Metodologia de Estudo</h2>
                <ul className="list-disc list-inside space-y-3 text-amber-100">
                    <li>Criar páginas web para estudar e revisar conteúdos de programação, música, inglês ou qualquer outro assunto que agregue valor.</li>
                    <li>Praticar repetição e aplicação prática, tanto no código quanto em outras áreas de interesse.</li>
                    <li>Combinar estudo visual com interatividade, tornando o aprendizado mais eficiente e dinâmico.</li>
                    <li>Compartilhar projetos online para validar aprendizado e enriquecer meu portfólio.</li>
                </ul>
            </motion.div>

            {/* Projetos em Cards */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
            >
                {projetos.map((projeto) => (
                    <motion.a
                        key={projeto.nome}
                        href={projeto.link}
                        target="_blank"
                        className="bg-black/40 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-amber-700 hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
                        whileHover={{ scale: 1.05 }}
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
            </motion.div>
        </main>
    );
}
