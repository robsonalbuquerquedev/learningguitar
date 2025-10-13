"use client";

import { motion } from "framer-motion";

export default function AcordesComSetimas() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white p-6 sm:p-12">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-yellow-300 drop-shadow-lg"
            >
                🎸 Acordes com Sétimas
            </motion.h1>

            {/* Introdução */}
            <section className="max-w-3xl mx-auto text-lg leading-relaxed bg-black/40 p-6 rounded-2xl shadow-lg mb-10">
                <p className="mb-4">
                    Os <strong>acordes com sétima</strong> são uma variação dos acordes
                    maiores e menores que adicionam uma nota extra — a <strong>7ª</strong>
                    . Essa nota traz uma sensação de <strong>movimento</strong> ou{" "}
                    <strong>sofisticação</strong> à harmonia.
                </p>
                <p className="mb-4">
                    Existem dois tipos principais:{" "}
                    <strong>sétima menor (7)</strong> e{" "}
                    <strong>sétima maior (7M)</strong>.
                </p>
            </section>

            {/* Sétima menor */}
            <section className="max-w-3xl mx-auto bg-amber-100 text-amber-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎯 Acordes com Sétima Menor (7)</h2>
                <p className="mb-4">
                    Os acordes com <strong>sétima menor</strong> (ex: C7, D7, G7) são{" "}
                    <strong>dominantes</strong>. Eles criam uma <em>tensão</em> que &quot;pede&quot;
                    resolução — ou seja, conduzem naturalmente para o próximo acorde.
                </p>
                <p className="mb-4">
                    Exemplo: <strong>C7 → F</strong> ou <strong>G7 → C</strong>.
                </p>

                <table className="w-full text-center border-collapse bg-amber-50 rounded-lg overflow-hidden text-sm sm:text-base">
                    <thead className="bg-amber-300">
                        <tr>
                            <th className="p-2">Acorde Dominante (7)</th>
                            <th className="p-2">Prepara para</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="p-2">C7</td><td className="p-2">F</td></tr>
                        <tr><td className="p-2">D7</td><td className="p-2">G</td></tr>
                        <tr><td className="p-2">E7</td><td className="p-2">A</td></tr>
                        <tr><td className="p-2">F7</td><td className="p-2">Bb</td></tr>
                        <tr><td className="p-2">G7</td><td className="p-2">C</td></tr>
                        <tr><td className="p-2">A7</td><td className="p-2">D</td></tr>
                        <tr><td className="p-2">B7</td><td className="p-2">E</td></tr>
                    </tbody>
                </table>

                <p className="mt-4 italic">
                    💡 Dica: Toque G → G7 → C e ouça como o som &quot;pede&quot; pra voltar pra casa.
                </p>
            </section>

            {/* Sétima maior */}
            <section className="max-w-3xl mx-auto bg-yellow-100 text-yellow-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🌟 Acordes com Sétima Maior (7M)</h2>
                <p className="mb-4">
                    Os acordes com <strong>sétima maior</strong> (ex: C7M, D7M, G7M) são{" "}
                    <strong>ricos e estáveis</strong>. Eles não precisam resolver —
                    funcionam muito bem sozinhos, especialmente em estilos como{" "}
                    <em>bossa nova</em>, <em>MPB</em> e <em>jazz</em>.
                </p>
                <p className="mb-4">
                    Exemplo: <strong>C7M</strong> pode substituir <strong>C</strong> para
                    deixar o som mais suave e sofisticado.
                </p>

                <table className="w-full text-center border-collapse bg-yellow-50 rounded-lg overflow-hidden text-sm sm:text-base">
                    <thead className="bg-yellow-300">
                        <tr>
                            <th className="p-2">Acorde</th>
                            <th className="p-2">Substituição possível</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="p-2">C7M</td><td className="p-2">C</td></tr>
                        <tr><td className="p-2">D7M</td><td className="p-2">D</td></tr>
                        <tr><td className="p-2">E7M</td><td className="p-2">E</td></tr>
                        <tr><td className="p-2">F7M</td><td className="p-2">F</td></tr>
                        <tr><td className="p-2">G7M</td><td className="p-2">G</td></tr>
                        <tr><td className="p-2">A7M</td><td className="p-2">A</td></tr>
                        <tr><td className="p-2">B7M</td><td className="p-2">B</td></tr>
                    </tbody>
                </table>

                <p className="mt-4 italic">
                    💡 Dica: Toque C → C7M → Am → F e perceba o toque &quot;romântico&quot; que ele dá.
                </p>
            </section>

            {/* Conclusão */}
            <section className="max-w-3xl mx-auto text-center text-lg mt-8 bg-black/40 p-6 rounded-2xl shadow-lg">
                <p className="mb-4">
                    👉 Experimente alternar entre acordes simples e com sétima para sentir
                    a diferença de sonoridade. A harmonia vai soar muito mais <strong>viva</strong> e <strong>expressiva</strong>.
                </p>
                <p>
                    Próximo passo: descubra como os acordes com sétimas se encaixam dentro
                    do <strong>Campo Harmônico</strong> e das{" "}
                    <strong>Progressões de Acordes</strong>.
                </p>
            </section>

            {/* Respiro visual e de transição */}
            <div className="my-10 text-center">
                <p className="text-lg italic text-amber-200">
                    🎯 Vamos dar um passo além e ver como essas sétimas aparecem dentro do
                    campo harmônico — é aqui que a mágica começa a fazer sentido!
                </p>
            </div>

            {/* Continuação: Relação com o Campo Harmônico */}
            <section className="max-w-3xl mx-auto bg-amber-50 text-amber-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎼 Sétimas dentro do Campo Harmônico</h2>
                <p className="mb-4">
                    Cada grau do campo harmônico tem uma <strong>função</strong> e pode receber uma
                    sétima correspondente. Isso deixa a harmonia mais colorida e com uma
                    sensação de continuidade entre os acordes.
                </p>
                <p className="mb-4">
                    Veja o exemplo do <strong>Campo Harmônico de C (Dó maior)</strong>:
                </p>

                <table className="w-full text-center border-collapse bg-white rounded-lg overflow-hidden text-sm sm:text-base">
                    <thead className="bg-amber-300 text-amber-900">
                        <tr>
                            <th className="p-2">Grau</th>
                            <th className="p-2">Acorde</th>
                            <th className="p-2">Acorde com 7ª</th>
                            <th className="p-2">Função</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="p-2">I</td><td className="p-2">C</td><td className="p-2">C7M</td><td className="p-2">Tônica</td></tr>
                        <tr><td className="p-2">II</td><td className="p-2">Dm</td><td className="p-2">Dm7</td><td className="p-2">Subdominante</td></tr>
                        <tr><td className="p-2">III</td><td className="p-2">Em</td><td className="p-2">Em7</td><td className="p-2">Relativo menor</td></tr>
                        <tr><td className="p-2">IV</td><td className="p-2">F</td><td className="p-2">F7M</td><td className="p-2">Subdominante</td></tr>
                        <tr><td className="p-2">V</td><td className="p-2">G</td><td className="p-2">G7</td><td className="p-2">Dominante</td></tr>
                        <tr><td className="p-2">VI</td><td className="p-2">Am</td><td className="p-2">Am7</td><td className="p-2">Relativo menor</td></tr>
                        <tr><td className="p-2">VII°</td><td className="p-2">B°</td><td className="p-2">Bm7(b5)</td><td className="p-2">Acorde diminuto</td></tr>
                    </tbody>
                </table>

                <p className="mt-4 italic">
                    💡 Note como o <strong>V7 (G7)</strong> prepara naturalmente o retorno ao{" "}
                    <strong>I (C7M)</strong>. Essa é a base da sensação de &quot;resolução&quot; na
                    música tonal.
                </p>
            </section>

            {/* Progressões com Sétimas */}
            <section className="max-w-3xl mx-auto bg-yellow-50 text-yellow-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎵 Progressões Usando Acordes com Sétimas</h2>
                <p className="mb-4">
                    Quando aplicamos as sétimas em uma sequência de acordes, a harmonia ganha
                    uma sensação mais fluida e emocional. Veja alguns exemplos clássicos:
                </p>

                <div className="space-y-4">
                    <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-lg">
                        <p className="font-semibold">Pop / Gospel:</p>
                        <p>C7M → Am7 → Dm7 → G7 → C7M</p>
                        <p className="text-sm text-yellow-700 mt-1">
                            (Ciclo que cria movimento suave e moderno)
                        </p>
                    </div>

                    <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-lg">
                        <p className="font-semibold">MPB / Jazz:</p>
                        <p>Dm7 → G7 → C7M → A7M → D7M</p>
                        <p className="text-sm text-yellow-700 mt-1">
                            (Progressão que usa dominantes e sétimas maiores para enriquecer o som)
                        </p>
                    </div>

                    <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-lg">
                        <p className="font-semibold">Louvor / Adoração:</p>
                        <p>G7 → C7M → Dm7 → G7</p>
                        <p className="text-sm text-yellow-700 mt-1">
                            (Transmite sensação de entrega e repouso espiritual)
                        </p>
                    </div>
                </div>

                <p className="mt-6 italic">
                    💭 Experimente substituir acordes simples por versões com sétimas nas suas
                    músicas preferidas e perceba o novo &quot;sabor&quot; harmônico.
                </p>
            </section>

            {/* Fechamento */}
            <section className="max-w-3xl mx-auto text-center text-lg bg-black/40 p-6 rounded-2xl shadow-lg">
                <p className="mb-3">
                    🚀 Agora que você domina os acordes com sétimas, o próximo passo é
                    compreender como eles se conectam nas <strong>progressões II–V–I</strong>,
                    base de grande parte das músicas populares e jazzísticas.
                </p>
            </section>

            {/* Respiro visual e de transição */}
            <div className="my-10 text-center">
                <p className="text-lg italic text-amber-200">
                    🎯 Perfeito! Vamos dar um passo além e entender como essas progressões
                    II–V–I fazem a música fluir com naturalidade — é o segredo por trás de
                    muitas canções que você já ouviu!
                </p>
            </div>

            {/* Início da nova seção */}
            <section className="max-w-3xl mx-auto bg-amber-50 text-amber-900 p-6 rounded-2xl shadow-lg mb-10">
                <h2 className="text-2xl font-bold mb-3">🎵 O que é uma Progressão II–V–I?</h2>
                <p className="mb-4">
                    A sequência II–V–I é uma das mais importantes da música tonal. Ela cria uma
                    sensação de <strong>movimento e resolução</strong> — algo como ir do
                    &quot;caminho&quot; (II), passar pela &quot;tensão&quot; (V) e chegar ao &quot;descanso&quot; (I).
                </p>
                <p className="mb-4">
                    Em Dó maior, por exemplo, a progressão II–V–I seria:{" "}
                    <strong>Dm7 → G7 → C7M</strong>.
                </p>
                <p className="italic">
                    💡 Note como o <strong>G7</strong> (acorde dominante) conduz naturalmente para o{" "}
                    <strong>C7M</strong> (tônica). É como uma conversa musical entre acordes.
                </p>
            </section>
        </main>
    );
}
