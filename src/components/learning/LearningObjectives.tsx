type LearningObjective = {
    icon: string;
    title: string;
    description: string;
};

type LearningObjectivesProps = {
    objectives: LearningObjective[];
};

export default function LearningObjectives({
    objectives,
}: LearningObjectivesProps) {
    return (
        <section
            aria-labelledby="learning-objectives-title"
            className="mt-10 rounded-3xl border border-amber-200 bg-white p-6 shadow-sm md:p-8"
        >
            <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                    Nesta aula
                </p>

                <h2
                    id="learning-objectives-title"
                    className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl"
                >
                    O que você vai aprender
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                    Ao final desta aula, você terá uma visão clara dos
                    principais acordes naturais e saberá por onde começar a
                    praticar.
                </p>
            </div>

            <ul className="grid gap-4 md:grid-cols-2">
                {objectives.map((objective) => (
                    <li
                        key={objective.title}
                        className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
                    >
                        <div className="flex items-start gap-4">
                            <span
                                aria-hidden="true"
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl"
                            >
                                {objective.icon}
                            </span>

                            <div>
                                <h3 className="font-bold text-gray-900">
                                    {objective.title}
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    {objective.description}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}