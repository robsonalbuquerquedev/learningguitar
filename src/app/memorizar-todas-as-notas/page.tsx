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
        absolute: "Memorizar Todas as Notas no Violão | Guia Prático e Eficiente"
    },
    description:
        "Aprenda técnicas práticas para memorizar todas as notas no braço do violão usando escalas, relações entre cordas e padrões de oitavas.",
    keywords: [
        "notas no violão",
        "memorizar notas violão",
        "braço do violão",
        "todas as notas violão",
        "mapa do braço violão",
        "localização das notas",
        "aprender violão iniciante",
        "técnicas de violão"
    ],
    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/memorizar-todas-as-notas"
    },
    openGraph: {
        title: "Memorizar Todas as Notas no Violão | Guia Prático",
        description:
            "Domine as notas do braço do violão usando escala horizontal, relações entre cordas e padrões de oitavas.",
        url: "https://aprenderviolaoonline.com.br/memorizar-todas-as-notas",
        images: ["/og-image.png"],
        type: "article",
        locale: "pt_BR",
        siteName: "LearningGuitar 🎸"
    },
    twitter: {
        card: "summary_large_image",
        title: "Memorizar Todas as Notas no Violão | Guia Prático",
        description:
            "Aprenda a encontrar e memorizar as notas do braço do violão com técnicas simples e visuais.",
        images: ["/og-image.png"]
    }
};

