const notes = ["C", "C#", "D", "D#", "E", "F"];

export default function FretboardVisualization() {
    return (
        <div
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            aria-label="Representação simplificada do braço do violão"
        >
            <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
                <h3 className="font-bold text-gray-900">
                    Visualizando no braço do violão
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Cada casa representa um semitom. Ao avançar uma casa,
                    você sobe um semitom.
                </p>
            </div>

            <div className="overflow-x-auto p-5">
                <div className="min-w-[600px]">
                    <div className="grid grid-cols-6">
                        {notes.map((note, index) => (
                            <div
                                key={note}
                                className="relative border-r border-gray-300 first:border-l"
                            >
                                <div className="flex h-16 items-center justify-center border-b-4 border-gray-300 bg-amber-50">
                                    <span
                                        className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                                            note === "C"
                                                ? "bg-amber-400 text-gray-900"
                                                : "bg-white text-gray-800"
                                        }`}
                                    >
                                        {note}
                                    </span>
                                </div>

                                <div className="py-2 text-center text-xs font-medium text-gray-500">
                                    Casa {index}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid gap-3 border-t border-gray-200 bg-gray-50 p-5 sm:grid-cols-2">
                <div>
                    <p className="font-semibold text-gray-900">
                        C → C#
                    </p>

                    <p className="text-sm text-gray-600">
                        Subiu um semitom.
                    </p>
                </div>

                <div>
                    <p className="font-semibold text-gray-900">
                        C# → D
                    </p>

                    <p className="text-sm text-gray-600">
                        Subiu mais um semitom.
                    </p>
                </div>
            </div>
        </div>
    );
}