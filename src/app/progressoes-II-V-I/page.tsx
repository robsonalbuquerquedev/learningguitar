import type { Metadata } from "next";
import Link from "next/link";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import ConceptCard from "@/components/learning/ConceptCard";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Progressão II–V–I no Violão | Harmonia e Prática"
    },

    description:
        "Entenda a progressão ii–V–I no violão, sua relação com o campo harmônico maior, as funções dos acordes e como reconhecer e praticar essa estrutura em diferentes tonalidades.",

    keywords: [
        "progressão II V I",
        "progressão 2 5 1 violão",
        "ii V I",
        "harmonia funcional",
        "acordes II V I",
        "progressão de acordes",
        "campo harmônico",
        "acordes com sétima",
        "harmonia no violão",
        "aprender violão"
    ],

    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/progressoes-II-V-I"
    },

    openGraph: {
        title: "Progressão II–V–I no Violão | Harmonia e Prática",
        description:
            "Entenda como funciona a progressão ii–V–I, por que ela cria movimento harmônico e como praticá-la em diferentes tonalidades.",
        url: "https://aprenderviolaoonline.com.br/progressoes-II-V-I",
        images: ["/og-image.png"],
        type: "article"
    },

    twitter: {
        card: "summary_large_image",
        title: "Progressão II–V–I no Violão",
        description:
            "Aprenda a reconhecer, entender e praticar a progressão ii–V–I no violão.",
        images: ["/og-image.png"],
        creator: "@LGuitarBr"
    }
};

const learningObjectives = [
    {
        icon: "🎼",
        title: "Entender o ii–V–I",
        description:
            "Compreender como os graus ii, V e I formam uma sequência de preparação, tensão e resolução."
    },
    {
        icon: "🎸",
        title: "Reconhecer os acordes",
        description:
            "Identificar os acordes que normalmente representam cada grau em um campo harmônico maior."
    },
    {
        icon: "🔄",
        title: "Transpor a progressão",
        description:
            "Perceber como a mesma estrutura pode ser aplicada em diferentes tonalidades."
    },
    {
        icon: "🎵",
        title: "Praticar no violão",
        description:
            "Usar a progressão como exercício para desenvolver percepção harmônica e troca de acordes."
    }
];

