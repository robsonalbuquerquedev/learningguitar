import type { Metadata } from "next";
import Link from "next/link";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LessonSection from "@/components/learning/LessonSection";
import LearningObjectives from "@/components/learning/LearningObjectives";
import ConceptCard from "@/components/learning/ConceptCard";
import ChordGrid from "@/components/learning/ChordGrid";
import ChordComparison from "@/components/learning/ChordComparison";
import TheoryBlock from "@/components/learning/TheoryBlock";
import FretboardVisualization from "@/components/learning/FretboardVisualization";
import AccidentalsBlock from "@/components/learning/AccidentalsBlock";
import PracticePath from "@/components/learning/PracticePath";
import PracticeChallenge from "@/components/learning/PracticeChallenge";
import LessonSummary from "@/components/learning/LessonSummary";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute:
            "Acordes Maiores e Menores Naturais | Guia Simples para Violão"
    },

    description:
        "Aprenda como formar e tocar acordes maiores e menores naturais no violão. Guia claro e direto para iniciantes, com explicações simples e aplicações práticas na música.",

    keywords: [
        "acordes maiores",
        "acordes menores",
        "acordes naturais",
        "acordes para violão",
        "como montar acordes",
        "acordes básicos violão",
        "acordes para iniciantes",
        "violão acordes naturais",
        "harmonia básica no violão"
    ],

    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/acordes-maiores-e-menores-naturais"
    },

    openGraph: {
        title:
            "Acordes Maiores e Menores Naturais | Guia Completo para Violão",
        description:
            "Aprenda os acordes naturais maiores e menores no violão com explicações simples, exemplos e aplicações práticas para iniciantes.",
        url:
            "https://aprenderviolaoonline.com.br/acordes-maiores-e-menores-naturais",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Acordes Maiores e Menores Naturais no Violão"
            }
        ],
        type: "article",
        locale: "pt_BR",
        siteName: "LearningGuitar 🎸"
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Acordes Maiores e Menores Naturais | Guia para Violão",
        description:
            "Entenda como montar e tocar acordes maiores e menores naturais no violão, com explicações fáceis para quem está começando.",
        images: ["/og-image.png"],
        creator: "@LGuitarBr"
    }
};

const learningObjectives = [
    {
        icon: "🎵",
        title: "O que é um acorde",
        description:
            "Entenda como diferentes notas podem soar juntas e formar um acorde."
    },
    {
        icon: "🎶",
        title: "Maior ou menor?",
        description:
            "Aprenda a diferença entre acordes como C e Cm e entenda o significado do m."
    },
    {
        icon: "🎸",
        title: "Os acordes naturais",
        description:
            "Conheça C, D, E, F, G, A e B, os principais acordes naturais maiores."
    },
    {
        icon: "🖐️",
        title: "Como começar a praticar",
        description:
            "Descubra uma sequência simples de acordes para começar sem tentar aprender tudo de uma vez."
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
    },
    {
        name: "Am",
        fullName: "Lá menor",
        quality: "minor" as const
    },
    {
        name: "Bm",
        fullName: "Si menor",
        quality: "minor" as const
    }
];

const practiceSteps = [
    {
        label: "Primeiro",
        title: "Comece com quatro acordes",
        chords: ["C", "G", "Am", "Em"],
        description:
            "Pratique cada acorde separadamente. Depois, tente alternar entre eles lentamente, prestando atenção à posição dos dedos e à clareza do som."
    },
    {
        label: "Depois",
        title: "Amplie seu repertório",
        chords: ["D", "A", "E"],
        description:
            "Quando os primeiros acordes estiverem mais confortáveis, acrescente novas posições e pratique as mudanças sem pressa."
    },
    {
        label: "Mais adiante",
        title: "Enfrente acordes mais difíceis",
        chords: ["F", "Bm"],
        description:
            "Algumas posições exigem mais força, coordenação e prática. Deixe esses acordes para quando sua mão já estiver mais acostumada."
    }
];

const summaryItems = [
    "Um acorde é uma combinação de notas que soam juntas.",
    "C representa Dó maior, enquanto Cm representa Dó menor.",
    "A letra m indica que o acorde é menor.",
    "Os acordes naturais maiores são C, D, E, F, G, A e B.",
    "Os acordes naturais menores são Cm, Dm, Em, Fm, Gm, Am e Bm.",
    "Sustenidos e bemóis representam alterações de um semitom.",
    "C# e Db, por exemplo, podem representar a mesma altura sonora.",
    "Você não precisa aprender todos os acordes de uma vez: comece com poucos e pratique as mudanças."
];

