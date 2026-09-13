type ChordCardProps = {
    name: string;
    fullName: string;
    quality: "major" | "minor";
};

export default function ChordCard({
    name,
    fullName,
    quality,
}: ChordCardProps) {
    const isMajor = quality === "major";

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
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                        isMajor
                            ? "bg-amber-100 text-amber-800"
                            : "bg-gray-100 text-gray-700"
                    }`}
                >
                    {isMajor ? "Maior" : "Menor"}
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