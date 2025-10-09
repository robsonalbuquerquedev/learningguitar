import Link from "next/link";

export const metadata = {
    title: "Acordes Maiores e Menores Naturais 🎵 | LearningGuitar",
    description:
        "Aprenda os acordes naturais maiores, menores, sustenidos e bemóis — a base para entender qualquer harmonia no violão.",
};

export default function AcordesMaioresEMenoresNaturais() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-amber-50 py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-300">
                    🎵 Acordes Maiores e Menores Naturais
                </h1>

                <p className="text-lg leading-relaxed">
                    Antes de mergulhar em escalas e campos harmônicos, é essencial entender os acordes
                    naturais — os blocos fundamentais de praticamente todas as músicas.
                    Aqui estão os acordes <strong>maiores</strong>, <strong>menores</strong>,
                    além dos <strong>sustenidos</strong> e <strong>bemóis</strong>.
                </p>

                {/* Maiores */}
                <h2 className="text-2xl font-semibold text-yellow-200">🎸 Acordes Maiores</h2>
                <p className="leading-relaxed">
                    Os acordes maiores têm um som aberto, alegre e cheio de energia:
                </p>
                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold text-yellow-200">
                    C – D – E – F – G – A – B
                </p>

                {/* Menores */}
                <h2 className="text-2xl font-semibold text-yellow-200">🎶 Acordes Menores</h2>
                <p className="leading-relaxed">
                    Já os acordes menores têm um som mais suave e melancólico:
                </p>
                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold text-yellow-200">
                    Cm – Dm – Em – Fm – Gm – Am – Bm
                </p>

                {/* Sustenidos */}
                <h2 className="text-2xl font-semibold text-yellow-200">#️⃣ Sustenidos</h2>
                <p className="leading-relaxed">
                    O sustenido (<strong>#</strong>) indica que a nota <strong>sobe meio tom</strong>,
                    ou seja, você avança <strong>uma casa</strong> no violão.
                </p>
                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold text-yellow-200">
                    C# – D# – F# – G# – A#
                </p>

                {/* Bemóis */}
                <h2 className="text-2xl font-semibold text-yellow-200">♭ Bemóis</h2>
                <p className="leading-relaxed">
                    O bemol (<strong>♭</strong>) indica que a nota <strong>desce meio tom</strong>,
                    ou seja, você volta <strong>uma casa</strong> no violão.
                </p>
                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold text-yellow-200">
                    Eb – Bb
                </p>

                {/* Relação */}
                <h2 className="text-2xl font-semibold text-yellow-200">⚖️ Relação entre sustenidos e bemóis</h2>
                <p className="leading-relaxed">
                    Quando subimos no braço do violão usamos <strong>sustenidos (#)</strong> —
                    quando descemos, usamos <strong>bemóis (♭)</strong>.
                    E algumas notas são <strong>enarmônicas</strong>, ou seja,
                    têm nomes diferentes mas o mesmo som.
                </p>

                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold text-yellow-200">
                    D# = Eb<br />
                    A# = Bb<br />
                    F# = Gb<br />
                    C# = Db<br />
                    G# = Ab
                </p>

                <p className="leading-relaxed">
                    Essas equivalências são muito úteis para compreender cifras e partituras —
                    não estranhe se vir <strong>D#</strong> em uma música e <strong>Eb</strong> em outra:
                    elas representam o mesmo som!
                </p>

                {/* Sem sustenido */}
                <h2 className="text-2xl font-semibold text-yellow-200">🚫 Notas sem sustenido</h2>
                <p className="leading-relaxed">
                    As notas <strong>B (Si)</strong> e <strong>E (Mi)</strong> não possuem sustenido natural,
                    pois entre elas e as notas seguintes (C e F) já existe apenas <strong>meio tom</strong>.
                </p>

                <p className="bg-amber-800/40 rounded-xl p-4 text-center font-semibold text-yellow-200">
                    Entre E e F → meio tom<br />
                    Entre B e C → meio tom
                </p>

                <p className="leading-relaxed">
                    Por isso, na prática, não existe <strong>E#</strong> nem <strong>B#</strong>.
                    Mas teoricamente, em certas escalas, esses nomes podem aparecer.
                </p>

                {/* Ilustração simples */}
                <div className="bg-amber-800/40 rounded-xl p-6 text-center space-y-3">
                    <h3 className="text-xl font-semibold text-yellow-200">🎸 Visualizando no Braço do Violão</h3>
                    <p className="text-amber-100 leading-relaxed">
                        Imagine o braço do violão em pé:
                        <br />
                        <strong>Subir</strong> → sustenido (#) → notas ficam mais agudas 🔼
                        <br />
                        <strong>Descer</strong> → bemol (♭) → notas ficam mais graves 🔽
                    </p>
                    <div className="flex justify-center items-center gap-2 text-lg font-semibold text-yellow-300">
                        <span>←♭</span>
                        <span className="px-3 py-1 bg-yellow-300 text-amber-900 rounded">C</span>
                        <span className="px-3 py-1 bg-yellow-300 text-amber-900 rounded">C# / Db</span>
                        <span className="px-3 py-1 bg-yellow-300 text-amber-900 rounded">D</span>
                        <span>♯→</span>
                    </div>
                    <p className="text-sm text-amber-100 italic">
                        (Subindo = sustenido / Descendo = bemol)
                    </p>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/campo-harmonico"
                        target="_blank"
                        className="inline-block bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
                    >
                        🎵 Entender o Campo Harmônico
                    </Link>
                </div>
            </div>
        </main>
    );
}
