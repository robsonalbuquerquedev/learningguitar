"use client";

import { motion } from "framer-motion";
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
      {/* 🎸 Título chamativo */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold text-center drop-shadow-lg mb-6"
      >
        LearningGuitar 🎸
      </motion.h1>

      {/* ✨ Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center max-w-3xl text-lg sm:text-xl mb-12 bg-black/40 p-4 rounded-xl shadow-md"
      >
        Aprenda violão de forma interativa com exercícios, truques práticos e dicas
        para memorizar acordes, notas e escalas. Ideal para iniciantes e apaixonados por música!
      </motion.p>

      {/* 🗂 Seções / cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {secoes.map((secao, index) => (
          <motion.div
            key={index}
            className="bg-amber-800/40 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">{secao.nome}</h2>
            <p className="text-lg leading-relaxed mb-4">{secao.descricao}</p>
            <Link
              href={secao.href}
              className="inline-block bg-yellow-300 text-amber-900 font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition"
            >
              Explorar
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 🌟 Imagem de destaque */}
      <motion.img
        src="/robson.png"
        alt="Robson Albuquerque"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-12 w-48 sm:w-64 rounded-full border-4 border-yellow-300 shadow-xl mx-auto"
      />
    </main>
  );
}
