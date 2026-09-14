"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const escalaNatural = ["C", "D", "E", "F", "G", "A", "B", "C"];

const escalaCromatica = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
];

function EscalaTabela({
    nome,
    notas,
    notaSelecionada,
    onClickNota,
}: {
    nome: string;
    notas: string[];
    notaSelecionada: string | null;
    onClickNota: (nota: string) => void;
}) {
    return (
        <div className="mb-8 w-full overflow-x-auto rounded-xl border border-amber-200 bg-white shadow-sm">
            <table className="mx-auto min-w-[700px] border-collapse select-none text-sm sm:text-base">
                <thead>
                    <tr>
                        <th className="sticky left-0 border border-amber-200 bg-amber-100 px-3 py-2 text-left text-amber-900">
                            Escala
                        </th>

                        {notas.map((_, index) => (
                            <th
                                key={index}
                                className="border border-amber-200 bg-amber-100 px-3 py-2 text-amber-900"
                            >
                                {index + 1}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="sticky left-0 border border-amber-200 bg-amber-50 px-3 py-2 font-semibold text-amber-900">
                            {nome}
                        </td>

                        {notas.map((nota, index) => {
                            const isSelected = nota === notaSelecionada;

                            return (
                                <td
                                    key={index}
                                    onClick={() => onClickNota(nota)}
                                    className={`cursor-pointer border border-amber-200 px-3 py-2 text-center transition-all duration-200 ${isSelected
                                        ? "bg-yellow-300 font-bold text-amber-900 shadow-inner"
                                        : "text-gray-700 hover:bg-amber-50"
                                        }`}
                                >
                                    {nota}
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default function EscalasContent() {
    const [notaSelecionada, setNotaSelecionada] = useState<string | null>(
        null
    );

    const handleClickNota = (nota: string) => {
        setNotaSelecionada((previous) =>
            previous === nota ? null : nota
        );
    };

    const limparSelecao = () => {
        setNotaSelecionada(null);
    };

    return (
        <div className="space-y-8">
            {notaSelecionada && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center"
                >
                    <p className="text-lg font-semibold text-amber-900">
                        🔍 Nota selecionada:{" "}
                        <span className="underline">
                            {notaSelecionada}
                        </span>
                    </p>

                    <button
                        onClick={limparSelecao}
                        className="mt-3 rounded-lg bg-amber-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-amber-800"
                    >
                        Limpar seleção
                    </button>
                </motion.div>
            )}

            <div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                    🎵 Escala natural
                </h3>

                <p className="mb-4 text-gray-700">
                    A escala natural apresenta as sete notas musicais básicas
                    organizadas em sequência. Clique em uma nota para
                    destacá-la.
                </p>

                <EscalaTabela
                    nome="Natural"
                    notas={escalaNatural}
                    notaSelecionada={notaSelecionada}
                    onClickNota={handleClickNota}
                />
            </div>

            <div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                    🎼 Escala cromática
                </h3>

                <p className="mb-4 text-gray-700">
                    A escala cromática contém as doze notas que aparecem no
                    sistema musical ocidental, avançando sempre por
                    semitons.
                </p>

                <EscalaTabela
                    nome="Cromática"
                    notas={escalaCromatica}
                    notaSelecionada={notaSelecionada}
                    onClickNota={handleClickNota}
                />
            </div>

            <div className="space-y-8">
                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🌞 Escala maior
                    </h3>

                    <p className="mb-3 text-gray-700">
                        A escala maior é uma das principais referências para
                        compreender tonalidade, melodias e formação de acordes.
                    </p>

                    <p className="mb-4 rounded-lg bg-amber-50 p-4 font-semibold text-amber-900">
                        T – T – ST – T – T – T – ST
                    </p>

                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            <strong>C Maior:</strong> C – D – E – F – G – A – B – C
                        </li>
                        <li>
                            <strong>G Maior:</strong> G – A – B – C – D – E – F# – G
                        </li>
                    </ul>

                    <p className="mt-4 text-gray-600">
                        Essa estrutura aparece como base de inúmeras melodias
                        e músicas populares.
                    </p>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🎯 Da escala maior ao campo harmônico
                    </h3>

                    <p className="mb-4 text-gray-700">
                        A escala maior também serve como ponto de partida para a
                        construção dos acordes de um tom. Para entender por que esses
                        acordes assumem diferentes qualidades, é importante lembrar que
                        eles são formados a partir de{" "}
                        <Link
                            href="/formacao-de-acordes"
                            className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                        >
                            intervalos entre as notas
                        </Link>
                        .
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-amber-200 bg-white shadow-sm">
                        <table className="w-full min-w-[700px] border-collapse text-center">
                            <thead>
                                <tr>
                                    <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                        Grau
                                    </th>
                                    <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                        I
                                    </th>
                                    <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                        II
                                    </th>
                                    <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                        III
                                    </th>
                                    <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                        IV
                                    </th>
                                    <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                        V
                                    </th>
                                    <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                        VI
                                    </th>
                                    <th className="border border-amber-200 bg-amber-100 px-4 py-3 text-amber-900">
                                        VII
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
                                </tr>

                                <tr>
                                    <td className="border border-amber-200 bg-amber-50 px-4 py-3 font-semibold text-amber-900">
                                        Acorde
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        C
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Dm
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Em
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        F
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        G
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Am
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        B°
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-amber-200 bg-amber-50 px-4 py-3 font-semibold text-amber-900">
                                        Qualidade
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Maior
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Menor
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Menor
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Maior
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Maior
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Menor
                                    </td>
                                    <td className="border border-amber-200 px-4 py-3">
                                        Diminuto
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-5 text-gray-700">
                        Em <strong>C maior</strong>, por exemplo, a escala fornece as
                        notas C, D, E, F, G, A e B. Quando construímos acordes sobre
                        cada uma dessas notas usando apenas notas da própria escala,
                        chegamos aos acordes{" "}
                        <strong>C – Dm – Em – F – G – Am – B°</strong>.
                    </p>

                    <p className="mt-4 text-gray-700">
                        Esse conjunto de acordes forma o{" "}
                        <Link
                            href="/campo-harmonico"
                            className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                        >
                            campo harmônico de C maior
                        </Link>
                        . A partir dele, podemos entender não apenas quais acordes
                        pertencem ao tom, mas também a função que cada um desempenha
                        dentro da tonalidade.
                    </p>

                    <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                        <p className="font-semibold text-amber-900">
                            💡 A ideia essencial
                        </p>

                        <p className="mt-2 text-gray-700">
                            <strong>Escala → graus → acordes → campo harmônico</strong>
                        </p>

                        <p className="mt-2 text-gray-600">
                            Você não precisa decorar cada campo harmônico separadamente.
                            Primeiro entenda o padrão. Depois, esse mesmo padrão pode ser
                            transportado para outros tons.
                        </p>
                    </div>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🌙 Escala menor natural
                    </h3>

                    <p className="mb-3 text-gray-700">
                        A escala menor natural possui uma sonoridade diferente
                        da escala maior e é muito presente em músicas de caráter
                        mais introspectivo.
                    </p>

                    <p className="mb-4 rounded-lg bg-amber-50 p-4 font-semibold text-amber-900">
                        T – ST – T – T – ST – T – T
                    </p>

                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            <strong>A Menor:</strong> A – B – C – D – E – F – G – A
                        </li>
                        <li>
                            <strong>E Menor:</strong> E – F# – G – A – B – C – D – E
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🔥 Escala menor harmônica
                    </h3>

                    <p className="mb-3 text-gray-700">
                        A escala menor harmônica é obtida elevando o sétimo grau
                        da escala menor natural. Essa alteração cria uma tensão
                        característica e fortalece a função dominante.
                    </p>

                    <p className="mb-4 rounded-lg bg-amber-50 p-4 font-semibold text-amber-900">
                        T – ST – T – T – ST – T+ST – ST
                    </p>

                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            <strong>A Menor Harmônica:</strong>{" "}
                            A – B – C – D – E – F – G# – A
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🎻 Escala menor melódica
                    </h3>

                    <p className="mb-3 text-gray-700">
                        Na forma tradicional, a escala menor melódica utiliza
                        uma configuração diferente na subida, criando uma
                        sonoridade bastante explorada no jazz e em outros
                        contextos musicais.
                    </p>

                    <p className="rounded-lg bg-amber-50 p-4 font-semibold text-amber-900">
                        T – ST – T – T – T – T – ST
                    </p>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🎸 Escala pentatônica
                    </h3>

                    <p className="mb-4 text-gray-700">
                        A pentatônica utiliza cinco notas e é uma das escalas
                        mais práticas para começar a improvisar no violão.
                    </p>

                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            <strong>A Pentatônica Menor:</strong>{" "}
                            A – C – D – E – G – A
                        </li>
                        <li>
                            <strong>C Pentatônica Maior:</strong>{" "}
                            C – D – E – G – A – C
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        💙 Escala blues
                    </h3>

                    <p className="mb-4 text-gray-700">
                        A escala blues acrescenta uma nota característica à
                        pentatônica menor, conhecida como{" "}
                        <strong>blue note</strong>.
                    </p>

                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            <strong>A Blues:</strong>{" "}
                            A – C – D – D# – E – G – A
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🏛️ Modos gregos
                    </h3>

                    <p className="mb-4 text-gray-700">
                        Os modos gregos são diferentes organizações das notas
                        da escala maior. Cada modo produz uma sonoridade e uma
                        função característica.
                    </p>

                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            <strong>Jônio:</strong> corresponde à escala maior.
                        </li>
                        <li>
                            <strong>Dórico:</strong> possui sonoridade menor e
                            é muito usado em jazz, rock e música modal.
                        </li>
                        <li>
                            <strong>Frígio:</strong> possui uma sonoridade
                            característica e bastante presente em músicas
                            espanholas e flamenco.
                        </li>
                        <li>
                            <strong>Lídio:</strong> apresenta uma sonoridade
                            mais aberta e brilhante.
                        </li>
                        <li>
                            <strong>Mixolídio:</strong> aparece com frequência
                            em rock, blues e música popular.
                        </li>
                        <li>
                            <strong>Eólio:</strong> corresponde à escala menor
                            natural.
                        </li>
                        <li>
                            <strong>Lócrio:</strong> possui uma sonoridade
                            instável e é menos comum na música popular.
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🎯 Escala diatônica
                    </h3>

                    <p className="text-gray-700">
                        Uma escala diatônica possui sete notas diferentes organizadas
                        dentro de uma determinada estrutura de intervalos. A escala
                        maior é um dos principais exemplos de escala diatônica e serve
                        de base para a construção do{" "}
                        <Link
                            href="/campo-harmonico"
                            className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4 hover:text-amber-900"
                        >
                            campo harmônico maior
                        </Link>
                        .
                    </p>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        🎶 Como usar as escalas na prática
                    </h3>

                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                        <li>
                            Para improvisar sobre progressões simples,
                            experimente a pentatônica ou a escala maior.
                        </li>
                        <li>
                            Para explorar sonoridades menores, experimente a
                            escala menor natural.
                        </li>
                        <li>
                            Para desenvolver percepção do braço, pratique a
                            escala cromática.
                        </li>
                        <li>
                            Para criar melodias, experimente pequenas frases
                            utilizando notas de uma mesma escala.
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                        💪 Exercícios
                    </h3>

                    <ul className="list-disc space-y-3 pl-6 text-gray-700">
                        <li>
                            Toque cada escala lentamente usando um metrônomo.
                        </li>
                        <li>
                            Pratique diferentes digitações no braço do violão.
                        </li>
                        <li>
                            Crie pequenas frases utilizando apenas três notas
                            de uma escala.
                        </li>
                        <li>
                            Combine a pentatônica com a blue note para criar
                            frases características do blues.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}