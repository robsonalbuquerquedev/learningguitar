import type { Metadata } from "next";
import Link from "next/link";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute:
            "Progressão com Subdominante Menor (IV → iv) | Guia de Harmonia"
    },
    description:
        "Entenda como funciona a progressão IV → iv, por que o acorde menor cria contraste e como aplicar a subdominante menor em diferentes tons no violão.",
    keywords: [
        "subdominante menor",
        "IV iv",
        "progressão com iv",
        "acorde emprestado",
        "modo menor paralelo",
        "harmonia no violão",
        "progressões de acordes",
        "campo harmônico",
        "acordes de violão",
        "MPB harmonia",
        "louvor acordes"
    ],
    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/subdominante-menor"
    },
    openGraph: {
        title:
            "Progressão com Subdominante Menor (IV → iv) | Harmonia Explicada",
        description:
            "Entenda o contraste entre IV e iv e aprenda a aplicar a subdominante menor em diferentes tons.",
        url: "https://aprenderviolaoonline.com.br/subdominante-menor",
        images: ["/og-image.png"]
    }
};

const tons = [
    {
        tom: "G",
        maior: "C",
        menor: "Cm",
        progressao: "G → C → Cm → G",
    },
    {
        tom: "A",
        maior: "D",
        menor: "Dm",
        progressao: "A → D → Dm → A",
    },
    {
        tom: "B",
        maior: "E",
        menor: "Em",
        progressao: "B → E → Em → B",
    },
    {
        tom: "C",
        maior: "F",
        menor: "Fm",
        progressao: "C → F → Fm → C",
    },
    {
        tom: "D",
        maior: "G",
        menor: "Gm",
        progressao: "D → G → Gm → D",
    },
    {
        tom: "E",
        maior: "A",
        menor: "Am",
        progressao: "E → A → Am → E",
    },
    {
        tom: "F",
        maior: "Bb",
        menor: "Bbm",
        progressao: "F → Bb → Bbm → F",
    }
];

