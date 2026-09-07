"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaBars,
    FaTimes,
    FaChevronDown,
} from "react-icons/fa";
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

const menus: Menu[] = [
    {
        name: "Aprender",
        subcategories: [
            {
                name: "Acordes",
                links: [
                    {
                        name: "Acordes Maiores e Menores",
                        href: "/acordes-maiores-e-menores-naturais",
                    },
                    {
                        name: "Formação de Acordes",
                        href: "/formacao-de-acordes",
                    },
                    {
                        name: "Acordes com Sétimas",
                        href: "/acordes-com-setimas",
                    },
                    {
                        name: "Acordes de Minuto",
                        href: "/acordes-de-minutos",
                    },
                ],
            },
            {
                name: "Teoria e Harmonia",
                links: [
                    {
                        name: "Escalas",
                        href: "/escalas",
                    },
                    {
                        name: "Campo Harmônico",
                        href: "/campo-harmonico",
                    },
                    {
                        name: "Progressões de Acordes",
                        href: "/progressoes-de-acordes",
                    },
                    {
                        name: "Progressões Harmônicas Mais Usadas",
                        href: "/progressoes-harmonicas-mais-usadas",
                    },
                ],
            },
            {
                name: "Ritmo",
                links: [
                    {
                        name: "Batidas Básicas",
                        href: "/batidas-basicas",
                    },
                    {
                        name: "Dedilhados",
                        href: "/dedilhados",
                    },
                ],
            },
            {
                name: "Progressões",
                links: [
                    {
                        name: "I–III–IV–V",
                        href: "/progressoes-I-III-IV-V",
                    },
                    {
                        name: "II–V–I",
                        href: "/progressoes-II-V-I",
                    },
                    {
                        name: "Subdominante Menor",
                        href: "/subdominante-menor",
                    },
                    {
                        name: "Tocar em Todos os Tons",
                        href: "/aprender-tocar-em-todos-os-tons",
                    },
                ],
            },
        ],
    },
    {
        name: "Ferramentas",
        links: [
            {
                name: "Braço do Violão",
                href: "/memorizar-braco-do-violao",
            },
            {
                name: "Notas no Braço",
                href: "/memorizar-todas-as-notas",
            },
        ],
    },
    {
        name: "Solos",
        links: [
            {
                name: "Shapes",
                href: "/shapes-solos",
            },
            {
                name: "Escalas",
                href: "/escalas",
            },
            {
                name: "Memorizar Todas as Notas",
                href: "/memorizar-todas-as-notas",
            },
        ],
    },
    {
        name: "Loja Musical",
        links: [
            {
                name: "Acessar Loja",
                href: "/loja-musical",
            },
            {
                name: "Afinadores",
                href: "/loja-musical/afinadores",
            },
            {
                name: "Capotrastes",
                href: "/loja-musical/capotrastes",
            },
            {
                name: "Palhetas",
                href: "/loja-musical/palhetas",
            },
            {
                name: "Camisetas Musicais",
                href: "/loja-musical/camisetas-musicais",
            },
        ],
    },
    {
        name: "Mais",
        links: [
            {
                name: "Sobre",
                href: "/sobre",
            },
            {
                name: "Feedback",
                href: "/feedback",
            },
            {
                name: "Recomendações",
                href: "/recomendacoes",
            },
        ],
    },
];

