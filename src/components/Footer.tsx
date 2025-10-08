"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-amber-900/90 backdrop-blur-md text-white mt-12">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">

                {/* Texto de contato */}
                <div className="text-center sm:text-left">
                    <p className="text-sm sm:text-base text-amber-100">
                        Desenvolvido por <strong>Robson Albuquerque</strong> 🎸 – Entre em contato!
                    </p>
                </div>

                {/* Redes e contato */}
                <div className="flex gap-4">
                    <a
                        href="https://www.instagram.com/robson.albuquerque_cm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-500 transition-colors duration-200"
                        title="Instagram"
                    >
                        <FaInstagram size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors duration-200"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    <a
                        href="https://github.com/robsonalbuquerquedev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors duration-200"
                        title="GitHub"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="https://wa.me/5581971168633"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-400 transition-colors duration-200"
                        title="WhatsApp"
                    >
                        <FaWhatsapp size={20} />
                    </a>
                </div>
            </div>

            {/* Links de política e termos */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs sm:text-sm text-amber-200 bg-amber-800/40 py-3">
                <p>&copy; {new Date().getFullYear()} Robson Albuquerque. Todos os direitos reservados.</p>
                <div className="flex gap-3">
                    <Link
                        href="/politica-de-privacidade"
                        className="hover:text-yellow-300 transition-colors duration-200"
                    >
                        Política de Privacidade
                    </Link>
                    <span>|</span>
                    <Link
                        href="/termos-de-uso"
                        className="hover:text-yellow-300 transition-colors duration-200"
                    >
                        Termos de Uso
                    </Link>
                </div>
            </div>
        </footer>
    );
}
