import Image from "next/image";
import type { Metadata } from "next";
import ScrollToProjetosButton from "@/components/sobre/ScrollToProjetosButton";

export const metadata: Metadata = {
    title: {
        absolute: "Sobre o Desenvolvedor | LearningGuitar"
    },
    description:
        "Conheça Robson Albuquerque, desenvolvedor, professor e criador do projeto LearningGuitar. Saiba mais sobre sua trajetória, projetos, tecnologias utilizadas e sua missão de unir música e tecnologia para ajudar iniciantes no violão.",
    keywords: [
        "sobre o desenvolvedor",
        "Robson Albuquerque",
        "desenvolvedor de sistemas",
        "criador do LearningGuitar",
        "projetos de tecnologia",
        "violão para iniciantes",
        "sobre o site LearningGuitar",
        "história do desenvolvedor",
        "projetos em destaque",
        "programação e música"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/sobre"
    },
    openGraph: {
        title: "Sobre o Desenvolvedor | LearningGuitar",
        description:
            "Saiba mais sobre Robson Albuquerque — criador do LearningGuitar, desenvolvedor apaixonado por tecnologia e música. Veja seus projetos, trajetória e missão.",
        url: "https://aprenderviolaoonline.com.br/sobre",
        siteName: "LearningGuitar",
        images: [
            {
                url: "https://aprenderviolaoonline.com.br/og-sobre.png",
                width: 1200,
                height: 630,
                alt: "Sobre o Desenvolvedor - LearningGuitar"
            }
        ],
        locale: "pt_BR",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Sobre o Desenvolvedor | LearningGuitar",
        description:
            "Conheça a história de Robson Albuquerque e seus projetos que unem música, tecnologia e ensino prático.",
        images: ["https://aprenderviolaoonline.com.br/og-sobre.png"]
    }
};

type Projeto = {
    nome: string;
    descricao: string;
    link: string;
    tecnologias?: string[];
};

const projetos: Projeto[] = [
    {
        nome: "CantosJSM",
        descricao: "Plataforma moderna e organizada para consultar cantos litúrgicos com rapidez e simplicidade.",
        link: "https://cantosjsm.com.br/",
        tecnologias: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
        nome: "Learning Basic Computing",
        descricao: "Ambiente de estudos com conteúdos básicos de informática para iniciantes e estudantes.",
        link: "https://learningbasiccomputing.vercel.app/",
        tecnologias: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    },
    {
        nome: "Mensageiros do Una",
        descricao: "Site institucional feito para apresentar e apoiar o projeto social Mensageiros do Una.",
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

                {/* 🎸 Lado esquerdo: imagem */}
                <div
                    className="md:w-1/2 flex justify-center animate-fadeSlide"
                >
                    <Image
                        src="/hero-sobre.png"
                        alt="Robson Albuquerque - Desenvolvedor e Músico"
                        width={480}
                        height={480}
                        className="rounded-2xl shadow-2xl border-4 border-yellow-400/70"
                        priority
                    />
                </div>

                {/* ✨ Lado direito: texto */}
                <div
                    className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left animate-fadeSlide"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 drop-shadow-lg mb-4">
                        👋 Sobre o Desenvolvedor
                    </h1>

                    <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
                        Olá! Sou <strong>Robson Albuquerque</strong>, formado em <strong>Análise e Desenvolvimento de Sistemas</strong>
                        e apaixonado por tecnologia, música e aprendizado contínuo.
                        Crio projetos que unem criatividade, design e interatividade, sempre buscando inspirar e ensinar.
                    </p>
                    <ScrollToProjetosButton />
                </div>
            </section>

            {/* 🎶 Título de transição */}
            <h2
                id="projetos-section"
                className="text-center text-yellow-100 text-3xl sm:text-4xl font-bold drop-shadow-md mb-12 animate-fadeSlide"
            >
                🚀 Projetos em Destaque
            </h2>

            {/* 🧱 Grid de Projetos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-6 pb-24">
                {projetos.map((projeto, index) => (
                    <a
                        key={projeto.nome}
                        href={projeto.link}
                        target="_blank"
                        className="bg-black/40 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-amber-700 hover:scale-105 hover:shadow-yellow-200/30 transition-transform duration-300 flex flex-col justify-between card-stagger"
                        style={{ animationDelay: `${index * 0.15}s` }}
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
                    </a>
                ))}
            </div>
        </main>
    );
}