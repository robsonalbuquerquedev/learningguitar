import type { Metadata } from "next";
import Link from "next/link";

import EscalasContent from "@/components/escalas/EscalasContent";
import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Escalas Musicais no Violão | Guia Completo",
    },

    description:
        "Aprenda as principais escalas musicais no violão, entenda como elas são formadas e descubra como usar escalas maiores, menores, modos e outras sonoridades na prática.",

    keywords: [
        "escalas musicais",
        "escala maior",
        "escala menor natural",
        "escala menor harmônica",
        "escala menor melódica",
        "escalas para violão",
        "como estudar escalas no violão",
        "modos gregos",
        "escalas para iniciantes",
        "como montar escalas",
        "escala cromática",
        "escala diatônica",
        "notas musicais no violão",
    ],

    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/escalas",
    },

    openGraph: {
        title: "Escalas Musicais no Violão | Guia Completo",
        description:
            "Aprenda as principais escalas para violão com explicações simples, exemplos práticos e uma visão clara da relação entre notas, tons e escalas.",
        url: "https://aprenderviolaoonline.com.br/escalas",
        images: ["/og-image.png"],
    },
};

export default function EscalasPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
                <LessonBreadcrumb
                    items={[
                        { label: "Início", href: "/" },
                        {
                            label: "Trilha para iniciantes",
                            href: "/#beginner-path",
                        },
                        {
                            label: "Escalas",
                        },
                    ]}
                />

                <LessonHero
                    category="Teoria musical"
                    title="Escalas musicais no violão"
                    description="Entenda como as escalas são formadas, conheça as principais escalas usadas no violão e descubra como elas ajudam a organizar as notas dentro de cada tom."
                    level="Intermediário"
                    duration="20 min"
                    type="Teoria + prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🎵",
                                title: "Entender",
                                description:
                                    "Compreender o que é uma escala e por que ela organiza as notas de uma tonalidade.",
                            },
                            {
                                icon: "🧩",
                                title: "Reconhecer",
                                description:
                                    "Identificar escalas maiores, menores e outras estruturas importantes.",
                            },
                            {
                                icon: "🎯",
                                title: "Montar",
                                description:
                                    "Usar intervalos e padrões para entender como uma escala é construída.",
                            },
                            {
                                icon: "🎸",
                                title: "Aplicar",
                                description:
                                    "Relacionar as escalas com o braço do violão e com a prática musical.",
                            },
                            {
                                icon: "🧭",
                                title: "Explorar tons",
                                description:
                                    "Perceber como uma mesma lógica pode ser aplicada em diferentes tons.",
                            },
                        ]}
                    />

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="Por que estudar escalas?"
                    >
                        <p>
                            Se os{" "}
                            <Link
                                href="/acordes-maiores-e-menores-naturais"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                acordes
                            </Link>{" "}
                            ajudam você a entender{" "}
                            <strong>o que está sendo tocado</strong>, as escalas ajudam a
                            entender{" "}
                            <strong>quais notas pertencem àquele contexto musical</strong>.
                        </p>

                        <p>
                            Pense em uma escala como um{" "}
                            <strong>mapa de notas</strong>. Em vez de enxergar as notas do
                            braço do violão como pontos isolados, você começa a perceber
                            relações e padrões entre elas.
                        </p>

                        <p>
                            Isso é importante tanto para quem quer tocar músicas quanto para
                            quem pretende improvisar, criar melodias ou compreender melhor a
                            harmonia.
                        </p>

                        <p>
                            Nas páginas anteriores, você começou a entender{" "}
                            <Link
                                href="/formacao-de-acordes"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                intervalos
                            </Link>
                            , acordes e{" "}
                            <Link
                                href="/campo-harmonico"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                funções harmônicas
                            </Link>
                            . Agora, as escalas ajudam a conectar essas ideias.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conteúdo principal"
                        title="Conhecendo as escalas"
                    >
                        <EscalasContent />
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conectando os conceitos"
                        title="Escalas, acordes e tons"
                    >
                        <p>
                            Uma escala não deve ser estudada apenas como uma sequência de
                            notas para memorizar. Ela faz parte de um contexto maior.
                        </p>

                        <p>
                            Quando entendemos a relação entre{" "}
                            <strong>escala, tonalidade e acordes</strong>, começamos a
                            enxergar o braço do violão de uma forma muito mais organizada.
                        </p>

                        <p>
                            A escala fornece as notas, os graus ajudam a organizar essas
                            notas e os acordes construídos a partir delas formam o campo
                            harmônico. A partir daí, as funções harmônicas ajudam a entender
                            por que determinadas combinações criam movimento, tensão e
                            resolução.
                        </p>

                        <p>
                            O próximo passo natural é levar essa ideia para a prática:
                            aprender a{" "}
                            <Link
                                href="/aprender-tocar-em-todos-os-tons"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                tocar em todos os tons
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <NextLesson
                        title="Aprender a tocar em todos os tons"
                        description="Agora que você entende como as escalas organizam as notas, o próximo passo é aprender a transportar ideias musicais para diferentes tons e deixar o braço do violão muito mais familiar."
                        href="/aprender-tocar-em-todos-os-tons"
                    />

                    <LessonNavigation
                        previous={{
                            title: "Acordes diminutos e meio-diminuto",
                            href: "/acordes-diminutos",
                        }}
                        home={{
                            title: "Voltar para a trilha de iniciantes",
                            href: "/#beginner-path",
                        }}
                        next={{
                            title: "Aprender a tocar em todos os tons",
                            href: "/aprender-tocar-em-todos-os-tons",
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: mais importante do que decorar
                        escalas é entender como as notas se organizam e como
                        essa organização muda de um tom para outro. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}