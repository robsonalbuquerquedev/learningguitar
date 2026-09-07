"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

const principaisConteudos = [
    {
        nome: "Acordes",
        href: "/acordes-maiores-e-menores-naturais",
    },
    {
        nome: "Formação de Acordes",
        href: "/formacao-de-acordes",
    },
    {
        nome: "Batidas",
        href: "/batidas-basicas",
    },
    {
        nome: "Campo Harmônico",
        href: "/campo-harmonico",
    },
    {
        nome: "Progressões",
        href: "/progressoes-de-acordes",
    },
    {
        nome: "Escalas",
        href: "/escalas",
    },
];

const redesSociais = [
    {
        nome: "Instagram",
        href: "https://www.instagram.com/robson.albuquerque_cm",
        icon: FaInstagram,
        hover: "hover:text-pink-400",
    },
    {
        nome: "LinkedIn",
        href: "https://www.linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/",
        icon: FaLinkedin,
        hover: "hover:text-yellow-300",
    },
    {
        nome: "GitHub",
        href: "https://github.com/robsonalbuquerquedev",
        icon: FaGithub,
        hover: "hover:text-yellow-300",
    },
    {
        nome: "WhatsApp",
        href: "https://wa.me/5581971168633",
        icon: FaWhatsapp,
        hover: "hover:text-green-400",
    },
];

export default function Footer() {
    return (
        <footer className="mt-12 w-full border-t border-yellow-300/15 bg-gradient-to-b from-amber-950 via-amber-950/95 to-black text-white">
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-16 md:py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Identidade */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <Link
                            href="/"
                            className="inline-block text-2xl font-extrabold text-yellow-300 transition-colors duration-300 hover:text-yellow-200"
                        >
                            LearningGuitar 🎸
                        </Link>

                        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                            Aprender violão pode ser mais simples quando você
                            entende o que está tocando. Aqui você encontra
                            conteúdos práticos para aprender acordes, ritmo,
                            teoria, escalas, harmonia e muito mais.
                        </p>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
                            Do primeiro acorde à evolução musical, aprenda no
                            seu ritmo e construa sua própria jornada no violão.
                        </p>

                        {/* Redes sociais */}
                        <div className="mt-7 flex items-center gap-5">
                            {redesSociais.map((rede) => {
                                const Icon = rede.icon;

                                return (
                                    <motion.a
                                        key={rede.nome}
                                        whileHover={{
                                            scale: 1.15,
                                            y: -2,
                                        }}
                                        href={rede.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={rede.nome}
                                        title={rede.nome}
                                        className={`text-white/70 transition-colors duration-200 ${rede.hover}`}
                                    >
                                        <Icon size={21} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Navegação */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-yellow-300">
                            Navegue
                        </h2>

                        <ul className="space-y-3 text-sm text-white/60">
                            <li>
                                <Link
                                    href="/"
                                    className="transition-colors duration-200 hover:text-yellow-300"
                                >
                                    Início
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#start-here"
                                    className="transition-colors duration-200 hover:text-yellow-300"
                                >
                                    Por onde começar?
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#beginner-path"
                                    className="transition-colors duration-200 hover:text-yellow-300"
                                >
                                    Trilha para iniciantes
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#explore-content"
                                    className="transition-colors duration-200 hover:text-yellow-300"
                                >
                                    Explorar conteúdos
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/loja-musical"
                                    className="transition-colors duration-200 hover:text-yellow-300"
                                >
                                    Loja Musical
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Conteúdos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-yellow-300">
                            Aprenda
                        </h2>

                        <ul className="space-y-3 text-sm text-white/60">
                            {principaisConteudos.map((conteudo) => (
                                <li key={conteudo.href}>
                                    <Link
                                        href={conteudo.href}
                                        className="transition-colors duration-200 hover:text-yellow-300"
                                    >
                                        {conteudo.nome}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* CTA discreto */}
                <div className="mt-14 rounded-2xl border border-yellow-300/10 bg-yellow-300/5 px-6 py-6 text-center">
                    <p className="text-sm leading-relaxed text-white/60">
                        Está começando agora?
                    </p>

                    <Link
                        href="/#start-here"
                        className="mt-2 inline-flex items-center gap-2 font-semibold text-yellow-300 transition-colors duration-200 hover:text-yellow-200"
                    >
                        Encontre seu próximo passo
                        <span>→</span>
                    </Link>
                </div>

                {/* Aviso de afiliados */}
                <div className="mt-10 border-t border-yellow-300/10 pt-8">
                    <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-white/40">
                        O <strong className="text-white/55">LearningGuitar 🎸</strong>{" "}
                        participa de programas de afiliados, incluindo Shopee e
                        Hotmart, podendo receber comissões por compras
                        qualificadas. Isso não altera o preço pago pelo usuário.
                    </p>
                </div>
            </div>

            {/* Rodapé legal */}
            <div className="border-t border-yellow-300/10 bg-black/20">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-xs text-white/40 sm:flex-row sm:text-left md:px-16">
                    <p>
                        &copy; {new Date().getFullYear()}{" "}
                        <strong className="text-white/55">
                            Robson Albuquerque
                        </strong>
                        . Todos os direitos reservados.
                    </p>

                    <nav
                        aria-label="Informações legais"
                        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                    >
                        <Link
                            href="/politica-de-privacidade"
                            className="transition-colors duration-200 hover:text-yellow-300"
                        >
                            Política de Privacidade
                        </Link>

                        <span className="text-yellow-400/25">•</span>

                        <Link
                            href="/termos-de-uso"
                            className="transition-colors duration-200 hover:text-yellow-300"
                        >
                            Termos de Uso
                        </Link>

                        <span className="text-yellow-400/25">•</span>

                        <Link
                            href="/politica-de-afiliados"
                            className="transition-colors duration-200 hover:text-yellow-300"
                        >
                            Política de Afiliados
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}