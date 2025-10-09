import Link from "next/link";

export const metadata = {
    title: "Campo Harmônico 🎼 | LearningGuitar",
    description:
        "Aprenda a entender e montar o campo harmônico de qualquer tom. Descubra a relação entre escalas, acordes e tons para identificar o tom de qualquer música.",
};

export default function CampoHarmonico() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-6">

                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300">
                    🎼 Campo Harmônico
                </h1>

                <p className="text-lg leading-relaxed">
                    O <strong>campo harmônico</strong> é formado a partir da{" "}
                    <strong>escala diatônica</strong> (ou seja, a escala maior de um tom).
                    Ele serve como base para entender quais acordes pertencem a um tom e
                    como eles se relacionam entre si.
                </p>

                <h2 className="text-2xl font-semibold text-yellow-200">
                    🎵 Estrutura da Escala Maior
                </h2>

                <p className="leading-relaxed">
                    A escala diatônica maior segue esta sequência:
                </p>

                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold text-yellow-200">
                    Tom – Tom – Semitom – Tom – Tom – Tom – Semitom
                </p>

                <p className="leading-relaxed">
                    👉 A distância de <strong>1 tom</strong> equivale a{" "}
                    <strong>duas casas</strong> no violão.<br />
                    👉 Já o <strong>semitom</strong> equivale a{" "}
                    <strong>uma casa</strong>.
                </p>

                <h2 className="text-2xl font-semibold text-yellow-200">
                    🎸 Estrutura dos Acordes no Campo Harmônico
                </h2>

                <p className="leading-relaxed">
                    Cada grau da escala gera um acorde. Seguindo a regra da escala maior,
                    temos:
                </p>

                <ul className="list-disc list-inside space-y-1">
                    <li>1º grau – <strong>Maior</strong></li>
                    <li>2º grau – <strong>Menor</strong></li>
                    <li>3º grau – <strong>Menor</strong></li>
                    <li>4º grau – <strong>Maior</strong></li>
                    <li>5º grau – <strong>Maior</strong></li>
                    <li>6º grau – <strong>Menor</strong></li>
                    <li>7º grau – <strong>Meio diminuto</strong></li>
                </ul>

                <p className="leading-relaxed">
                    Assim, para o tom de <strong>C (Dó Maior)</strong>, temos:
                </p>

                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold text-yellow-200">
                    C – Dm – Em – F – G – Am – B°
                </p>

                <h2 className="text-2xl font-semibold text-yellow-200">
                    🎯 Identificando o Tom de uma Música
                </h2>

                <p className="leading-relaxed">
                    Para descobrir o tom de uma música, observe os acordes usados.
                    Por exemplo, se na música aparece um <strong>Dm</strong>, ele pode
                    pertencer a três campos harmônicos diferentes:
                </p>

                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold">
                    C maior • F maior • Bb maior
                </p>

                <p className="leading-relaxed">
                    Isso acontece porque o acorde <strong>Dm</strong> é o segundo grau em
                    C, o sexto grau em F e o terceiro grau em Bb.
                </p>

                <h2 className="text-2xl font-semibold text-yellow-200">
                    🎹 Acordes Principais de Cada Campo Harmônico
                </h2>

                <p className="leading-relaxed">
                    Os três acordes mais importantes de um tom são:
                </p>

                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Tônica</strong> – 1º grau</li>
                    <li><strong>Subdominante</strong> – 4º grau</li>
                    <li><strong>Dominante</strong> – 5º grau</li>
                </ul>

                <p className="leading-relaxed">
                    Por exemplo, observe os três acordes principais em cada tom:
                </p>

                <ul className="list-disc list-inside space-y-1">
                    <li>No tom de <strong>C</strong> → C, F, G</li>
                    <li>No tom de <strong>D</strong> → D, G, A</li>
                    <li>No tom de <strong>E</strong> → E, A, B</li>
                    <li>No tom de <strong>F</strong> → F, Bb, C</li>
                    <li>No tom de <strong>G</strong> → G, C, D</li>
                    <li>No tom de <strong>A</strong> → A, D, E</li>
                    <li>No tom de <strong>B</strong> → B, E, F#</li>
                </ul>

                <p className="leading-relaxed">
                    Esses três acordes são a base de praticamente todas as músicas
                    populares — dominar o campo harmônico é entender a espinha dorsal
                    da harmonia!
                </p>

                <h2 className="text-2xl font-semibold text-yellow-200">
                    🎵 Entendendo o papel de cada acorde
                </h2>

                <p className="leading-relaxed">
                    Agora que sabemos quem são a <strong>Tônica</strong>, a <strong>Subdominante</strong> e a <strong>Dominante</strong>,
                    vamos entender o papel que cada uma desempenha dentro da música.
                </p>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Tônica (1º grau)</strong> → É o <em>lar</em> da música. O ponto de repouso, de onde tudo parte e para onde tudo quer voltar.
                        Quando você toca a tônica, sente estabilidade e resolução — é o “fim natural” de uma ideia musical.
                    </li>

                    <li>
                        <strong>Subdominante (4º grau)</strong> → É como se fosse o <em>momento de partida</em>.
                        Ela cria leve movimento e prepara o caminho para sair da tranquilidade da tônica em direção à próxima emoção.
                    </li>

                    <li>
                        <strong>Dominante (5º grau)</strong> → É o acorde da <em>tensão</em>.
                        Ele cria aquela sensação de “quero voltar pra casa”. É por isso que a dominante normalmente resolve de volta na tônica —
                        trazendo um sentimento de alívio e conclusão.
                    </li>
                </ul>

                <p className="leading-relaxed">
                    É justamente esse vai e vem entre <strong>repouso (tônica)</strong>, <strong>movimento (subdominante)</strong> e <strong>tensão (dominante)</strong>
                    que faz a harmonia da música ser tão emocionante e expressiva.
                </p>

                <h2 className="text-2xl font-semibold text-yellow-200 mt-8">
                    🎶 E os outros graus? O papel de cada um na harmonia
                </h2>

                <p className="leading-relaxed">
                    Além dos três acordes principais, os outros graus do campo harmônico também têm funções muito importantes.
                    Eles ajudam a colorir a música, conectar ideias e criar novas emoções.
                </p>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>2º grau (supertônica)</strong> → É um acorde menor e costuma preparar o caminho para o 5º grau (dominante).
                        Ele tem uma sensação de leve expectativa, como se estivesse “levantando a bola” para a dominante resolver.
                        Exemplo em C maior: <strong>Dm</strong>.
                    </li>

                    <li>
                        <strong>3º grau (mediante)</strong> → Também é menor e tem uma função mais suave e introspectiva.
                        Ele pode substituir a tônica em alguns casos, trazendo uma sensação de melancolia ou delicadeza.
                        Exemplo em C maior: <strong>Em</strong>.
                    </li>

                    <li>
                        <strong>6º grau (relativa menor)</strong> → É um dos mais importantes depois da tônica.
                        Ele compartilha praticamente as mesmas notas da escala maior, mas muda o centro tonal.
                        É por isso que dizemos que <strong>Am é o relativo menor de C</strong>.
                        Esse acorde é muito usado em músicas que alternam entre alegria e leve melancolia.
                    </li>

                    <li>
                        <strong>7º grau (sensível ou meio diminuto)</strong> → Tem uma função de <em>tensão máxima</em>, apontando fortemente para a tônica.
                        É como se ele dissesse: “vamos resolver isso logo!”.
                        Em C maior, o 7º grau é <strong>B°</strong> (si meio diminuto).
                    </li>
                </ul>

                <p className="leading-relaxed">
                    Cada um desses graus adiciona um sabor diferente à música —
                    e quando você entende como eles se relacionam, começa a perceber padrões em praticamente todas as canções que ouve.
                </p>

                <div className="text-center mt-10">
                    <Link
                        href="/escalas"
                        target="_blank"
                        className="inline-block bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
                    >
                        🎵 Relembrar as escalas
                    </Link>
                </div>

            </div>
        </main>
    );
}
