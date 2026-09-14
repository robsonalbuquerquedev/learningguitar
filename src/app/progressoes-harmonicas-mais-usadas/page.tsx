import type { Metadata } from "next";
import Link from "next/link";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute:
            "Progressões Harmônicas Mais Usadas | Guia Prático para Violão"
    },

    description:
        "Conheça progressões harmônicas comuns no violão, entenda seus graus e veja como aplicar diferentes sequências em várias tonalidades.",

    keywords: [
        "progressões harmônicas",
        "progressões de acordes",
        "progressões mais usadas",
        "sequências de acordes",
        "I IV V",
        "I V vi IV",
        "II V I",
        "I III IV V",
        "graus dos acordes",
        "harmonia no violão"
    ],

    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/progressoes-harmonicas-mais-usadas"
    },

    openGraph: {
        title: "Progressões Harmônicas Mais Usadas | Guia Prático",
        description:
            "Conheça progressões harmônicas comuns, entenda seus graus e pratique diferentes sequências no violão.",
        url: "https://aprenderviolaoonline.com.br/progressoes-harmonicas-mais-usadas",
        images: ["/og-image.png"]
    },

    twitter: {
        card: "summary_large_image",
        title: "Progressões Harmônicas Mais Usadas no Violão",
        description:
            "Conheça progressões harmônicas comuns e veja como aplicá-las em diferentes tonalidades.",
        images: ["/og-image.png"]
    }
};

const learningObjectives = [
    {
        icon: "🎵",
        title: "Reconhecer progressões",
        description:
            "Conhecer algumas sequências de acordes recorrentes e entender como elas são representadas por graus."
    },
    {
        icon: "🎼",
        title: "Ler os graus",
        description:
            "Relacionar números romanos aos acordes de uma tonalidade, em vez de decorar apenas nomes de acordes."
    },
    {
        icon: "🔄",
        title: "Comparar tonalidades",
        description:
            "Perceber como a mesma progressão pode ser transportada para diferentes tons."
    },
    {
        icon: "🎸",
        title: "Escolher o que praticar",
        description:
            "Usar uma seleção organizada de progressões como ponto de partida para estudo e repertório."
    }
];

