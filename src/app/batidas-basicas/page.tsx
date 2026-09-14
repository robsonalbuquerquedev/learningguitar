import type { Metadata } from "next";
import BatidasContent from "@/components/batidas/BatidasContent";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import LessonNavigation from "@/components/learning/LessonNavigation";
import NextLesson from "@/components/learning/NextLesson";

export const metadata: Metadata = {
    title: {
        absolute: "Batidas Básicas de Violão | Ritmo e Acompanhamento"
    },
    description:
        "Aprenda batidas básicas de violão, entenda os movimentos de mão direita e pratique padrões rítmicos para acompanhar acordes com mais segurança.",
    keywords: [
        "batidas de violão",
        "ritmo violão",
        "padrões de batida",
        "como fazer batida violão",
        "batida para iniciantes",
        "ritmos básicos violão",
        "levadas violão"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/batidas-basicas"
    },
    openGraph: {
        title: "Batidas Básicas de Violão | Ritmo e Acompanhamento",
        description:
            "Entenda os movimentos das batidas e pratique padrões rítmicos básicos para acompanhar acordes no violão.",
        url: "https://aprenderviolaoonline.com.br/batidas-basicas",
        images: ["/og-image.png"]
    }
};

export default function BatidasPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
                <LessonBreadcrumb
                    items={[
                        { label: "Início", href: "/" },
                        {
                            label: "Trilha para iniciantes",
                            href: "/"
                        },
                        {
                            label: "Tocar em todos os tons",
                            href: "/aprender-tocar-em-todos-os-tons"
                        },
                        {
                            label: "Batidas básicas"
                        }
                    ]}
                />

                <LessonHero
                    category="Ritmo e acompanhamento"
                    title="Batidas básicas de violão"
                    description="Aprenda a organizar os movimentos da mão direita e pratique padrões rítmicos para acompanhar acordes com mais segurança."
                    level="Iniciante"
                    duration="15 min"
                    type="Prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🥁",
                                title: "Entender",
                                description:
                                    "Reconhecer os movimentos básicos usados nas batidas."
                            },
                            {
                                icon: "🎯",
                                title: "Controlar",
                                description:
                                    "Manter um movimento regular da mão direita."
                            },
                            {
                                icon: "🎸",
                                title: "Praticar",
                                description:
                                    "Aplicar diferentes padrões aos acordes."
                            },
                            {
                                icon: "🎵",
                                title: "Acompanhar",
                                description:
                                    "Manter o ritmo enquanto a sequência de acordes acontece."
                            }
                        ]}
                    />

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="O ritmo é o que faz os acordes ganharem movimento"
                    >
                        <p>
                            Você pode conhecer vários acordes e ainda assim
                            sentir dificuldade para tocar uma música se a mão
                            direita não estiver acompanhando o tempo.
                        </p>

                        <p>
                            Uma batida nada mais é do que um padrão organizado
                            de movimentos. Por isso, o objetivo inicial não é
                            tocar rápido, mas conseguir repetir o movimento com
                            regularidade.
                        </p>

                        <p>
                            Se você chegou aqui depois de estudar como
                            transportar acordes entre diferentes tons, esta é
                            a etapa em que a harmonia começa a encontrar o
                            ritmo na prática.
                        </p>

                        <p>
                            <a
                                href="/aprender-tocar-em-todos-os-tons"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                Revisar como transportar acordes entre tons →
                            </a>
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Prática"
                        title="Explore as batidas básicas"
                    >
                        <p>
                            Use o recurso abaixo para visualizar diferentes
                            padrões e perceber a direção dos movimentos.
                            Comece devagar e priorize a regularidade antes de
                            aumentar a velocidade.
                        </p>

                        <BatidasContent />
                    </LessonSection>

                    <LessonSection
                        eyebrow="Como estudar"
                        title="Comece pelo movimento, depois pelo padrão"
                    >
                        <p>
                            Antes de tentar decorar uma sequência inteira,
                            pratique o movimento da mão direita de forma
                            contínua. A mão deve continuar acompanhando o
                            pulso mesmo quando você troca de acorde.
                        </p>

                        <p>
                            Depois, escolha uma batida simples e aplique-a a
                            uma sequência de acordes que você já conhece.
                            Primeiro mantenha o mesmo acorde por alguns
                            compassos; depois introduza as trocas.
                        </p>

                        <p>
                            O objetivo é fazer com que a troca de acordes e o
                            movimento da mão direita aconteçam juntos, sem que
                            uma coisa interrompa a outra.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Próximo passo"
                        title="E quando você quiser mais controle?"
                    >
                        <p>
                            As batidas trabalham principalmente o movimento
                            rítmico da mão direita. Depois que esse movimento
                            estiver mais confortável, você pode explorar outra
                            forma de acompanhar os mesmos acordes: os
                            dedilhados.
                        </p>

                        <p>
                            Nos dedilhados, cada dedo pode assumir funções
                            diferentes e o padrão das cordas tocadas cria uma
                            textura mais detalhada para o acompanhamento.
                        </p>

                        <a
                            href="/dedilhados"
                            className="mt-4 inline-flex font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                        >
                            Continuar para dedilhados →
                        </a>
                    </LessonSection>

                    <NextLesson
                        title="Dedilhados"
                        description="Leve o controle da mão direita para padrões de dedilhado e explore novas formas de acompanhar os acordes."
                        href="/dedilhados"
                    />

                    <LessonNavigation
                        previous={{
                            href: "/aprender-tocar-em-todos-os-tons",
                            title: "Tocar em todos os tons"
                        }}
                        home={{
                            href: "/",
                            title: "Trilha para iniciantes"
                        }}
                        next={{
                            href: "/dedilhados",
                            title: "Dedilhados"
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: primeiro encontre um movimento
                        confortável, depois busque regularidade e só então
                        aumente a velocidade. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}