"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldCheck,
    BarChart3,
    Cog,
    Target,
    X,
    Cookie,
} from "lucide-react";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [cookies, setCookies] = useState({
        necessary: true,
        analytics: false,
        functional: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem("lg_cookie_consent");
        if (!consent) setShowBanner(true);
    }, []);

    const acceptAll = () => {
        const all = {
            necessary: true,
            analytics: true,
            functional: true,
            marketing: true,
        };
        localStorage.setItem("lg_cookie_consent", JSON.stringify(all));
        setShowBanner(false);
    };

    const savePreferences = () => {
        localStorage.setItem("lg_cookie_consent", JSON.stringify(cookies));
        setShowModal(false);
        setShowBanner(false);
    };

    const toggleCookie = (key: keyof typeof cookies) => {
        if (key !== "necessary") {
            setCookies({ ...cookies, [key]: !cookies[key] });
        }
    };

    return (
        <>
            {/* 🔹 Banner de consentimento */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-800 text-white p-5 shadow-lg z-50 border-t border-yellow-400/20 flex flex-col sm:flex-row justify-between items-center gap-4"
                    >
                        <div className="flex items-center gap-3 text-sm max-w-2xl">
                            <Cookie className="text-yellow-300 w-5 h-5" />
                            <p>
                                Usamos cookies para melhorar sua experiência e entender como
                                você utiliza o site. Escolha suas preferências ou aceite todos.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-yellow-400 text-amber-900 font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition cursor-pointer"
                            >
                                Configurações
                            </button>
                            <button
                                onClick={acceptAll}
                                className="bg-amber-700 border border-yellow-300 text-yellow-100 px-4 py-2 rounded-lg hover:bg-amber-800 transition cursor-pointer"
                            >
                                Aceitar Todos
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 🔒 Modal de configurações */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950 text-white p-6 sm:p-8 rounded-2xl max-w-lg w-full shadow-2xl border border-yellow-400/20"
                    >
                        {/* ❌ Botão de fechar */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-200 transition cursor-pointer"
                        >
                            <X size={22} />
                        </button>

                        <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
                            <ShieldCheck className="text-yellow-300" /> Visão Geral de Privacidade
                        </h2>

                        <p className="text-sm mb-6 text-amber-100 leading-relaxed">
                            Este site utiliza cookies para garantir o funcionamento básico e
                            melhorar sua experiência. Você pode ativar ou desativar categorias abaixo.
                        </p>

                        {/* Categorias com ícones */}
                        <div className="space-y-5">
                            {/* Necessário */}
                            <div className="flex items-start gap-3 opacity-70 cursor-not-allowed">
                                <ShieldCheck className="text-yellow-400 mt-1" size={20} />
                                <div>
                                    <label className="font-semibold text-yellow-300">
                                        Necessário
                                    </label>
                                    <p className="text-sm text-amber-100">
                                        Essencial para o funcionamento do site. Não pode ser desativado.
                                    </p>
                                </div>
                                <input type="checkbox" checked disabled className="ml-auto w-5 h-5" />
                            </div>

                            {/* Funcional */}
                            <div className="flex items-start gap-3">
                                <Cog className="text-yellow-400 mt-1" size={20} />
                                <div>
                                    <label className="font-semibold text-yellow-300">Funcional</label>
                                    <p className="text-sm text-amber-100">
                                        Recursos como preferências e interações sociais.
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={cookies.functional}
                                    onChange={() => toggleCookie("functional")}
                                    className="ml-auto w-5 h-5 accent-yellow-400"
                                />
                            </div>

                            {/* Estatísticas */}
                            <div className="flex items-start gap-3">
                                <BarChart3 className="text-yellow-400 mt-1" size={20} />
                                <div>
                                    <label className="font-semibold text-yellow-300">Estatísticas</label>
                                    <p className="text-sm text-amber-100">
                                        Analisa o uso do site e ajuda a melhorar o conteúdo.
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={cookies.analytics}
                                    onChange={() => toggleCookie("analytics")}
                                    className="ml-auto w-5 h-5 accent-yellow-400"
                                />
                            </div>

                            {/* Marketing */}
                            <div className="flex items-start gap-3">
                                <Target className="text-yellow-400 mt-1" size={20} />
                                <div>
                                    <label className="font-semibold text-yellow-300">Marketing</label>
                                    <p className="text-sm text-amber-100">
                                        Utilizados por parceiros como Google AdSense para anúncios personalizados.
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={cookies.marketing}
                                    onChange={() => toggleCookie("marketing")}
                                    className="ml-auto w-5 h-5 accent-yellow-400"
                                />
                            </div>
                        </div>

                        {/* Botões */}
                        <div className="flex justify-end gap-3 mt-8">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-amber-800 px-4 py-2 rounded-lg hover:bg-amber-900 transition cursor-pointer"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={savePreferences}
                                className="bg-yellow-400 text-amber-900 font-bold px-5 py-2 rounded-lg hover:bg-yellow-300 transition cursor-pointer"
                            >
                                Salvar e Aceitar
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}
