import Link from "next/link";
import type { Metadata } from "next";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LessonSection from "@/components/learning/LessonSection";
import LearningObjectives from "@/components/learning/LearningObjectives";
import ConceptCard from "@/components/learning/ConceptCard";
import TheoryBlock from "@/components/learning/TheoryBlock";
import ChordFormula from "@/components/learning/ChordFormula";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Campo Harmônico no Violão | Guia Completo e Simplificado"
    },

    description:
        "Aprenda o que é campo harmônico, como os acordes são formados a partir da escala maior, quais são suas funções e como usar essa relação para entender músicas no violão.",

    keywords: [
        "campo harmônico",
        "campo harmônico no violão",
        "campo harmônico maior",
        "campo harmônico para iniciantes",
        "como montar campo harmônico",
        "graus do campo harmônico",
        "funções harmônicas",
        "acordes do campo harmônico"
    ],

    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/campo-harmonico"
    },

    openGraph: {
        title: "Campo Harmônico no Violão | Guia Completo",
        description:
            "Entenda como os acordes de uma tonalidade são formados, quais funções exercem e como essa organização ajuda a compreender músicas no violão.",
        url: "https://aprenderviolaoonline.com.br/campo-harmonico",
        siteName: "LearningGuitar 🎸",
        images: [
            {
                url: "https://aprenderviolaoonline.com.br/og-image.png",
                width: 1200,
                height: 630,
                alt: "Campo Harmônico — Guia de Violão e Teoria Musical"
            }
        ],
        locale: "pt_BR",
        type: "article"
    },

    twitter: {
        card: "summary_large_image",
        title: "Campo Harmônico no Violão | Guia Completo",
        description:
            "Aprenda campo harmônico de forma simples e entenda como os acordes de um tom se relacionam.",
        images: ["https://aprenderviolaoonline.com.br/og-image.png"],
        creator: "@LGuitarBr"
    }
};

const learningObjectives = [
    {
        icon: "🎼",
        title: "Entender o campo harmônico",
        description:
            "Compreender como os acordes de um tom são organizados a partir dos graus da escala."
    },
    {
        icon: "🎵",
        title: "Conhecer a sequência dos acordes",
        description:
            "Reconhecer o padrão de acordes maiores, menores e meio diminuto no campo harmônico maior."
    },
    {
        icon: "🎯",
        title: "Identificar funções harmônicas",
        description:
            "Entender a ideia de tônica, predominante e dominante dentro de uma tonalidade."
    },
    {
        icon: "🔎",
        title: "Relacionar acordes e tonalidade",
        description:
            "Perceber como os acordes podem ajudar a identificar o tom de uma música."
    },
    {
        icon: "🎸",
        title: "Aplicar no violão",
        description:
            "Usar o campo harmônico como ponto de partida para compreender e criar sequências de acordes."
    }
];

