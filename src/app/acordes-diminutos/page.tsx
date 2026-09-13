import type { Metadata } from "next";
import Link from "next/link";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LessonSection from "@/components/learning/LessonSection";
import LearningObjectives from "@/components/learning/LearningObjectives";
import ConceptCard from "@/components/learning/ConceptCard";
import ChordGridDiMinutos from "@/components/learning/ChordGridDiMinutos";
import ChordComparisonDiMinutos from "@/components/learning/ChordComparisonDiMinutos";
import TheoryBlock from "@/components/learning/TheoryBlock";
import PracticePath from "@/components/learning/PracticePath";
import PracticeChallengeDiMinutos from "@/components/learning/PracticeChallengeDiMinutos";
import LessonSummary from "@/components/learning/LessonSummary";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute:
            "Acordes Diminutos e Meio-Diminuto | Harmonia Aplicada no Violão",
    },

    description:
        "Entenda como funcionam os acordes diminutos e meio-diminutos (m7♭5), suas fórmulas, funções harmônicas e aplicações práticas no violão.",

    keywords: [
        "acorde diminuto",
        "acorde diminuto violão",
        "acordes diminutos",
        "acorde dim7",
        "acorde diminuto com sétima",
        "acorde meio diminuto",
        "acorde m7b5",
        "acorde meio-diminuto violão",
        "como usar acordes diminutos",
        "função do acorde diminuto",
        "harmonia no violão",
        "acordes de passagem",
    ],

    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/acordes-diminutos",
    },

    openGraph: {
        title:
            "Acordes Diminutos e Meio-Diminuto | Harmonia Aplicada no Violão",

        description:
            "Aprenda a identificar, montar e aplicar acordes diminutos e meio-diminutos no violão, entendendo suas tensões e resoluções harmônicas.",

        url: "https://aprenderviolaoonline.com.br/acordes-diminutos",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt:
                    "Acordes diminutos e meio-diminuto — Harmonia Aplicada no Violão",
            },
        ],

        type: "article",
        locale: "pt_BR",
        siteName: "LearningGuitar 🎸",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Acordes Diminutos e Meio-Diminuto | Harmonia Aplicada no Violão",

        description:
            "Entenda a estrutura e a aplicação dos acordes diminutos e meio-diminutos no violão.",

        images: ["/og-image.png"],
        creator: "@LGuitarBr",
    },
};

