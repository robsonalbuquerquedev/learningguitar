"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
    FaArrowLeft,
    FaBars,
    FaChevronRight,
    FaTimes,
} from "react-icons/fa";

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
                name: "Fundamentos dos acordes",
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
                        name: "Acordes Diminutos",
                        href: "/acordes-diminutos",
                    },
                ],
            },
            {
                name: "Harmonia",
                links: [
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
                    {
                        name: "II–V–I",
                        href: "/progressoes-II-V-I",
                    },
                    {
                        name: "I–III–IV–V",
                        href: "/progressoes-I-III-IV-V",
                    },
                    {
                        name: "Subdominante Menor",
                        href: "/subdominante-menor",
                    },
                ],
            },
            {
                name: "Notas e braço",
                links: [
                    {
                        name: "Escalas",
                        href: "/escalas",
                    },
                    {
                        name: "Memorizar Todas as Notas",
                        href: "/memorizar-todas-as-notas",
                    },
                    {
                        name: "Memorizar o Braço do Violão",
                        href: "/memorizar-braco-do-violao",
                    },
                    {
                        name: "Tocar em Todos os Tons",
                        href: "/aprender-tocar-em-todos-os-tons",
                    },
                ],
            },
            {
                name: "Técnica",
                links: [
                    {
                        name: "Batidas Básicas",
                        href: "/batidas-basicas",
                    },
                    {
                        name: "Dedilhados",
                        href: "/dedilhados",
                    },
                    {
                        name: "Shapes de Solos",
                        href: "/shapes-solos",
                    },
                ],
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
    const [activeMenu, setActiveMenu] = useState<Menu | null>(
        null
    );
    const [activeSubcategory, setActiveSubcategory] =
        useState<Subcategory | null>(null);

    const isActive = (href: string) => {
        if (href.startsWith("/#")) {
            return pathname === "/";
        }

        return pathname === href;
    };

    const openMenu = () => {
        setMenuOpen(true);
        setActiveMenu(null);
        setActiveSubcategory(null);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setActiveMenu(null);
        setActiveSubcategory(null);
    };

    const openMenuLevel = (menu: Menu) => {
        setActiveMenu(menu);
        setActiveSubcategory(null);
    };

    const openSubcategoryLevel = (
        subcategory: Subcategory
    ) => {
        setActiveSubcategory(subcategory);
    };

    const goBack = () => {
        if (activeSubcategory) {
            setActiveSubcategory(null);
            return;
        }

        if (activeMenu) {
            setActiveMenu(null);
        }
    };

    useEffect(() => {
        if (!menuOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [menuOpen]);

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-yellow-300/15 bg-gradient-to-r from-amber-950/95 via-amber-900/95 to-amber-950/95 shadow-lg backdrop-blur-md">
            {/* =====================================================
                HEADER
            ====================================================== */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-xl font-extrabold text-yellow-300 transition-colors duration-300 hover:text-yellow-200 sm:gap-3 sm:text-2xl"
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

                {/* Botão de navegação */}
                <button
                    type="button"
                    onClick={
                        menuOpen ? closeMenu : openMenu
                    }
                    className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-xl text-white transition-colors duration-200 hover:bg-yellow-300/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/60"
                    aria-label={
                        menuOpen
                            ? "Fechar menu"
                            : "Abrir menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* =====================================================
                NAVEGAÇÃO
            ====================================================== */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.button
                            type="button"
                            aria-label="Fechar menu"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            onClick={closeMenu}
                            className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-[2px]"
                        />

                        {/* =================================================
                            PAINEL DE NAVEGAÇÃO
                        ================================================== */}
                        <motion.aside
                            id="main-navigation"
                            initial={{
                                x: "100%",
                                opacity: 0.8,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            exit={{
                                x: "100%",
                                opacity: 0.8,
                            }}
                            transition={{
                                duration: 0.28,
                                ease: "easeOut",
                            }}
                            className="fixed right-0 top-0 z-50 flex h-dvh w-[min(90vw,460px)] flex-col border-l border-yellow-300/15 bg-gradient-to-b from-amber-950 via-amber-950 to-stone-950 shadow-2xl"
                        >
                            {/* =================================================
                                PAINEL HEADER
                            ================================================== */}
                            <div className="flex min-h-[73px] items-center justify-between border-b border-yellow-300/10 px-5 sm:px-6">
                                <div className="flex items-center gap-3">
                                    {(activeMenu ||
                                        activeSubcategory) && (
                                        <button
                                            type="button"
                                            onClick={goBack}
                                            className="flex min-h-10 min-w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-yellow-300/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
                                            aria-label="Voltar"
                                        >
                                            <FaArrowLeft />
                                        </button>
                                    )}

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-yellow-400/70">
                                            {activeSubcategory
                                                ? activeSubcategory.name
                                                : activeMenu
                                                  ? activeMenu.name
                                                  : "Navegação"}
                                        </p>

                                        <h2 className="mt-0.5 text-lg font-bold text-white">
                                            {activeSubcategory
                                                ? "Conteúdos"
                                                : activeMenu
                                                  ? "Escolha uma opção"
                                                  : "LearningGuitar 🎸"}
                                        </h2>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={closeMenu}
                                    className="flex min-h-10 min-w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-yellow-300/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
                                    aria-label="Fechar menu"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* =================================================
                                CONTEÚDO DO PAINEL
                            ================================================== */}
                            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5">
                                {/* =================================================
                                    NÍVEL 1 — MENU PRINCIPAL
                                ================================================== */}
                                {!activeMenu && (
                                    <motion.div
                                        key="main-level"
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                    >
                                        {/* Links principais */}
                                        <div className="mb-6 space-y-1 border-b border-yellow-300/10 pb-5">
                                            <Link
                                                href="/"
                                                onClick={
                                                    closeMenu
                                                }
                                                className={`flex min-h-12 items-center rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                                                    pathname ===
                                                    "/"
                                                        ? "bg-yellow-300/10 text-yellow-300"
                                                        : "text-white hover:bg-yellow-300/5 hover:text-yellow-300"
                                                }`}
                                            >
                                                Início
                                            </Link>

                                            <Link
                                                href="/#start-here"
                                                onClick={
                                                    closeMenu
                                                }
                                                className="flex min-h-12 items-center rounded-xl px-4 py-3 text-base font-bold text-white transition-colors hover:bg-yellow-300/5 hover:text-yellow-300"
                                            >
                                                Começar
                                            </Link>

                                            <Link
                                                href="/#explore-content"
                                                onClick={
                                                    closeMenu
                                                }
                                                className="flex min-h-12 items-center rounded-xl px-4 py-3 text-base font-bold text-white transition-colors hover:bg-yellow-300/5 hover:text-yellow-300"
                                            >
                                                Explorar
                                            </Link>
                                        </div>

                                        {/* Categorias */}
                                        <div className="space-y-2">
                                            {menus.map(
                                                (menu) => (
                                                    <button
                                                        key={
                                                            menu.name
                                                        }
                                                        type="button"
                                                        onClick={() =>
                                                            openMenuLevel(
                                                                menu
                                                            )
                                                        }
                                                        className="group flex min-h-14 w-full items-center justify-between rounded-xl border border-yellow-300/10 bg-white/[0.03] px-4 py-3 text-left transition-all duration-200 hover:border-yellow-300/20 hover:bg-yellow-300/10 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
                                                    >
                                                        <span className="text-base font-bold text-yellow-300 transition-colors group-hover:text-yellow-200">
                                                            {
                                                                menu.name
                                                            }
                                                        </span>

                                                        <FaChevronRight className="text-xs text-yellow-400/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-yellow-300" />
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {/* =================================================
                                    NÍVEL 2 — CATEGORIA
                                ================================================== */}
                                {activeMenu &&
                                    !activeSubcategory && (
                                        <motion.div
                                            key={`menu-${activeMenu.name}`}
                                            initial={{
                                                opacity: 0,
                                                x: 15,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                x: 15,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                        >
                                            {/* Subcategorias */}
                                            {activeMenu.subcategories ? (
                                                <div className="space-y-2">
                                                    {activeMenu.subcategories.map(
                                                        (
                                                            subcategory
                                                        ) => (
                                                            <button
                                                                key={
                                                                    subcategory.name
                                                                }
                                                                type="button"
                                                                onClick={() =>
                                                                    openSubcategoryLevel(
                                                                        subcategory
                                                                    )
                                                                }
                                                                className="group flex min-h-16 w-full items-center justify-between rounded-xl border border-yellow-300/10 bg-white/[0.03] px-4 py-3 text-left transition-all duration-200 hover:border-yellow-300/20 hover:bg-yellow-300/10 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
                                                            >
                                                                <div>
                                                                    <span className="block text-sm font-bold text-white transition-colors group-hover:text-yellow-200">
                                                                        {
                                                                            subcategory.name
                                                                        }
                                                                    </span>

                                                                    <span className="mt-1 block text-xs text-white/40">
                                                                        {
                                                                            subcategory
                                                                                .links
                                                                                .length
                                                                        }{" "}
                                                                        conteúdos
                                                                    </span>
                                                                </div>

                                                                <FaChevronRight className="text-xs text-yellow-400/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-yellow-300" />
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            ) : (
                                                /* Links diretos */
                                                <div className="space-y-1">
                                                    {activeMenu.links?.map(
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
                                                                    closeMenu
                                                                }
                                                                className={`flex min-h-12 items-center rounded-xl px-4 py-3 text-sm transition-colors ${
                                                                    isActive(
                                                                        link.href
                                                                    )
                                                                        ? "bg-yellow-300/10 font-semibold text-yellow-300"
                                                                        : "text-white/80 hover:bg-yellow-300/5 hover:text-yellow-200"
                                                                }`}
                                                            >
                                                                {
                                                                    link.name
                                                                }
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </motion.div>
                                    )}

                                {/* =================================================
                                    NÍVEL 3 — SUBCATEGORIA
                                ================================================== */}
                                {activeSubcategory && (
                                    <motion.div
                                        key={`subcategory-${activeSubcategory.name}`}
                                        initial={{
                                            opacity: 0,
                                            x: 15,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: 15,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="space-y-1"
                                    >
                                        {activeSubcategory.links.map(
                                            (link) => (
                                                <Link
                                                    key={
                                                        link.href
                                                    }
                                                    href={
                                                        link.href
                                                    }
                                                    onClick={
                                                        closeMenu
                                                    }
                                                    className={`flex min-h-12 items-center rounded-xl px-4 py-3 text-sm transition-colors ${
                                                        isActive(
                                                            link.href
                                                        )
                                                            ? "bg-yellow-300/10 font-semibold text-yellow-300"
                                                            : "text-white/80 hover:bg-yellow-300/5 hover:text-yellow-200"
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
                            </nav>

                            {/* =================================================
                                RODAPÉ DO PAINEL
                            ================================================== */}
                            <div className="border-t border-yellow-300/10 px-5 py-4">
                                <p className="text-center text-xs text-white/35">
                                    Aprenda. Pratique. Toque. 🎸
                                </p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}