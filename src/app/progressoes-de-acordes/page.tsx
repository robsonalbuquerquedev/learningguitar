import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Progressões de Acordes no Violão | Entenda o Movimento Harmônico"
    },
    description:
        "Aprenda como funciona a progressão de acordes usada em músicas como 'Eu Navegarei' e entenda o movimento harmônico i–VII–VI–iv–V. Veja variações, aplicação prática e como transpor para outros tons.",
    keywords: [
        "progressões de acordes",
        "progressão Eu Navegarei",
        "i VII VI iv V",
        "movimento harmônico",
        "campo harmônico menor",
        "violão para iniciantes",
        "transpor acordes",
        "como transpor música",
        "progressão de acordes no violão",
        "sequência de acordes"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/progressoes-de-acordes"
    },
    openGraph: {
        title: "Progressões de Acordes no Violão | Exemplo Prático e Transposição",
        description:
            "Entenda a famosa progressão de Am → G → F → Dm → E, suas variações e como transpor para qualquer tom menor. Explicação simples e aplicada ao violão.",
        url: "https://aprenderviolaoonline.com.br/progressoes-de-acordes",
        images: ["/og-image.png"]
    }
};

export default function ProgressoesDeAcordes() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <section
                className="max-w-3xl mx-auto p-6 animate-fadeSlide"
            >
                <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">
                    Progressões de Acordes 🎵
                </h1>

                <p className="text-lg leading-relaxed mb-4">
                    As <strong>progressões de acordes</strong> são a alma das músicas.
                    Elas indicam a ordem em que os acordes são tocados, criando sensação de
                    movimento, emoção e resolução.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-yellow-300">
                    🎶 Exemplo prático: &quot;Eu Navegarei&quot;
                </h2>

                <p className="leading-relaxed mb-3">
                    Uma das progressões mais conhecidas na música cristã é:
                </p>

                <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 mb-4 shadow-sm">
                    Am → G → F7M → E
                </div>

                <p className="leading-relaxed mb-3">
                    Com apenas esses quatro acordes é possível tocar a música completa
                    <strong> &ldquo;Eu Navegarei&rdquo;</strong>.
                    Essa sequência soa natural e bonita, porque respeita o <strong>campo harmônico</strong> e
                    cria um ciclo de <strong>tensão e repouso</strong>.
                </p>

                <p className="leading-relaxed mb-4">
                    O <strong>F7M</strong> (Fá com sétima maior) pode ser substituído por um <strong>F</strong> simples,
                    e ainda assim a música mantém sua harmonia.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-yellow-300">
                    ✨ Variação com acréscimo de Dm
                </h3>

                <p className="leading-relaxed mb-3">
                    Também é possível adicionar um <strong>Dm</strong> (Ré menor) entre o F e o E,
                    criando uma sensação de descida mais suave e musical:
                </p>

                <div className="bg-yellow-100 p-4 rounded-xl text-center font-semibold text-amber-900 mb-4 shadow-sm">
                    Am → G → F → Dm → E
                </div>

                <p className="leading-relaxed mb-4">
                    Essa é uma variação muito usada em diversas canções porque o <strong>Dm</strong> conecta
                    o acorde de <strong>F</strong> ao de <strong>E</strong> de forma mais fluida.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2 text-yellow-300">
                    🧩 Entendendo o movimento harmônico
                </h2>

                <p className="leading-relaxed mb-3">
                    Cada progressão cria um tipo de sentimento:
                </p>

                <ul className="list-disc list-inside space-y-1 mb-4">
                    <li><strong>I → IV → V</strong> → Clássica, alegre e usada em pop, gospel e rock.</li>
                    <li><strong>vi → IV → I → V</strong> → Emocional e muito comum em baladas.</li>
                    <li><strong>ii → V → I</strong> → Muito usada em jazz e MPB.</li>
                </ul>

                <p className="leading-relaxed mb-4">
                    Aprender progressões é como aprender frases musicais — você começa a reconhecer
                    padrões e consegue criar suas próprias combinações.
                </p>

                <p className="leading-relaxed mt-6">
                    💡 Dica: pratique essas sequências em diferentes tons e perceba como o “clima”
                    muda. Isso ajuda o ouvido a se acostumar com o <strong>movimento harmônico</strong>.
                </p>

                {/* --- Nova seção adicionada --- */}
                <h2 className="text-2xl font-semibold mt-10 mb-4 text-yellow-300">
                    🎸 Transpondo a progressão para outros tons menores
                </h2>

                <p className="leading-relaxed mb-4">
                    A mesma estrutura harmônica de <strong>Am → G → F → Dm → E</strong> pode ser transposta
                    para qualquer outro tom menor. Observe como o formato se mantém:
                </p>

                <div className="space-y-3">
                    <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 shadow-sm">
                        <span className="text-amber-900">Am → G → F → Dm → E</span>
                        <br />
                        <span className="text-sm text-amber-700">(Tom de Lá menor)</span>
                    </div>

                    <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 shadow-sm">
                        <span className="text-amber-900">Bm → A → G → Em → F#</span>
                        <br />
                        <span className="text-sm text-amber-700">(Tom de Si menor)</span>
                    </div>

                    <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 shadow-sm">
                        <span className="text-amber-900">Cm → Bb → Ab → Fm → G</span>
                        <br />
                        <span className="text-sm text-amber-700">(Tom de Dó menor)</span>
                    </div>

                    <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 shadow-sm">
                        <span className="text-amber-900">Dm → C → Bb → Gm → A</span>
                        <br />
                        <span className="text-sm text-amber-700">(Tom de Ré menor)</span>
                    </div>

                    <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 shadow-sm">
                        <span className="text-amber-900">Em → D → C → Am → B</span>
                        <br />
                        <span className="text-sm text-amber-700">(Tom de Mi menor)</span>
                    </div>

                    <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 shadow-sm">
                        <span className="text-amber-900">Fm → Eb → Db → Bbm → C</span>
                        <br />
                        <span className="text-sm text-amber-700">(Tom de Fá menor)</span>
                    </div>

                    <div className="bg-amber-100 p-4 rounded-xl text-center font-semibold text-amber-900 shadow-sm">
                        <span className="text-amber-900">Gm → F → Eb → Cm → D</span>
                        <br />
                        <span className="text-sm text-amber-700">(Tom de Sol menor)</span>
                    </div>
                </div>

                <p className="leading-relaxed mt-6">
                    Note que o <strong>padrão harmônico</strong> é o mesmo em todos os tons:
                    <br /> <strong>i → VII → VI → iv → V</strong>
                    <br /> Isso mostra que compreender o campo harmônico é o segredo para
                    tocar em qualquer tonalidade.
                </p>
            </section>
        </main>
    );
}
