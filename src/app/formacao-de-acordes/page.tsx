import Link from "next/link";
import type { Metadata } from "next";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LessonSection from "@/components/learning/LessonSection";

import LearningObjectives from "@/components/learning/LearningObjectives";
import ConceptCard from "@/components/learning/ConceptCard";
import ChordCard from "@/components/learning/ChordCard";
import ChordGrid from "@/components/learning/ChordGrid";
import ChordComparison from "@/components/learning/ChordComparison";

import TheoryBlock from "@/components/learning/TheoryBlock";
import FretboardVisualization from "@/components/learning/FretboardVisualization";
import ChordFormula from "@/components/learning/ChordFormula";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Formação de Acordes no Violão | Guia Completo e Visual"
    },

    description:
        "Aprenda como são formados os acordes no violão: tríades, tônica, terça, quinta, acordes maiores, menores e diferenças práticas com exemplos visuais. Explicação simples e completa para iniciantes e músicos intermediários.",

    keywords: [
        "formação de acordes",
        "como formar acordes",
        "acordes maiores e menores",
        "tríades musicais",
        "tônica terça quinta",
        "acordes de violão",
        "harmonia musical básica",
        "como montar acordes",
        "acorde de dó maior",
        "acorde de dó menor"
    ],

    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/formacao-de-acordes"
    },

    openGraph: {
        title: "Formação de Acordes no Violão | Guia Completo",
        description:
            "Entenda como acordes são formados e veja exemplos práticos usando tríades, terça maior e menor. Aprenda de forma simples e visual.",
        url: "https://aprenderviolaoonline.com.br/formacao-de-acordes",
        images: ["/og-image.png"]
    },

    twitter: {
        card: "summary_large_image",
        title: "Formação de Acordes no Violão | Guia Prático",
        description:
            "Aprenda a montar acordes maiores, menores e tríades com exemplos claros e visuais.",
        images: ["/og-image.png"]
    }
};

const learningObjectives = [
    {
        icon: "🎼",
        title: "Entender as tríades",
        description:
            "Descubra como tônica, terça e quinta formam a estrutura básica de muitos acordes."
    },
    {
        icon: "🎯",
        title: "Identificar os graus",
        description:
            "Aprenda a relacionar as notas do acorde aos graus da escala."
    },
    {
        icon: "🔎",
        title: "Conhecer as fórmulas",
        description:
            "Entenda as fórmulas 1 – 3 – 5 e 1 – ♭3 – 5 para acordes maiores e menores."
    },
    {
        icon: "🎸",
        title: "Construir acordes",
        description:
            "Use a lógica das fórmulas para descobrir as notas que formam diferentes acordes."
    }
];

const naturalMajorChords = [
    {
        name: "C",
        fullName: "Dó maior",
        quality: "major" as const
    },
    {
        name: "D",
        fullName: "Ré maior",
        quality: "major" as const
    },
    {
        name: "E",
        fullName: "Mi maior",
        quality: "major" as const
    },
    {
        name: "F",
        fullName: "Fá maior",
        quality: "major" as const
    },
    {
        name: "G",
        fullName: "Sol maior",
        quality: "major" as const
    },
    {
        name: "A",
        fullName: "Lá maior",
        quality: "major" as const
    },
    {
        name: "B",
        fullName: "Si maior",
        quality: "major" as const
    }
];

const naturalMinorChords = [
    {
        name: "Am",
        fullName: "Lá menor",
        quality: "minor" as const
    },
    {
        name: "Bm",
        fullName: "Si menor",
        quality: "minor" as const
    },
    {
        name: "Cm",
        fullName: "Dó menor",
        quality: "minor" as const
    },
    {
        name: "Dm",
        fullName: "Ré menor",
        quality: "minor" as const
    },
    {
        name: "Em",
        fullName: "Mi menor",
        quality: "minor" as const
    },
    {
        name: "Fm",
        fullName: "Fá menor",
        quality: "minor" as const
    },
    {
        name: "Gm",
        fullName: "Sol menor",
        quality: "minor" as const
    }
];

