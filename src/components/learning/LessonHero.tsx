type LessonHeroProps = {
    category: string;
    title: string;
    description: string;
    level: string;
    duration: string;
    type: string;
};

export default function LessonHero({
    category,
    title,
    description,
    level,
    duration,
    type,
}: LessonHeroProps) {
    return (
        <header className="mt-8">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                {category}
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                {title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                    🎸 {level}
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                    ⏱️ {duration}
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                    📚 {type}
                </span>
            </div>

            <a
                href="#lesson-content"
                className="mt-8 inline-flex items-center rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
                Começar a aprender
                <span className="ml-2" aria-hidden="true">
                    ↓
                </span>
            </a>
        </header>
    );
}