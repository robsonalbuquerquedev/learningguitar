"use client";

import { motion } from "framer-motion";
import { FaMusic, FaHeadphones, FaGuitar } from "react-icons/fa";

export default function Recomendacoes() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-20 px-6">
            {/* 🎸 Título principal */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-yellow-300 drop-shadow-lg"
            >
                🎶 Recomendações de Cursos e Eventos Musicais
            </motion.h1>

            {/* 📜 Introdução */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-center max-w-3xl mx-auto mb-12 text-amber-100 bg-black/20 p-4 rounded-xl shadow-md"
            >
                Aqui estão cursos e materiais que realmente valem o investimento — todos focados em te ajudar
                a evoluir mais rápido no violão, na teoria e na composição musical.
                <br />Este site pode conter links de afiliado: caso você compre um curso por eles, posso receber
                uma pequena comissão (sem custo extra pra você). 🙌
            </motion.p>

            {/* 🧩 Grid de cursos */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* 🔸 Curso 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-400/20 transition-all duration-300 flex flex-col items-start"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaMusic className="text-yellow-300 text-3xl" />
                        <h2 className="text-2xl font-semibold text-yellow-200">
                            1º Congresso Nacional de Composição e Criatividade Musical
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Tenha acesso VIP a <strong>mais de 30 palestras</strong> com artistas como Felipe Andreoli (Angra),
                        Lucas Silveira (Fresno), Gustavo Bertoni (Scalene), Dawn Michele (Fireflight) e outros grandes nomes
                        da música. Um evento inspirador sobre <em>criatividade musical, composição e carreira</em>.
                    </p>
                    <a
                        href="https://go.hotmart.com/E102798894A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300 shadow-md"
                    >
                        🎧 Acessar o Evento
                    </a>
                </motion.div>

                {/* 🔹 Curso 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-400/20 transition-all duration-300 flex flex-col items-start"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaHeadphones className="text-yellow-300 text-3xl" />
                        <h2 className="text-2xl font-semibold text-yellow-200">
                            Criando Músicas Para Jogos – Do Zero ao Avançado 🎮
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Aprenda a criar trilhas sonoras e músicas imersivas para jogos.
                        Domine mixagem, masterização e o método de <em>composição por tom adaptativo</em> —
                        um novo jeito de pensar e criar melodias. Perfeito para quem quer entrar na indústria musical digital.
                    </p>
                    <a
                        href="https://go.hotmart.com/N102799840H?dp=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300 shadow-md"
                    >
                        🎵 Ver Curso
                    </a>
                </motion.div>

                {/* 🔹 Curso 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-400/20 transition-all duration-300 flex flex-col items-start"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaGuitar className="text-yellow-300 text-3xl" />
                        <h2 className="text-2xl font-semibold text-yellow-200">
                            Comunidade de Música Acordados 🎸
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Toque violão praticando apenas <strong>15 minutos por dia</strong> com o método Acordados,
                        criado por <strong>Patrik Correa</strong>.
                        Aplique a Fórmula A e aprenda a tirar músicas de ouvido, tocar além das cifras
                        e dominar o violão popular de forma simples, rápida e divertida!
                    </p>
                    <a
                        href="https://go.hotmart.com/J102800016L?dp=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300 shadow-md"
                    >
                        🎶 Entrar na Comunidade
                    </a>
                </motion.div>
            </div>

            {/* ⚖️ Aviso legal */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-3xl mx-auto mt-16 text-center text-xs text-amber-200/80 leading-relaxed bg-black/20 p-4 rounded-xl"
            >
                <p>
                    <strong>Aviso legal:</strong> As informações acima são fornecidas apenas com propósito educativo e informativo.
                    O LearningGuitar 🎸 não representa oficialmente a Hotmart nem os produtores dos cursos.
                    Sempre verifique os detalhes e condições antes de adquirir qualquer produto.
                </p>
            </motion.div>
        </main>
    );
}
