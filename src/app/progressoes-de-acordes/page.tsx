import Link from "next/link";
import type { Metadata } from "next";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LessonSection from "@/components/learning/LessonSection";
import LearningObjectives from "@/components/learning/LearningObjectives";
import ConceptCard from "@/components/learning/ConceptCard";
import TheoryBlock from "@/components/learning/TheoryBlock";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute:
            "Progressões de Acordes no Violão | Entenda o Movimento Harmônico"
    },

    description:
        "Aprenda o que são progressões de acordes, como pensar em graus, como criar sequências e como transpor progressões para outros tons no violão.",

    keywords: [
        "progressões de acordes",
        "progressão de acordes no violão",
        "sequência de acordes",
        "movimento harmônico",
        "graus dos acordes",
        "como criar progressões",
        "como transpor acordes",
        "progressões musicais"
    ],

    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/progressoes-de-acordes"
    },

    openGraph: {
        title:
            "Progressões de Acordes no Violão | Entenda o Movimento Harmônico",
        description:
            "Entenda como os acordes podem ser organizados em sequências, como pensar em graus e como transpor progressões para outros tons.",
        url:
            "https://aprenderviolaoonline.com.br/progressoes-de-acordes",
        siteName: "LearningGuitar 🎸",
        images: ["/og-image.png"],
        locale: "pt_BR",
        type: "article"
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Progressões de Acordes no Violão | Entenda o Movimento Harmônico",
        description:
            "Aprenda a entender, criar e transpor progressões de acordes no violão.",
        images: ["/og-image.png"],
        creator: "@LGuitarBr"
    }
};

const learningObjectives = [
    {
        icon: "🎵",
        title: "Entender o que é uma progressão",
        description:
            "Compreender como uma sequência de acordes cria movimento dentro de uma música."
    },
    {
        icon: "🎼",
        title: "Pensar em graus",
        description:
            "Reconhecer progressões usando os graus do campo harmônico em vez de decorar apenas nomes de acordes."
    },
    {
        icon: "🔄",
        title: "Reconhecer padrões",
        description:
            "Identificar algumas estruturas harmônicas comuns, como I–IV–V, vi–IV–I–V e ii–V–I."
    },
    {
        icon: "🎸",
        title: "Transpor progressões",
        description:
            "Entender como manter a mesma estrutura harmônica ao mudar a tonalidade."
    },
    {
        icon: "✍️",
        title: "Criar sequências",
        description:
            "Usar o campo harmônico como ponto de partida para experimentar suas próprias progressões."
    }
];

