type LessonSummaryProps = {
    items: string[];
};

export default function LessonSummary({
    items,
}: LessonSummaryProps) {
    return (
        <section
            aria-labelledby="lesson-summary-title"
            className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8"
        >
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                Resumo da aula
            </p>

            <h2
                id="lesson-summary-title"
                className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl"
            >
                O que você já aprendeu
            </h2>

            <ul className="mt-6 space-y-3">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex items-start gap-3 text-gray-700"
                    >
                        <span
                            aria-hidden="true"
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-amber-700"
                        >
                            ✓
                        </span>

                        <span className="leading-7">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}