export default function FormacaoDeAcordes() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 px-6 py-10 text-gray-900 md:py-14">
            <div className="mx-auto max-w-5xl">

                <LessonBreadcrumb
                    items={[
                        {
                            label: "Início",
                            href: "/"
                        },
                        {
                            label: "Trilha para iniciantes",
                            href: "/#beginner-path"
                        },
                        {
                            label: "Fundamentos",
                            href: "/formacao-de-acordes"
                        },
                        {
                            label: "Formação de acordes"
                        }
                    ]}
                />

                <LessonHero
                    category="🎸 FUNDAMENTOS DO VIOLÃO"
                    title="Formação de Acordes"
                    description="Descubra como notas e graus da escala se combinam para formar acordes maiores, menores e outras estruturas que você encontra no violão."
                    level="Iniciante"
                    duration="Aproximadamente 12 minutos"
                    type="Teoria + prática"
                />

                <LearningObjectives
                    objectives={learningObjectives}
                />

                <div id="lesson-content">

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="Um acorde tem uma lógica"
                    >
                        <p>
                            Quando começamos a aprender violão, é comum enxergar
                            os acordes apenas como desenhos que precisamos
                            memorizar. Mas existe uma lógica por trás dessas
                            posições.
                        </p>

                        <p>
                            Pense em um acorde como uma receita. Cada nota tem
                            uma função dentro da combinação. Quando entendemos
                            essas funções, fica mais fácil compreender por que
                            determinados acordes são maiores, menores ou
                            possuem outras características.
                        </p>

                        <ConceptCard
                            icon="💡"
                            title="A ideia principal"
                        >
                            Formar um acorde significa combinar determinadas
                            notas seguindo uma estrutura musical.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Primeiro conceito"
                        title="O que é uma tríade?"
                    >
                        <p>
                            Uma das estruturas mais importantes para começar a
                            entender a formação dos acordes é a{" "}
                            <strong>tríade</strong>.
                        </p>

                        <p>
                            Como o próprio nome sugere, uma tríade é formada por
                            três notas principais: <strong>tônica</strong>,
                            <strong> terça</strong> e <strong>quinta</strong>.
                        </p>

                        <TheoryBlock title="As três partes da tríade">
                            <p>
                                <strong>Tônica:</strong> é a nota que dá nome ao
                                acorde e funciona como seu ponto de referência.
                            </p>

                            <p className="mt-3">
                                <strong>Terça:</strong> ajuda a determinar se a
                                tríade possui característica maior ou menor.
                            </p>

                            <p className="mt-3">
                                <strong>Quinta:</strong> completa a estrutura
                                básica da tríade.
                            </p>
                        </TheoryBlock>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Visualizando a construção"
                        title="Exemplo: C maior"
                    >
                        <p>
                            Vamos construir um acorde usando a escala de C
                            maior:
                        </p>

                        <TheoryBlock title="Escala de C maior">
                            <p className="text-center text-lg font-semibold">
                                C → D → E → F → G → A → B
                            </p>
                        </TheoryBlock>

                        <p>
                            Agora selecionamos o primeiro, o terceiro e o
                            quinto graus:
                        </p>

                        <ChordFormula
                            title="Fórmula da tríade maior"
                            formula="1 – 3 – 5"
                            description="A tríade maior utiliza a tônica, a terça maior e a quinta."
                        />

                        <ChordCard
                            name="C"
                            fullName="Dó maior"
                            quality="major"
                        />

                        <ConceptCard
                            icon="🎯"
                            title="O que aconteceu?"
                        >
                            Partimos da escala de C maior, selecionamos os
                            graus 1, 3 e 5 e chegamos às notas C, E e G.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="A regra por trás do acorde"
                        title="Tônica, terça e quinta"
                    >
                        <p>
                            Os números que aparecem nas fórmulas representam os
                            graus da escala usados para construir o acorde.
                        </p>

                        <TheoryBlock title="No acorde C maior">
                            <div className="grid gap-4 text-center sm:grid-cols-3">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        1º grau
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        C
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Tônica
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        3º grau
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        E
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Terça
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        5º grau
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        G
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Quinta
                                    </p>
                                </div>
                            </div>
                        </TheoryBlock>

                        <ChordFormula
                            title="Resumo da construção"
                            formula="C + E + G"
                            description="1º grau + 3º grau + 5º grau da escala de C maior."
                        />
                    </LessonSection>

                    <LessonSection
                        eyebrow="Maior ou menor?"
                        title="A terça muda tudo"
                    >
                        <p>
                            Agora chegamos a uma das partes mais importantes
                            desta aula.
                        </p>

                        <p>
                            A estrutura básica continua sendo formada pela
                            tônica, terça e quinta. O que muda entre uma tríade
                            maior e uma menor é principalmente a{" "}
                            <strong>terça</strong>.
                        </p>

                        <ChordComparison
                            firstChord={{
                                name: "C",
                                fullName: "Dó maior",
                                notes: "C + E + G",
                                description:
                                    "A terça é E, formando uma terça maior em relação à tônica C."
                            }}
                            secondChord={{
                                name: "Cm",
                                fullName: "Dó menor",
                                notes: "C + Eb + G",
                                description:
                                    "A terça é rebaixada para Eb, formando uma terça menor em relação à tônica C."
                            }}
                        />

                        <ChordFormula
                            title="Fórmula do acorde maior"
                            formula="1 – 3 – 5"
                            description="Tônica, terça maior e quinta."
                        />

                        <ChordFormula
                            title="Fórmula do acorde menor"
                            formula="1 – ♭3 – 5"
                            description="Tônica, terça menor e quinta."
                        />

                        <ConceptCard
                            icon="🔎"
                            title="Guarde esta diferença"
                        >
                            No C maior temos <strong>C + E + G</strong>.
                            No C menor temos <strong>C + Eb + G</strong>.
                            A tônica e a quinta permanecem, enquanto a terça
                            muda de E para Eb.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Colocando a fórmula em prática"
                        title="Construindo outros acordes maiores"
                    >
                        <p>
                            A fórmula <strong>1 – 3 – 5</strong> não funciona
                            apenas para C maior. Ela pode ser aplicada a outras
                            notas.
                        </p>

                        <p>
                            Por exemplo, usando a escala de G maior:
                        </p>

                        <TheoryBlock title="Escala de G maior">
                            <p className="text-center text-lg font-semibold">
                                G → A → B → C → D → E → F#
                            </p>
                        </TheoryBlock>

                        <p>
                            Pegando os graus 1, 3 e 5:
                        </p>

                        <ChordFormula
                            title="G maior"
                            formula="G + B + D"
                            description="G é a tônica, B é a terça e D é a quinta."
                        />

                        <p>
                            O mesmo raciocínio pode ser aplicado aos demais
                            acordes maiores.
                        </p>

                        <ChordGrid chords={naturalMajorChords} />
                    </LessonSection>

                    <LessonSection
                        eyebrow="Agora construindo acordes menores"
                        title="Aplicando a fórmula 1 – ♭3 – 5"
                    >
                        <p>
                            Para construir uma tríade menor, mantemos a mesma
                            ideia de tônica, terça e quinta, mas a terça é
                            rebaixada em um semitom.
                        </p>

                        <ChordFormula
                            title="Fórmula da tríade menor"
                            formula="1 – ♭3 – 5"
                            description="A terça é diminuída em um semitom em relação à terça maior."
                        />

                        <p>
                            Observe o exemplo de A menor:
                        </p>

                        <TheoryBlock title="Escala de A menor natural">
                            <p className="text-center text-lg font-semibold">
                                A → B → C → D → E → F → G
                            </p>
                        </TheoryBlock>

                        <ChordCard
                            name="Am"
                            fullName="Lá menor"
                            quality="minor"
                        />

                        <ChordGrid chords={naturalMinorChords} />

                        <ConceptCard
                            icon="🧠"
                            title="A lógica é mais importante que a decoração"
                        >
                            Você não precisa decorar cada combinação como se
                            fosse uma lista aleatória. Entendendo a fórmula,
                            consegue compreender de onde as notas do acorde
                            vêm.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Ligando teoria e instrumento"
                        title="Como isso aparece no braço do violão?"
                    >
                        <p>
                            No violão, as notas que formam um acorde aparecem em
                            diferentes cordas e casas. Uma mesma nota pode
                            inclusive aparecer mais de uma vez.
                        </p>

                        <p>
                            Por isso, o desenho que você aprende para um acorde
                            não mostra apenas três posições. Ele representa uma
                            combinação de notas distribuídas pelo instrumento.
                        </p>

                        <FretboardVisualization />

                        <ConceptCard
                            icon="🎸"
                            title="Do papel para o violão"
                        >
                            A fórmula explica <strong>quais notas</strong>{" "}
                            pertencem ao acorde. A posição no braço mostra{" "}
                            <strong>onde essas notas</strong> podem ser
                            encontradas no instrumento.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Indo além"
                        title="E os outros tipos de acordes?"
                    >
                        <p>
                            Agora que você entende a ideia de tônica, terça e quinta, fica
                            muito mais fácil começar a interpretar nomes como C7, Cm7, Cmaj7
                            e Cadd9.
                        </p>

                        <TheoryBlock title="A mesma lógica continua">
                            <p>
                                Uma tríade pode receber outras notas ou ter algumas de suas
                                notas modificadas.
                            </p>

                            <p className="mt-3">
                                Por exemplo, podemos partir de uma estrutura básica e
                                acrescentar uma sétima para formar acordes com 7ª.
                            </p>
                        </TheoryBlock>

                        <p>
                            Esses acordes possuem suas próprias fórmulas e serão estudados em
                            conteúdos específicos. Por enquanto, concentre-se na base:
                        </p>

                        <ChordFormula
                            title="A estrutura fundamental"
                            formula="1 – 3 – 5"
                            description="Tônica, terça e quinta formam a base das tríades."
                        />

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                            <Link
                                href="/acordes-com-setimas"
                                className="inline-flex items-center font-semibold text-amber-700 transition hover:text-amber-900"
                            >
                                Aprender acordes com 7ª
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/acordes-maiores-e-menores-naturais"
                                className="inline-flex items-center font-semibold text-gray-600 transition hover:text-gray-900"
                            >
                                Revisar acordes maiores e menores naturais
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </Link>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Hora de praticar"
                        title="Tente construir um acorde"
                    >
                        <p>
                            Agora tente aplicar a lógica sozinho.
                        </p>

                        <ConceptCard
                            icon="🎯"
                            title="Desafio 1"
                        >
                            A escala de G maior é:
                            <strong> G, A, B, C, D, E, F#</strong>.
                            <br />
                            <br />
                            Quais são os graus 1, 3 e 5?
                        </ConceptCard>

                        <ConceptCard
                            icon="🎯"
                            title="Desafio 2"
                        >
                            A escala de A menor natural é:
                            <strong> A, B, C, D, E, F, G</strong>.
                            <br />
                            <br />
                            Quais notas formam a tríade de A menor?
                        </ConceptCard>

                        <ConceptCard
                            icon="💡"
                            title="Confira seu raciocínio"
                        >
                            Se você chegou a <strong>G + B + D</strong> no
                            primeiro desafio e <strong>A + C + E</strong> no
                            segundo, aplicou corretamente a ideia de tônica,
                            terça e quinta.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Resumo"
                        title="O que você aprendeu?"
                    >
                        <TheoryBlock title="A formação básica dos acordes">
                            <p>
                                <strong>Tríade:</strong> combinação de três
                                notas principais.
                            </p>

                            <p className="mt-3">
                                <strong>1:</strong> tônica.
                            </p>

                            <p className="mt-3">
                                <strong>3:</strong> terça.
                            </p>

                            <p className="mt-3">
                                <strong>5:</strong> quinta.
                            </p>

                            <p className="mt-3">
                                <strong>Maior:</strong> 1 – 3 – 5.
                            </p>

                            <p className="mt-3">
                                <strong>Menor:</strong> 1 – ♭3 – 5.
                            </p>
                        </TheoryBlock>

                        <ConceptCard
                            icon="🎸"
                            title="A ideia para levar com você"
                        >
                            Em vez de enxergar os acordes apenas como desenhos
                            para memorizar, comece a enxergá-los como
                            combinações de notas construídas a partir de uma
                            lógica.
                        </ConceptCard>
                    </LessonSection>

                    <div className="pb-10 md:pb-14">
                        <NextLesson
                            title="Aprender acordes com 7ª"
                            description="Agora que você entende como tônica, terça e quinta formam as tríades, chegou a hora de adicionar uma nova camada à harmonia e descobrir como as sétimas transformam esses acordes."
                            href="/acordes-com-setimas"
                        />
                    </div>

                    <LessonNavigation
                        home={{
                            title: "Voltar para a trilha de iniciantes",
                            href: "/#beginner-path"
                        }}
                        previous={{
                            title: "Acordes maiores e menores",
                            href: "/acordes-maiores-e-menores-naturais"
                        }}
                        next={{
                            title: "Acordes com 7ª",
                            href: "/acordes-com-setimas"
                        }}
                    />

                    <p className="pb-6 text-center text-sm text-gray-500">
                        Você acabou de dar um passo importante para entender como os
                        acordes são construídos. Continue praticando no seu ritmo. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}