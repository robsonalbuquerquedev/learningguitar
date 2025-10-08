"use client";

import { useState } from "react";

export default function FeedbackPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formsubmit.co/ajax/00e62b2eb50670b440cf470c86da243f", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Ocorreu um erro ao enviar o feedback. Tente novamente.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão. Verifique sua internet e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white flex flex-col items-center justify-center px-6 py-16">
            <div className="max-w-2xl w-full bg-amber-900/40 backdrop-blur-md rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-yellow-300 mb-6 text-center">
                    Envie seu Feedback 🎸
                </h1>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="Novo feedback recebido 🎸" />

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
                            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg transition-colors duration-200 disabled:opacity-60 cursor-pointer"
                        >
                            {loading ? "Enviando..." : "Enviar Feedback"}
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                            Obrigado pelo seu feedback! 💬
                        </h2>
                        <p>Recebemos sua mensagem e ficamos muito gratos pela contribuição!</p>
                    </div>
                )}
            </div>
        </main>
    );
}