export default function ProgressoesDeAcordes() {
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
                            label: "Campo Harmônico",
                            href: "/campo-harmonico"
                        },
                        {
                            label: "Progressões de Acordes"
                        }
                    ]}
                />

                <LessonHero
                    category="🎵 TEORIA MUSICAL"
                    title="Progressões de Acordes"
                    description="Entenda como os acordes se organizam em sequências, como os graus ajudam a reconhecer padrões e como transportar uma progressão para diferentes tonalidades."
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
                        title="O que é uma progressão de acordes?"
                    >
                        <p>
                            Uma <strong>progressão de acordes</strong> é uma
                            sequência organizada de acordes que acontece ao
                            longo de uma música ou de um trecho musical.
                        </p>

                        <TheoryBlock title="Um exemplo simples">
                            <p className="text-center text-xl font-bold">
                                C → F → G → C
                            </p>
                        </TheoryBlock>

                        <p>
                            Os acordes não estão apenas sendo tocados um após o
                            outro. A sequência cria uma relação de{" "}
                            <strong>movimento, expectativa e resolução</strong>.
                        </p>

                        <ConceptCard
                            icon="💡"
                            title="Progressão não é apenas uma lista"
                        >
                            O mais importante não é decorar uma sequência
                            específica, mas perceber como os acordes se
                            relacionam dentro de uma tonalidade.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Conectando com a aula anterior"
                        title="Do campo harmônico para a progressão"
                    >
                        <p>
                            Na aula anterior, vimos que um campo harmônico reúne
                            acordes relacionados a uma mesma tonalidade. Agora
                            podemos dar o próximo passo:{" "}
                            <strong>escolher uma ordem para esses acordes</strong>.
                        </p>

                        <TheoryBlock title="Campo Harmônico de C maior">
                            <p className="text-center text-lg font-bold">
                                C – Dm – Em – F – G – Am – B°
                            </p>
                        </TheoryBlock>

                        <p>
                            Podemos selecionar alguns desses acordes e criar,
                            por exemplo:
                        </p>

                        <TheoryBlock title="Uma progressão possível">
                            <p className="text-center text-xl font-bold">
                                C → F → G → C
                            </p>
                        </TheoryBlock>

                        <ConceptCard
                            icon="🎯"
                            title="A ideia principal"
                        >
                            O campo harmônico fornece um conjunto de acordes.
                            A progressão organiza alguns deles em uma sequência
                            musical.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Uma forma mais poderosa de pensar"
                        title="Progressões também podem ser escritas em graus"
                    >
                        <p>
                            Em vez de decorar apenas{" "}
                            <strong>C → F → G → C</strong>, podemos observar os
                            graus desses acordes:
                        </p>

                        <TheoryBlock title="A mesma progressão em graus">
                            <p className="text-center text-xl font-bold">
                                I → IV → V → I
                            </p>
                        </TheoryBlock>

                        <p>
                            Isso é muito útil porque a mesma estrutura pode ser
                            transportada para outra tonalidade.
                        </p>

                        <ConceptCard
                            icon="🔄"
                            title="A estrutura permanece"
                        >
                            Os nomes dos acordes mudam quando mudamos o tom,
                            mas os graus da progressão continuam os mesmos.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Reconhecendo padrões"
                        title="Algumas progressões que você vai encontrar"
                    >
                        <div className="space-y-4">

                            <TheoryBlock title="I – IV – V">
                                <p className="text-center text-xl font-bold">
                                    C → F → G
                                </p>

                                <p className="mt-3 text-center text-sm leading-6 text-gray-600">
                                    Tônica → predominante → dominante
                                </p>
                            </TheoryBlock>

                            <TheoryBlock title="vi – IV – I – V">
                                <p className="text-center text-xl font-bold">
                                    Am → F → C → G
                                </p>

                                <p className="mt-3 text-center text-sm leading-6 text-gray-600">
                                    Uma sequência que combina diferentes
                                    graus do campo harmônico maior.
                                </p>
                            </TheoryBlock>

                            <TheoryBlock title="ii – V – I">
                                <p className="text-center text-xl font-bold">
                                    Dm7 → G7 → C7M
                                </p>

                                <p className="mt-3 text-center text-sm leading-6 text-gray-600">
                                    Predominante → dominante → tônica.
                                </p>
                            </TheoryBlock>

                        </div>

                        <ConceptCard
                            icon="👂"
                            title="O objetivo não é decorar tudo"
                        >
                            Conforme você pratica, começa a reconhecer
                            padrões pelo ouvido e pela relação entre os graus.
                            Essa percepção é mais importante do que decorar
                            dezenas de sequências isoladas.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aplicando em outro tom"
                        title="Como transpor uma progressão"
                    >
                        <p>
                            Se entendemos uma progressão pelos seus graus,
                            podemos levá-la para outra tonalidade mantendo a
                            mesma estrutura.
                        </p>

                        <TheoryBlock title="I – IV – V em diferentes tons">
                            <div className="space-y-3 text-center">
                                <p>
                                    <strong>C:</strong> C → F → G
                                </p>

                                <p>
                                    <strong>D:</strong> D → G → A
                                </p>

                                <p>
                                    <strong>G:</strong> G → C → D
                                </p>

                                <p>
                                    <strong>A:</strong> A → D → E
                                </p>
                            </div>
                        </TheoryBlock>

                        <p>
                            Perceba que os nomes dos acordes mudam, mas a
                            relação continua sendo:
                        </p>

                        <TheoryBlock title="A estrutura permanece">
                            <p className="text-center text-xl font-bold">
                                I → IV → V
                            </p>
                        </TheoryBlock>

                        <ConceptCard
                            icon="🎸"
                            title="Isso facilita tocar em outros tons"
                        >
                            Pensar em graus permite transportar uma música sem
                            precisar reaprender toda a sequência do zero.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Um exemplo em tom menor"
                        title="Quando a tonalidade muda, a lógica também muda"
                    >
                        <p>
                            Nem todas as progressões precisam estar em uma
                            tonalidade maior. Em tonalidades menores, também
                            encontramos padrões característicos.
                        </p>

                        <TheoryBlock title="Um exemplo em A menor">
                            <p className="text-center text-xl font-bold">
                                Am → G → F → Dm → E
                            </p>
                        </TheoryBlock>

                        <p>
                            Aqui temos uma sequência em que o{" "}
                            <strong>E</strong> cria uma forte expectativa de
                            retorno para <strong>Am</strong>.
                        </p>

                        <ConceptCard
                            icon="💡"
                            title="Observe a relação"
                        >
                            Mais importante do que memorizar essa sequência é
                            perceber como a tonalidade e as funções dos acordes
                            ajudam a explicar o movimento harmônico.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Do conceito para a prática"
                        title="Como criar uma progressão?"
                    >
                        <p>
                            Você pode começar com o campo harmônico da
                            tonalidade escolhida e experimentar diferentes
                            combinações de graus.
                        </p>

                        <TheoryBlock title="Um caminho simples">
                            <div className="space-y-3">
                                <p>
                                    <strong>1.</strong> Escolha uma tonalidade.
                                </p>

                                <p>
                                    <strong>2.</strong> Consulte seu campo
                                    harmônico.
                                </p>

                                <p>
                                    <strong>3.</strong> Escolha alguns graus.
                                </p>

                                <p>
                                    <strong>4.</strong> Toque a sequência
                                    lentamente.
                                </p>

                                <p>
                                    <strong>5.</strong> Observe onde sente
                                    movimento e onde sente resolução.
                                </p>
                            </div>
                        </TheoryBlock>

                        <ConceptCard
                            icon="✍️"
                            title="Experimente"
                        >
                            Em C maior, tente criar uma sequência usando C,
                            Am, F e G. Depois altere a ordem e escute como o
                            resultado muda.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aprofundamento"
                        title="Quer conhecer mais progressões?"
                    >
                        <p>
                            Agora que você entende o conceito de progressão,
                            pode explorar sequências que aparecem com
                            frequência em diferentes músicas e contextos.
                        </p>

                        <ConceptCard
                            icon="🎵"
                            title="Biblioteca de progressões"
                        >
                            Consulte a aula{" "}
                            <Link
                                href="/progressoes-harmonicas-mais-usadas"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Progressões Harmônicas Mais Usadas
                            </Link> para encontrar mais exemplos e praticar diferentes
                            sequências no violão.
                        </ConceptCard>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Hora de praticar"
                        title="Teste sua compreensão"
                    >
                        <div className="space-y-4">

                            <ConceptCard
                                icon="🎯"
                                title="1. O que é uma progressão?"
                            >
                                É uma sequência organizada de acordes que cria
                                relações de movimento e resolução dentro de
                                uma música.
                            </ConceptCard>

                            <ConceptCard
                                icon="🎯"
                                title="2. Qual é a estrutura de C → F → G?"
                            >
                                <strong>I → IV → V</strong>.
                            </ConceptCard>

                            <ConceptCard
                                icon="🎯"
                                title="3. Como transportar uma progressão?"
                            >
                                Mantendo os mesmos graus e substituindo os
                                acordes pelos equivalentes da nova tonalidade.
                            </ConceptCard>

                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Resumo"
                        title="O que levar desta aula"
                    >
                        <div className="space-y-4">

                            <ConceptCard
                                icon="🎵"
                                title="Progressão"
                            >
                                É uma sequência de acordes organizada dentro
                                de um contexto harmônico.
                            </ConceptCard>

                            <ConceptCard
                                icon="🎼"
                                title="Graus"
                            >
                                Pensar em graus ajuda a reconhecer a estrutura
                                de uma progressão independentemente do tom.
                            </ConceptCard>

                            <ConceptCard
                                icon="🔄"
                                title="Transposição"
                            >
                                Uma mesma estrutura pode ser transportada para
                                diferentes tonalidades.
                            </ConceptCard>

                            <ConceptCard
                                icon="🎸"
                                title="Prática"
                            >
                                O próximo passo é ouvir, tocar e experimentar
                                diferentes combinações de acordes.
                            </ConceptCard>

                        </div>
                    </LessonSection>

                    <NextLesson
                        title="Progressões harmônicas mais usadas"
                        description="Agora que você entende como uma progressão é construída, explore uma seleção de sequências para reconhecer, tocar e praticar no violão."
                        href="/progressoes-harmonicas-mais-usadas"
                    />

                    <LessonNavigation
                        home={{
                            title: "Voltar para a trilha de iniciantes",
                            href: "/#beginner-path"
                        }}
                        previous={{
                            title: "Campo Harmônico",
                            href: "/campo-harmonico"
                        }}
                        next={{
                            title: "Progressões harmônicas mais usadas",
                            href: "/progressoes-harmonicas-mais-usadas"
                        }}
                    />

                    <p className="pb-4 text-center text-sm leading-6 text-gray-500">
                        Quanto mais você relacionar graus, acordes e movimento
                        harmônico, mais fácil será reconhecer e criar
                        progressões no violão. 🎸
                    </p>

                </div>
            </div>
        </main>
    );
}