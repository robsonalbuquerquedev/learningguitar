type PracticeStep = {
    label: string;
    title: string;
    chords: string[];
    description: string;
};

type PracticePathProps = {
    steps: PracticeStep[];
};

export default function PracticePath({
    steps,
}: PracticePathProps) {
    return (
        <div className="space-y-4">
            {steps.map((step, index) => (
                <article
                    key={step.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
                >
                    <div className="flex items-start gap-4">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800"
                            aria-hidden="true"
                        >
                            {index + 1}
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                                {step.label}
                            </p>

                            <h3 className="mt-1 text-xl font-bold text-gray-900">
                                {step.title}
                            </h3>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {step.chords.map((chord) => (
                                    <span
                                        key={chord}
                                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-bold text-gray-800"
                                    >
                                        {chord}
                                    </span>
                                ))}
                            </div>

                            <p className="mt-4 text-sm leading-6 text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}