export default function MemorizarTodasAsNotas() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
                <LessonBreadcrumb
                    items={[
                        { label: "Início", href: "/" },
                        {
                            label: "Trilha para iniciantes",
                            href: "/"
                        },
                        {
                            label: "Tocar em todos os tons",
                            href: "/aprender-tocar-em-todos-os-tons"
                        },
                        {
                            label: "Memorizar o braço do violão",
                            href: "/memorizar-braco-do-violao"
                        },
                        {
                            label: "Memorizar todas as notas"
                        }
                    ]}
                />

                <LessonHero
                    category="Braço do violão"
                    title="Memorizar todas as notas no violão"
                    description="Aprenda três técnicas práticas para localizar e memorizar as notas em diferentes regiões do braço do violão."
                    level="Intermediário"
                    duration="15 min"
                    type="Teoria + prática"
                />

                <div id="lesson-content">
                    <LearningObjectives
                        objectives={[
                            {
                                icon: "🗺️",
                                title: "Visualizar",
                                description:
                                    "Perceber a organização das notas ao longo do braço."
                            },
                            {
                                icon: "🎯",
                                title: "Localizar",
                                description:
                                    "Encontrar a mesma nota em diferentes cordas e regiões."
                            },
                            {
                                icon: "🧩",
                                title: "Reconhecer",
                                description:
                                    "Identificar padrões de escalas, intervalos e oitavas."
                            },
                            {
                                icon: "🎸",
                                title: "Aplicar",
                                description:
                                    "Usar esse conhecimento para estudar escalas e shapes."
                            }
                        ]}
                    />

                    <LessonSection
                        eyebrow="Antes de começar"
                        title="O braço do violão é um mapa"
                    >
                        <p>
                            Memorizar todas as notas não significa decorar uma
                            tabela inteira de uma vez. O objetivo é aprender a{" "}
                            <strong>encontrar as notas usando referências e
                                padrões</strong>.
                        </p>

                        <p className="mt-4">
                            Na etapa anterior, você começou a visualizar a
                            organização do braço. Agora vamos avançar e usar
                            três técnicas que ajudam a transformar essa
                            visualização em conhecimento prático.
                        </p>

                        <p className="mt-4">
                            Se precisar revisar essa primeira referência,
                            volte para{" "}
                            <Link
                                href="/memorizar-braco-do-violao"
                                className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                            >
                                memorizar o braço do violão
                            </Link>
                            .
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Técnica 1"
                        title="Escala na horizontal"
                    >
                        <p>
                            Uma maneira eficiente de começar é acompanhar as
                            notas ao longo de uma única corda. Assim, você
                            percebe que o braço não é uma sequência aleatória:
                            as notas seguem uma ordem cromática.
                        </p>

                        <p className="mt-4">
                            Usando a <strong>escala de Dó maior</strong> na
                            segunda corda como exemplo:
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl border border-amber-200 bg-white shadow-sm">
                            <table className="w-full min-w-[500px] border-collapse text-center">
                                <thead>
                                    <tr>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            Casa
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            1
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            3
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            5
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            6
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            8
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            10
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            12
                                        </th>
                                        <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                            13
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="border border-amber-200 bg-amber-50 px-4 py-3 font-semibold text-amber-900">
                                            Nota
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            C
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            D
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            E
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            F
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            G
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            A
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            B
                                        </td>
                                        <td className="border border-amber-200 px-4 py-3 font-semibold">
                                            C
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-5">
                            Observe também a distância entre as notas:
                            <strong> dois semitons formam um tom</strong>,
                            enquanto um semitom corresponde a uma casa.
                            Essa relação ajuda a prever onde a próxima nota
                            aparecerá.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Técnica 2"
                        title="A relação entre as cordas"
                    >
                        <p>
                            Depois de aprender a encontrar uma nota em uma
                            corda, você pode usar a afinação do violão para
                            localizá-la em outra.
                        </p>

                        <p className="mt-4">
                            Um exemplo simples é a nota <strong>C</strong> na
                            6ª corda, 8ª casa. Ao passar para a 5ª corda, a
                            mesma nota aparece na <strong>3ª casa</strong>.
                        </p>

                        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
                            <p className="font-semibold text-amber-900">
                                💡 Regra de referência
                            </p>

                            <p className="mt-2 text-gray-700">
                                Ao passar para a corda imediatamente mais
                                grave, normalmente você recua{" "}
                                <strong>5 casas</strong>. A exceção acontece
                                entre a <strong>3ª e a 2ª corda</strong>,
                                devido à afinação, quando a referência muda
                                para <strong>4 casas</strong>.
                            </p>
                        </div>

                        <p className="mt-5">
                            O mais importante não é decorar apenas a regra, mas
                            perceber que a mesma nota pode ser encontrada em
                            diferentes lugares do braço.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Técnica 3"
                        title="Padrões de oitavas"
                    >
                        <p>
                            As oitavas são uma das ferramentas mais úteis para
                            visualizar o braço. Elas permitem encontrar a
                            <strong> mesma nota em outra região</strong> usando
                            um padrão de distância entre cordas e casas.
                        </p>

                        <p className="mt-4">
                            Por exemplo, o <strong>G</strong> da 6ª corda,
                            3ª casa, pode ser encontrado novamente na
                            <strong> 4ª corda, 5ª casa</strong>.
                        </p>

                        <div className="mt-5 rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
                            <h3 className="font-bold text-gray-900">
                                🔎 Referências de oitava
                            </h3>

                            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                                <li>
                                    6ª corda → 4ª corda: duas casas à frente.
                                </li>
                                <li>
                                    5ª corda → 3ª corda: duas casas à frente.
                                </li>
                                <li>
                                    4ª corda → 2ª corda: três casas à frente.
                                </li>
                                <li>
                                    3ª corda → 1ª corda: três casas à frente.
                                </li>
                            </ul>
                        </div>

                        <p className="mt-5">
                            Esses padrões permitem que você encontre uma nota a
                            partir de outra posição conhecida, reduzindo a
                            necessidade de procurar cada nota individualmente.
                        </p>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Consolidando"
                        title="Transforme os padrões em um mapa mental"
                    >
                        <p>
                            As três técnicas funcionam melhor quando usadas em
                            conjunto. Você pode encontrar uma nota pela escala
                            horizontal, localizá-la em outra corda e depois
                            usar uma oitava para descobrir novas posições.
                        </p>

                        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                            <p className="font-semibold text-amber-900">
                                🎯 O objetivo
                            </p>

                            <p className="mt-2 text-gray-700">
                                <strong>
                                    Nota → referência → padrão → nova posição
                                </strong>
                            </p>

                            <p className="mt-2 text-gray-600">
                                Com a prática, você deixa de pensar apenas em
                                casas isoladas e começa a enxergar relações
                                entre diferentes regiões do braço.
                            </p>
                        </div>
                    </LessonSection>

                    <LessonSection
                        eyebrow="Indo além"
                        title="Das notas aos shapes para solos"
                    >
                        <p>
                            Quando você consegue localizar as notas e
                            reconhecer seus padrões, o próximo passo natural é
                            agrupá-las dentro de uma escala.
                        </p>

                        <p className="mt-4">
                            É isso que os <strong>shapes</strong> ajudam a
                            visualizar: em vez de pensar em cada nota
                            separadamente, você começa a enxergar uma região do
                            braço como um conjunto organizado de notas que pode
                            ser usado para criar melodias e solos.
                        </p>

                        <Link
                            href="/shapes-solos"
                            className="mt-5 inline-flex font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 hover:text-amber-800"
                        >
                            Aprender shapes para solos →
                        </Link>
                    </LessonSection>

                    <NextLesson
                        href="/shapes-solos"
                        title="Próxima etapa: Shapes para solos"
                        description="Transforme o conhecimento das notas do braço em padrões de escala para começar a explorar solos e improvisação."
                    />

                    <LessonNavigation
                        previous={{
                            href: "/memorizar-braco-do-violao",
                            title: "Memorizar o braço"
                        }}
                        home={{
                            href: "/",
                            title: "Trilha para iniciantes"
                        }}
                        next={{
                            href: "/shapes-solos",
                            title: "Shapes para solos"
                        }}
                    />

                    <p className="mt-10 text-center text-sm text-gray-600">
                        Continue praticando: quanto melhor você enxergar as
                        relações entre as notas, mais fácil será visualizar
                        escalas, shapes e possibilidades para criar seus solos.
                        🎸
                    </p>
                </div>
            </div>
        </main>
    );
}