import Link from "next/link";
import type { Metadata } from "next";

import ShapesSolosContent from "@/components/shapes-solos/ShapesSolosContent";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Shapes para Solos no Violão | Escala Maior – Guia Visual"
    },
    description:
        "Aprenda a visualizar a escala maior em diferentes regiões do braço do violão usando shapes. Explore posições, padrões e aplicações práticas para solos.",
    keywords: [
        "shapes de solos",
        "shape da escala maior",
        "solos no violão",
        "escala maior",
        "padrões de solos",
        "escalas para violão",
        "como improvisar no violão",
        "violão para iniciantes",
        "como fazer solo",
        "shape de guitarra",
        "shape de violão"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/shapes-solos"
    },
    openGraph: {
        title: "Shapes para Solos no Violão | Visualize e Estude a Escala Maior",
        description:
            "Visualize a escala maior em diferentes regiões do braço e entenda como os shapes organizam as notas para estudar solos.",
        url: "https://aprenderviolaoonline.com.br/shapes-solos",
        images: ["/og-image.png"],
        type: "article",
        locale: "pt_BR",
        siteName: "LearningGuitar 🎸"
    },
    twitter: {
        card: "summary_large_image",
        title: "Shapes para Solos no Violão | Guia Visual",
        description:
            "Aprenda a visualizar a escala maior no braço do violão usando shapes.",
        images: ["/og-image.png"]
    }
};

export default function ShapesSolosPage() {
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
                            label: "Memorizar o braço do violão",
                            href: "/memorizar-braco-do-violao"
                        },
                        {
                            label: "Memorizar todas as notas",
                            href: "/memorizar-todas-as-notas"
                        },
                        {
                            label: "Shapes para solos"
                        }
                    ]}
                />

                <LessonHero
                    category="Escalas e solos"
                    title="Shapes para solos no violão"
                    description="Aprenda a visualizar um padrão da escala maior no braço do violão e explore como ele pode ser deslocado para diferentes regiões."
                    level="Intermediário"
                    duration="20 min"
                    type="Teoria + prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🧩",
                                title: "Entender",
                                description:
                                    "Compreender como um shape organiza as notas de uma escala no braço."
                            },
                            {
                                icon: "👀",
                                title: "Visualizar",
                                description:
                                    "Reconhecer o mesmo padrão em diferentes regiões do braço."
                            },
                            {
                                icon: "🎯",
                                title: "Explorar",
                                description:
                                    "Mover o shape e observar como a posição altera o conjunto de notas."
                            },
                            {
                                icon: "🎸",
                                title: "Praticar",
                                description:
                                    "Usar o padrão como ponto de partida para estudar solos."
                            }
                        ]}
                    />

                    <LessonSection
                        eyebrow="Conectando as etapas"
                        title="Das notas aos shapes"
                    >
                        <p>
                            Na aula anterior, você aprendeu a encontrar as
                            notas em diferentes regiões do braço. Agora vamos
                            dar um passo adiante: em vez de enxergar as notas
                            apenas individualmente, vamos observá-las como
                            parte de um <strong>padrão</strong>.
                        </p>

                        <p className="mt-4">
                            Esse padrão é o que chamamos aqui de{" "}
                            <strong>shape</strong>. Ele representa uma
                            determinada organização das notas de uma escala em
                            uma região do braço.
                        </p>

                        <p className="mt-4">
                            Se quiser revisar a etapa anterior, volte para{" "}
                            <Link
                                href="/memorizar-todas-as-notas"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                memorizar todas as notas
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Visualização"
                        title="Explore o shape da escala maior"
                    >
                        <p className="mb-6">
                            A ferramenta abaixo mostra um padrão da escala
                            maior no braço. Use as setas para deslocar o mesmo
                            desenho e observe como ele permanece organizado
                            enquanto muda de região.
                        </p>

                        <ShapesSolosContent />
                    </LessonSection>

                    <LessonSection
                        eyebrow="O que observar"
                        title="O desenho é fixo, mas as notas mudam"
                    >
                        <p>
                            Ao mover o shape pelo braço, o desenho mantém sua
                            organização relativa. O que muda é a{" "}
                            <strong>altura das notas</strong> produzidas em cada
                            posição.
                        </p>

                        <p className="mt-4">
                            Essa é uma das ideias mais importantes para
                            entender shapes: você não está decorando uma nova
                            escala a cada casa. Está reconhecendo{" "}
                            <strong>o mesmo padrão em outra tonalidade</strong>.
                        </p>

                        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                            <p className="font-semibold text-amber-900">
                                💡 Pense no shape como um molde
                            </p>

                            <p className="mt-2 text-gray-700">
                                O desenho funciona como um molde que pode ser
                                deslocado pelo braço. A posição escolhida
                                determina onde esse padrão começa e quais
                                notas você encontrará.
                            </p>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Prática"
                        title="Como estudar um shape"
                    >
                        <p>
                            Em vez de tentar decorar o desenho inteiro de uma
                            vez, comece devagar. Toque cada nota do padrão e
                            observe sua posição no braço.
                        </p>

                        <ol className="mt-5 list-decimal space-y-3 pl-5 text-gray-700">
                            <li>
                                Escolha uma posição e identifique onde está a
                                tônica.
                            </li>
                            <li>
                                Toque as notas do shape lentamente, alternando
                                as palhetadas.
                            </li>
                            <li>
                                Repita o mesmo desenho em outra posição.
                            </li>
                            <li>
                                Tente voltar ao shape sem depender apenas da
                                memória visual.
                            </li>
                        </ol>

                        <p className="mt-5">
                            O objetivo é fazer com que o padrão deixe de ser
                            apenas um desenho e passe a fazer parte da sua
                            percepção do braço.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Fechando a sequência"
                        title="Do mapa do braço à criação de frases"
                    >
                        <p>
                            Agora a sequência que começamos nas aulas
                            anteriores ganha uma aplicação prática:
                        </p>

                        <div className="mt-5 rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
                            <p className="text-center font-semibold text-gray-900">
                                Notas → padrões → escalas → shapes → frases
                            </p>
                        </div>

                        <p className="mt-5">
                            O próximo desafio não é decorar cada desenho
                            possível, mas aprender a transformar essas notas em
                            música: criar pequenas frases, experimentar
                            diferentes ritmos e ouvir como as notas se
                            relacionam.
                        </p>

                        <p className="mt-4">
                            Para revisar a base teórica por trás desses padrões,
                            você pode voltar para{" "}
                            <Link
                                href="/escalas"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                escalas musicais no violão
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <LessonNavigation
                        previous={{
                            href: "/memorizar-todas-as-notas",
                            title: "Memorizar todas as notas"
                        }}
                        home={{
                            href: "/",
                            title: "Trilha para iniciantes"
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: mais importante do que decorar
                        desenhos é reconhecer as notas e padrões que permitem
                        você se movimentar pelo braço com segurança. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}