export default function AcordesMaioresEMenoresNaturais() {
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
                            label: "Acordes"
                        }
                    ]}
                />

                <LessonHero
                    category="🎸 FUNDAMENTOS DO VIOLÃO"
                    title="Acordes Maiores e Menores Naturais"
                    description="Entenda o que são acordes, descubra a diferença entre maiores e menores e conheça os acordes naturais que aparecem em milhares de músicas no violão."
                    level="Iniciante"
                    duration="Aproximadamente 10 minutos"
                    type="Teoria + prática"
                />

                <LearningObjectives
                    objectives={learningObjectives}
                />

                <div id="lesson-content">
                    <LessonSection
                        eyebrow="Antes de começar"
                        title="Você não precisa saber tudo"
                    >
                        <p>
                            Para acompanhar esta aula, você não precisa dominar
                            teoria musical. Se já consegue segurar o violão,
                            pressionar algumas cordas e reconhece as letras de
                            A a G usadas nas cifras, já pode começar.
                        </p>

                        <ConceptCard
                            icon="💡"
                            title="Uma dica importante"
                        >
                            Não tente decorar todos os acordes de uma vez.
                            Primeiro entenda a lógica. Depois, pratique
                            algumas posições até que seus dedos comecem a
                            memorizar os movimentos naturalmente.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Primeiro conceito"
                        title="O que é um acorde?"
                    >
                        <p>
                            Imagine que cada nota musical é uma pessoa. Uma
                            pessoa sozinha produz uma voz. Quando várias
                            pessoas cantam juntas, elas podem formar uma
                            combinação harmoniosa.
                        </p>

                        <p>
                            Com os acordes acontece algo parecido: várias
                            notas são combinadas para produzir um determinado
                            resultado sonoro.
                        </p>

                        <TheoryBlock title="A ideia principal">
                            <p>
                                <strong>
                                    Acorde é uma combinação de notas que soam
                                    juntas.
                                </strong>
                            </p>

                            <p className="mt-3">
                                Por exemplo, o acorde C maior é formado pelas
                                notas C, E e G. No violão, algumas dessas notas
                                podem aparecer mais de uma vez em diferentes
                                cordas.
                            </p>
                        </TheoryBlock>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Entendendo a diferença"
                        title="Maior ou menor?"
                    >
                        <p>
                            Uma das primeiras diferenças que você encontrará
                            nas cifras é entre acordes maiores e menores.
                        </p>

                        <p>
                            Veja um exemplo simples:
                        </p>

                        <ChordComparison
                            firstChord={{
                                name: "C",
                                fullName: "Dó maior",
                                notes: "C + E + G",
                                description:
                                    "É o acorde de Dó maior. A ausência da letra m indica que estamos falando da forma maior."
                            }}
                            secondChord={{
                                name: "Cm",
                                fullName: "Dó menor",
                                notes: "C + Eb + G",
                                description:
                                    "É o acorde de Dó menor. A letra m indica que o acorde é menor e sua combinação de notas é diferente."
                            }}
                        />

                        <p>
                            Os acordes maiores e menores possuem características
                            sonoras diferentes. Muitas vezes os maiores são
                            percebidos como mais abertos ou brilhantes, enquanto
                            os menores podem transmitir uma sensação mais
                            introspectiva. A emoção, porém, depende também da
                            música e do contexto.
                        </p>

                        <ConceptCard
                            icon="🔎"
                            title="Preste atenção na cifra"
                        >
                            Quando você encontrar <strong>C</strong>, estamos
                            falando de Dó maior. Quando encontrar{" "}
                            <strong>Cm</strong>, o <strong>m</strong> indica Dó
                            menor.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Sua primeira referência"
                        title="Os 7 acordes naturais"
                    >
                        <p>
                            As notas naturais são representadas pelas letras
                            A, B, C, D, E, F e G. A partir delas, temos os sete
                            acordes naturais maiores:
                        </p>

                        <ChordGrid chords={naturalMajorChords} />

                        <p>
                            Esses acordes aparecem constantemente em músicas e
                            são uma ótima base para quem está começando a
                            aprender violão.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Agora com o m"
                        title="E os acordes menores?"
                    >
                        <p>
                            A lógica fica simples quando você entende o
                            significado da letra <strong>m</strong>. Ela
                            identifica a versão menor do acorde.
                        </p>

                        <ChordGrid chords={naturalMinorChords} />

                        <ConceptCard
                            icon="🎯"
                            title="A regra que você deve guardar"
                        >
                            <strong>
                                C → Dó maior
                                <br />
                                Cm → Dó menor
                            </strong>

                            <p className="mt-2">
                                A mesma ideia aparece em outros acordes:
                                G/Gm, A/Am, E/Em e assim por diante.
                            </p>
                        </ConceptCard>

                        <p>
                            Existem ainda outros tipos de acordes que adicionam novas sonoridades,
                            como os acordes com sétima. Se você quiser dar o próximo passo,
                            pode conhecer os{" "}
                            <Link
                                href="/acordes-com-setimas"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                acordes com sétima
                            </Link>
                            , enquanto aqui o foco continua sendo entender a diferença fundamental
                            entre acordes maiores e menores.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Indo um pouco além"
                        title="Como os acordes são formados?"
                    >
                        <p>
                            Agora que você já sabe diferenciar C de Cm, podemos
                            observar uma pequena parte da lógica por trás dessa
                            diferença.
                        </p>

                        <TheoryBlock
                            title="Exemplo: C maior e C menor"
                            icon="🎼"
                        >
                            <p>
                                <strong>C maior:</strong> C + E + G
                            </p>

                            <p className="mt-2">
                                <strong>C menor:</strong> C + Eb + G
                            </p>

                            <p className="mt-3">
                                Perceba que duas notas permanecem iguais. A
                                diferença está na nota do meio: E passa para
                                Eb. Essa alteração muda a característica do
                                acorde.
                            </p>
                        </TheoryBlock>

                        <p>
                            Essa é apenas uma introdução à formação dos acordes.
                            Mais adiante, você poderá entender com detalhes
                            intervalos, terças, fórmulas e outras estruturas da
                            harmonia.
                        </p>

                        <div className="pt-2">
                            <Link
                                href="/formacao-de-acordes"
                                className="inline-flex items-center font-semibold text-amber-700 transition hover:text-amber-900"
                            >
                                Entender como os acordes são formados
                                <span
                                    className="ml-2"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </Link>
                        </div>

                    </LessonSection>

                    <LessonSection
                        eyebrow="Ligando teoria e instrumento"
                        title="Como isso aparece no braço do violão?"
                    >
                        <p>
                            No violão, cada casa representa um avanço de um
                            semitom. Isso ajuda a visualizar a relação entre
                            notas naturais e notas alteradas.
                        </p>

                        <FretboardVisualization />

                        <p>
                            Se você avançar uma casa, sobe um semitom. Por
                            exemplo: C → C# → D.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Complemento de teoria"
                        title="Sustenidos, bemóis e enarmonia"
                    >
                        <p>
                            Agora que você já entende a ideia de semitom, fica
                            mais fácil compreender os símbolos{" "}
                            <strong>#</strong> e <strong>♭</strong>.
                        </p>

                        <AccidentalsBlock />

                        <p>
                            C# e Db, por exemplo, podem representar a mesma
                            altura sonora. O nome escolhido depende do contexto
                            musical.
                        </p>

                        <ConceptCard
                            icon="🧠"
                            title="Não precisa memorizar tudo agora"
                        >
                            Neste momento, basta reconhecer que sustenido e
                            bemol representam alterações de um semitom e que
                            algumas notas podem receber nomes diferentes para a
                            mesma altura sonora.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Hora de praticar"
                        title="Por onde começar a praticar?"
                    >
                        <p>
                            Você não precisa tentar aprender os 14 acordes
                            apresentados nesta aula imediatamente.
                        </p>

                        <p>
                            Uma estratégia melhor é aprender alguns acordes,
                            praticar suas posições e depois trabalhar as
                            mudanças entre eles.
                        </p>

                        <PracticePath steps={practiceSteps} />

                        <ConceptCard
                            icon="🎸"
                            title="O objetivo não é velocidade"
                        >
                            No começo, procure formar o acorde corretamente e
                            produzir um som limpo. Depois, pratique a mudança
                            para outro acorde. A velocidade vem naturalmente
                            com a repetição.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Verifique seu aprendizado"
                        title="Mini desafio"
                    >
                        <PracticeChallenge />
                    </LessonSection>

                    <div className="py-10 md:py-14">
                        <LessonSummary items={summaryItems} />
                    </div>

                    <div className="pb-10 md:pb-14">
                        <NextLesson
                            title="Aprender como os acordes são formados"
                            description="Agora que você conhece os acordes maiores e menores naturais, chegou a hora de entender como eles são construídos e por que uma pequena alteração nas notas pode mudar o tipo de acorde."
                            href="/formacao-de-acordes"
                        />
                    </div>
                </div>

                <LessonNavigation
                    home={{
                        title: "Voltar para a trilha de iniciantes",
                        href: "/#beginner-path"
                    }}
                    next={{
                        title: "Formação de Acordes",
                        href: "/formacao-de-acordes"
                    }}
                />

                <p className="pb-6 text-center text-sm text-gray-500">
                    Você está construindo sua base. Continue no seu ritmo. 🎸
                </p>
            </div>
        </main>
    );
}