"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    // ✅ Menus organizados em categorias
    const menus = [
        {
            name: "Teoria",
            links: [
                { name: "Acordes Maiores e Menores Naturais", href: "/acordes-maiores-e-menores-naturais" },
                { name: "Escalas", href: "/escalas" },
                { name: "Formação de Acordes", href: "/formacao-de-acordes" },
                { name: "Acordes com Sétimas", href: "/acordes-com-setimas" },
                { name: "Acordes de Minutos e Meio de Minuto", href: "/acordes-de-minutos" },
                { name: "Campo Harmônico", href: "/campo-harmonico" },
                { name: "Progressões de Acordes", href: "/progressoes-de-acordes" },
                { name: "Progressões Harmônicas Mais Usadas", href: "/progressoes-harmonicas-mais-usadas" },
                { name: "Progressões I–III–IV–V", href: "/progressoes-I-III-IV-V" },
                { name: "Progressões II–V–I", href: "/progressoes-II-V-I" },
                { name: "Aprender a Tocar em Todos os Tons", href: "/aprender-tocar-em-todos-os-tons" },
                { name: "Batidas Básicas", href: "/batidas-basicas" },
            ],
        },
        {
            name: "Ferramentas",
            links: [
                { name: "Memorizar Braço", href: "/memorizar-braco-do-violao" },
                { name: "Memorizar Todas as Notas", href: "/memorizar-todas-as-notas" },
            ],
        },
        {
            name: "Prática de Solos",
            links: [
                { name: "Shapes para Solos", href: "/shapes-solos" },
            ],
        },
        {
            name: "Outros",
            links: [
                { name: "Sobre", href: "/sobre" },
                { name: "Feedback", href: "/feedback" },
            ],
        },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 backdrop-blur-md shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:p-6">
                {/* Logo / título */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-yellow-300 flex items-center gap-2"
                >
                    <Image
                        src="/robson.png"
                        alt="Robson Albuquerque"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    LearningGuitar 🎸
                </Link>

                {/* Menu desktop */}
                <nav className="hidden sm:flex items-center space-x-6 text-white font-semibold relative">
                    <Link
                        href="/"
                        className={`relative hover:text-yellow-300 transition-colors duration-200 ${pathname === "/" ? "text-yellow-300" : ""
                            }`}
                    >
                        Home
                        {pathname === "/" && (
                            <motion.span
                                layoutId="underline"
                                className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-300 rounded"
                            />
                        )}
                    </Link>

                    {/* Dropdowns */}
                    {menus.map((menu) => (
                        <div
                            key={menu.name}
                            className="relative"
                            onMouseEnter={() => setDropdownOpen(menu.name)}
                            onMouseLeave={() => setDropdownOpen(null)}
                        >
                            <button className="flex items-center gap-1 hover:text-yellow-300 cursor-pointer">
                                {menu.name}
                                <FaChevronDown className="text-sm mt-[2px]" />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen === menu.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-2 bg-amber-900/95 backdrop-blur-md shadow-lg rounded-lg overflow-hidden"
                                    >
                                        {menu.links.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`block px-4 py-2 whitespace-nowrap hover:bg-yellow-800/30 ${pathname === link.href
                                                    ? "text-yellow-300"
                                                    : "text-white"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* Botão do menu mobile */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-2xl focus:outline-none"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Menu mobile expandido */}
            {menuOpen && (
                <nav className="sm:hidden bg-amber-900/95 backdrop-blur-md w-full px-4 pb-4">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className={`block py-2 text-white font-semibold hover:text-yellow-300 ${pathname === "/" ? "underline" : ""
                            }`}
                    >
                        Home
                    </Link>
                    {menus.map((menu) => (
                        <div key={menu.name}>
                            <p className="mt-2 font-bold text-yellow-400">{menu.name}</p>
                            {menu.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block py-1 pl-3 text-white hover:text-yellow-300 ${pathname === link.href
                                        ? "underline text-yellow-200"
                                        : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </nav>
            )}
        </header>
    );
}
