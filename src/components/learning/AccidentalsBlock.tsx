const accidentalPairs = [
    ["C#", "Db"],
    ["D#", "Eb"],
    ["F#", "Gb"],
    ["G#", "Ab"],
    ["A#", "Bb"],
];

export default function AccidentalsBlock() {
    return (
        <section
            aria-labelledby="accidentals-title"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-7"
        >
            <div>
                <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                    Complemento de teoria
                </p>

                <h3
                    id="accidentals-title"
                    className="mt-2 text-2xl font-bold text-gray-900"
                >
                    Sustenidos e bemóis
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                    Sustenidos e bemóis representam alterações de um semitom.
                    Em muitos contextos, duas notas diferentes podem
                    representar a mesma altura sonora.
                </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {accidentalPairs.map(([sharp, flat]) => (
                    <div
                        key={sharp}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center"
                    >
                        <p className="text-lg font-bold text-gray-900">
                            {sharp}
                        </p>

                        <p
                            className="my-1 text-sm font-medium text-gray-500"
                            aria-hidden="true"
                        >
                            =
                        </p>

                        <p className="text-lg font-bold text-gray-900">
                            {flat}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 rounded-xl bg-amber-50 p-4">
                <p className="font-semibold text-gray-900">
                    Não precisa memorizar tudo agora.
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-700">
                    Neste momento, basta entender que C# e Db, por exemplo,
                    podem representar a mesma altura sonora. O uso de cada
                    nome depende do contexto musical.
                </p>
            </div>
        </section>
    );
}