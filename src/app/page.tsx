"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white p-6 sm:p-12">

      {/* 🎸 Título chamativo */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold text-center drop-shadow-lg mb-6"
      >
        LearningGuitar 🎸
      </motion.h1>

      {/* ✨ Subtítulo / mensagem principal */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center max-w-2xl text-lg sm:text-xl mb-8 bg-black/40 p-4 rounded-xl shadow-md"
      >
        Aprenda violão de forma interativa com exercícios, truques práticos e dicas para memorizar acordes, notas e escalas. Ideal para iniciantes e apaixonados por música!
      </motion.p>

      {/* 🎯 Botões de ação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/escalas"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-semibold rounded-lg shadow-lg transition-all duration-200 text-center"
        >
          Explorar Escalas
        </Link>

        <Link
          href="/sobre"
          className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-yellow-200 font-semibold rounded-lg shadow-lg transition-all duration-200 text-center"
        >
          Sobre o Desenvolvedor
        </Link>
      </motion.div>

      {/* 🌟 Imagem de destaque */}
      <motion.img
        src="/robson.png"
        alt="Robson Albuquerque"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-12 w-48 sm:w-64 rounded-full border-4 border-yellow-300 shadow-xl"
      />
    </main>
  );
}