export default function ProgressaoComSubdominanteMenor() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
                <LessonBreadcrumb
                    items={[
                        { label: "Início", href: "/" },
                        {
                            label: "Progressões harmônicas",
                            href: "/progressoes-harmonicas-mais-usadas"
                        },
                        {
                            label: "Subdominante menor"
                        }
                    ]}
                />

                <LessonHero
                    category="Harmonia aplicada"
                    title="Progressão com subdominante menor (IV → iv)"
                    description="Entenda como o acorde IV maior pode ser transformado em iv menor para criar contraste e uma mudança de cor harmônica."
                    level="Intermediário"
                    duration="15 min"
                    type="Teoria + prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🎼",
                                title: "Entender",
                                description:
                                    "Compreender a relação entre IV maior e iv menor."
                            },
                            {
                                icon: "🔄",
                                title: "Reconhecer",
                                description:
                                    "Identificar a mudança IV → iv em diferentes tons."
                            },
                            {
                                icon: "🎹",
                                title: "Aplicar",
                                description:
                                    "Montar progressões com subdominante menor no violão."
                            },
                            {
                                icon: "🎸",
                                title: "Ouvir",
                                description:
                                    "Perceber o contraste criado pela mudança para o acorde menor."
                            }
                        ]}
                    />

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="O que muda entre IV e iv?"
                    >
                        <p>
                            Imagine que você está tocando uma progressão em
                            um tom maior e, de repente, transforma o acorde
                            IV em menor. O acorde continua ocupando a mesma
                            posição na relação entre os graus, mas sua
                            sonoridade muda completamente.
                        </p>

                        <p>
                            É exatamente essa ideia que aparece na progressão
                            <strong> IV → iv</strong>: o quarto grau maior é
                            seguido pelo mesmo grau em sua forma menor.
                        </p>

                        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                            <p className="text-center text-lg font-bold text-amber-900">
                                IV maior → iv menor
                            </p>

                            <p className="mt-3 text-center text-gray-700">
                                Exemplo em C maior:
                            </p>

                            <p className="mt-2 text-center text-xl font-bold text-gray-900">
                                F → Fm
                            </p>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conceito"
                        title="De onde vem o iv menor?"
                    >
                        <p>
                            No tom maior, o IV é naturalmente um acorde maior.
                            Em C maior, por exemplo, temos <strong>F</strong>.
                        </p>

                        <p>
                            Quando tocamos <strong>Fm</strong>, estamos usando
                            uma sonoridade que vem do <strong>modo menor
                            paralelo</strong>. Por isso, o iv é frequentemente
                            tratado como um <strong>acorde emprestado</strong>.
                        </p>

                        <p>
                            Essa troca não significa que você mudou
                            definitivamente para um tom menor. O contexto
                            continua podendo permanecer em C maior; apenas um
                            acorde foi emprestado para criar uma nova cor
                            harmônica.
                        </p>

                        <p>
                            Se quiser revisar como os acordes se relacionam
                            dentro de um tom, vale retomar o estudo do{" "}
                            <Link
                                href="/campo-harmonico"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                campo harmônico
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Na prática"
                        title="Como ouvir o efeito IV → iv"
                    >
                        <p>
                            O contraste fica mais fácil de perceber quando
                            você toca os dois acordes consecutivamente.
                            Experimente manter o mesmo ritmo e mudar apenas
                            a qualidade do acorde.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <span className="text-2xl">☀️</span>

                                <h3 className="mt-3 text-xl font-bold text-amber-900">
                                    IV maior
                                </h3>

                                <p className="mt-3 text-gray-700">
                                    Apresenta a sonoridade diatônica esperada
                                    dentro do tom maior.
                                </p>

                                <p className="mt-4 text-center text-xl font-bold text-gray-900">
                                    F
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <span className="text-2xl">🌙</span>

                                <h3 className="mt-3 text-xl font-bold text-amber-900">
                                    iv menor
                                </h3>

                                <p className="mt-3 text-gray-700">
                                    Introduz a sonoridade emprestada do modo
                                    menor paralelo.
                                </p>

                                <p className="mt-4 text-center text-xl font-bold text-gray-900">
                                    Fm
                                </p>
                            </article>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Exemplos"
                        title="IV → iv em diferentes tons"
                    >
                        <p>
                            A ideia não depende de um único tom. Depois que
                            você identifica o IV de um tom maior, basta
                            transformá-lo em menor para experimentar a mesma
                            relação.
                        </p>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {tons.map((item) => (
                                <article
                                    key={item.tom}
                                    className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm"
                                >
                                    <h3 className="text-lg font-bold text-amber-900">
                                        Tom de {item.tom}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-600">
                                        IV:{" "}
                                        <strong className="text-gray-900">
                                            {item.maior}
                                        </strong>
                                    </p>

                                    <p className="mt-1 text-sm text-gray-600">
                                        iv:{" "}
                                        <strong className="text-gray-900">
                                            {item.menor}
                                        </strong>
                                    </p>

                                    <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-center font-bold text-amber-900">
                                        {item.progressao}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aplicação"
                        title="Como estudar essa progressão no violão"
                    >
                        <p>
                            Escolha primeiro um tom em que você conheça bem os
                            acordes. Toque o IV maior algumas vezes e depois
                            altere apenas a terça para transformar o acorde em
                            menor.
                        </p>

                        <p>
                            Depois, experimente encaixar o iv em uma sequência
                            que você já conhece. O objetivo não é decorar uma
                            música específica, mas reconhecer o efeito e
                            conseguir reproduzi-lo em outros tons.
                        </p>

                        <p>
                            Essa mesma lógica ajuda a entender por que algumas
                            progressões que parecem diferentes utilizam, na
                            verdade, uma relação harmônica semelhante.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aprofundamento"
                        title="O que ouvir quando aparecer o iv?"
                    >
                        <p>
                            Quando você encontrar uma passagem IV → iv em uma
                            música, tente identificar primeiro o tom maior.
                            Depois localize o IV e observe a transformação para
                            sua versão menor.
                        </p>

                        <p>
                            Em vez de pensar apenas em nomes de acordes, pense
                            na relação:
                        </p>

                        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                            <p className="text-center text-lg font-bold text-gray-900">
                                Tom maior → IV → iv → retorno
                            </p>

                            <p className="mt-3 text-center text-sm text-gray-600">
                                A mudança para o acorde menor cria contraste
                                sem abandonar necessariamente o centro tonal.
                            </p>
                        </div>

                        <p className="mt-6">
                            Para revisar outras relações entre graus e
                            progressões, volte para{" "}
                            <Link
                                href="/progressoes-harmonicas-mais-usadas"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                progressões harmônicas mais usadas
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <LessonNavigation
                        previous={{
                            href: "/progressoes-harmonicas-mais-usadas",
                            title: "Progressões harmônicas"
                        }}
                        home={{
                            href: "/",
                            title: "Trilha para iniciantes"
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: mais importante do que decorar
                        IV → iv é reconhecer como a mudança entre maior e
                        menor altera a cor da progressão. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}