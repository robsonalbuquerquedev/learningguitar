interface ChordFormulaProps {
    title: string;
    formula: string;
    description?: string;
}

export default function ChordFormula({
    title,
    formula,
    description
}: ChordFormulaProps) {
    return (
        <div className="my-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <h3 className="text-center text-lg font-bold text-gray-900">
                {title}
            </h3>

            <div className="my-5 flex items-center justify-center">
                <span className="rounded-xl bg-amber-700 px-6 py-3 text-2xl font-bold tracking-wider text-white">
                    {formula}
                </span>
            </div>

            {description && (
                <p className="text-center leading-relaxed text-gray-700">
                    {description}
                </p>
            )}
        </div>
    );
}