export default function AcordesDeMinutos() {
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
                            label: "Acordes",
                            href: "/acordes-maiores-e-menores-naturais",
                        },
                        {
                            label: "Diminutos e meio-diminuto",
                        },
                    ]}
                />

                <LessonHero
                    category="Harmonia aplicada"
                    title="Acordes diminutos e meio-diminuto"
                    description="Entenda por que esses acordes criam tanta tensão, para onde eles costumam conduzir e como usá-los para criar movimentos harmônicos mais interessantes no violão."
                    level="Intermediário → Avançado"
                    duration="15 min"
                    type="Teoria + prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🔎",
                                title: "Reconhecer",
                                description:
                                    "Identificar acordes diminutos e meio-diminutos em cifras e progressões.",
                            },
                            {
                                icon: "🧩",
                                title: "Entender a estrutura",
                                description:
                                    "Compreender as fórmulas dos acordes diminutos com sétima e meio-diminutos.",
                            },
                            {
                                icon: "🎯",
                                title: "Compreender a função",
                                description:
                                    "Perceber como tensão e resolução criam movimento harmônico.",
                            },
                            {
                                icon: "🎸",
                                title: "Aplicar no violão",
                                description:
                                    "Usar esses acordes como conexões e preparações entre outros acordes.",
                            },
                            {
                                icon: "🎼",
                                title: "Reconhecer progressões",
                                description:
                                    "Entender o movimento Bm7♭5 → E7 → Am.",
                            },
                        ]}
                    />

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="O que torna esses acordes diferentes?"
                    >
                        <p>
                            Alguns acordes parecem ter uma função especial: eles
                            não soam completamente estáveis e criam uma forte
                            sensação de que{" "}
                            <strong>alguma coisa precisa acontecer em seguida</strong>.
                        </p>

                        <p>
                            É justamente aí que entram os acordes{" "}
                            <strong>diminutos</strong> e{" "}
                            <strong>meio-diminutos</strong>.
                        </p>

                        <ConceptCard
                            icon="🎯"
                            title="Pense neles como tensão em movimento"
                        >
                            Esses acordes são especialmente úteis quando
                            queremos criar uma sensação de movimento e conduzir
                            o ouvido para outro acorde.
                        </ConceptCard>

                        <p>
                            Na aula anterior, em{" "}
                            <Link
                                href="/acordes-com-setimas"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                acordes com sétimas
                            </Link>
                            , você conheceu o <strong>m7♭5</strong> apenas como
                            uma estrutura que precisava ser reconhecida.
                        </p>

                        <p>
                            Agora vamos dar o próximo passo: entender{" "}
                            <strong>como essa estrutura funciona musicalmente</strong>.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Primeiro conceito"
                        title="Acordes diminutos (°)"
                    >
                        <p>
                            O acorde diminuto é formado por uma tríade diminuta.
                            Quando acrescentamos uma sétima diminuta, temos o
                            acorde diminuto com sétima, representado por{" "}
                            <strong>°7</strong>.
                        </p>

                        <TheoryBlock title="Fórmula do acorde diminuto com sétima">
                            <p>
                                <strong>1 – ♭3 – ♭5 – 𝄫7</strong>
                            </p>

                            <p className="mt-2">
                                Tônica, terça menor, quinta diminuta e sétima
                                diminuta.
                            </p>
                        </TheoryBlock>

                        <p>
                            Alguns exemplos de acordes diminutos com sétima:
                        </p>

                        <ChordGridDiMinutos
                            chords={[
                                {
                                    name: "E°7",
                                    fullName: "Mi diminuto com sétima",
                                    quality: "diminished",
                                },
                                {
                                    name: "F#°7",
                                    fullName:
                                        "Fá sustenido diminuto com sétima",
                                    quality: "diminished",
                                },
                                {
                                    name: "G#°7",
                                    fullName:
                                        "Sol sustenido diminuto com sétima",
                                    quality: "diminished",
                                },
                                {
                                    name: "A°7",
                                    fullName: "Lá diminuto com sétima",
                                    quality: "diminished",
                                },
                            ]}
                        />

                        <ConceptCard
                            icon="🧲"
                            title="A sensação de 'puxar'"
                        >
                            A sonoridade do diminuto cria uma forte expectativa
                            de resolução. Por isso, ele aparece com frequência
                            como acorde de passagem ou preparação.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Estrutura"
                        title="Por que o diminuto soa tão tenso?"
                    >
                        <p>
                            Uma das razões está na presença de intervalos
                            pequenos entre algumas de suas notas. Esses
                            intervalos aumentam a sensação de instabilidade.
                        </p>

                        <TheoryBlock title="A ideia essencial">
                            <p>
                                <strong>Tensão → movimento → resolução</strong>
                            </p>

                            <p className="mt-2">
                                O acorde diminuto ganha sentido quando
                                percebemos a direção para a qual ele conduz.
                            </p>
                        </TheoryBlock>

                        <p>
                            Por exemplo, podemos utilizar um acorde diminuto
                            para conectar acordes através de um movimento de
                            semitom:
                        </p>

                        <ChordComparisonDiMinutos
                            firstChord={{
                                label: "Diminuto",
                                name: "E°7",
                                fullName: "Mi diminuto com sétima",
                                notes: "E – G – B♭ – D♭",
                                description:
                                    "Cria uma sensação de tensão que pode conduzir o ouvido para o próximo acorde.",
                            }}
                            secondChord={{
                                label: "Resolução",
                                name: "Fm",
                                fullName: "Fá menor",
                                notes: "F – A♭ – C",
                                description:
                                    "A chegada ao acorde menor produz a sensação de resolução desse movimento.",
                            }}
                        />

                        <p>
                            O importante aqui não é decorar uma lista de
                            combinações. É perceber que o diminuto pode
                            funcionar como uma espécie de{" "}
                            <strong>ponte harmônica</strong>.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Segundo conceito"
                        title="Acordes meio-diminutos (m7♭5)"
                    >
                        <p>
                            O acorde meio-diminuto é representado por{" "}
                            <strong>m7♭5</strong> ou pelo símbolo{" "}
                            <strong>ø</strong>.
                        </p>

                        <TheoryBlock title="Fórmula do acorde meio-diminuto">
                            <p>
                                <strong>1 – ♭3 – ♭5 – ♭7</strong>
                            </p>

                            <p className="mt-2">
                                Tônica, terça menor, quinta diminuta e sétima
                                menor.
                            </p>
                        </TheoryBlock>

                        <p>
                            Um exemplo conhecido é o <strong>Bm7♭5</strong>:
                        </p>

                        <ChordGridDiMinutos
                            chords={[
                                {
                                    name: "Bm7♭5",
                                    fullName: "Si meio-diminuto",
                                    quality: "half-diminished",
                                },
                            ]}
                        />

                        <p>
                            Suas notas são <strong>B – D – F – A</strong>.
                        </p>

                        <p>
                            Perceba a diferença em relação ao diminuto com
                            sétima: aqui temos uma{" "}
                            <strong>sétima menor</strong>, e não uma sétima
                            diminuta.
                        </p>

                        <ConceptCard
                            icon="💡"
                            title="Uma diferença que vale guardar"
                        >
                            <strong>°7</strong> e <strong>m7♭5</strong> possuem
                            estruturas diferentes. O primeiro possui sétima
                            diminuta; o segundo possui sétima menor.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Comparando"
                        title="Diminuto e meio-diminuto não são a mesma coisa"
                    >
                        <ChordComparisonDiMinutos
                            firstChord={{
                                label: "Diminuto",
                                name: "°7",
                                fullName: "Diminuto com sétima",
                                notes: "1 – ♭3 – ♭5 – 𝄫7",
                                description:
                                    "Possui sétima diminuta e apresenta uma estrutura especialmente simétrica.",
                            }}
                            secondChord={{
                                label: "Meio-diminuto",
                                name: "m7♭5",
                                fullName: "Meio-diminuto",
                                notes: "1 – ♭3 – ♭5 – ♭7",
                                description:
                                    "Possui sétima menor e aparece com frequência em funções de preparação dentro da harmonia menor.",
                            }}
                        />

                        <p>
                            A diferença está principalmente na sétima. Parece
                            um detalhe pequeno no papel, mas muda a estrutura e
                            o comportamento do acorde.
                        </p>

                        <ConceptCard
                            icon="🎸"
                            title="Não decore apenas os símbolos"
                        >
                            Quando encontrar <strong>°7</strong> ou{" "}
                            <strong>m7♭5</strong>, tente pensar primeiro na
                            fórmula. Isso ajuda a entender o acorde mesmo
                            quando você ainda não conhece sua posição no braço.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aplicação harmônica"
                        title="O meio-diminuto preparando o dominante"
                    >
                        <p>
                            Uma das aplicações mais importantes do{" "}
                            <strong>m7♭5</strong> aparece no campo harmônico
                            menor.
                        </p>

                        <p>
                            Em <strong>Lá menor</strong>, por exemplo, o{" "}
                            <strong>Bm7♭5</strong> pode conduzir para{" "}
                            <strong>E7</strong>, que por sua vez resolve em{" "}
                            <strong>Am</strong>.
                        </p>

                        <TheoryBlock title="Uma sequência para ouvir">
                            <p>
                                <strong>Bm7♭5 → E7 → Am</strong>
                            </p>

                            <p className="mt-2">
                                Meio-diminuto → dominante → tônica menor.
                            </p>
                        </TheoryBlock>

                        <p>
                            Aqui temos uma sequência muito importante para
                            compreender a harmonia funcional:
                        </p>

                        <ChordComparisonDiMinutos
                            firstChord={{
                                label: "Preparação",
                                name: "Bm7♭5",
                                fullName: "Si meio-diminuto",
                                notes: "B – D – F – A",
                                description:
                                    "Atua como preparação do acorde dominante.",
                            }}
                            secondChord={{
                                label: "Dominante",
                                name: "E7",
                                fullName: "Mi com sétima",
                                notes: "E – G# – B – D",
                                description:
                                    "O dominante aumenta a tensão e conduz para Am.",
                            }}
                        />

                        <ConceptCard
                            icon="🎯"
                            title="A ideia por trás da sequência"
                        >
                            O Bm7♭5 não precisa ser entendido como um acorde
                            isolado. Ele participa de um movimento maior que
                            conduz o ouvido até o Am.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Hora de aplicar"
                        title="Como começar a praticar"
                    >
                        <PracticePath
                            steps={[
                                {
                                    label: "Etapa 1",
                                    title: "Reconheça",
                                    chords: ["°7", "m7♭5"],
                                    description:
                                        "Identifique se o acorde é diminuto ou meio-diminuto.",
                                },
                                {
                                    label: "Etapa 2",
                                    title: "Monte",
                                    chords: ["1", "♭3", "♭5", "♭7"],
                                    description:
                                        "Use a fórmula para descobrir as notas do acorde.",
                                },
                                {
                                    label: "Etapa 3",
                                    title: "Ouça",
                                    chords: ["Bm7♭5", "E7", "Am"],
                                    description:
                                        "Toque a sequência e perceba a sensação de tensão e resolução.",
                                },
                                {
                                    label: "Etapa 4",
                                    title: "Resolva",
                                    chords: ["E°7", "Fm"],
                                    description:
                                        "Experimente um acorde diminuto como passagem e observe a mudança de sensação.",
                                },
                            ]}
                        />
                    </LessonSection>

                    <LessonSection
                        eyebrow="Desafio"
                        title="Teste seu conhecimento"
                    >
                        <PracticeChallengeDiMinutos />
                    </LessonSection>

                    <LessonSection
                        eyebrow="Para guardar"
                        title="O que você aprendeu"
                    >
                        <LessonSummary
                            items={[
                                "O acorde diminuto pode ser usado para criar tensão e movimento.",
                                "O diminuto com sétima possui a fórmula 1 – ♭3 – ♭5 – 𝄫7.",
                                "O meio-diminuto possui a fórmula 1 – ♭3 – ♭5 – ♭7.",
                                "O símbolo ø representa o acorde meio-diminuto.",
                                "O m7♭5 aparece com frequência preparando um acorde dominante.",
                                "Bm7♭5 → E7 → Am é um exemplo importante de preparação e resolução.",
                            ]}
                        />
                    </LessonSection>

                    <NextLesson
                        title="Explorar escalas"
                        description="Agora que você entende como esses acordes criam tensão e movimento, o próximo passo é perceber como as escalas ajudam a explicar suas notas, funções e possibilidades de aplicação."
                        href="/escalas"
                    />

                    <LessonNavigation
                        previous={{
                            title: "Acordes com sétimas",
                            href: "/acordes-com-setimas",
                        }}
                        home={{
                            title: "Voltar para a trilha de iniciantes",
                            href: "/#beginner-path"
                        }}
                        next={{
                            title: "Escalas",
                            href: "/escalas",
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: mais importante do que decorar acordes diminutos é
                        entender a tensão que eles criam e para onde ela pode resolver. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}