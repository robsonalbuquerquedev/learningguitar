type ChordComparisonProps = {
    firstChord: {
        label: string;
        name: string;
        fullName: string;
        notes: string;
        description: string;
    };
    secondChord: {
        label: string;
        name: string;
        fullName: string;
        notes: string;
        description: string;
    };
};

export default function ChordComparisonDiMinutos({
    firstChord,
    secondChord,
}: ChordComparisonProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
                            {firstChord.label}
                        </p>

                        <h3 className="mt-2 text-4xl font-extrabold text-gray-900">
                            {firstChord.name}
                        </h3>

                        <p className="mt-1 font-medium text-gray-600">
                            {firstChord.fullName}
                        </p>
                    </div>

                    <span
                        aria-hidden="true"
                        className="text-3xl"
                    >
                        🎵
                    </span>
                </div>

                <div className="mt-5 rounded-xl bg-amber-50 p-4">
                    <p className="text-sm font-semibold text-gray-700">
                        Notas
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                        {firstChord.notes}
                    </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                    {firstChord.description}
                </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-gray-600">
                            {secondChord.label}
                        </p>

                        <h3 className="mt-2 text-4xl font-extrabold text-gray-900">
                            {secondChord.name}
                        </h3>

                        <p className="mt-1 font-medium text-gray-600">
                            {secondChord.fullName}
                        </p>
                    </div>

                    <span
                        aria-hidden="true"
                        className="text-3xl"
                    >
                        🎶
                    </span>
                </div>

                <div className="mt-5 rounded-xl bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-700">
                        Notas
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                        {secondChord.notes}
                    </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                    {secondChord.description}
                </p>
            </article>
        </div>
    );
}