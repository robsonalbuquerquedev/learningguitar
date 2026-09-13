import type { Metadata } from "next";
import Link from "next/link";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LessonSection from "@/components/learning/LessonSection";
import LearningObjectives from "@/components/learning/LearningObjectives";
import ConceptCard from "@/components/learning/ConceptCard";
import TheoryBlock from "@/components/learning/TheoryBlock";
import ChordFormula from "@/components/learning/ChordFormula";
import ChordCard from "@/components/learning/ChordCard";
import ChordComparison from "@/components/learning/ChordComparison";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Acordes com Sétimas no Violão | Guia Completo e Explicado"
    },
    description:
        "Aprenda como são formados os acordes com sétima no violão: 7M, 7, m7 e m7♭5. Entenda suas fórmulas, compare suas estruturas e descubra como eles aparecem no campo harmônico.",
    keywords: [
        "acordes com sétimas",
        "acordes com 7",
        "acordes 7M",
        "acordes dominantes",
        "acordes menor com sétima",
        "acordes meio diminuto",
        "violão acordes com 7",
        "como montar acordes com 7",
        "campo harmônico com sétimas",
        "II V I"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/acordes-com-setimas"
    },
    openGraph: {
        title: "Acordes com Sétimas no Violão | Guia Completo",
        description:
            "Entenda como são formados os principais acordes com sétima e descubra como eles se relacionam dentro do campo harmônico.",
        url: "https://aprenderviolaoonline.com.br/acordes-com-setimas",
        images: ["/og-image.png"],
        type: "article",
        locale: "pt_BR",
        siteName: "LearningGuitar 🎸"
    },
    twitter: {
        card: "summary_large_image",
        title: "Acordes com Sétimas no Violão | Guia Completo",
        description:
            "Aprenda a montar e entender acordes com sétima no violão de forma simples e prática.",
        images: ["/og-image.png"],
        creator: "@LGuitarBr"
    }
};

const learningObjectives = [
    {
        icon: "🎸",
        title: "Entender a sétima",
        description:
            "Entender o que muda quando adicionamos uma sétima a uma tríade.",
    },
    {
        icon: "🎼",
        title: "Conhecer as fórmulas",
        description:
            "Conhecer as fórmulas dos acordes 7M, 7, m7 e m7♭5.",
    },
    {
        icon: "🔎",
        title: "Comparar os tipos",
        description:
            "Comparar os principais tipos de acordes com sétima e perceber suas diferenças.",
    },
    {
        icon: "🎹",
        title: "Relacionar ao campo harmônico",
        description:
            "Perceber como esses acordes aparecem dentro de um campo harmônico.",
    },
    {
        icon: "➡️",
        title: "Reconhecer o II–V–I",
        description:
            "Reconhecer uma progressão II–V–I simples e entender seu movimento de tensão e resolução.",
    },
];

