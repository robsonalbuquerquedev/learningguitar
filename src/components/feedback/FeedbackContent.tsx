"use client";

import { useState } from "react";
import Image from "next/image";

export default function FeedbackContent() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/00e62b2eb50670b440cf470c86da243f",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Erro ao enviar o feedback. Tente novamente.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão. Verifique sua internet e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

            {/* 🎨 LADO ESQUERDO — Imagem Hero */}
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src="/hero-guitar.png"
                    alt="Violão estilizado LearningGuitar"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl border-4 border-yellow-400/60 bg-black/30 backdrop-blur-xl"
                />
            </div>

            {/* 📝 LADO DIREITO — Formulário */}
            <div className="md:w-1/2 w-full bg-amber-900/40 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-yellow-700/40">

                {!submitted ? (
                    <>
                        <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center md:text-left">
                            Envie seu Feedback 🎸
                        </h2>

                        <p className="text-amber-100 mb-6 text-center md:text-left leading-relaxed">
                            Sua opinião é muito importante! Conte suas sugestões, elogios e ideias
                            para continuarmos evoluindo o LearningGuitar.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input type="hidden" name="_captcha" value="false" />
                            <input
                                type="hidden"
                                name="_subject"
                                value="Novo feedback recebido 🎸"
                            />

                            <div>
                                <label className="block text-sm font-medium mb-1">Nome (opcional)</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-2 rounded-lg text-black focus:ring-2 focus:ring-yellow-400 outline-none"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">E-mail (opcional)</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-2 rounded-lg text-black focus:ring-2 focus:ring-yellow-400 outline-none"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Mensagem *</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg text-black focus:ring-2 focus:ring-yellow-400 outline-none"
                                    placeholder="Deixe aqui sua opinião, sugestão ou elogio..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-yellow-400 hover:bg-yellow-300 text-amber-900 font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-60"
                            >
                                {loading ? "Enviando..." : "Enviar Feedback"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
                            Obrigado pelo seu feedback! 💬
                        </h2>
                        <p className="text-amber-100 leading-relaxed">
                            Sua mensagem foi recebida com sucesso!
                            Agradecemos de coração pela sua contribuição. 🎶
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
