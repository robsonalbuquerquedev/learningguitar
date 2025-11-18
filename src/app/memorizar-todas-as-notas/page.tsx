import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Memorizar Todas as Notas no Violão | Guia Prático e Eficiente"
    },
    description:
        "Aprenda técnicas simples e poderosas para memorizar todas as notas no braço do violão. Use escalas, oitavas e padrões visuais para dominar o instrumento em qualquer região do braço.",
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
        canonical: "https://aprenderviolaoonline.com.br/memorizar-todas-as-notas"
    },
    openGraph: {
        title: "Memorizar Todas as Notas no Violão | Guia Completo",
        description:
            "Domine todas as notas no braço do violão com técnicas práticas: escala horizontal, regra das 5 casas e oitavas. Ideal para iniciantes e intermediários.",
        url: "https://aprenderviolaoonline.com.br/memorizar-todas-as-notas",
        images: ["/og-image.png"]
    }
};

export default function MemorizarTodasAsNotas() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <section className="max-w-3xl mx-auto p-6 animate-fadeSlide">

                {/* TÍTULO */}
                <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">
                    Memorizar Todas as Notas no Violão 🎸
                </h1>

                {/* INTRODUÇÃO */}
                <p className="text-lg leading-relaxed mb-4">
                    Saber onde cada nota está no braço do violão é o segredo para tocar com liberdade.
                    Vamos ver três técnicas práticas que ajudam você a dominar todas as notas do instrumento.
                </p>

                {/* TÉCNICA 1 */}
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-yellow-300">
                    🎯 Técnica 1: Escala na Horizontal
                </h2>
                <p className="leading-relaxed mb-3">
                    Essa técnica ensina você a andar pelas notas de uma mesma corda.
                    Pegando como exemplo a <strong>escala de Dó</strong> na <strong>segunda corda</strong>:
                </p>

                <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>1ª casa → C</li>
                    <li>3ª casa → D</li>
                    <li>5ª casa → E</li>
                    <li>6ª casa → F</li>
                    <li>8ª casa → G</li>
                    <li>10ª casa → A</li>
                    <li>12ª casa → B</li>
                    <li>13ª casa → C</li>
                </ul>

                <p className="leading-relaxed mb-4">
                    Essa sequência ajuda o cérebro a visualizar a distância entre as notas,
                    percebendo que <strong>1 tom equivale a 2 casas</strong> e <strong>meio tom a 1 casa</strong>.
                </p>

                {/* TÉCNICA 2 */}
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-yellow-300">
                    🎸 Técnica 2: Regra das 5 Casas
                </h2>
                <p className="leading-relaxed mb-3">
                    Essa técnica mostra como encontrar a mesma nota em cordas diferentes.
                    Exemplo: a nota <strong>C</strong> na <strong>6ª corda (8ª casa)</strong>.
                </p>

                <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>Descer uma corda</li>
                    <li>Voltar 5 casas → <strong>5ª corda, 3ª casa</strong></li>
                </ul>

                <p className="leading-relaxed mb-3">
                    Essa lógica se aplica a todas as cordas, exceto entre a <strong>3ª e 2ª corda</strong>,
                    onde o intervalo é menor — voltamos apenas <strong>4 casas</strong>.
                </p>

                <p className="leading-relaxed mb-4">
                    Resumo: <strong>de uma corda para a de baixo → volta 5 casas (ou 4 entre 3ª e 2ª)</strong>.
                </p>

                {/* TÉCNICA 3 */}
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-yellow-300">
                    🧩 Técnica 3: Regra das Oitavas
                </h2>
                <p className="leading-relaxed mb-3">
                    As oitavas mostram onde a mesma nota aparece em regiões diferentes do braço.
                    Basta <strong>andar duas casas para frente</strong> e <strong>duas cordas para baixo</strong>.
                </p>

                <p className="leading-relaxed mb-3">
                    Exemplo: nota <strong>G</strong> na <strong>6ª corda, 3ª casa</strong>.
                    Indo duas cordas para baixo e duas casas para frente, temos outro G
                    na <strong>4ª corda, 5ª casa</strong>.
                </p>

                <p className="leading-relaxed mb-3">
                    Essa técnica cria padrões visuais poderosos — você começa a “enxergar” as notas no braço.
                </p>

                <p className="leading-relaxed mb-3">
                    Observação importante:
                    <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>A 4ª corda se referencia na 6ª corda (duas casas à frente).</li>
                        <li>A 3ª corda se referencia na 5ª corda.</li>
                        <li>A 2ª corda se referencia na 4ª (três casas à frente).</li>
                        <li>A 1ª corda se referencia na 3ª (três casas à frente).</li>
                    </ul>
                </p>

                <p className="leading-relaxed mt-6">
                    💡 Com o tempo, você vai combinar essas três técnicas e enxergar o braço do violão
                    como um mapa interligado — tocando em qualquer região sem se perder!
                </p>
            </section>
        </main>
    );
}
