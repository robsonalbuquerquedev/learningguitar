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
        absolute: "Progressão I–III–IV–V no Violão | Harmonia Aplicada"
    },

    description:
        "Entenda a progressão I–III–IV–V no violão, sua relação com o campo harmônico maior, o acorde do III grau e como aplicar essa estrutura em diferentes tonalidades.",

    keywords: [
        "progressão I III IV V",
        "I III IV V violão",
        "I iii IV V",
        "sequência de acordes",
        "progressões harmônicas",
        "campo harmônico",
        "harmonia no violão",
        "acordes maiores e menores",
        "como montar progressões",
        "aprender violão"
    ],

    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/progressoes-I-III-IV-V"
    },

    openGraph: {
        title: "Progressão I–III–IV–V no Violão | Harmonia Aplicada",
        description:
            "Entenda como funciona a progressão I–III–IV–V, por que o III grau é menor no campo harmônico maior e como praticar essa estrutura em diferentes tonalidades.",
        url: "https://aprenderviolaoonline.com.br/progressoes-I-III-IV-V",
        images: ["/og-image.png"],
        type: "article"
    },

    twitter: {
        card: "summary_large_image",
        title: "Progressão I–III–IV–V no Violão",
        description:
            "Aprenda a reconhecer e praticar a progressão I–III–IV–V no violão.",
        images: ["/og-image.png"]
    }
};

const learningObjectives = [
    {
        icon: "🎼",
        title: "Entender a estrutura",
        description:
            "Compreender como os graus I, III, IV e V podem ser combinados dentro de uma tonalidade maior."
    },
    {
        icon: "🎸",
        title: "Reconhecer o III grau",
        description:
            "Perceber que, no campo harmônico maior, o III grau gera normalmente um acorde menor."
    },
    {
        icon: "🔄",
        title: "Transportar para outros tons",
        description:
            "Aplicar a mesma relação de graus em diferentes tonalidades."
    },
    {
        icon: "🎵",
        title: "Praticar a sequência",
        description:
            "Usar a progressão como exercício de troca de acordes e percepção do movimento harmônico."
    }
];

