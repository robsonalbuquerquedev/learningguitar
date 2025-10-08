"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // Rotas do menu (sem "Projetos")
    const links = [
        { name: "Home", href: "/" },
        { name: "Escalas", href: "/escalas" },
        { name: "Memorizar Braço", href: "/memorizar-braco-do-violao" },
        { name: "Sobre", href: "/sobre" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-amber-900/90 backdrop-blur-md shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:p-6">
                {/* Logo / título */}
                <Link href="/" className="text-2xl font-bold text-yellow-300 flex items-center gap-2">
                    <img src="/robson.png" alt="Robson Albuquerque" className="w-8 h-8 rounded-full" />
                    LearningGuitar 🎸
                </Link>

                {/* Menu desktop */}
                <nav className="hidden sm:flex space-x-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="relative text-white font-semibold transition-colors duration-200 hover:text-yellow-300">
                            {link.name}
                            {pathname === link.href && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-300 rounded"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Menu mobile */}
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
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`block py-2 text-white font-semibold transition-colors duration-200 hover:text-yellow-300 ${pathname === link.href ? "underline text-yellow-200" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
