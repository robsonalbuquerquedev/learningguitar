import Link from "next/link";
import type { Metadata } from "next";

import LessonBreadcrumb from "@/components/learning/LessonBreadcrumb";
import LessonHero from "@/components/learning/LessonHero";
import LearningObjectives from "@/components/learning/LearningObjectives";
import LessonSection from "@/components/learning/LessonSection";
import NextLesson from "@/components/learning/NextLesson";
import LessonNavigation from "@/components/learning/LessonNavigation";

export const metadata: Metadata = {
    title: {
        absolute: "Como Tocar em Todos os Tons no Violão | Método 7L Explicado",
    },

    description:
        "Aprenda a tocar em diferentes tons no violão usando a organização dos graus e o padrão 7L. Entenda a transposição de acordes e aplique o mesmo raciocínio em vários tons.",

    keywords: [
        "tocar em todos os tons",
        "como mudar o tom no violão",
        "tocar em qualquer tom violão",
        "padrão 7L",
        "transposição de acordes",
        "tocar acordes em diferentes tons",
        "como transportar acordes",
        "tocar em vários tons",
        "tom de G no violão",
        "aprender a transpor músicas",
    ],

    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/aprender-tocar-em-todos-os-tons",
    },

    openGraph: {
        title: "Aprender a Tocar em Todos os Tons | Método 7L no Violão",
        description:
            "Entenda como transportar acordes para diferentes tons usando os graus e o padrão 7L.",
        url: "https://aprenderviolaoonline.com.br/aprender-tocar-em-todos-os-tons",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Como Tocar em Todos os Tons — Padrão 7L",
            },
        ],
        type: "article",
        locale: "pt_BR",
        siteName: "LearningGuitar 🎸",
    },

    twitter: {
        card: "summary_large_image",
        title: "Como Tocar em Todos os Tons no Violão | Método 7L",
        description:
            "Guia prático para entender a transposição de acordes e tocar em diferentes tons.",
        images: ["/og-image.png"],
        creator: "@LGuitarBr",
    },
};

