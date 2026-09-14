import type { Metadata } from "next";
import DedilhadosContent from "@/components/dedilhados/DedilhadosContent";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Dedilhados de Violão | Padrões Essenciais"
    },
    description:
        "Aprenda dedilhados de violão, entenda a função dos dedos P, I, M e A e pratique padrões para acompanhar acordes com mais controle e musicalidade.",
    keywords: [
        "dedilhados no violão",
        "padrões de dedilhado",
        "dedilhados para iniciantes",
        "pima violão",
        "dedilhado clássico",
        "dedilhado moderno",
        "dedilhado violão fácil",
        "dedilhado P I M A",
        "abafado X violão"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/dedilhados"
    },
    openGraph: {
        title: "Dedilhados de Violão | Padrões Essenciais e Modernos",
        description:
            "Aprenda padrões de dedilhado no violão usando P, I, M e A. Visual, prático e progressivo para desenvolver o controle da mão direita.",
        url: "https://aprenderviolaoonline.com.br/dedilhados",
        images: ["/og-image.png"]
    },
    twitter: {
        card: "summary_large_image",
        title: "Dedilhados de Violão | Aprenda Padrões Essenciais",
        description:
            "Guia visual para praticar padrões de dedilhado e desenvolver o controle da mão direita.",
        images: ["/og-image.png"]
    }
};

export default function DedilhadosPage() {
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
                            label: "Batidas básicas",
                            href: "/batidas-basicas"
                        },
                        {
                            label: "Dedilhados"
                        }
                    ]}
                />

                <LessonHero
                    category="Ritmo e acompanhamento"
                    title="Dedilhados de violão"
                    description="Aprenda a organizar os dedos da mão direita para tocar padrões de dedilhado com mais controle, regularidade e musicalidade."
                    level="Iniciante"
                    duration="15 min"
                    type="Prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🎸",
                                title: "Entender",
                                description:
                                    "Reconhecer como os dedos participam de um padrão de dedilhado."
                            },
                            {
                                icon: "🤚",
                                title: "Controlar",
                                description:
                                    "Desenvolver independência e regularidade na mão direita."
                            },
                            {
                                icon: "🧩",
                                title: "Reconhecer",
                                description:
                                    "Identificar diferentes combinações de cordas e dedos."
                            },
                            {
                                icon: "🎵",
                                title: "Aplicar",
                                description:
                                    "Usar padrões de dedilhado para acompanhar acordes."
                            }
                        ]}
                    />

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="Do movimento da batida ao controle dos dedos"
                    >
                        <p>
                            Nas batidas básicas, você trabalha principalmente
                            o movimento contínuo da mão direita. O dedilhado
                            parte da mesma ideia de acompanhar os acordes, mas
                            distribui esse movimento entre cordas e dedos.
                        </p>

                        <p>
                            Em vez de pensar apenas em tocar para baixo ou para
                            cima, você começa a perceber <strong>qual corda</strong>
                            será tocada e <strong>qual dedo</strong> realizará
                            o movimento.
                        </p>

                        <p>
                            Se quiser revisar a etapa anterior, volte para as
                            <a
                                href="/batidas-basicas"
                                className="ml-1 font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >batidas básicas
                            </a>
                            .
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Fundamento"
                        title="Conhecendo P, I, M e A"
                    >
                        <p>
                            Os dedilhados costumam utilizar letras para
                            representar os dedos da mão direita. Essa
                            convenção ajuda a transformar um movimento em um
                            padrão que pode ser repetido em diferentes acordes.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <article className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <span className="text-2xl">👍</span>
                                <h3 className="mt-3 text-lg font-bold text-amber-900">
                                    P — Polegar
                                </h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    Geralmente responsável pelas cordas mais
                                    graves.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <span className="text-2xl">☝️</span>
                                <h3 className="mt-3 text-lg font-bold text-amber-900">
                                    I — Indicador
                                </h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    Participa dos padrões nas cordas mais
                                    agudas.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <span className="text-2xl">🎯</span>
                                <h3 className="mt-3 text-lg font-bold text-amber-900">
                                    M — Médio
                                </h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    Alterna com o indicador em diferentes
                                    padrões.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <span className="text-2xl">🎵</span>
                                <h3 className="mt-3 text-lg font-bold text-amber-900">
                                    A — Anelar
                                </h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    É usado principalmente nas cordas mais
                                    agudas.
                                </p>
                            </article>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Prática"
                        title="Explore os padrões de dedilhado"
                    >
                        <p>
                            Agora coloque o conceito em prática. Observe cada
                            padrão, identifique a sequência dos dedos e comece
                            lentamente. O objetivo inicial é tocar cada nota
                            com clareza e manter o padrão constante.
                        </p>

                        <DedilhadosContent />
                    </LessonSection>

                    <LessonSection
                        eyebrow="Como estudar"
                        title="Comece devagar e mantenha o padrão"
                    >
                        <p>
                            Escolha um único acorde e repita o mesmo padrão
                            várias vezes. Só depois de conseguir manter a
                            sequência com segurança, introduza uma troca de
                            acorde.
                        </p>

                        <p>
                            Quando a troca estiver confortável, aumente
                            gradualmente a velocidade. O mais importante é não
                            deixar a troca de acordes interromper o padrão da
                            mão direita.
                        </p>

                        <p>
                            Esse processo transforma o dedilhado de uma
                            sequência decorada em um movimento que você
                            consegue aplicar musicalmente.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conexão"
                        title="Batidas e dedilhados trabalham a mesma base"
                    >
                        <p>
                            Batidas e dedilhados não são habilidades isoladas.
                            As duas trabalham o acompanhamento, o tempo e o
                            controle da mão direita — apenas organizam esses
                            elementos de maneiras diferentes.
                        </p>

                        <p>
                            Por isso, uma boa forma de estudar é pegar uma
                            sequência de acordes que você já consegue tocar
                            com uma batida e tentar aplicá-la a um padrão de
                            dedilhado.
                        </p>

                        <p>
                            Assim, você deixa de associar cada técnica a uma
                            música específica e começa a perceber que os
                            mesmos acordes podem ganhar diferentes formas de
                            acompanhamento.
                        </p>
                    </LessonSection>

                    <LessonNavigation
                        previous={{
                            href: "/batidas-basicas",
                            title: "Batidas básicas"
                        }}
                        home={{
                            href: "/",
                            title: "Trilha para iniciantes"
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: mais importante do que decorar
                        padrões é desenvolver controle para aplicar diferentes
                        formas de acompanhamento aos acordes que você já
                        conhece. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}