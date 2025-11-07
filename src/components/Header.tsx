"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

interface LinkItem {
    name: string;
    href: string;
}

interface Subcategory {
    name: string;
    links: LinkItem[];
}

interface Menu {
    name: string;
    subcategories?: Subcategory[];
    links?: LinkItem[];
}

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    // ✅ Menus organizados e com nomes mais curtos e intuitivos
    const menus = [
        {
            name: "Teoria",
            subcategories: [
                {
                    name: "Fundamentos",
                    links: [
                        { name: "Acordes Maiores e Menores", href: "/acordes-maiores-e-menores-naturais" },
                        { name: "Formação de Acordes", href: "/formacao-de-acordes" },
                        { name: "Escalas", href: "/escalas" },
                        { name: "Campo Harmônico", href: "/campo-harmonico" },
                    ],
                },
                {
                    name: "Acordes Avançados",
                    links: [
                        { name: "Com Sétimas", href: "/acordes-com-setimas" },
                        { name: "De Minuto", href: "/acordes-de-minutos" },
                    ],
                },
                {
                    name: "Progressões",
                    links: [
                        { name: "Introdução às Progressões", href: "/progressoes-de-acordes" },
                        { name: "Mais Usadas", href: "/progressoes-harmonicas-mais-usadas" },
                        { name: "Subdominante Menor", href: "/subdominante-menor" },
                        { name: "I–III–IV–V", href: "/progressoes-I-III-IV-V" },
                        { name: "II–V–I", href: "/progressoes-II-V-I" },
                    ],
                },
                {
                    name: "Aplicações",
                    links: [
                        { name: "Tocar em Todos os Tons", href: "/aprender-tocar-em-todos-os-tons" },
                        { name: "Batidas", href: "/batidas-basicas" },
                        { name: "Dedilhados", href: "/dedilhados" },
                    ],
                },
            ],
        },
        {
            name: "Ferramentas",
            links: [
                { name: "Braço do Violão", href: "/memorizar-braco-do-violao" },
                { name: "Notas no Braço", href: "/memorizar-todas-as-notas" },
            ],
        },
        {
            name: "Solos",
            links: [
                { name: "Shapes", href: "/shapes-solos" },
            ],
        },
        {
            name: "Loja Musical",
            links: [
                { name: "Acessar Loja", href: "/loja-musical" }, // ✅ link principal
                { name: "Afinadores", href: "/loja-musical/afinadores" },
                { name: "Capotrastes", href: "/loja-musical/capotrastes" },
                { name: "Palhetas", href: "/loja-musical/palhetas" },
                { name: "Camisetas Musicais", href: "/loja-musical/camisetas-musicais" },
            ],
        },
        {
            name: "Outros",
            links: [
                { name: "Sobre", href: "/sobre" },
                { name: "Feedback", href: "/feedback" },
                { name: "Recomendações", href: "/recomendacoes" },
            ],
        },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-amber-900/95 via-yellow-900/90 to-amber-800/95 backdrop-blur-sm border-b border-yellow-400/20">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">

                {/* 🎸 Logo + Título */}
                <Link
                    href="/"
                    className="flex items-center gap-2 sm:gap-3 text-yellow-300 font-extrabold text-xl sm:text-2xl hover:text-yellow-200 transition-colors"
                >
                    <motion.div
                        initial={{ scale: 0.9, rotate: -5, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo LearningGuitar"
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-yellow-400 shadow-md"
                            priority
                        />
                    </motion.div>
                    <span className="hidden xs:inline bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                        LearningGuitar 🎸
                    </span>
                </Link>

                {/* 🌟 Menu desktop */}
                <nav className="hidden md:flex items-center space-x-6 text-white font-semibold relative">
                    <Link
                        href="/"
                        className={`relative hover:text-yellow-300 transition-colors duration-200 ${pathname === "/" ? "text-yellow-300" : ""
                            }`}
                    >
                        Home
                        {pathname === "/" && (
                            <motion.span
                                layoutId="underline"
                                className="absolute left-0 -bottom-1 w-full h-[3px] bg-yellow-300 rounded"
                            />
                        )}
                    </Link>

                    {/* Dropdowns */}
                    {menus.map((menu: Menu) => (
                        <div
                            key={menu.name}
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(menu.name)}
                            onMouseLeave={() => setDropdownOpen(null)}
                        >
                            <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors cursor-pointer">
                                {menu.name}
                                <FaChevronDown className="text-xs mt-[2px] transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen === menu.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className={`absolute left-0 mt-2 bg-amber-950/95 backdrop-blur-md shadow-xl rounded-xl p-4 border border-yellow-400/10
            ${menu.subcategories
                                                ? "grid grid-cols-2 gap-4 w-[460px]"
                                                : menu.links && menu.links.length > 6
                                                    ? "grid grid-cols-2 gap-2 w-[420px]"
                                                    : "flex flex-col"
                                            }`}
                                    >
                                        {menu.subcategories
                                            ? menu.subcategories.map((sub: Subcategory) => (
                                                <div key={sub.name}>
                                                    <p className="font-semibold text-yellow-300 mb-1">{sub.name}</p>
                                                    {sub.links.map((link: LinkItem) => (
                                                        <Link
                                                            key={link.href}
                                                            href={link.href}
                                                            className={`block px-3 py-1.5 rounded-md whitespace-nowrap hover:bg-yellow-800/30 transition ${pathname === link.href ? "text-yellow-300" : "text-white"
                                                                }`}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))
                                            : menu.links?.map((link: LinkItem) => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className={`block px-3 py-2 rounded-md hover:bg-yellow-800/30 transition ${pathname === link.href ? "text-yellow-300" : "text-white"
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

                {/* 📱 Botão do menu mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-2xl focus:outline-none hover:text-yellow-300 transition"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* 📱 Menu mobile expandido com acordeões */}
            {menuOpen && (
                <nav className="sm:hidden bg-amber-900/95 backdrop-blur-md w-full px-4 pb-4 rounded-b-2xl border-t border-yellow-400/20">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className={`block py-2 text-lg font-bold text-white hover:text-yellow-300 ${pathname === "/" ? "underline text-yellow-200" : ""
                            }`}
                    >
                        Home
                    </Link>

                    {menus.map((menu) => (
                        <div key={menu.name} className="mt-2">
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer py-2 text-yellow-300 font-bold hover:text-yellow-200">
                                    {menu.name}
                                    <span className="transition-transform group-open:rotate-90">▶</span>
                                </summary>

                                {/* Subcategorias (se existirem) */}
                                {menu.subcategories ? (
                                    menu.subcategories.map((sub) => (
                                        <details key={sub.name} className="ml-3 group mt-1">
                                            <summary className="cursor-pointer text-yellow-200 font-semibold text-sm hover:text-yellow-100 flex justify-between">
                                                {sub.name}
                                                <span className="transition-transform group-open:rotate-90">▶</span>
                                            </summary>
                                            <div className="ml-4 mt-1">
                                                {sub.links.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        onClick={() => setMenuOpen(false)}
                                                        className={`block py-1 text-sm text-white hover:text-yellow-300 ${pathname === link.href ? "underline text-yellow-200" : ""
                                                            }`}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </details>
                                    ))
                                ) : (
                                    menu.links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`block py-1 pl-3 text-sm text-white hover:text-yellow-300 ${pathname === link.href ? "underline text-yellow-200" : ""
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))
                                )}
                            </details>
                        </div>
                    ))}
                </nav>
            )}
        </header>
    );
}