export default function CampoHarmonico() {
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
                            label: "Acordes com sétimas",
                            href: "/acordes-com-setimas"
                        },
                        { label: "Campo Harmônico" }
                    ]}
                />

                <LessonHero
                    category="🎼 TEORIA MUSICAL"
                    title="Campo Harmônico"
                    description="Entenda como os acordes de uma tonalidade são organizados a partir da escala maior, quais funções eles podem exercer e como essa relação ajuda você a compreender músicas no violão."
                    level="Iniciante → intermediário"
                    duration="Aproximadamente 15 minutos"
                    type="Teoria + prática"
                />

                <LearningObjectives
                    objectives={learningObjectives}
                />

                <div id="lesson-content" className="mt-12 space-y-10">

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="O que é um campo harmônico?"
                    >
                        <p>
                            Pense no campo harmônico como uma{" "}
                            <strong>família de acordes que pertence ao mesmo
                            tom</strong>
                            . Esses acordes não são escolhidos de forma
                            aleatória: eles são construídos a partir das notas
                            de uma escala.
                        </p>

                        <ConceptCard
                            icon="🏠"
                            title="Uma tonalidade como ponto de referência"
                        >
                            Se uma música está em <strong>C maior</strong>,
                            por exemplo, o campo harmônico reúne os acordes
                            construídos a partir das notas da escala de C
                            maior. Isso ajuda a entender quais acordes tendem
                            a aparecer juntos e como eles podem se relacionar.
                        </ConceptCard>

                        <p>
                            Nesta aula, vamos trabalhar principalmente com o{" "}
                            <strong>campo harmônico maior</strong>. Primeiro
                            vamos entender sua construção e depois observar o
                            papel dos acordes dentro dele.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Primeiro passo"
                        title="Começamos pela escala maior"
                    >
                        <p>
                            Para construir um campo harmônico maior, partimos
                            da <strong>escala maior</strong> da tonalidade que
                            queremos estudar.
                        </p>

                        <TheoryBlock title="Estrutura da escala maior">
                            <p className="text-center text-lg font-bold sm:text-xl">
                                Tom → Tom → Semitom → Tom → Tom → Tom → Semitom
                            </p>
                        </TheoryBlock>

                        <p>
                            No violão, um <strong>tom</strong> corresponde a
                            duas casas de distância, enquanto um{" "}
                            <strong>semitom</strong> corresponde a uma casa.
                        </p>

                        <ConceptCard
                            icon="💡"
                            title="Não confunda escala e campo harmônico"
                        >
                            A escala organiza <strong>notas</strong>. O campo
                            harmônico organiza os <strong>acordes</strong>{" "}
                            construídos a partir dessas notas.
                        </ConceptCard>

                        <p>
                            Se usamos a escala de <strong>C maior</strong>,
                            temos:
                        </p>

                        <TheoryBlock title="Escala de C maior">
                            <p className="text-center text-xl font-bold">
                                C – D – E – F – G – A – B
                            </p>
                        </TheoryBlock>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Construindo os acordes"
                        title="Cada grau gera um acorde"
                    >
                        <p>
                            Agora vem a ideia central: podemos construir um
                            acorde sobre cada grau da escala usando as notas
                            disponíveis dentro daquela tonalidade.
                        </p>

                        <ChordFormula
                            title="Padrão do campo harmônico maior"
                            formula="I – ii – iii – IV – V – vi – vii°"
                            description="A sequência de qualidades dos acordes é: maior, menor, menor, maior, maior, menor e diminuto."
                        />

                        <p>
                            No campo harmônico de <strong>C maior</strong>,
                            isso resulta em:
                        </p>

                        <TheoryBlock title="Campo Harmônico de C maior">
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">I</p>
                                    <p className="text-xl font-bold">C</p>
                                    <p className="text-sm text-gray-600">
                                        maior
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">ii</p>
                                    <p className="text-xl font-bold">Dm</p>
                                    <p className="text-sm text-gray-600">
                                        menor
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">iii</p>
                                    <p className="text-xl font-bold">Em</p>
                                    <p className="text-sm text-gray-600">
                                        menor
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">IV</p>
                                    <p className="text-xl font-bold">F</p>
                                    <p className="text-sm text-gray-600">
                                        maior
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">V</p>
                                    <p className="text-xl font-bold">G</p>
                                    <p className="text-sm text-gray-600">
                                        maior
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">vi</p>
                                    <p className="text-xl font-bold">Am</p>
                                    <p className="text-sm text-gray-600">
                                        menor
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center sm:col-span-2 lg:col-span-1">
                                    <p className="text-sm text-gray-500">
                                        vii°
                                    </p>
                                    <p className="text-xl font-bold">B°</p>
                                    <p className="text-sm text-gray-600">
                                        diminuto
                                    </p>
                                </div>
                            </div>
                        </TheoryBlock>

                        <ConceptCard
                            icon="🎯"
                            title="Guarde este padrão"
                        >
                            <strong>Maior – menor – menor – maior – maior –
                            menor – diminuto.</strong>{" "}
                            Esse padrão aparece quando construímos o campo
                            harmônico de qualquer escala maior.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conectando com a aula anterior"
                        title="E os acordes com sétima?"
                    >
                        <p>
                            Na aula anterior, vimos que uma tríade pode receber
                            uma sétima. Quando fazemos isso com os acordes do
                            campo harmônico maior, surge uma nova sequência de
                            acordes.
                        </p>

                        <TheoryBlock title="Campo Harmônico de C maior com sétimas">
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">I</p>
                                    <p className="text-xl font-bold">C7M</p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">ii</p>
                                    <p className="text-xl font-bold">Dm7</p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">iii</p>
                                    <p className="text-xl font-bold">Em7</p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">IV</p>
                                    <p className="text-xl font-bold">F7M</p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">V</p>
                                    <p className="text-xl font-bold">G7</p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                                    <p className="text-sm text-gray-500">vi</p>
                                    <p className="text-xl font-bold">Am7</p>
                                </div>

                                <div className="rounded-2xl bg-amber-50 p-4 text-center sm:col-span-2 lg:col-span-1">
                                    <p className="text-sm text-gray-500">
                                        viiø
                                    </p>
                                    <p className="text-xl font-bold">
                                        Bm7♭5
                                    </p>
                                </div>
                            </div>
                        </TheoryBlock>

                        <p>
                            Perceba que isso retoma diretamente o que vimos em{" "}
                            <Link
                                href="/acordes-com-setimas"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                acordes com sétima
                            </Link>
                            : as sétimas não aparecem de maneira aleatória.
                            Elas também podem ser organizadas de acordo com os
                            graus da tonalidade.
                        </p>

                        <ConceptCard
                            icon="💡"
                            title="Uma visão, não uma nova fórmula"
                        >
                            Você não precisa memorizar essa tabela inteira
                            agora. O importante é perceber que existe uma
                            organização por trás desses acordes.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="O papel dos acordes"
                        title="Tônica, predominante e dominante"
                    >
                        <p>
                            Além de saber quais acordes pertencem ao campo
                            harmônico, podemos observar o{" "}
                            <strong>papel que eles desempenham</strong>.
                        </p>

                        <TheoryBlock title="Três funções para começar">
                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                                    <p className="text-sm font-bold uppercase tracking-wide text-amber-700">
                                        Tônica
                                    </p>

                                    <p className="mt-2 text-xl font-bold">
                                        I
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        É o principal ponto de estabilidade e
                                        referência da tonalidade.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                                    <p className="text-sm font-bold uppercase tracking-wide text-amber-700">
                                        Predominante
                                    </p>

                                    <p className="mt-2 text-xl font-bold">
                                        ii / IV
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        Cria movimento e costuma conduzir em
                                        direção à dominante.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                                    <p className="text-sm font-bold uppercase tracking-wide text-amber-700">
                                        Dominante
                                    </p>

                                    <p className="mt-2 text-xl font-bold">
                                        V
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        Cria uma tensão que frequentemente
                                        conduz de volta à tônica.
                                    </p>
                                </div>
                            </div>
                        </TheoryBlock>

                        <p>
                            Em <strong>C maior</strong>, por exemplo, podemos
                            pensar em <strong>C</strong> como centro de
                            estabilidade, <strong>Dm</strong> ou{" "}
                            <strong>F</strong> como acordes de preparação e{" "}
                            <strong>G</strong> como dominante.
                        </p>

                        <ConceptCard
                            icon="🏠"
                            title="Uma forma simples de ouvir"
                        >
                            Pense na tônica como <strong>casa</strong>, na
                            predominante como o caminho que começa a afastar
                            você dela e na dominante como o momento de maior
                            expectativa antes do retorno.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aplicação prática"
                        title="Usando o campo harmônico para entender uma música"
                    >
                        <p>
                            O campo harmônico também pode ajudar quando você
                            encontra uma sequência de acordes e quer descobrir
                            em qual tonalidade ela pode estar.
                        </p>

                        <TheoryBlock title="Um exemplo em C maior">
                            <p className="text-center text-xl font-bold">
                                C → Am → F → G
                            </p>
                        </TheoryBlock>

                        <p>
                            Todos esses acordes pertencem ao campo harmônico de{" "}
                            <strong>C maior</strong>. Isso não significa,
                            porém, que qualquer música que contenha esses
                            acordes esteja necessariamente em C maior.
                        </p>

                        <ConceptCard
                            icon="🔎"
                            title="O campo harmônico é uma pista"
                        >
                            Para identificar uma tonalidade, não basta
                            encontrar um único acorde. É preciso observar o
                            conjunto de acordes, o contexto musical e,
                            principalmente, qual acorde funciona como centro
                            de repouso.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Outra descoberta"
                        title="Um mesmo acorde pode aparecer em vários tons"
                    >
                        <p>
                            Um acorde não pertence exclusivamente a uma única
                            tonalidade. Por exemplo, <strong>Dm</strong> pode
                            aparecer em diferentes campos harmônicos.
                        </p>

                        <TheoryBlock title="Onde encontramos Dm?">
                            <div className="grid gap-4 text-center sm:grid-cols-3">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        II grau
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        C maior
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        VI grau
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        F maior
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        III grau
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        Bb maior
                                    </p>
                                </div>
                            </div>
                        </TheoryBlock>

                        <p>
                            Por isso, descobrir o tom de uma música é um
                            exercício de observar as relações entre os acordes,
                            e não simplesmente procurar um acorde isolado.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Hora de praticar"
                        title="Teste sua compreensão"
                    >
                        <div className="space-y-4">
                            <ConceptCard
                                icon="🎯"
                                title="1. Qual é o V grau de C maior?"
                            >
                                <p>
                                    O V grau é <strong>G</strong>.
                                </p>
                            </ConceptCard>

                            <ConceptCard
                                icon="🎯"
                                title="2. Qual é o acorde do VI grau de C maior?"
                            >
                                <p>
                                    O VI grau é <strong>Am</strong>.
                                </p>
                            </ConceptCard>

                            <ConceptCard
                                icon="🎯"
                                title="3. Complete o campo harmônico"
                            >
                                <p>
                                    C – Dm – Em – F – G – Am –{" "}
                                    <strong>B°</strong>.
                                </p>
                            </ConceptCard>
                        </div>

                        <p className="mt-6">
                            Se você consegue reconhecer os graus e a qualidade
                            básica desses acordes, já está começando a
                            enxergar a lógica por trás de muitas sequências
                            musicais.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Resumo"
                        title="O que levar desta aula"
                    >
                        <div className="space-y-4">
                            <ConceptCard
                                icon="🎼"
                                title="Escala"
                            >
                                O campo harmônico maior é construído a partir
                                das notas de uma escala maior.
                            </ConceptCard>

                            <ConceptCard
                                icon="🎸"
                                title="Acordes"
                            >
                                Cada grau da escala pode gerar um acorde,
                                formando o padrão maior – menor – menor –
                                maior – maior – menor – diminuto.
                            </ConceptCard>

                            <ConceptCard
                                icon="🎯"
                                title="Funções"
                            >
                                Os acordes podem exercer diferentes papéis,
                                como tônica, predominante e dominante.
                            </ConceptCard>

                            <ConceptCard
                                icon="➡️"
                                title="Relações"
                            >
                                Entender essas relações ajuda a analisar
                                músicas e compreender por que determinadas
                                sequências de acordes funcionam juntas.
                            </ConceptCard>
                        </div>
                    </LessonSection>

                    <NextLesson
                        title="Progressões de acordes"
                        description="Agora que você entende como os acordes se organizam dentro de uma tonalidade, o próximo passo é descobrir como eles podem ser combinados em sequências musicais."
                        href="/progressoes-de-acordes"
                    />

                    <LessonNavigation
                        home={{
                            title: "Voltar para a trilha de iniciantes",
                            href: "/#beginner-path"
                        }}
                        previous={{
                            title: "Acordes com 7ª",
                            href: "/acordes-com-setimas"
                        }}
                        next={{
                            title: "Progressões de acordes",
                            href: "/progressoes-de-acordes"
                        }}
                    />

                    <p className="pb-4 text-center text-sm leading-6 text-gray-500">
                        Continue praticando: quanto mais você relacionar
                        escalas, acordes e graus, mais fácil será reconhecer a
                        estrutura das músicas que toca. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}