export default function ProgressoesI_III_IV_V() {
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
                            label: "Progressão I–III–IV–V"
                        }
                    ]}
                />

                <LessonHero
                    category="🎼 APROFUNDAMENTO EM HARMONIA"
                    title="Progressão I–III–IV–V"
                    description="Entenda como os graus I, III, IV e V podem formar uma sequência de acordes dentro do campo harmônico maior e como transportar essa estrutura para diferentes tonalidades."
                    level="Intermediário"
                    duration="10 min"
                    type="Teoria + prática"
                />

                <LearningObjectives objectives={learningObjectives} />

                <div
                    id="lesson-content"
                    className="mt-12 space-y-10"
                >
                    <LessonSection
                        eyebrow="Contexto"
                        title="O que é essa progressão?"
                    >
                        <p>
                            A progressão <strong>I–III–IV–V</strong> utiliza
                            quatro graus do campo harmônico maior em uma
                            sequência específica. Quando representamos os
                            acordes com sua qualidade, podemos escrevê-la como
                            <strong> I–iii–IV–V</strong>.
                        </p>

                        <p>
                            Essa diferença de escrita é importante: os números
                            romanos indicam os graus da tonalidade, enquanto
                            maiúsculas e minúsculas também ajudam a indicar a
                            qualidade do acorde.
                        </p>

                        <p>
                            Se você já estudou{" "}
                            <Link
                                href="/campo-harmonico"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Campo Harmônico
                            </Link>{" "}
                            e{" "}
                            <Link
                                href="/progressoes-de-acordes"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Progressões de acordes
                            </Link>
                            , agora vamos aplicar esses conceitos a uma
                            estrutura específica.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Estrutura"
                        title="I–III–IV–V ou I–iii–IV–V?"
                    >
                        <p>
                            As duas formas podem aparecer dependendo do que
                            estamos descrevendo. <strong>I–III–IV–V</strong>{" "}
                            destaca os graus da escala. Já{" "}
                            <strong>I–iii–IV–V</strong> mostra também a
                            qualidade dos acordes gerados pelo campo harmônico
                            maior.
                        </p>

                        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                            <p className="text-center text-sm font-bold uppercase tracking-wider text-amber-700">
                                Em uma tonalidade maior
                            </p>

                            <p className="mt-4 text-center text-2xl font-extrabold tracking-wide text-gray-900 md:text-3xl">
                                I → iii → IV → V
                            </p>

                            <p className="mt-4 text-center leading-7 text-gray-700">
                                Maior → menor → maior → maior
                            </p>
                        </div>

                        <p>
                            Portanto, o III grau não significa que o terceiro
                            acorde precise ser maior. No campo harmônico maior,
                            o acorde construído sobre esse grau é normalmente
                            menor.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Exemplo"
                        title="I–iii–IV–V em Sol maior"
                    >
                        <p>
                            Vamos usar <strong>Sol maior</strong> como exemplo.
                            Os quatro graus da progressão correspondem a:
                        </p>

                        <div className="grid gap-6 md:grid-cols-4">
                            <ConceptCard
                                icon="1️⃣"
                                title="I — G"
                            >
                                A tônica da tonalidade e o ponto de referência
                                da sequência.
                            </ConceptCard>

                            <ConceptCard
                                icon="3️⃣"
                                title="iii — Bm"
                            >
                                O acorde construído sobre o terceiro grau, que é
                                menor no campo harmônico maior.
                            </ConceptCard>

                            <ConceptCard
                                icon="4️⃣"
                                title="IV — C"
                            >
                                O quarto grau, um acorde maior na tonalidade
                                maior.
                            </ConceptCard>

                            <ConceptCard
                                icon="5️⃣"
                                title="V — D"
                            >
                                O quinto grau, que possui importante relação
                                com a resolução para a tônica.
                            </ConceptCard>
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                            <p className="text-center text-sm font-bold uppercase tracking-wider text-amber-700">
                                A sequência em Sol maior
                            </p>

                            <p className="mt-4 text-center text-2xl font-extrabold tracking-wide text-amber-900 md:text-3xl">
                                G → Bm → C → D
                            </p>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Observação"
                        title="O papel do III grau"
                    >
                        <p>
                            Um dos pontos mais importantes desta progressão é
                            perceber o que acontece com o terceiro grau.
                        </p>

                        <p>
                            Em uma escala maior, o acorde construído sobre o
                            III grau é normalmente menor. Por isso, em Sol
                            maior, temos <strong>Bm</strong>, e não B maior.
                        </p>

                        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="rounded-xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm font-bold text-amber-700">
                                        I
                                    </p>

                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        G
                                    </p>

                                    <p className="mt-1 text-sm text-gray-600">
                                        maior
                                    </p>
                                </div>

                                <div className="rounded-xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm font-bold text-amber-700">
                                        iii
                                    </p>

                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        Bm
                                    </p>

                                    <p className="mt-1 text-sm text-gray-600">
                                        menor
                                    </p>
                                </div>

                                <div className="rounded-xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm font-bold text-amber-700">
                                        IV → V
                                    </p>

                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        C → D
                                    </p>

                                    <p className="mt-1 text-sm text-gray-600">
                                        maiores
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Esse é um bom exemplo de como pensar em graus pode
                            ser mais útil do que simplesmente decorar nomes de
                            acordes.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Transposição"
                        title="Como levar a progressão para outros tons?"
                    >
                        <p>
                            Para transportar a progressão, mantenha a mesma
                            relação entre os graus e encontre os acordes
                            correspondentes no novo campo harmônico.
                        </p>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <p className="font-bold text-amber-900">
                                    Dó maior
                                </p>

                                <p className="mt-2 text-lg font-semibold text-gray-900">
                                    C → Em → F → G
                                </p>
                            </div>

                            <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <p className="font-bold text-amber-900">
                                    Ré maior
                                </p>

                                <p className="mt-2 text-lg font-semibold text-gray-900">
                                    D → F#m → G → A
                                </p>
                            </div>

                            <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <p className="font-bold text-amber-900">
                                    Sol maior
                                </p>

                                <p className="mt-2 text-lg font-semibold text-gray-900">
                                    G → Bm → C → D
                                </p>
                            </div>

                            <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <p className="font-bold text-amber-900">
                                    Lá maior
                                </p>

                                <p className="mt-2 text-lg font-semibold text-gray-900">
                                    A → C#m → D → E
                                </p>
                            </div>
                        </div>

                        <p>
                            Perceba que os nomes mudam, mas a estrutura continua
                            sendo <strong>I–iii–IV–V</strong>.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Prática"
                        title="Como estudar essa progressão?"
                    >
                        <p>
                            O objetivo não é apenas decorar a sequência. Tente
                            relacionar cada acorde ao seu grau e observar como
                            ele se encaixa na tonalidade.
                        </p>

                        <ol className="space-y-4">
                            <li className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <strong className="text-amber-900">
                                    1. Comece em Sol maior.
                                </strong>

                                <p className="mt-2 text-gray-700">
                                    Toque G → Bm → C → D lentamente.
                                </p>
                            </li>

                            <li className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <strong className="text-amber-900">
                                    2. Identifique os graus.
                                </strong>

                                <p className="mt-2 text-gray-700">
                                    Enquanto toca, tente pensar I → iii → IV →
                                    V em vez de apenas memorizar os nomes dos
                                    acordes.
                                </p>
                            </li>

                            <li className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <strong className="text-amber-900">
                                    3. Troque de tonalidade.
                                </strong>

                                <p className="mt-2 text-gray-700">
                                    Experimente a mesma estrutura em Dó, Ré ou
                                    Lá maior.
                                </p>
                            </li>

                            <li className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                <strong className="text-amber-900">
                                    4. Varie a execução.
                                </strong>

                                <p className="mt-2 text-gray-700">
                                    Depois de dominar as trocas, experimente
                                    diferentes ritmos de batida ou dedilhado.
                                </p>
                            </li>
                        </ol>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conexão"
                        title="I–III–IV–V e outras progressões"
                    >
                        <p>
                            Agora você já pode comparar esta estrutura com
                            outras progressões estudadas no site. O importante
                            é perceber que diferentes sequências podem ser
                            construídas a partir dos mesmos graus de uma
                            tonalidade.
                        </p>

                        <p>
                            Se quiser revisar o conceito geral de progressões,
                            consulte{" "}
                            <Link
                                href="/progressoes-de-acordes"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Progressões de acordes
                            </Link>
                            .
                        </p>

                        <p>
                            Para conhecer uma outra progressão de aprofundamento,
                            você também pode estudar o{" "}
                            <Link
                                href="/progressoes-II-V-I"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                ii–V–I
                            </Link>
                            , que trabalha uma relação diferente entre os graus
                            da tonalidade.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Resumo"
                        title="O que você deve levar desta aula?"
                    >
                        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                            <ul className="space-y-3 leading-7 text-gray-700">
                                <li>
                                    <strong className="text-gray-900">
                                        I–III–IV–V
                                    </strong>{" "}
                                    identifica uma sequência pelos graus da
                                    tonalidade.
                                </li>

                                <li>
                                    Quando mostramos também a qualidade dos
                                    acordes em um campo harmônico maior,
                                    podemos escrever{" "}
                                    <strong className="text-gray-900">
                                        I–iii–IV–V
                                    </strong>
                                    .
                                </li>

                                <li>
                                    O III grau gera normalmente um acorde menor
                                    no campo harmônico maior.
                                </li>

                                <li>
                                    Em Sol maior, a sequência é{" "}
                                    <strong className="text-gray-900">
                                        G → Bm → C → D
                                    </strong>
                                    .
                                </li>

                                <li>
                                    A estrutura pode ser transportada para
                                    diferentes tonalidades.
                                </li>

                                <li>
                                    Pensar em graus ajuda a reconhecer e
                                    reproduzir a progressão em novos tons.
                                </li>
                            </ul>
                        </div>
                    </LessonSection>
                </div>

                <div className="mt-12">
                    <NextLesson
                        title="Explorar acordes de minutos"
                        description="Você já explorou diferentes formas de organizar os acordes em uma tonalidade. Agora pode avançar para um conteúdo de nível intermediário e conhecer novas possibilidades de construção e sonoridade."
                        href="/acordes-de-minutos"
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
                        href: "/acordes-de-minutos"
                    }}
                />
            </div>
        </main>
    );
}