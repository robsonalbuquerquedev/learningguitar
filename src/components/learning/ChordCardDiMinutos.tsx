type ChordQuality =
    | "major"
    | "minor"
    | "diminished"
    | "half-diminished";

type ChordCardProps = {
    name: string;
    fullName: string;
    quality: ChordQuality;
};

export default function ChordCardDiMinutos({
    name,
    fullName,
    quality,
}: ChordCardProps) {
    const qualityLabel = {
        major: "Maior",
        minor: "Menor",
        diminished: "Diminuto",
        "half-diminished": "Meio-diminuto",
    }[quality];

    const qualityStyle = {
        major: "bg-amber-100 text-amber-800",
        minor: "bg-gray-100 text-gray-700",
        diminished: "bg-indigo-100 text-indigo-800",
        "half-diminished": "bg-indigo-50 text-indigo-700",
    }[quality];

    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="text-3xl font-extrabold text-gray-900">
                        {name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-gray-600">
                        {fullName}
                    </p>
                </div>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${qualityStyle}`}
                >
                    {qualityLabel}
                </span>
            </div>

            <div className="mt-5 flex items-center justify-center rounded-xl bg-gray-50 py-6">
                <span className="text-5xl font-black text-gray-800">
                    {name}
                </span>
            </div>
        </article>
    );
}