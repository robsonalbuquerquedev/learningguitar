"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full mt-12 bg-gradient-to-b from-amber-900/95 via-amber-950/90 to-amber-900/95 text-white border-t border-yellow-400/10 shadow-inner">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-8"
            >
                {/* 🎸 Texto e assinatura */}
                <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-yellow-300 drop-shadow-md">
                        LearningGuitar 🎸
                    </h3>
                    <p className="text-sm sm:text-base text-amber-100">
                        Desenvolvido com ❤️ por <strong>Robson Albuquerque</strong> – Compartilhando conhecimento e música.
                    </p>
                </div>

                {/* 🌐 Redes sociais */}
                <div className="flex gap-5">
                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://www.instagram.com/robson.albuquerque_cm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-400 transition-colors duration-200"
                        title="Instagram"
                    >
                        <FaInstagram size={22} />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://www.linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors duration-200"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={22} />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://github.com/robsonalbuquerquedev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors duration-200"
                        title="GitHub"
                    >
                        <FaGithub size={22} />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://wa.me/5581971168633"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-400 transition-colors duration-200"
                        title="WhatsApp"
                    >
                        <FaWhatsapp size={22} />
                    </motion.a>
                </div>
            </motion.div>

            <p className="text-center text-amber-100 text-xs mt-6">
                O <strong>LearningGuitar 🎸</strong> participa de programas de afiliados Shopee e Hotmart, podendo receber comissões por compras qualificadas.
            </p>


            {/* 📜 Linha divisória e links secundários */}
            <div className="border-t border-yellow-400/20 bg-amber-950/70 text-amber-200 text-xs sm:text-sm py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
                    <p>
                        &copy; {new Date().getFullYear()} <strong>Robson Albuquerque</strong>. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-3">
                        <Link
                            href="/politica-de-privacidade"
                            className="hover:text-yellow-300 transition-colors duration-200"
                        >
                            Política de Privacidade
                        </Link>
                        <span className="text-yellow-400/40">|</span>
                        <Link
                            href="/termos-de-uso"
                            className="hover:text-yellow-300 transition-colors duration-200"
                        >
                            Termos de Uso
                        </Link>
                        <span className="text-yellow-400/40">|</span>
                        <Link
                            href="/politica-de-afiliados"
                            className="hover:text-yellow-300 transition-colors duration-200"
                        >
                            Política de Afiliados
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