export default function ProgressoesII_V_I() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 px-6 py-10 text-gray-900 md:py-14">
            <div className="mx-auto max-w-5xl">
                <LessonBreadcrumb
                    items={[
                        { label: "Início", href: "/" },
                        {
                            label: "Trilha para iniciantes",
                            href: "/#beginner-path"
                        },
                        {
                            label: "Progressões harmônicas mais usadas",
                            href: "/progressoes-harmonicas-mais-usadas"
                        },
                        {
                            label: "Progressão II–V–I"
                        }
                    ]}
                />

                <LessonHero
                    category="🎼 APROFUNDAMENTO EM HARMONIA"
                    title="Progressão II–V–I"
                    description="Entenda como os graus ii, V e I se conectam, por que essa sequência cria movimento e como levar essa estrutura para diferentes tonalidades no violão."
                    level="Intermediário"
                    duration="15 min"
                    type="Teoria + prática"
                />

                <LearningObjectives objectives={learningObjectives} />

                <div
                    id="lesson-content"
                    className="mt-12 space-y-10"
                >
                    <LessonSection
                        eyebrow="Contexto"
                        title="O que é a progressão ii–V–I?"
                    >
                        <p>
                            A progressão <strong>ii–V–I</strong> é uma sequência
                            de três graus que aparece com frequência em
                            diferentes contextos da harmonia tonal. Seu
                            interesse está principalmente na relação entre os
                            acordes: o <strong>ii</strong> prepara o movimento,
                            o <strong>V</strong> concentra a tensão e o
                            <strong> I</strong> funciona como ponto de
                            resolução.
                        </p>

                        <p>
                            Você já encontrou esses conceitos nas aulas sobre{" "}
                            <Link
                                href="/acordes-com-setimas"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                acordes com sétima
                            </Link>{" "}
                            e{" "}
                            <Link
                                href="/progressoes-de-acordes"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                progressões de acordes
                            </Link>
                            . Agora vamos observar esses conceitos funcionando
                            juntos em uma progressão específica.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Estrutura"
                        title="Como o ii–V–I aparece no campo harmônico?"
                    >
                        <p>
                            Em um campo harmônico maior, cada grau possui uma
                            qualidade de acorde característica. Quando usamos
                            acordes com sétima, os graus <strong>ii</strong>,
                            <strong> V</strong> e <strong>I</strong> formam a
                            estrutura que estamos estudando.
                        </p>

                        <div className="grid gap-6 md:grid-cols-3">
                            <ConceptCard
                                icon="2️⃣"
                                title="ii — preparação"
                            >
                                Em um campo harmônico maior, o segundo grau é normalmente um
                                acorde menor com sétima.
                            </ConceptCard>

                            <ConceptCard
                                icon="5️⃣"
                                title="V — dominante"
                            >
                                O quinto grau é normalmente um acorde maior com sétima menor e
                                apresenta forte tendência de movimento para a tônica.
                            </ConceptCard>

                            <ConceptCard
                                icon="1️⃣"
                                title="I — resolução"
                            >
                                O primeiro grau representa a tônica e funciona como ponto de
                                chegada da sequência.
                            </ConceptCard>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Exemplo"
                        title="ii–V–I em Dó maior"
                    >
                        <p>
                            Vamos usar o campo harmônico de <strong>Dó maior</strong>{" "}
                            para visualizar a progressão.
                        </p>

                        <div className="overflow-x-auto rounded-2xl border border-amber-200 bg-white shadow-sm">
                            <table className="w-full min-w-[600px] border-collapse text-center">
                                <thead>
                                    <tr className="bg-amber-100 text-amber-900">
                                        <th className="p-4 font-bold">
                                            Grau
                                        </th>
                                        <th className="p-4 font-bold">
                                            Função
                                        </th>
                                        <th className="p-4 font-bold">
                                            Acorde
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-gray-700">
                                    <tr className="border-t border-amber-100">
                                        <td className="p-4 font-semibold">
                                            ii
                                        </td>
                                        <td className="p-4">
                                            Predominante
                                        </td>
                                        <td className="p-4 font-bold">
                                            Dm7
                                        </td>
                                    </tr>

                                    <tr className="border-t border-amber-100">
                                        <td className="p-4 font-semibold">
                                            V
                                        </td>
                                        <td className="p-4">
                                            Dominante
                                        </td>
                                        <td className="p-4 font-bold">
                                            G7
                                        </td>
                                    </tr>

                                    <tr className="border-t border-amber-100">
                                        <td className="p-4 font-semibold">
                                            I
                                        </td>
                                        <td className="p-4">
                                            Tônica
                                        </td>
                                        <td className="p-4 font-bold">
                                            C7M
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                                A sequência
                            </p>

                            <p className="mt-4 text-center text-2xl font-extrabold tracking-wide text-gray-900 md:text-3xl">
                                Dm7 → G7 → C7M
                            </p>

                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                <div className="rounded-xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm font-bold text-amber-700">
                                        ii
                                    </p>
                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        Dm7
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Preparação
                                    </p>
                                </div>

                                <div className="rounded-xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm font-bold text-amber-700">
                                        V
                                    </p>
                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        G7
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Dominante
                                    </p>
                                </div>

                                <div className="rounded-xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm font-bold text-amber-700">
                                        I
                                    </p>
                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        C7M
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Tônica
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Assim, em Dó maior, temos:
                        </p>

                        <p className="text-center text-2xl font-bold tracking-wide text-amber-900">
                            Dm7 → G7 → C7M
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Harmonia"
                        title="Por que essa sequência cria movimento?"
                    >
                        <p>
                            O interesse do ii–V–I não está apenas nos nomes dos
                            acordes, mas na relação entre eles. O ii conduz ao
                            V, enquanto o V apresenta uma forte tendência de
                            resolução para o I.
                        </p>

                        <p>
                            No exemplo em Dó maior, podemos pensar no movimento
                            desta maneira:
                        </p>

                        <div className="grid gap-6 md:grid-cols-3">
                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                                    ii
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-amber-900">
                                    Dm7
                                </h3>

                                <p className="mt-3 leading-7 text-gray-700">
                                    Inicia o movimento e prepara a chegada ao
                                    dominante.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                                    V
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-amber-900">
                                    G7
                                </h3>

                                <p className="mt-3 leading-7 text-gray-700">
                                    Concentra a tensão e cria expectativa de
                                    resolução.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                                    I
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-amber-900">
                                    C7M
                                </h3>

                                <p className="mt-3 leading-7 text-gray-700">
                                    Representa a tônica e funciona como ponto
                                    de chegada.
                                </p>
                            </article>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Reconhecimento"
                        title="Como encontrar o ii–V–I em outros tons?"
                    >
                        <p>
                            A lógica da progressão não depende de Dó maior.
                            O importante é manter a relação entre os graus.
                        </p>

                        <p>
                            Por exemplo, em Sol maior, os graus
                            <strong> ii–V–I</strong> correspondem a:
                        </p>

                        <p className="text-center text-2xl font-bold tracking-wide text-amber-900">
                            Am7 → D7 → G7M
                        </p>

                        <p>
                            Observe que os nomes dos acordes mudaram, mas a
                            estrutura permaneceu a mesma:
                        </p>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                            <p className="text-center text-lg font-bold text-amber-900">
                                ii → V → I
                            </p>

                            <p className="mt-3 text-center text-gray-700">
                                Am7 → D7 → G7M
                            </p>
                        </div>

                        <p>
                            Essa é uma das vantagens de pensar em graus: você
                            começa a enxergar a estrutura da harmonia,
                            independentemente do tom em que ela está.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Prática"
                        title="Como estudar o ii–V–I no violão?"
                    >
                        <p>
                            Comece com uma tonalidade confortável e toque cada
                            acorde lentamente, prestando atenção à sensação de
                            movimento entre eles.
                        </p>

                        <ol className="space-y-4">
                            <li className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <strong className="text-amber-900">
                                    1. Toque Dm7 → G7 → C7M.
                                </strong>

                                <p className="mt-2 text-gray-700">
                                    Faça as trocas sem se preocupar inicialmente
                                    com velocidade.
                                </p>
                            </li>

                            <li className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <strong className="text-amber-900">
                                    2. Escute o movimento.
                                </strong>

                                <p className="mt-2 text-gray-700">
                                    Perceba como G7 cria expectativa antes da
                                    chegada em C7M.
                                </p>
                            </li>

                            <li className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <strong className="text-amber-900">
                                    3. Repita em outro tom.
                                </strong>

                                <p className="mt-2 text-gray-700">
                                    Experimente Am7 → D7 → G7M e compare a
                                    estrutura com o exemplo anterior.
                                </p>
                            </li>

                            <li className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <strong className="text-amber-900">
                                    4. Pense nos graus.
                                </strong>

                                <p className="mt-2 text-gray-700">
                                    Ao trocar de tonalidade, tente identificar
                                    primeiro ii, V e I e depois descobrir os
                                    nomes dos acordes.
                                </p>
                            </li>
                        </ol>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conexão"
                        title="II–V–I dentro das progressões"
                    >
                        <p>
                            Agora você consegue enxergar o ii–V–I como uma
                            estrutura específica dentro do estudo das
                            progressões harmônicas.
                        </p>

                        <p>
                            Se quiser revisar o conceito geral antes de
                            continuar explorando outras estruturas, volte para{" "}
                            <Link
                                href="/progressoes-de-acordes"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Progressões de acordes
                            </Link>
                            .
                        </p>

                        <p>
                            Para conhecer outras sequências recorrentes, você
                            também pode consultar{" "}
                            <Link
                                href="/progressoes-harmonicas-mais-usadas"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Progressões harmônicas mais usadas
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aprofundamento"
                        title="Outra progressão para explorar"
                    >
                        <p>
                            O ii–V–I é apenas uma das maneiras de combinar
                            diferentes graus de uma tonalidade. Outra estrutura
                            que vale a pena observar é a progressão
                            <strong> I–III–IV–V</strong>.
                        </p>

                        <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                            <span className="text-2xl">🎸</span>

                            <h3 className="mt-3 text-xl font-bold text-amber-900">
                                I–III–IV–V
                            </h3>

                            <p className="mt-3 text-gray-700">
                                Em uma tonalidade maior, o III grau corresponde
                                a um acorde menor. Em Dó maior, por exemplo, a
                                sequência é:
                            </p>

                            <p className="mt-3 font-semibold text-gray-900">
                                C → Em → F → G
                            </p>

                            <Link
                                href="/progressoes-I-III-IV-V"
                                className="mt-5 inline-flex font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Estudar I–III–IV–V →
                            </Link>
                        </article>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Resumo"
                        title="O que você deve levar desta aula?"
                    >
                        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                            <ul className="space-y-3 leading-7 text-gray-700">
                                <li>
                                    <strong className="text-gray-900">
                                        ii
                                    </strong>{" "}
                                    prepara o movimento em direção ao dominante.
                                </li>

                                <li>
                                    <strong className="text-gray-900">
                                        V
                                    </strong>{" "}
                                    apresenta forte tensão e tendência de
                                    resolução.
                                </li>

                                <li>
                                    <strong className="text-gray-900">
                                        I
                                    </strong>{" "}
                                    representa a tônica e funciona como ponto
                                    de chegada.
                                </li>

                                <li>
                                    Em Dó maior, o ii–V–I é{" "}
                                    <strong className="text-gray-900">
                                        Dm7 → G7 → C7M
                                    </strong>
                                    .
                                </li>

                                <li>
                                    A mesma estrutura pode ser transportada
                                    para outras tonalidades.
                                </li>

                                <li>
                                    Pensar em graus ajuda a reconhecer a
                                    progressão independentemente do tom.
                                </li>
                            </ul>
                        </div>
                    </LessonSection>
                </div>

                <div className="mt-12">
                    <NextLesson
                        title="Explorar acordes de minutos"
                        description="Você já passou pelos fundamentos dos acordes, do campo harmônico e das progressões. Agora pode avançar para um conteúdo de nível intermediário, explorando acordes de minutos e novas possibilidades de construção e sonoridade."
                        href="/acordes-diminutos"
                    />
                </div>

                <LessonNavigation
                    home={{
                        title: "Voltar para a trilha de iniciantes",
                        href: "/#beginner-path"
                    }}
                    previous={{
                        title: "Progressões harmônicas mais usadas",
                        href: "/progressoes-harmonicas-mais-usadas"
                    }}
                    next={{
                        title: "Acordes de minutos",
                        href: "/acordes-diminutos"
                    }}
                />
            </div>
        </main>
    );
}