export default function AprenderTocarEmTodosOsTons() {
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
                            label: "Tocar em todos os tons",
                        },
                    ]}
                />

                <LessonHero
                    category="Harmonia aplicada"
                    title="Aprender a tocar em todos os tons"
                    description="Entenda como a organização dos graus permite transportar uma sequência de acordes para diferentes tons e tocar a mesma ideia musical em outras regiões do braço."
                    level="Intermediário"
                    duration="15 min"
                    type="Teoria + prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🎯",
                                title: "Entender",
                                description:
                                    "Compreender como os graus organizam os acordes dentro de um tom.",
                            },
                            {
                                icon: "🔄",
                                title: "Transportar",
                                description:
                                    "Aprender a levar uma mesma sequência de acordes para outro tom.",
                            },
                            {
                                icon: "🎸",
                                title: "Aplicar",
                                description:
                                    "Usar o padrão 7L como referência para visualizar as qualidades dos acordes.",
                            },
                            {
                                icon: "🧭",
                                title: "Explorar",
                                description:
                                    "Ganhar familiaridade com diferentes regiões e tonalidades no braço do violão.",
                            },
                        ]}
                    />

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="O que significa tocar em diferentes tons?"
                    >
                        <p>
                            Imagine que você aprendeu uma música em{" "}
                            <strong>C maior</strong>, mas precisa tocá-la em{" "}
                            <strong>G maior</strong>. A música continua sendo a
                            mesma, mas os acordes precisam ser transportados
                            para uma nova tonalidade.
                        </p>

                        <p>
                            Esse processo é chamado de{" "}
                            <strong>transposição</strong>. Em vez de decorar
                            uma nova sequência de acordes para cada tom, você
                            pode aprender a reconhecer a posição de cada acorde
                            dentro do tom.
                        </p>

                        <p>
                            Para isso, é importante já compreender a relação
                            entre{" "}
                            <Link
                                href="/escalas"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                escalas e graus
                            </Link>
                            . É essa organização que permite transportar a
                            mesma ideia musical sem depender de uma tonalidade
                            específica.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Padrão"
                        title="O padrão 7L"
                    >
                        <p>
                            Dentro de uma escala maior, os acordes formados
                            sobre os sete graus seguem um padrão previsível de
                            qualidades:
                        </p>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
                                <span className="text-2xl">7️⃣</span>

                                <h3 className="mt-2 font-bold text-amber-900">
                                    Acordes maiores
                                </h3>

                                <p className="mt-2 text-gray-700">
                                    I – IV – V
                                </p>
                            </div>

                            <div className="rounded-xl border border-amber-200 bg-white p-5 text-center">
                                <span className="text-2xl">L</span>

                                <h3 className="mt-2 font-bold text-amber-900">
                                    Acordes menores
                                </h3>

                                <p className="mt-2 text-gray-700">
                                    ii – iii – vi
                                </p>
                            </div>

                            <div className="rounded-xl border border-amber-200 bg-white p-5 text-center">
                                <span className="text-2xl">°</span>

                                <h3 className="mt-2 font-bold text-amber-900">
                                    Acorde diminuto
                                </h3>

                                <p className="mt-2 text-gray-700">
                                    vii°
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 text-gray-700">
                            Esse padrão é uma consequência direta da escala
                            maior e do empilhamento de terças sobre cada grau.
                            Se quiser revisar como os acordes são construídos,
                            consulte a aula de{" "}
                            <Link
                                href="/formacao-de-acordes"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                formação de acordes e intervalos
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Exemplo prático"
                        title="O padrão no tom de G"
                    >
                        <p>
                            No tom de <strong>G maior</strong>, a escala é:
                        </p>

                        <p className="my-4 rounded-xl bg-amber-50 p-4 text-center font-semibold text-amber-900">
                            G – A – B – C – D – E – F#
                        </p>

                        <p className="text-gray-700">
                            Aplicando o padrão dos graus, encontramos:
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl border border-amber-200 bg-white shadow-sm">
                            <table className="w-full min-w-[650px] border-collapse text-center">
                                <thead>
                                    <tr>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            Grau
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3">
                                            I
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3">
                                            ii
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3">
                                            iii
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3">
                                            IV
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3">
                                            V
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3">
                                            vi
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3">
                                            vii°
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="border border-amber-200 bg-amber-50 px-4 py-3 font-semibold text-amber-900">
                                            Acorde
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            G
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3">
                                            Am
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3">
                                            Bm
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            C
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            D
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3">
                                            Em
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3">
                                            F#°
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-5 text-gray-700">
                            Perceba que não precisamos decorar uma lista
                            completamente nova. O que muda é a tonalidade; a
                            relação entre os graus permanece.
                        </p>

                        <p className="mt-4 text-gray-700">
                            Esse é o mesmo princípio estudado no{" "}
                            <Link
                                href="/campo-harmonico"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                campo harmônico
                            </Link>
                            : os acordes mudam de nome quando mudamos o tom,
                            mas suas posições e funções dentro da tonalidade
                            continuam relacionadas.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aplicação"
                        title="Como transportar uma sequência"
                    >
                        <p>
                            Imagine uma progressão em C maior:
                        </p>

                        <p className="my-4 rounded-xl bg-amber-50 p-4 text-center font-bold text-amber-900">
                            C → Am → F → G
                        </p>

                        <p className="text-gray-700">
                            Em graus, essa sequência pode ser entendida como:
                        </p>

                        <p className="my-4 text-center font-bold text-gray-900">
                            I → vi → IV → V
                        </p>

                        <p className="text-gray-700">
                            Agora podemos levar a mesma relação para G maior:
                        </p>

                        <p className="my-4 rounded-xl bg-amber-50 p-4 text-center font-bold text-amber-900">
                            G → Em → C → D
                        </p>

                        <p className="text-gray-700">
                            A música mudou de tom, mas a estrutura da
                            progressão permaneceu. Essa é uma das principais
                            vantagens de pensar em graus em vez de decorar
                            apenas nomes de acordes.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Aprofundamento"
                        title="O que praticar depois?"
                    >
                        <p>
                            Tocar em diferentes tons não depende apenas de
                            conhecer os acordes. Depois de compreender a
                            transposição, vale desenvolver as habilidades que
                            permitem acompanhar e visualizar essas mudanças na
                            prática.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <span className="text-2xl">🥁</span>

                                <h3 className="mt-3 text-xl font-bold text-amber-900">
                                    Batidas básicas
                                </h3>

                                <p className="mt-3 text-gray-700">
                                    Depois de transportar os acordes, você
                                    precisa conseguir manter o acompanhamento
                                    enquanto a sequência muda de tonalidade.
                                </p>

                                <Link
                                    href="/batidas-basicas"
                                    className="mt-5 inline-flex font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                                >
                                    Estudar batidas básicas →
                                </Link>
                            </article>

                            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                                <span className="text-2xl">🎸</span>

                                <h3 className="mt-3 text-xl font-bold text-amber-900">
                                    Dedilhados
                                </h3>

                                <p className="mt-3 text-gray-700">
                                    Quando a harmonia estiver confortável,
                                    diferentes padrões de dedilhado ajudam a
                                    aplicar os mesmos acordes com mais controle
                                    e musicalidade.
                                </p>

                                <Link
                                    href="/dedilhados"
                                    className="mt-5 inline-flex font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                                >
                                    Estudar dedilhados →
                                </Link>
                            </article>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Próximo passo"
                        title="Levar a teoria para o braço do violão"
                    >
                        <p>
                            Saber que uma progressão pode ser transportada é
                            apenas uma parte do processo. O próximo desafio é
                            reconhecer essas notas e acordes diretamente no
                            braço do instrumento.
                        </p>

                        <p>
                            Para isso, vale aprofundar a{" "}
                            <Link
                                href="/memorizar-braco-do-violao"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                memorização do braço do violão
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <NextLesson
                        title="Memorizar o braço do violão"
                        description="Agora que você entende como transportar acordes entre diferentes tons, o próximo passo é localizar notas e relações diretamente no braço do instrumento."
                        href="/memorizar-braco-do-violao"
                    />

                    <LessonNavigation
                        previous={{
                            title: "Escalas musicais no violão",
                            href: "/escalas",
                        }}
                        home={{
                            title: "Voltar para a trilha de iniciantes",
                            href: "/#beginner-path",
                        }}
                        next={{
                            title: "Memorizar o braço do violão",
                            href: "/memorizar-braco-do-violao",
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: mais importante do que decorar
                        acordes em vários tons é entender os graus e aprender
                        a transportar as relações entre eles. 🎸
                    </p>
                </div>
            </div>
        </main>
    );
}