export default function Header() {
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    const isActive = (href: string) => {
        if (href.startsWith("/#")) {
            return pathname === "/";
        }

        return pathname === href;
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-yellow-300/15 bg-gradient-to-r from-amber-950/95 via-amber-900/95 to-amber-950/95 shadow-lg backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-extrabold text-yellow-300 transition-colors duration-300 hover:text-yellow-200 sm:gap-3 sm:text-2xl"
                    onClick={closeMobileMenu}
                >
                    <motion.div
                        initial={{
                            scale: 0.9,
                            rotate: -5,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
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

                {/* Navegação desktop */}
                <nav className="hidden items-center gap-6 text-sm font-semibold text-white md:flex">
                    {/* Início */}
                    <Link
                        href="/"
                        className={`relative py-2 transition-colors duration-200 hover:text-yellow-300 ${
                            pathname === "/"
                                ? "text-yellow-300"
                                : "text-white"
                        }`}
                    >
                        Início

                        {pathname === "/" && (
                            <motion.span
                                layoutId="header-underline"
                                className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-yellow-300"
                            />
                        )}
                    </Link>

                    {/* Começar */}
                    <Link
                        href="/#start-here"
                        className="py-2 transition-colors duration-200 hover:text-yellow-300"
                    >
                        Começar
                    </Link>

                    {/* Explorar */}
                    <Link
                        href="/#explore-content"
                        className="py-2 transition-colors duration-200 hover:text-yellow-300"
                    >
                        Explorar
                    </Link>

                    {/* Menus */}
                    {menus.map((menu) => (
                        <div
                            key={menu.name}
                            className="group relative"
                            onMouseEnter={() =>
                                setDropdownOpen(menu.name)
                            }
                            onMouseLeave={() =>
                                setDropdownOpen(null)
                            }
                        >
                            <button
                                type="button"
                                className="flex items-center gap-1 py-2 transition-colors duration-200 hover:text-yellow-300"
                                aria-haspopup="true"
                                aria-expanded={
                                    dropdownOpen === menu.name
                                }
                            >
                                {menu.name}

                                <FaChevronDown
                                    className={`mt-[2px] text-[10px] transition-transform duration-200 ${
                                        dropdownOpen === menu.name
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen === menu.name && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -8,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -8,
                                        }}
                                        transition={{
                                            duration: 0.18,
                                        }}
                                        className={`absolute left-0 top-full mt-2 rounded-2xl border border-yellow-300/15 bg-amber-950/98 p-4 shadow-2xl backdrop-blur-md ${
                                            menu.subcategories
                                                ? "grid w-[620px] grid-cols-2 gap-x-6 gap-y-5"
                                                : menu.links &&
                                                    menu.links.length > 4
                                                  ? "grid w-[300px] grid-cols-2 gap-2"
                                                  : "flex w-[220px] flex-col gap-1"
                                        }`}
                                    >
                                        {menu.subcategories
                                            ? menu.subcategories.map(
                                                  (subcategory) => (
                                                      <div
                                                          key={
                                                              subcategory.name
                                                          }
                                                      >
                                                          <p className="mb-2 px-3 text-xs font-bold uppercase tracking-[0.12em] text-yellow-300">
                                                              {
                                                                  subcategory.name
                                                              }
                                                          </p>

                                                          <div className="flex flex-col gap-1">
                                                              {subcategory.links.map(
                                                                  (
                                                                      link
                                                                  ) => (
                                                                      <Link
                                                                          key={
                                                                              link.href
                                                                          }
                                                                          href={
                                                                              link.href
                                                                          }
                                                                          className={`rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                                                                              isActive(
                                                                                  link.href
                                                                              )
                                                                                  ? "bg-yellow-300/10 text-yellow-300"
                                                                                  : "text-white/80 hover:bg-yellow-300/10 hover:text-yellow-200"
                                                                          }`}
                                                                      >
                                                                          {
                                                                              link.name
                                                                          }
                                                                      </Link>
                                                                  )
                                                              )}
                                                          </div>
                                                      </div>
                                                  )
                                              )
                                            : menu.links?.map(
                                                  (link) => (
                                                      <Link
                                                          key={
                                                              link.href
                                                          }
                                                          href={
                                                              link.href
                                                          }
                                                          className={`rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                                                              isActive(
                                                                  link.href
                                                              )
                                                                  ? "bg-yellow-300/10 text-yellow-300"
                                                                  : "text-white/80 hover:bg-yellow-300/10 hover:text-yellow-200"
                                                          }`}
                                                      >
                                                          {
                                                              link.name
                                                          }
                                                      </Link>
                                                  )
                                              )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* Menu mobile */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 text-xl text-white transition-colors duration-200 hover:bg-yellow-300/10 hover:text-yellow-300 focus:outline-none md:hidden"
                    aria-label={
                        menuOpen
                            ? "Fechar menu"
                            : "Abrir menu"
                    }
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Menu mobile expandido */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="overflow-hidden border-t border-yellow-300/10 bg-amber-950/98 backdrop-blur-md md:hidden"
                    >
                        <div className="mx-auto max-w-7xl px-5 pb-6 pt-3">
                            {/* Links principais */}
                            <div className="mb-4 border-b border-yellow-300/10 pb-4">
                                <Link
                                    href="/"
                                    onClick={closeMobileMenu}
                                    className={`block rounded-lg px-3 py-2.5 text-base font-bold transition-colors ${
                                        pathname === "/"
                                            ? "bg-yellow-300/10 text-yellow-300"
                                            : "text-white hover:bg-yellow-300/5 hover:text-yellow-300"
                                    }`}
                                >
                                    Início
                                </Link>

                                <Link
                                    href="/#start-here"
                                    onClick={closeMobileMenu}
                                    className="block rounded-lg px-3 py-2.5 text-base font-bold text-white transition-colors hover:bg-yellow-300/5 hover:text-yellow-300"
                                >
                                    Começar
                                </Link>

                                <Link
                                    href="/#explore-content"
                                    onClick={closeMobileMenu}
                                    className="block rounded-lg px-3 py-2.5 text-base font-bold text-white transition-colors hover:bg-yellow-300/5 hover:text-yellow-300"
                                >
                                    Explorar
                                </Link>
                            </div>

                            {/* Menus */}
                            {menus.map((menu) => (
                                <details
                                    key={menu.name}
                                    className="group border-b border-yellow-300/10 last:border-b-0"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-base font-bold text-yellow-300 transition-colors hover:text-yellow-200">
                                        {menu.name}

                                        <FaChevronDown className="text-xs transition-transform duration-200 group-open:rotate-180" />
                                    </summary>

                                    <div className="pb-3 pl-3">
                                        {menu.subcategories
                                            ? menu.subcategories.map(
                                                  (subcategory) => (
                                                      <div
                                                          key={
                                                              subcategory.name
                                                          }
                                                          className="mb-4 last:mb-0"
                                                      >
                                                          <p className="mb-1 px-3 text-xs font-bold uppercase tracking-[0.1em] text-yellow-400/70">
                                                              {
                                                                  subcategory.name
                                                              }
                                                          </p>

                                                          {subcategory.links.map(
                                                              (
                                                                  link
                                                              ) => (
                                                                  <Link
                                                                      key={
                                                                          link.href
                                                                      }
                                                                      href={
                                                                          link.href
                                                                      }
                                                                      onClick={
                                                                          closeMobileMenu
                                                                      }
                                                                      className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                                                                          isActive(
                                                                              link.href
                                                                          )
                                                                              ? "text-yellow-300"
                                                                              : "text-white/75 hover:bg-yellow-300/5 hover:text-yellow-200"
                                                                      }`}
                                                                  >
                                                                      {
                                                                          link.name
                                                                      }
                                                                  </Link>
                                                              )
                                                          )}
                                                      </div>
                                                  )
                                              )
                                            : menu.links?.map(
                                                  (link) => (
                                                      <Link
                                                          key={
                                                              link.href
                                                          }
                                                          href={
                                                              link.href
                                                          }
                                                          onClick={
                                                              closeMobileMenu
                                                          }
                                                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                                                              isActive(
                                                                  link.href
                                                              )
                                                                  ? "text-yellow-300"
                                                                  : "text-white/75 hover:bg-yellow-300/5 hover:text-yellow-200"
                                                          }`}
                                                      >
                                                          {
                                                              link.name
                                                          }
                                                      </Link>
                                                  )
                                              )}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}