export default function ProgressoesHarmonicasMaisUsadas() {
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
                            label: "Progressões de acordes",
                            href: "/progressoes-de-acordes"
                        },
                        {
                            label: "Progressões harmônicas mais usadas"
                        }
                    ]}
                />

                <LessonHero
                    category="🎶 HARMONIA"
                    title="Progressões Harmônicas Mais Usadas"
                    description="Agora que você já entende o que é uma progressão de acordes, chegou a hora de conhecer algumas estruturas que aparecem com frequência na música. Aqui a proposta é reconhecer padrões, experimentar no violão e entender como eles mudam de tonalidade."
                    level="Iniciante → intermediário"
                    duration="15 min"
                    type="Teoria + prática"
                />

                <LearningObjectives objectives={learningObjectives} />

                <div id="lesson-content" className="mt-12 space-y-10">
                    <LessonSection
                        eyebrow="Começando"
                        title="O que torna uma progressão tão comum?"
                    >
                        <p>
                            Algumas sequências de acordes aparecem repetidamente
                            porque estabelecem relações harmônicas que são fáceis
                            de reconhecer e de transportar para outras
                            tonalidades. Isso não significa que exista uma lista
                            definitiva das progressões &quot;mais usadas&quot;:
                            diferentes estilos, épocas e repertórios utilizam
                            combinações diferentes.
                        </p>

                        <p>
                            Por isso, esta página funciona como uma{" "}
                            <strong>curadoria de progressões importantes</strong> para quem está aprendendo violão. A ideia não é
                            decorar dezenas de sequências, mas começar a
                            identificar padrões e entender como os acordes se
                            relacionam.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Leitura"
                        title="Como ler uma progressão?"
                    >
                        <p>
                            Uma progressão pode ser escrita usando os nomes dos
                            acordes ou usando os graus da tonalidade. Por
                            exemplo, no tom de Dó maior:
                        </p>

                        <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                            <p className="text-center text-lg font-semibold text-amber-900">
                                C → F → G → C
                            </p>

                            <p className="mt-3 text-center text-sm text-gray-600">
                                I → IV → V → I
                            </p>
                        </div>

                        <p>
                            Quando usamos graus, conseguimos transportar a mesma
                            estrutura para outro tom sem mudar a relação entre
                            os acordes. Esse é um dos principais motivos para
                            aprender a pensar em números romanos.
                        </p>

                        <p>
                            Se quiser revisar esse conceito antes de continuar,
                            volte para a aula de{" "}
                            <Link
                                href="/progressoes-de-acordes"
                                className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                            >
                                Progressões de Acordes
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Curadoria"
                        title="Progressões essenciais para conhecer"
                    >
                        <p>
                            A seguir estão algumas estruturas que vale a pena
                            reconhecer. Os exemplos estão no tom de Dó maior,
                            mas o mais importante é observar os graus.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-amber-900">
                                    I–IV–V–I
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Tônica, movimento e retorno à tônica.
                                </p>

                                <p className="mt-4 font-semibold text-gray-900">
                                    C → F → G → C
                                </p>

                                <p className="mt-3 text-sm text-gray-700">
                                    É uma estrutura simples para perceber a
                                    relação entre I, IV e V dentro de uma
                                    tonalidade maior.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-amber-900">
                                    I–V–vi–IV
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Alternância entre estabilidade e movimento.
                                </p>

                                <p className="mt-4 font-semibold text-gray-900">
                                    C → G → Am → F
                                </p>

                                <p className="mt-3 text-sm text-gray-700">
                                    Uma boa sequência para praticar a relação
                                    entre os graus I, V, vi e IV.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-amber-900">
                                    vi–IV–I–V
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    A mesma família de quatro graus em outra
                                    ordem.
                                </p>

                                <p className="mt-4 font-semibold text-gray-900">
                                    Am → F → C → G
                                </p>

                                <p className="mt-3 text-sm text-gray-700">
                                    Compare esta sequência com I–V–vi–IV e
                                    perceba como mudar a ordem dos mesmos graus
                                    altera o caminho harmônico.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-amber-900">
                                    I–vi–IV–V
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Uma sequência que combina tônica, relativo
                                    menor, subdominante e dominante.
                                </p>

                                <p className="mt-4 font-semibold text-gray-900">
                                    C → Am → F → G
                                </p>

                                <p className="mt-3 text-sm text-gray-700">
                                    É um bom exercício para visualizar diferentes
                                    funções dentro do mesmo campo harmônico.
                                </p>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm md:col-span-2">
                                <h3 className="text-xl font-bold text-amber-900">
                                    I–V–vi–iii–IV
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Uma sequência um pouco mais longa, usando
                                    cinco graus do campo harmônico maior.
                                </p>

                                <p className="mt-4 text-center font-semibold text-gray-900">
                                    C → G → Am → Em → F
                                </p>

                                <p className="mt-3 text-sm text-gray-700">
                                    Aqui aparece o iii grau, que no campo
                                    harmônico maior forma um acorde menor.
                                    Esse detalhe ajuda a reforçar a ideia de que
                                    os graus não representam apenas números:
                                    cada grau também possui uma qualidade de
                                    acorde determinada pela tonalidade.
                                </p>
                            </article>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aprofundamento"
                        title="Progressões que merecem uma aula própria"
                    >
                        <p>
                            Algumas progressões são importantes o suficiente para receber uma
                            explicação mais detalhada. Em vez de repetir todo o conteúdo nesta
                            página, deixamos cada tema em sua própria aula.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <span className="text-2xl">🎼</span>

                                <h3 className="mt-3 text-xl font-bold text-amber-900">
                                    II–V–I
                                </h3>

                                <p className="mt-3 text-gray-700">
                                    Uma progressão fundamental para entender a relação entre
                                    preparação, dominante e resolução.
                                </p>

                                <p className="mt-3 font-semibold text-gray-900">
                                    Dm7 → G7 → C7M
                                </p>

                                <Link
                                    href="/progressoes-II-V-I"
                                    className="mt-5 inline-flex font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                                >
                                    Estudar II–V–I →
                                </Link>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <span className="text-2xl">🎸</span>

                                <h3 className="mt-3 text-xl font-bold text-amber-900">
                                    I–III–IV–V
                                </h3>

                                <p className="mt-3 text-gray-700">
                                    Uma sequência que combina I, iii, IV e V, permitindo observar
                                    como o acorde do III grau se encaixa entre os demais.
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

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <span className="text-2xl">🌙</span>

                                <h3 className="mt-3 text-xl font-bold text-amber-900">
                                    Subdominante menor — IV → iv
                                </h3>

                                <p className="mt-3 text-gray-700">
                                    Uma progressão marcada pelo contraste entre o IV maior e o iv
                                    menor, criando uma mudança de cor harmônica e um efeito
                                    emocional característico.
                                </p>

                                <p className="mt-3 font-semibold text-gray-900">
                                    F → Fm
                                </p>

                                <Link
                                    href="/subdominante-menor"
                                    className="mt-5 inline-flex font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                                >
                                    Estudar subdominante menor →
                                </Link>
                            </article>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Na prática"
                        title="Como estudar essas progressões?"
                    >
                        <p>
                            Não tente memorizar todas as sequências de uma vez.
                            Escolha uma delas e pratique primeiro em uma
                            tonalidade confortável.
                        </p>

                        <ol className="space-y-4">
                            <li>
                                <strong>1. Escolha uma progressão.</strong>{" "}
                                Comece, por exemplo, com I–V–vi–IV.
                            </li>

                            <li>
                                <strong>2. Toque os acordes lentamente.</strong>{" "}
                                Concentre-se nas mudanças e mantenha o ritmo
                                constante.
                            </li>

                            <li>
                                <strong>3. Identifique os graus.</strong>{" "}
                                Não pense apenas em C, G, Am e F. Pense em
                                I, V, vi e IV.
                            </li>

                            <li>
                                <strong>4. Mude a tonalidade.</strong>{" "}
                                Experimente a mesma estrutura em G ou D e
                                observe como os nomes dos acordes mudam.
                            </li>

                            <li>
                                <strong>5. Compare com músicas.</strong>{" "}
                                Quando encontrar uma música com uma sequência
                                parecida, tente identificar os graus utilizados.
                            </li>
                        </ol>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Consolidação"
                        title="O que você deve levar desta aula?"
                    >
                        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                            <ul className="space-y-3 text-gray-700">
                                <li>
                                    ✓ Progressões são sequências organizadas de
                                    acordes.
                                </li>

                                <li>
                                    ✓ Os graus permitem representar uma mesma
                                    estrutura em diferentes tonalidades.
                                </li>

                                <li>
                                    ✓ Algumas sequências aparecem com frequência
                                    e são úteis para estudo e reconhecimento.
                                </li>

                                <li>
                                    ✓ I–IV–V, I–V–vi–IV, vi–IV–I–V e I–vi–IV–V
                                    são bons pontos de partida.
                                </li>

                                <li>
                                    ✓ II–V–I e I–III–IV–V possuem páginas
                                    próprias para aprofundamento.
                                </li>
                            </ul>
                        </div>
                    </LessonSection>
                </div>

                <NextLesson
                    title="Explorar acordes de minutos"
                    description="Você já passou pelos fundamentos dos acordes, do campo harmônico e das progressões. Agora pode avançar para um conteúdo de nível intermediário, explorando acordes de minutos e novas possibilidades de construção e sonoridade."
                    href="/acordes-diminutos"
                />

                <LessonNavigation
                    home={{
                        title: "Voltar para a trilha de iniciantes",
                        href: "/#beginner-path"
                    }}
                    previous={{
                        title: "Progressões de acordes",
                        href: "/progressoes-de-acordes"
                    }}
                    next={{
                        title: "Acordes de minutos",
                        href: "/acordes-diminutos"
                    }}
                />

                <p className="mt-10 text-center text-sm text-gray-600">
                    Continue praticando: entender os graus é mais importante do
                    que decorar uma lista de sequências. 🎸
                </p>
            </div>
        </main>
    );
}