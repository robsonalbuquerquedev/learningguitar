"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const secoes = [
    {
      nome: "Escalas",
      descricao: "Aprenda as escalas musicais e domine o braço do violão.",
      href: "/escalas",
    },
    {
      nome: "Formação de Acordes",
      descricao: "Descubra como formar acordes maiores, menores e suas variações.",
      href: "/formacao-de-acordes",
    },
    {
      nome: "Aprender a Tocar em Todos os Tons",
      descricao: "Aplique o padrão 7L para tocar músicas em qualquer tonalidade.",
      href: "/aprender-tocar-em-todos-os-tons",
    },
    {
      nome: "Campo Harmônico",
      descricao: "Entenda o papel de cada acorde dentro de uma tonalidade.",
      href: "/campo-harmonico",
    },
    {
      nome: "Acordes Maiores e Menores Naturais",
      descricao: "Visualize todos os acordes básicos para qualquer música.",
      href: "/acordes-maiores-e-menores-naturais",
    },
    {
      nome: "Progressões de Acordes",
      descricao: "Aprenda sequências harmônicas usadas em músicas populares.",
      href: "/progressoes-de-acordes",
    },
    {
      nome: "Batidas Básicas",
      descricao: "Conheça padrões de batidas simples e fáceis de tocar.",
      href: "/batidas-basicas",
    },
    {
      nome: "Memorizar Braço",
      descricao: "Treine para memorizar posições de notas e acordes no braço do violão.",
      href: "/memorizar-braco-do-violao",
    },
    {
      nome: "Memorizar Todas as Notas",
      descricao: "Aprenda a localizar todas as notas do braço do violão rapidamente.",
      href: "/memorizar-todas-as-notas",
    },
  ];

  // ✨ Variantes para o container e os cards (corrigidos para TypeScript)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as any }, // 👈 cast simples para resolver o tipo
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white flex flex-col">
      {/* 🟨 HERO SPLIT com hero-guitar aprimorado */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 gap-10">
        {/* 🎸 Lado esquerdo: imagem hero-guitar nova */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/hero-guitar.png"
            alt="Violão LearningGuitar"
            width={480}
            height={480}
            className="rounded-2xl shadow-2xl border-4 border-yellow-400/70"
            priority
          />
        </motion.div>

        {/* ✨ Lado direito: conteúdo textual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 drop-shadow-lg mb-4">
            LearningGuitar 🎸
          </h1>

          <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
            Aprenda violão de forma interativa com truques práticos, exercícios e dicas
            para memorizar acordes, notas e escalas. Ideal para iniciantes e apaixonados por música!
          </p>

          {/* 🪶 Novo botão: rola até os cards */}
          <button
            onClick={() =>
              document
                .getElementById("cards-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
          >
            🎵 Explorar Conteúdos
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
        🎶 Explore o Universo do Violão
      </motion.h2>

      {/* ✨ SEÇÕES COM EFEITO ELEGANTE */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {secoes.map((secao, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="backdrop-blur-md bg-amber-800/30 p-6 rounded-2xl shadow-md border border-yellow-200/20 hover:border-yellow-300/50 hover:scale-105 hover:-rotate-1 hover:shadow-amber-200/30 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-yellow-200 mb-2">{secao.nome}</h3>
            <p className="text-lg leading-relaxed mb-4">{secao.descricao}</p>
            <Link
              href={secao.href}
              className="inline-block bg-yellow-300 text-amber-900 font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition"
            >
              Explorar
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
