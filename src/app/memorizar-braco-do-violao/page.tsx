import Link from "next/link";
import type { Metadata } from "next";

import MemorizarBracoContent from "@/components/memorizar-braco/MemorizarBracoContent";
import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Memorizar o Braço do Violão | Guia Visual Completo",
    },

    description:
        "Aprenda a memorizar o braço do violão de forma visual e prática. Entenda padrões, casas de referência e como localizar notas com mais segurança.",

    keywords: [
        "memorizar braço do violão",
        "notas no violão",
        "notas no braço do violão",
        "como decorar as notas",
        "notas das casas do violão",
        "trastes do violão",
        "tabela de notas violão",
        "notas das cordas violão",
        "casa 12 violão",
        "truques para memorizar notas",
    ],

    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/memorizar-braco-do-violao",
    },

    openGraph: {
        title: "Memorizar o Braço do Violão | Guia Visual Completo",
        description:
            "Aprenda a localizar e memorizar as notas do braço do violão com uma abordagem visual, simples e prática.",
        url: "https://aprenderviolaoonline.com.br/memorizar-braco-do-violao",
        images: ["/og-image.png"],
        type: "article",
    },

    twitter: {
        card: "summary_large_image",
        title: "Memorizar o Braço do Violão | Guia Prático e Visual",
        description:
            "Descubra como memorizar as notas do braço do violão usando padrões e referências simples.",
        images: ["/og-image.png"],
    },
};

export default function MemorizarBracoPage() {
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
                            label: "Tocar em todos os tons",
                            href: "/aprender-tocar-em-todos-os-tons",
                        },
                        {
                            label: "Memorizar o braço do violão",
                        },
                    ]}
                />

                <LessonHero
                    category="Braço do violão"
                    title="Memorizar o braço do violão"
                    description="Aprenda a enxergar o braço do violão como um mapa de notas, usando casas de referência, padrões e relações que tornam a memorização mais natural."
                    level="Intermediário"
                    duration="15 min"
                    type="Teoria + prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🗺️",
                                title: "Visualizar",
                                description:
                                    "Entender o braço do violão como um mapa organizado de notas.",
                            },
                            {
                                icon: "🎯",
                                title: "Localizar",
                                description:
                                    "Encontrar notas usando casas e cordas como pontos de referência.",
                            },
                            {
                                icon: "🧠",
                                title: "Memorizar",
                                description:
                                    "Usar padrões para reduzir a necessidade de decorar cada posição isoladamente.",
                            },
                            {
                                icon: "🎸",
                                title: "Aplicar",
                                description:
                                    "Usar o conhecimento das notas para tocar, formar acordes e explorar diferentes tons.",
                            },
                        ]}
                    />

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="O braço do violão é um mapa"
                    >
                        <p>
                            Imagine que o braço do violão seja uma{" "}
                            <strong>cidade</strong>. Cada casa e cada corda
                            representam uma posição diferente, mas as notas não
                            estão distribuídas de forma aleatória.
                        </p>

                        <p>
                            Existem padrões que se repetem e pontos de
                            referência que tornam muito mais fácil encontrar
                            uma nota sem precisar decorar o braço inteiro de
                            uma vez.
                        </p>

                        <p>
                            Depois de aprender a{" "}
                            <Link
                                href="/aprender-tocar-em-todos-os-tons"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                transportar acordes entre diferentes tons
                            </Link>
                            , dominar o braço ajuda você a visualizar onde
                            essas relações acontecem no instrumento.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conteúdo principal"
                        title="Visualizando as notas no braço"
                    >
                        <p>
                            Antes de tentar memorizar todas as posições, vale aprender a
                            enxergar alguns padrões e pontos de referência.
                        </p>

                        <p>
                            A tabela abaixo mostra as notas das seis cordas entre a Casa 1 e
                            a Casa 12. Clique em uma nota para visualizar todas as ocorrências
                            dela.
                        </p>

                        <MemorizarBracoContent />
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aprofundamento"
                        title="Da referência à memorização"
                    >
                        <p>
                            A tabela ajuda você a visualizar o padrão, mas o objetivo não é
                            depender dela sempre que precisar encontrar uma nota.
                        </p>

                        <p>
                            O próximo passo é transformar essas referências em conhecimento
                            prático: reconhecer as notas diretamente no braço e localizar
                            qualquer uma delas com mais rapidez.
                        </p>

                        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                            <span className="text-2xl">🎯</span>

                            <h3 className="mt-3 text-xl font-bold text-amber-900">
                                Memorizar todas as notas
                            </h3>

                            <p className="mt-3 text-gray-700">
                                Aprofunde a memorização das notas e desenvolva mais segurança
                                para encontrar qualquer posição no braço do violão.
                            </p>

                            <Link
                                href="/memorizar-todas-as-notas"
                                className="mt-5 inline-flex font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Estudar todas as notas →
                            </Link>
                        </div>
                    </LessonSection>

                    <NextLesson
                        title="Memorizar todas as notas"
                        description="Agora que você aprendeu a enxergar o braço como um mapa de posições e padrões, o próximo passo é desenvolver segurança para localizar qualquer nota no instrumento."
                        href="/memorizar-todas-as-notas"
                    />

                    <LessonNavigation
                        previous={{
                            title: "Aprender a tocar em todos os tons",
                            href: "/aprender-tocar-em-todos-os-tons",
                        }}
                        home={{
                            title: "Voltar para a trilha de iniciantes",
                            href: "/#beginner-path",
                        }}
                        next={{
                            title: "Memorizar todas as notas",
                            href: "/memorizar-todas-as-notas",
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: mais importante do que decorar o
                        braço inteiro de uma vez é reconhecer os padrões que
                        ajudam você a encontrar qualquer nota. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}