export default function AcordesComSetimas() {
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
                            label: "Acordes com sétimas"
                        }
                    ]}
                />

                <LessonHero
                    category="🎸 FUNDAMENTOS DO VIOLÃO"
                    title="Acordes com Sétimas"
                    description="Descubra como uma nova nota pode transformar uma tríade em um acorde com mais movimento, tensão e personalidade."
                    level="Iniciante"
                    duration="Aproximadamente 15 minutos"
                    type="Teoria + prática"
                />

                <LearningObjectives
                    objectives={learningObjectives}
                />

                <div id="lesson-content">

                    {/* ------------------------------------------------ */}
                    {/* 1. INTRODUÇÃO                                    */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="O que muda quando adicionamos uma sétima?"
                    >
                        <p>
                            Na aula anterior, vimos que uma tríade básica é
                            construída usando a <strong>tônica</strong>, a{" "}
                            <strong>terça</strong> e a <strong>quinta</strong>.
                        </p>

                        <ChordFormula
                            title="A estrutura de uma tríade"
                            formula="1 – 3 – 5"
                            description="A tríade utiliza a tônica, a terça e a quinta da estrutura do acorde."
                        />

                        <p>
                            Agora vamos adicionar uma nova nota: a{" "}
                            <strong>sétima</strong>.
                        </p>

                        <ChordFormula
                            title="A ideia dos acordes com sétima"
                            formula="1 – 3 – 5 – 7"
                            description="Um acorde com sétima parte de uma tríade e acrescenta uma nova nota à estrutura."
                        />

                        <ConceptCard
                            icon="💡"
                            title="A ideia principal"
                        >
                            A sétima não substitui as notas da tríade. Ela é
                            adicionada à estrutura e pode mudar bastante a
                            sensação que o acorde produz.
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 2. SÉTIMA MAIOR                                  */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Primeiro tipo"
                        title="Acordes com sétima maior (7M)"
                    >
                        <p>
                            O acorde com <strong>sétima maior</strong> mantém a
                            estrutura da tríade maior e acrescenta o sétimo
                            grau da escala.
                        </p>

                        <ChordFormula
                            title="Fórmula do acorde 7M"
                            formula="1 – 3 – 5 – 7"
                            description="Tônica, terça maior, quinta e sétima maior."
                        />

                        <p>
                            Vamos usar C maior como exemplo. A tríade já
                            conhecida é:
                        </p>

                        <ChordFormula
                            title="Tríade de C maior"
                            formula="C – E – G"
                            description="Tônica, terça e quinta da tríade de C maior."
                        />

                        <p>
                            Adicionando o sétimo grau, B, chegamos a:
                        </p>

                        <ChordCard
                            name="C7M"
                            fullName="Dó maior com sétima maior"
                            quality="major"
                        />

                        <ChordFormula
                            title="C7M"
                            formula="C – E – G – B"
                            description="A tríade C maior recebe a sétima maior B."
                        />

                        <ConceptCard
                            icon="🎵"
                            title="Como pensar no 7M"
                        >
                            Primeiro pense na tríade. Depois acrescente a
                            sétima maior. O resultado é um acorde maior com
                            uma sonoridade mais rica e aberta.
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 3. SÉTIMA DOMINANTE                              */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Segundo tipo"
                        title="Acordes com sétima menor (7)"
                    >
                        <p>
                            Agora temos uma combinação muito importante na
                            harmonia: a tríade maior com uma{" "}
                            <strong>sétima menor</strong>.
                        </p>

                        <ChordFormula
                            title="Fórmula do acorde 7"
                            formula="1 – 3 – 5 – ♭7"
                            description="Tônica, terça maior, quinta e sétima menor."
                        />

                        <p>
                            Em C, isso produz:
                        </p>

                        <ChordCard
                            name="C7"
                            fullName="Dó com sétima"
                            quality="major"
                        />

                        <ChordFormula
                            title="C7"
                            formula="C – E – G – Bb"
                            description="A tríade C maior recebe a sétima menor Bb."
                        />

                        <TheoryBlock title="Por que ele é chamado de dominante?">
                            <p>
                                O acorde com fórmula{" "}
                                <strong>1 – 3 – 5 – ♭7</strong> é a estrutura
                                típica do <strong>acorde dominante com sétima</strong>.
                            </p>

                            <p className="mt-3">
                                Ele costuma criar uma sensação de{" "}
                                <strong>tensão</strong> que encontra repouso
                                quando segue para outro acorde, especialmente
                                para a tônica.
                            </p>
                        </TheoryBlock>

                        <ChordFormula
                            title="Um exemplo clássico"
                            formula="G7 → C"
                            description="G7 cria tensão e encontra repouso em C."
                        />

                        <ConceptCard
                            icon="🎯"
                            title="A ideia para ouvir"
                        >
                            Toque G → G7 → C. Perceba como G7 cria uma
                            expectativa de movimento antes de chegar novamente
                            a C.
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 4. COMPARAÇÃO                                    */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Compare as estruturas"
                        title="C, C7M e C7"
                    >
                        <p>
                            Agora podemos enxergar com clareza o que mudou.
                            Todos partem da mesma tônica, mas recebem estruturas
                            diferentes.
                        </p>

                        <ChordComparison
                            firstChord={{
                                name: "C7M",
                                fullName: "Dó maior com sétima maior",
                                notes: "C + E + G + B",
                                description:
                                    "A tríade maior recebe a sétima maior B."
                            }}
                            secondChord={{
                                name: "C7",
                                fullName: "Dó com sétima",
                                notes: "C + E + G + Bb",
                                description:
                                    "A tríade maior recebe a sétima menor Bb."
                            }}
                        />

                        <ChordFormula
                            title="A diferença principal"
                            formula="7M = 1 – 3 – 5 – 7  |  7 = 1 – 3 – 5 – ♭7"
                            description="A diferença entre os dois acordes está na altura da sétima."
                        />

                        <ConceptCard
                            icon="🧠"
                            title="Guarde esta ideia"
                        >
                            Em C7M temos <strong>B</strong>. Em C7 temos{" "}
                            <strong>Bb</strong>. A terça e a quinta continuam
                            iguais; quem mudou foi a sétima.
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 5. MENOR COM SÉTIMA                              */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Terceiro tipo"
                        title="Acordes menores com sétima (m7)"
                    >
                        <p>
                            Também podemos adicionar uma sétima a uma tríade
                            menor. Nesse caso, temos o acorde{" "}
                            <strong>menor com sétima</strong>.
                        </p>

                        <ChordFormula
                            title="Fórmula do acorde m7"
                            formula="1 – ♭3 – 5 – ♭7"
                            description="Tônica, terça menor, quinta e sétima menor."
                        />

                        <p>
                            Usando C como exemplo:
                        </p>

                        <ChordCard
                            name="Cm7"
                            fullName="Dó menor com sétima"
                            quality="minor"
                        />

                        <ChordFormula
                            title="Cm7"
                            formula="C – Eb – G – Bb"
                            description="A tríade C menor recebe a sétima menor Bb."
                        />

                        <TheoryBlock title="Compare com a tríade menor">
                            <p>
                                A tríade de C menor possui:
                            </p>

                            <p className="mt-3 text-center text-lg font-semibold">
                                C – Eb – G
                            </p>

                            <p className="mt-3">
                                Ao acrescentarmos Bb, temos:
                            </p>

                            <p className="mt-3 text-center text-lg font-semibold">
                                C – Eb – G – Bb
                            </p>
                        </TheoryBlock>

                        <ConceptCard
                            icon="🎸"
                            title="A lógica continua a mesma"
                        >
                            Assim como fizemos na aula anterior, começamos
                            identificando a tríade. Depois acrescentamos uma
                            nova nota à estrutura.
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 6. MEIO DIMINUTO                                 */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Um último tipo para reconhecer"
                        title="Acordes meio diminutos (m7♭5)"
                    >
                        <p>
                            Existe ainda um tipo importante de acorde com sétima que vale
                            reconhecer: o <strong>meio diminuto</strong>, geralmente
                            representado por <strong>m7♭5</strong>.
                        </p>

                        <ChordFormula
                            title="Fórmula do acorde m7♭5"
                            formula="1 – ♭3 – ♭5 – ♭7"
                            description="Tônica, terça menor, quinta diminuta e sétima menor."
                        />

                        <p>
                            No <strong>Bm7♭5</strong>, por exemplo, temos:
                        </p>

                        <ChordCard
                            name="Bm7♭5"
                            fullName="Si meio diminuto"
                            quality="minor"
                        />

                        <p>
                            Suas notas são <strong>B – D – F – A</strong>. Perceba que a
                            estrutura combina uma tríade menor com uma quinta diminuta e uma
                            sétima menor.
                        </p>

                        <ConceptCard
                            icon="💡"
                            title="Aqui, basta reconhecer"
                        >
                            Nesta aula, o objetivo é apenas identificar o
                            <strong> m7♭5</strong> e entender sua fórmula. Suas características,
                            aplicações e relação com outros acordes diminutos serão estudadas
                            com mais profundidade na aula de{" "}
                            <Link
                                href="/acordes-diminutos"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                acordes diminutos
                            </Link>
                            .
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 7. CAMPO HARMÔNICO                               */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Primeira conexão"
                        title="Onde esses acordes aparecem?"
                    >
                        <p>
                            Os acordes com sétima não aparecem de forma
                            aleatória. Eles podem ser construídos a partir dos
                            graus de uma escala e, assim, formar parte de um{" "}
                            <strong>campo harmônico</strong>.
                        </p>

                        <p>
                            Vamos observar apenas uma primeira visão usando a
                            escala de C maior:
                        </p>

                        <TheoryBlock title="Escala de C maior">
                            <p className="text-center text-lg font-semibold">
                                C → D → E → F → G → A → B
                            </p>
                        </TheoryBlock>

                        <p>
                            Quando construímos acordes com sétima sobre cada
                            grau, encontramos esta sequência:
                        </p>

                        <TheoryBlock title="Acordes com sétima em C maior">
                            <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        I
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        C7M
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        II
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        Dm7
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        III
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        Em7
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        IV
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        F7M
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        V
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        G7
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        VI
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        Am7
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        VII
                                    </p>
                                    <p className="mt-1 text-xl font-bold">
                                        Bm7♭5
                                    </p>
                                </div>
                            </div>
                        </TheoryBlock>

                        <ConceptCard
                            icon="🔎"
                            title="Uma primeira descoberta"
                        >
                            Observe que diferentes graus da mesma escala
                            produzem diferentes tipos de acordes com sétima.
                            Na próxima aula vamos entender por que isso
                            acontece e como essa organização forma o campo
                            harmônico.
                        </ConceptCard>

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                            <Link
                                href="/campo-harmonico"
                                className="inline-flex items-center font-semibold text-amber-700 transition hover:text-amber-900"
                            >
                                Entender o campo harmônico
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </Link>
                        </div>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 8. PROGRESSÕES                                   */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Colocando em prática"
                        title="Acordes com sétima em progressões"
                    >
                        <p>
                            Quando colocamos acordes com sétima em sequência,
                            podemos perceber diferentes sensações de movimento,
                            tensão e repouso.
                        </p>

                        <ChordFormula
                            title="Exemplo de progressão"
                            formula="C7M → Am7 → Dm7 → G7 → C7M"
                            description="Uma sequência que utiliza diferentes tipos de acordes com sétima dentro de C maior."
                        />

                        <TheoryBlock title="O que observar">
                            <p>
                                <strong>C7M</strong> transmite uma sensação de
                                estabilidade.
                            </p>

                            <p className="mt-3">
                                <strong>Am7</strong> e <strong>Dm7</strong>{" "}
                                acrescentam movimento à sequência.
                            </p>

                            <p className="mt-3">
                                <strong>G7</strong> cria uma tensão que prepara
                                o retorno para <strong>C7M</strong>.
                            </p>
                        </TheoryBlock>

                        <ConceptCard
                            icon="🎧"
                            title="Experimente ouvir a diferença"
                        >
                            Toque uma sequência usando acordes simples e depois
                            experimente suas versões com sétima. Perceba como
                            pequenas mudanças na estrutura podem alterar a
                            sensação da progressão.
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 9. II–V–I                                        */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Aplicando o que aprendemos"
                        title="Uma primeira descoberta: II–V–I"
                    >
                        <p>
                            Agora que conhecemos alguns acordes com sétima, podemos observar
                            como eles começam a se conectar em uma sequência muito importante
                            da harmonia tonal: a <strong>II–V–I</strong>.
                        </p>

                        <TheoryBlock title="II–V–I em C maior">
                            <p className="text-center text-xl font-bold">
                                Dm7 → G7 → C7M
                            </p>
                        </TheoryBlock>

                        <p>
                            Em <strong>C maior</strong>, o <strong>Dm7</strong> está no II
                            grau, o <strong>G7</strong> está no V grau e o{" "}
                            <strong>C7M</strong> está no I grau.
                        </p>

                        <TheoryBlock title="Como os acordes se conectam">
                            <div className="grid gap-4 text-center sm:grid-cols-3">
                                <div>
                                    <p className="text-sm text-gray-500">II</p>
                                    <p className="mt-1 text-xl font-bold">Dm7</p>
                                    <p className="text-sm text-gray-600">
                                        Preparação
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">V</p>
                                    <p className="mt-1 text-xl font-bold">G7</p>
                                    <p className="text-sm text-gray-600">
                                        Dominante
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">I</p>
                                    <p className="mt-1 text-xl font-bold">C7M</p>
                                    <p className="text-sm text-gray-600">
                                        Tônica
                                    </p>
                                </div>
                            </div>
                        </TheoryBlock>

                        <p>
                            O interessante está na direção da sequência: o{" "}
                            <strong>Dm7</strong> prepara o caminho, o <strong>G7</strong> cria
                            uma tensão maior e o <strong>C7M</strong> traz a sensação de
                            resolução.
                        </p>

                        <ConceptCard
                            icon="🎯"
                            title="Por enquanto, reconheça a ideia"
                        >
                            Você não precisa dominar as progressões II–V–I agora. O importante
                            é perceber que os acordes com sétima não existem apenas
                            isoladamente: eles podem formar relações que dão movimento à
                            harmonia.
                        </ConceptCard>

                        <p>
                            Na aula de{" "}
                            <Link
                                href="/progressoes-de-acordes"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                progressões de acordes
                            </Link>
                            , vamos aprofundar como diferentes acordes podem ser organizados
                            em sequências e como essas relações aparecem na prática.
                        </p>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 10. PRÁTICA                                      */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Hora de praticar"
                        title="Teste seu entendimento"
                    >
                        <ConceptCard
                            icon="🎯"
                            title="Desafio 1"
                        >
                            A tríade de C maior é{" "}
                            <strong>C + E + G</strong>. Qual nota devemos
                            acrescentar para formar C7M?
                        </ConceptCard>

                        <ConceptCard
                            icon="🎯"
                            title="Desafio 2"
                        >
                            C7 possui a fórmula{" "}
                            <strong>1 – 3 – 5 – ♭7</strong>. Quais notas formam
                            esse acorde?
                        </ConceptCard>

                        <ConceptCard
                            icon="🎯"
                            title="Desafio 3"
                        >
                            Qual é a sequência II–V–I em C maior?
                        </ConceptCard>

                        <ConceptCard
                            icon="💡"
                            title="Confira seu raciocínio"
                        >
                            <p>
                                No primeiro desafio, a resposta é{" "}
                                <strong>B</strong>, formando C7M:
                                <strong> C + E + G + B</strong>.
                            </p>

                            <p className="mt-3">
                                No segundo, temos{" "}
                                <strong>C + E + G + Bb</strong>.
                            </p>

                            <p className="mt-3">
                                No terceiro, temos{" "}
                                <strong>Dm7 → G7 → C7M</strong>.
                            </p>
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* 11. RESUMO                                       */}
                    {/* ------------------------------------------------ */}

                    <LessonSection
                        eyebrow="Resumo"
                        title="O que você aprendeu?"
                    >
                        <TheoryBlock title="Principais estruturas">
                            <p>
                                <strong>7M:</strong> 1 – 3 – 5 – 7.
                            </p>

                            <p className="mt-3">
                                <strong>7:</strong> 1 – 3 – 5 – ♭7.
                            </p>

                            <p className="mt-3">
                                <strong>m7:</strong> 1 – ♭3 – 5 – ♭7.
                            </p>

                            <p className="mt-3">
                                <strong>m7♭5:</strong> 1 – ♭3 – ♭5 – ♭7.
                            </p>
                        </TheoryBlock>

                        <ConceptCard
                            icon="🧠"
                            title="A ideia para levar com você"
                        >
                            Um acorde com sétima não é uma combinação aleatória.
                            Ele nasce de uma estrutura que você já conhece:
                            a tríade. A sétima acrescenta uma nova camada e
                            pode mudar a sensação do acorde.
                        </ConceptCard>

                        <ConceptCard
                            icon="🎸"
                            title="O próximo passo"
                        >
                            Agora que você já conhece os principais acordes com
                            sétima, chegou a hora de descobrir por que eles
                            aparecem juntos dentro de uma tonalidade.
                        </ConceptCard>
                    </LessonSection>

                    {/* ------------------------------------------------ */}
                    {/* PRÓXIMA AULA                                     */}
                    {/* ------------------------------------------------ */}

                    <div className="pb-10 md:pb-14">
                        <NextLesson
                            title="Campo Harmônico"
                            description="Agora vamos descobrir como os acordes são organizados a partir dos graus de uma escala e por que cada tonalidade possui uma combinação própria de acordes."
                            href="/campo-harmonico"
                        />
                    </div>

                    <LessonNavigation
                        home={{
                            title: "Voltar para a trilha de iniciantes",
                            href: "/#beginner-path"
                        }}
                        previous={{
                            title: "Formação de acordes",
                            href: "/formacao-de-acordes"
                        }}
                        next={{
                            title: "Campo Harmônico",
                            href: "/campo-harmonico"
                        }}
                    />

                    <p className="pb-6 text-center text-sm text-gray-500">
                        Você acabou de adicionar uma nova camada à sua visão
                        sobre os acordes. Continue praticando e perceba como
                        pequenas mudanças na estrutura podem transformar a
                        sonoridade. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}